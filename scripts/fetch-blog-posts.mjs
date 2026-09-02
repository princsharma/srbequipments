/**
 * Fetches all WordPress blog posts, strips Divi shortcodes,
 * and writes src/data/blog-posts.json for the Next.js app.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "src", "data", "blog-posts.json");
const API = "https://srbequipment.ca/wp-json/wp/v2/posts";

function decodeEntities(str) {
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8221;/g, '"')
    .replace(/&#8220;/g, '"')
    .replace(/&#8243;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanArticleHtml(html) {
  let out = html;

  // Drop TOC widgets / UI chrome
  out = out.replace(/Table of Contents[\s\S]*?Toggle/gi, "");
  out = out.replace(/[\s\S]*?SRB Equipment Blog/gi, "");
  out = out.replace(/Book Your Truck Repair Service Now/gi, "");
  out = out.replace(/Book an Appointment Now/gi, "");
  out = out.replace(/Submit a Comment[\s\S]*$/i, "");
  out = out.replace(/Cancel reply[\s\S]*$/i, "");

  // Drop leading breadcrumb crumbs like "Home» ..."
  out = out.replace(/^(?:<p>)?\s*Home\s*[»>].*?(?:<\/p>)?/i, "");

  // Remove FAQ section from body if we parse FAQs separately (keep content for fallback)
  // Soft trim related articles footer
  out = out.replace(/<h2[^>]*>\s*Related Articles\s*<\/h2>[\s\S]*$/i, "");

  out = out
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/(?:\s*<br\s*\/?>\s*){3,}/gi, "<br/><br/>")
    .trim();

  return out;
}

function extractDiviHtml(content) {
  const decoded = decodeEntities(content);

  // Prefer inner HTML of et_pb_text / et_pb_blurb / et_pb_accordion modules
  const blocks = [];
  const re =
    /\[et_pb_(?:text|blurb|accordion_item|toggle)[^\]]*\]([\s\S]*?)\[\/et_pb_(?:text|blurb|accordion_item|toggle)\]/gi;
  let m;
  while ((m = re.exec(decoded))) {
    const inner = m[1].trim();
    if (inner && !inner.startsWith("[et_pb_")) blocks.push(inner);
  }

  let html = blocks.join("\n");

  // Fallback: strip all shortcodes and keep remaining HTML/text
  if (stripTags(html).length < 200) {
    html = decoded
      .replace(/\[[^\]]*\]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  } else {
    html = html.replace(/\[[^\]]*\]/g, "");
  }

  return cleanArticleHtml(html);
}

function extractFaqsFromRaw(rawContent) {
  const faqs = [];
  const decoded = decodeEntities(rawContent);

  const accordionRe =
    /\[et_pb_accordion_item[^\]]*title="([^"]+)"[^\]]*\]([\s\S]*?)\[\/et_pb_accordion_item\]/gi;
  let m;
  while ((m = accordionRe.exec(decoded))) {
    const q = decodeEntities(m[1]).trim();
    const a = stripTags(m[2]).trim();
    if (q && a) faqs.push({ q, a });
  }

  // Also catch toggle modules
  const toggleRe =
    /\[et_pb_toggle[^\]]*title="([^"]+)"[^\]]*\]([\s\S]*?)\[\/et_pb_toggle\]/gi;
  while ((m = toggleRe.exec(decoded))) {
    const q = decodeEntities(m[1]).trim();
    const a = stripTags(m[2]).trim();
    if (q && a && !faqs.some((f) => f.q === q)) faqs.push({ q, a });
  }

  return faqs;
}

function extractToc(html) {
  const toc = [];
  const re = /<(h2|h3)[^>]*(?:id="([^"]*)")?[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  let i = 0;
  while ((m = re.exec(html))) {
    const text = stripTags(m[3]);
    if (!text || text.length > 120) continue;
    const id =
      m[2] ||
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") ||
      `section-${++i}`;
    toc.push({ id, label: text });
  }
  return toc.slice(0, 20);
}

function ensureHeadingIds(html) {
  let i = 0;
  return html.replace(/<(h2|h3)([^>]*)>([\s\S]*?)<\/\1>/gi, (full, tag, attrs, inner) => {
    if (/id=/i.test(attrs)) return full;
    const text = stripTags(inner);
    const id =
      text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "") || `section-${++i}`;
    return `<${tag}${attrs} id="${id}">${inner}</${tag}>`;
  });
}

async function fetchAllPosts() {
  const posts = [];
  let page = 1;
  while (true) {
    const url = `${API}?per_page=50&page=${page}&_embed=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`WP API ${res.status} page ${page}`);
    const batch = await res.json();
    if (!batch.length) break;
    posts.push(...batch);
    const totalPages = Number(res.headers.get("x-wp-totalpages") || "1");
    if (page >= totalPages) break;
    page += 1;
  }
  return posts;
}

function mediaUrl(post) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return (
    media?.source_url ||
    media?.media_details?.sizes?.large?.source_url ||
    media?.media_details?.sizes?.medium_large?.source_url ||
    ""
  );
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

async function main() {
  console.log("Fetching WordPress posts...");
  const raw = await fetchAllPosts();
  console.log(`Got ${raw.length} posts`);

  const articles = raw.map((post) => {
    const rawContent = post.content?.rendered || "";
    const faqs = extractFaqsFromRaw(rawContent);
    let html = extractDiviHtml(rawContent);
    html = ensureHeadingIds(html);
    const toc = extractToc(html).filter(
      (t) =>
        !/table of contents|frequently asked|related articles|key points/i.test(
          t.label
        )
    );
    const excerpt = stripTags(decodeEntities(post.excerpt?.rendered || "")).slice(
      0,
      220
    );
    const title = decodeEntities(post.title?.rendered || "").trim();
    const image = mediaUrl(post);

    return {
      slug: post.slug,
      title,
      subtitle: excerpt,
      date: formatDate(post.date),
      dateIso: post.date.slice(0, 10),
      category: "Blog",
      image,
      imageAlt: title,
      excerpt,
      readingMinutes: Math.max(3, Math.round(stripTags(html).split(/\s+/).length / 200)),
      toc,
      html,
      faqs,
      relatedSlugs: [],
      source: "wordpress",
    };
  });

  // Attach related (next 3 by date excluding self)
  for (let i = 0; i < articles.length; i++) {
    articles[i].relatedSlugs = articles
      .filter((a) => a.slug !== articles[i].slug)
      .slice(i === 0 ? 1 : 0, i === 0 ? 4 : i + 3)
      .slice(0, 3)
      .map((a) => a.slug);
    // Better: take neighboring posts
    const neighbors = [];
    for (const j of [i - 1, i + 1, i + 2, i - 2, i + 3]) {
      if (j >= 0 && j < articles.length && j !== i) neighbors.push(articles[j].slug);
    }
    articles[i].relatedSlugs = [...new Set(neighbors)].slice(0, 3);
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(articles, null, 2), "utf8");
  console.log(`Wrote ${articles.length} articles → ${OUT}`);

  const thin = articles.filter((a) => stripTags(a.html).length < 300);
  if (thin.length) {
    console.log(`Warning: ${thin.length} posts have thin content:`, thin.map((a) => a.slug));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
