import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleView from "@/components/blog/BlogArticleView";
import { BLOG_ARTICLES, getArticleBySlug } from "@/lib/blog-articles";
import "@/styles/blog-article.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Blog" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  return <BlogArticleView article={article} />;
}
