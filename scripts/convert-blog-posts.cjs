/**
 * Converts saved srbequipment.ca blog pages into structured article data.
 *
 * Usage: BLOG_RAW_DIR=<folder of {slug}.html files> node scripts/convert-blog-posts.cjs [slug]
 * Output: src/data/blog-structured.json
 */
const fs = require("fs");
const path = require("path");
const { parse, NodeType } = require("node-html-parser");

const PROJECT = path.resolve(__dirname, "..");
const posts = require(path.join(PROJECT, "src/data/blog-posts.json"));
const RAW = process.env.BLOG_RAW_DIR;
if (!RAW) {
  console.error("Set BLOG_RAW_DIR to the folder containing {slug}.html files.");
  process.exit(1);
}

const SKIP_TAGS = new Set([
  "script", "style", "noscript", "svg", "iframe", "form", "button", "img",
  "figure", "picture", "video", "nav", "header", "footer", "aside", "select",
  "input", "textarea", "link", "meta", "h1", "head", "title",
]);
const INLINE_TAGS = new Set([
  "a", "strong", "b", "em", "i", "span", "br", "sup", "sub", "u", "mark",
  "small", "code", "abbr", "font", "del", "ins", "s",
]);
const SKIP_CLASS_TOKEN =
  /^(ez-toc-v|ez-toc-container|et_pb_blurb|et_pb_post_nav|et_pb_comments_module|et_pb_blog_\d|et_pb_button_module_wrapper|et_pb_button|et_pb_image|et_pb_social_media_follow|et_pb_search|sharedaddy|breadcrumb|et_pb_contact_form_container|et_pb_newsletter|et_pb_signup|et_pb_post_title|et_pb_menu|et_pb_fullwidth_menu)$|_tb_(header|footer)$/;
const JUNK_P =
  /^(srb equipment blog|\d+\s*min read|shaun|table of contents|toggle|home|blog)$|^home\s*[»>/]|^<!doctype|^by \w+ \|/i;
const STOP_HEADING = /keep your fleet running|^book your/i;
const FAQ_HEADING = /frequently asked questions|^faqs?\b/i;
const KEYPOINTS_HEADING = /^key (points|takeaways)/i;

