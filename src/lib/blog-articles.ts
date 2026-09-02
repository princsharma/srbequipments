import curatedCareer from "./blog-posts/career-guide";
import curatedKenworth from "./blog-posts/kenworth-w900";
import curatedTruckParts from "./blog-posts/truck-parts";
import scrapedPosts from "@/data/blog-posts.json";

export type BlogFaq = { q: string; a: string };

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id?: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; title?: string; text: string }
  | { type: "callout"; title: string; items: string[] };

export type BlogArticle = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateIso: string;
  category: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  readingMinutes: number;
  toc: { id: string; label: string }[];
  keyPoints?: string[];
  /** Structured body (preferred when present) */
  blocks?: BlogBlock[];
  /** HTML body from WordPress/Divi scrape */
  html?: string;
  faqs: BlogFaq[];
  relatedSlugs: string[];
};

const CURATED: BlogArticle[] = [
  curatedTruckParts,
  curatedCareer,
  curatedKenworth,
];

const curatedBySlug = new Map(CURATED.map((a) => [a.slug, a]));

function normalizeScraped(raw: (typeof scrapedPosts)[number]): BlogArticle {
  return {
    slug: raw.slug,
    title: raw.title,
    subtitle: raw.subtitle || raw.excerpt,
    date: raw.date,
    dateIso: raw.dateIso,
    category: raw.category || "Blog",
    image: raw.image || "",
    imageAlt: raw.imageAlt || raw.title,
    excerpt: raw.excerpt,
    readingMinutes: raw.readingMinutes || 5,
    toc: raw.toc || [],
    html: raw.html || "",
    faqs: raw.faqs || [],
    relatedSlugs: raw.relatedSlugs || [],
  };
}

/** All articles: curated overrides scraped for the same slug */
export const BLOG_ARTICLES: BlogArticle[] = (() => {
  const map = new Map<string, BlogArticle>();
  for (const post of scrapedPosts) {
    map.set(post.slug, normalizeScraped(post));
  }
  for (const curated of CURATED) {
    const scraped = map.get(curated.slug);
    map.set(curated.slug, {
      ...curated,
      image: curated.image || scraped?.image || "",
      relatedSlugs:
        curated.relatedSlugs.length > 0
          ? curated.relatedSlugs
          : scraped?.relatedSlugs || [],
    });
  }
  return Array.from(map.values());
})();

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug) || curatedBySlug.get(slug);
}

export function getRelatedArticles(slugs: string[]): BlogArticle[] {
  return slugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is BlogArticle => Boolean(a));
}

export function hasLocalArticle(slug: string): boolean {
  return BLOG_ARTICLES.some((a) => a.slug === slug);
}

export function slugFromHref(href: string): string {
  try {
    const path = href.includes("://") ? new URL(href).pathname : href;
    return path.replace(/^\/blog\//, "").replace(/\/$/, "");
  } catch {
    return href;
  }
}
