import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqSection from "@/components/faq/FaqSection";
import {
  getRelatedArticles,
  type BlogArticle,
  type BlogBlock,
} from "@/lib/blog-articles";
import BlogArticleToc from "@/components/blog/BlogArticleToc";
import { prepareBlogHtml } from "@/lib/blog-html";
import { SITE } from "@/lib/site";

const FALLBACK_IMAGE = "/images/2025/11/truck-repair-in-shop.jpg";
function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return (
        <h2 id={block.id} className="blog-article__h2">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 id={block.id} className="blog-article__h3">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="blog-article__list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="blog-article__list blog-article__list--ordered">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside className="blog-article__tip">
          {block.title ? <strong>{block.title}</strong> : null}
          <p>{block.text}</p>
        </aside>
      );
    case "callout":
      return (
        <aside className="blog-article__callout">
          <strong>{block.title}</strong>
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      );
    case "table":
      return (
        <div className="blog-article__table-wrap">
          <table className="blog-article__table">
            {block.head.length ? (
              <thead>
                <tr>
                  {block.head.map((cell, i) => (
                    <th key={i} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : null}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogArticleView({ article }: { article: BlogArticle }) {
  const related = getRelatedArticles(article.relatedSlugs, 3, article.slug);
  const image = article.image || FALLBACK_IMAGE;
  const hasToc = article.toc.length > 0;
  const hasBlocks = Boolean(article.blocks?.length);
  const hasHtml = Boolean(article.html?.trim());
  const htmlBody =
    hasHtml && !hasBlocks ? prepareBlogHtml(article.html!) : null;

  return (
    <article className="blog-article" id="srb-blog-article">
      <PageHero
        id="blog-article-heading"
        testId="blog-article-hero"
        title={article.title}
      />

      {/* <div className="blog-article__mast">
        <div className="container blog-article__mast-inner">
          <nav className="blog-article__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span>{article.title}</span>
          </nav>
          <ul className="blog-article__meta">
            <li>
              <span className="blog-article__category">{article.category}</span>
            </li>
            <li>
              <time dateTime={article.dateIso}>{article.date}</time>
            </li>
            <li>{article.readingMinutes} min read</li>
          </ul>
        </div>
      </div> */}

      <div
        id="blog-article-layout"
        className={`container blog-article__layout${hasToc ? "" : " blog-article__layout--solo"}`}
      >
        {hasToc ? <BlogArticleToc items={article.toc} /> : null}

        <div className="blog-article__content">
          <figure className="blog-article__feature">
            <Image
              src={image}
              alt={article.imageAlt}
              width={1200}
              height={675}
              priority
              sizes="(max-width: 960px) 100vw, 720px"
            />
          </figure>

          {article.subtitle ? (
            <p className="blog-article__dek">{article.subtitle}</p>
          ) : null}

          {article.keyPoints?.length ? (
            <aside className="blog-article__keypoints" id="key-points">
              <h2 className="blog-article__keypoints-title">Key Points</h2>
              <ul>
                {article.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          ) : null}

          <div className="blog-article__prose">
            {hasBlocks
              ? article.blocks!.map((block, i) => (
                  <Block key={`${block.type}-${i}`} block={block} />
                ))
              : null}

            {htmlBody ? (
              <div
                className="blog-article__html"
                dangerouslySetInnerHTML={{ __html: htmlBody }}
              />
            ) : null}
          </div>

          <div className="blog-article__cta">
            <div>
              <h2>Need truck repair in Edmonton?</h2>
              <p>
                SRB Equipment keeps commercial trucks and trailers road-ready with
                in-shop and 24/7 mobile service.
              </p>
            </div>
            <div className="blog-article__cta-actions">
              <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/contact-us" className="btn btn--ghost btn--lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {article.faqs.length > 0 ? (
        <FaqSection id="blog-article-faq">
          <FaqAccordion
            items={article.faqs.map((faq) => ({
              question: faq.q,
              answer: faq.a,
            }))}
          />
        </FaqSection>
      ) : null}

      {related.length > 0 ? (
        <section
          className="blog-article__related"
          aria-labelledby="related-heading"
        >
          <div className="container">
            <div className="section__head section__head--center">
              <h2 id="related-heading" className="section__title">
                Related <em>Articles</em>
              </h2>
            </div>
            <div className="blog-article__related-grid">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-article__related-card"
                >
                  <Image
                    src={post.image || FALLBACK_IMAGE}
                    alt={post.imageAlt}
                    width={480}
                    height={280}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div>
                    <time dateTime={post.dateIso}>{post.date}</time>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span>
                      Read article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