const decode = (s) =>
  s
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "’")
    .replace(/&#8216;|&lsquo;/g, "‘")
    .replace(/&#8220;|&ldquo;/g, "“")
    .replace(/&#8221;|&rdquo;/g, "”")
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&#8230;|&hellip;/g, "…")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const clean = (s) =>
  decode(s.replace(/@ET-DC@[^@]*@/g, ""))
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();

const textOf = (node) => clean(node.text || node.rawText || "");

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[’'"“”]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70) || "section";

function listItems(listEl) {
  const items = [];
  for (const li of listEl.childNodes) {
    if (li.nodeType !== NodeType.ELEMENT_NODE || (li.tagName || "").toLowerCase() !== "li") continue;
    const own = li.clone();
    own.querySelectorAll("ul,ol").forEach((n) => n.remove());
    const t = textOf(own);
    if (t) items.push(t);
    for (const child of li.childNodes) {
      if (child.nodeType !== NodeType.ELEMENT_NODE) continue;
      const tag = (child.tagName || "").toLowerCase();
      if (tag === "ul" || tag === "ol") items.push(...listItems(child));
    }
  }
  return items;
}

function tableBlock(tbl) {
  const trs = tbl.querySelectorAll("tr");
  const rows = trs
    .map((tr) => tr.querySelectorAll("th,td").map((c) => textOf(c)))
    .filter((r) => r.some(Boolean));
  if (!rows.length) return null;
  const looksLikeHead =
    rows.length > 1 && rows[0].every((c) => c.length > 0 && c.length < 40 && !/\d/.test(c));
  const firstIsHead =
    tbl.querySelector("thead") || (trs[0] && trs[0].querySelector("th")) || looksLikeHead;
  const head = firstIsHead ? rows.shift() : [];
  return { type: "table", head, rows };
}

function answerText(node) {
  const parts = [];
  const walk = (n) => {
    if (n.nodeType === NodeType.TEXT_NODE) {
      const t = clean(n.rawText);
      if (t) parts.push({ kind: "p", t });
      return;
    }
    if (n.nodeType !== NodeType.ELEMENT_NODE) return;
    const tag = (n.tagName || "").toLowerCase();
    if (tag === "ul" || tag === "ol") {
      const items = listItems(n);
      if (items.length) parts.push({ kind: "list", items });
      return;
    }
    if (tag === "p" || /^h[2-6]$/.test(tag)) {
      const t = textOf(n);
      if (t) parts.push({ kind: "p", t });
      return;
    }
    n.childNodes.forEach(walk);
  };
  walk(node);
  let out = "";
  for (const p of parts) {
    if (p.kind === "list") {
      const sep = p.items.every((i) => i.length < 45) ? ", " : "; ";
      const joined = p.items.map((i) => i.replace(/[.;]$/, "")).join(sep);
      out += (out ? " " : "") + joined + ".";
    } else {
      out += (out ? " " : "") + p.t;
    }
  }
  return clean(out);
}

function convert(html, meta) {
  const root = parse(html, { comment: false });
  const body = root.querySelector("body") || root;

  // The Divi hero section repeats the title, breadcrumb, and lede.
  let heroSection = null;
  const h1 = body.querySelector("h1");
  if (h1) {
    let p = h1.parentNode;
    while (p && !(p.getAttribute && /\bet_pb_section\b/.test(p.getAttribute("class") || ""))) p = p.parentNode;
    if (p && p.getAttribute && !p.querySelector("h2")) heroSection = p;
  }

  const blocks = [];
  const keyPoints = [];
  const faqs = [];
  let mode = "body";
  let buffer = "";
  let currentFaq = null;

  const pushP = (raw) => {
    const t = clean(raw);
    if (!t || JUNK_P.test(t)) return;
    if (meta.subtitle && clean(meta.subtitle) === t) return;
    if (meta.title && clean(meta.title) === t) return;
    if (mode === "stop" || mode === "keypoints") return;
    if (mode === "faq") {
      if (currentFaq) currentFaq.a = clean(`${currentFaq.a} ${t}`);
      return;
    }
    const last = blocks[blocks.length - 1];
    if (last && last.type === "p" && (last.text === t || (t.length > 20 && last.text.includes(t)))) return;
    blocks.push({ type: "p", text: t });
  };
  const flush = () => {
    if (buffer.trim()) pushP(buffer);
    buffer = "";
  };

  const heading = (level, rawText) => {
    flush();
    const t = clean(rawText);
    if (!t || /^table of contents$/i.test(t)) return;
    if (level === 2 || mode !== "faq") {
      if (STOP_HEADING.test(t)) { mode = "stop"; return; }
      if (FAQ_HEADING.test(t)) { mode = "faq"; currentFaq = null; return; }
      if (KEYPOINTS_HEADING.test(t)) { mode = "keypoints"; return; }
      if (mode === "stop" && level > 2) return;
      if (level === 2) mode = "body";
    }
    if (mode === "stop") return;
    if (mode === "faq") {
      currentFaq = { q: t, a: "" };
      faqs.push(currentFaq);
      return;
    }
    if (mode === "keypoints") mode = "body";
    blocks.push({ type: level === 2 ? "h2" : "h3", text: t.replace(/:$/, "") });
  };

  const walk = (node) => {
    if (node.nodeType === NodeType.TEXT_NODE) {
      buffer += " " + node.rawText;
      return;
    }
    if (node.nodeType !== NodeType.ELEMENT_NODE) return;
    if (!node.tagName) {
      node.childNodes.forEach(walk);
      return;
    }
    const tag = node.tagName.toLowerCase();
    const cls = node.getAttribute("class") || "";
    const id = node.getAttribute("id") || "";
    if (SKIP_TAGS.has(tag) || node === heroSection) { flush(); return; }
    if (tag !== "body" && cls.split(/\s+/).some((c) => SKIP_CLASS_TOKEN.test(c))) return;
    if (/^(ez-toc-container|main-header|main-footer|comment)/.test(id)) return;

    if (INLINE_TAGS.has(tag)) {
      if (tag === "br") { buffer += " "; return; }
      node.childNodes.forEach(walk);
      return;
    }

    if (/\bet_pb_toggle\b/.test(cls)) {
      flush();
      const title = node.querySelector(".et_pb_toggle_title");
      const content = node.querySelector(".et_pb_toggle_content");
      const q = title ? textOf(title) : "";
      const a = content ? answerText(content) : "";
      if (q && a && mode !== "stop") faqs.push({ q, a });
      return;
    }
    if (tag === "details") {
      flush();
      const summary = node.querySelector("summary");
      const q = summary ? textOf(summary) : "";
      const rest = node.clone();
      const s2 = rest.querySelector("summary");
      if (s2) s2.remove();
      const a = answerText(rest);
      if (q && a && mode !== "stop") faqs.push({ q, a });
      return;
    }

    const h = /^h([2-6])$/.exec(tag);
    if (h) { heading(Number(h[1]), node.text); return; }

    if (tag === "p") {
      flush();
      node.childNodes.forEach(walk);
      flush();
      return;
    }
    if (tag === "ul" || tag === "ol") {
      flush();
      const lis = node.childNodes.filter(
        (c) => c.nodeType === NodeType.ELEMENT_NODE && (c.tagName || "").toLowerCase() === "li"
      );
      const leadLabel = (li) => {
        const kids = li.childNodes.filter(
          (c) => !(c.nodeType === NodeType.TEXT_NODE && !c.rawText.trim())
        );
        const first = kids[0];
        const second = kids[1];
        if (!first || first.nodeType !== NodeType.ELEMENT_NODE) return null;
        if (!/^(strong|b)$/i.test(first.tagName || "")) return null;
        const hasNested = li.childNodes.some(
          (c) => c.nodeType === NodeType.ELEMENT_NODE && /^(ul|ol)$/i.test(c.tagName || "")
        );
        const brNext = second && second.nodeType === NodeType.ELEMENT_NODE && /^br$/i.test(second.tagName || "");
        return hasNested || brNext ? first : null;
      };
      const structured = lis.some(
        (li) =>
          li.querySelector("h2,h3,h4,h5,h6") ||
          li.querySelectorAll("p").length > 1 ||
          (leadLabel(li) &&
            li.childNodes.some((c) => c.nodeType === NodeType.ELEMENT_NODE && /^(ul|ol)$/i.test(c.tagName || "")))
      );
      if (structured && mode === "body") {
        lis.forEach((li, i) => {
          const hd = li.querySelector("h2,h3,h4,h5,h6") || leadLabel(li);
          if (hd) {
            const label = clean(hd.text).replace(/[:–-]\s*$/, "");
            heading(3, tag === "ol" && !/^\d+[.)]/.test(label) ? `${i + 1}. ${label}` : label);
            hd.remove();
          }
          li.childNodes.forEach(walk);
          flush();
        });
        return;
      }
      const items = listItems(node);
      if (!items.length || mode === "stop") return;
      if (mode === "keypoints") { keyPoints.push(...items); mode = "body"; return; }
      if (mode === "faq") {
        if (currentFaq) {
          const sep = items.every((i) => i.length < 45) ? ", " : "; ";
          currentFaq.a = clean(`${currentFaq.a} ${items.map((i) => i.replace(/[.;]$/, "")).join(sep)}.`);
        }
        return;
      }
      blocks.push({ type: tag, items });
      return;
    }
    if (tag === "table") {
      flush();
      const tb = tableBlock(node);
      if (tb && mode === "body") blocks.push(tb);
      return;
    }
    if (tag === "blockquote") {
      flush();
      const t = textOf(node);
      if (t && mode === "body") blocks.push({ type: "tip", text: t });
      return;
    }
    flush();
    node.childNodes.forEach(walk);
    flush();
  };

  walk(body);
  flush();

  const trimmed = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "h2" || b.type === "h3") {
      const next = blocks[i + 1];
      const empty =
        !next || (b.type === "h2" ? next.type === "h2" : next.type === "h2" || next.type === "h3");
      if (empty) continue;
    }
    trimmed.push(b);
  }

  const used = new Set(["key-points"]);
  for (const b of trimmed) {
    if (b.type !== "h2" && b.type !== "h3") continue;
    const base = slugify(b.text);
    let idv = base;
    let n = 2;
    while (used.has(idv)) idv = `${base}-${n++}`;
    used.add(idv);
    b.id = idv;
  }

  const h2s = trimmed.filter((b) => b.type === "h2");
  const tocSource =
    h2s.length >= 3 ? h2s : trimmed.filter((b) => b.type === "h2" || b.type === "h3");
  const toc = tocSource.map((b) => ({ id: b.id, label: b.text }));
  if (keyPoints.length) toc.unshift({ id: "key-points", label: "Key Points" });

  const cleanFaqs = faqs
    .map((f) => ({ q: f.q.replace(/^\d+\.\s*/, ""), a: f.a }))
    .filter((f) => f.q && f.a);

  const words = trimmed
    .map((b) => b.text || (b.items || []).join(" ") || (b.rows || []).flat().join(" "))
    .join(" ")
    .split(/\s+/).length;

  return {
    toc,
    keyPoints,
    blocks: trimmed,
    faqs: cleanFaqs,
    readingMinutes: Math.max(3, Math.round(words / 220)),
  };
}

const onlySlug = process.argv[2];
const outFile = path.join(PROJECT, "src/data/blog-structured.json");
const out = onlySlug && fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, "utf8")) : {};
const report = [];
for (const p of posts) {
  if (onlySlug && p.slug !== onlySlug) continue;
  const file = path.join(RAW, `${p.slug}.html`);
  if (!fs.existsSync(file)) continue;
  const res = convert(fs.readFileSync(file, "utf8"), p);
  out[p.slug] = res;
  const count = (t) => res.blocks.filter((b) => b.type === t).length;
  report.push(
    `${p.slug.padEnd(78)} blocks=${res.blocks.length} h2=${count("h2")} h3=${count("h3")} kp=${res.keyPoints.length} faqs=${res.faqs.length}/${(p.faqs || []).length} tables=${count("table")}`
  );
}
fs.writeFileSync(outFile, JSON.stringify(out, null, 2) + "\n");
console.log(report.join("\n"));
