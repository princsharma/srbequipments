import Image from "next/image";
import Link from "next/link";
import {
  getRelatedArticles,
  type BlogArticle,
  type BlogBlock,
} from "@/lib/blog-articles";
import { SITE } from "@/lib/site";

const FALLBACK_IMAGE =
  "/images/2025/11/truck-repair-in-shop.jpg";

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
    default:
      return null;
  }
}

export default function BlogArticleView({ article }: { article: BlogArticle }) {
  const related = getRelatedArticles(
    article.relatedSlugs.length
      ? article.relatedSlugs
      : []
  );
  const image = article.image || FALLBACK_IMAGE;
  const hasToc = article.toc.length > 0;
  const hasBlocks = Boolean(article.blocks?.length);
  const hasHtml = Boolean(article.html?.trim());

  return (
    <article className="blog-article">
      <header className="blog-article__hero">
        <div className="container blog-article__hero-inner">
          <nav className="blog-article__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span>{article.title}</span>
          </nav>
          <p className="blog-article__meta">
            <span className="blog-article__category">{article.category}</span>
            <time dateTime={article.dateIso}>{article.date}</time>
            <span>{article.readingMinutes} min read</span>
          </p>
          <h1>{article.title}</h1>
          <p className="blog-article__subtitle">{article.subtitle}</p>
        </div>
      </header>

      <div
        className={`container blog-article__layout${hasToc ? "" : " blog-article__layout--solo"}`}
      >
        {hasToc ? (
          <aside className="blog-article__toc" aria-label="Table of contents">
            <div className="blog-article__toc-card">
              <p className="blog-article__toc-title">On this page</p>
              <ol>
                {article.toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ol>
              <a
                href={SITE.phoneHref}
                className="btn btn--primary blog-article__toc-cta"
              >
                <i className="fa-solid fa-phone" aria-hidden="true" /> Call{" "}
                {SITE.phoneDisplay}
              </a>
            </div>
          </aside>
        ) : null}

        <div className="blog-article__content">
          <figure className="blog-article__feature">
            <Image
              src={image}
              alt={article.imageAlt}
              width={1200}
              height={675}
              priority
              sizes="(max-width: 900px) 100vw, 720px"
            />
          </figure>

          {article.keyPoints?.length ? (
            <aside className="blog-article__keypoints" id="key-points">
              <h2>Key Points</h2>
              <ul>
                {article.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </aside>
          ) : null}

          {hasBlocks
            ? article.blocks!.map((block, i) => (
                <Block key={`${block.type}-${i}`} block={block} />
              ))
            : null}

          {hasHtml && !hasBlocks ? (
            <div
              className="blog-article__html"
              dangerouslySetInnerHTML={{ __html: article.html! }}
            />
          ) : null}

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
        <section className="blog-article__faq" aria-labelledby="blog-faq-heading">
          <div className="container">
            <h2 id="blog-faq-heading">Frequently Asked Questions</h2>
            <div className="blog-article__faq-grid">
              {article.faqs.map((faq, index) => (
                <details
                  key={faq.q}
                  className="blog-article__faq-item"
                  open={index < 2}
                >
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section
          className="blog-article__related"
          aria-labelledby="related-heading"
        >
          <div className="container">
            <h2 id="related-heading">Related Articles</h2>
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
