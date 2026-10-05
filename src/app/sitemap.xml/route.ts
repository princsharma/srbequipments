import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { SERVICE_LINKS, SITE } from "@/lib/site";

type SitemapEntry = {
  url: string;
  lastModified?: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getSitemapEntries(): SitemapEntry[] {
  const staticPaths = [
    "/",
    "/about-us",
    "/best-truck-repair-shop-in-edmonton",
    "/blog",
    "/contact-us",
    "/faq",
    "/gallery",
    "/privacy-policy",
  ];
  const staticEntries: SitemapEntry[] = staticPaths.map((path) => ({
    url: new URL(path, SITE.url).href,
    changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));
  const serviceEntries: SitemapEntry[] = SERVICE_LINKS.map((service) => ({
    url: new URL(service.href, SITE.url).href,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const articleEntries: SitemapEntry[] = BLOG_ARTICLES.map((article) => ({
    url: new URL(`/blog/${article.slug}`, SITE.url).href,
    lastModified: article.dateIso || undefined,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...articleEntries].sort((a, b) =>
    a.url.localeCompare(b.url),
  );
}

export function GET() {
  const entries = getSitemapEntries();
  const urls = entries
    .map(
      (entry) => `<url>
    <loc>${escapeXml(entry.url)}</loc>
    ${entry.lastModified ? `<lastmod>${escapeXml(entry.lastModified)}</lastmod>` : ""}
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`,
    )
    .join("\n  ");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
