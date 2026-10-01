import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { BLOG_ARTICLES, slugFromHref } from "@/lib/blog-articles";
import { BLOG_HERO, BLOG_POSTS } from "@/lib/blog-data";

function resolvePost(listing: (typeof BLOG_POSTS)[number]) {
  const slug = slugFromHref(listing.href);
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  return {
    slug,
    href: `/blog/${slug}`,
    title: article?.title || listing.title,
    excerpt: article?.excerpt || listing.excerpt,
    date: article?.date || listing.date,
    image: article?.image || listing.image,
    alt: article?.imageAlt || listing.alt,
    featured: listing.featured,
    category: article?.category || "Insights",
    readingMinutes: article?.readingMinutes || 5,
  };
}

export default function BlogPage() {
  const listingSlugs = new Set(BLOG_POSTS.map((p) => slugFromHref(p.href)));
  const fromListing = BLOG_POSTS.map(resolvePost);
  const extras = BLOG_ARTICLES.filter((a) => !listingSlugs.has(a.slug)).map(
    (a) => ({
      slug: a.slug,
      href: `/blog/${a.slug}`,
      title: a.title,
      excerpt: a.excerpt,
      date: a.date,
      image: a.image,
      alt: a.imageAlt,
      featured: false as boolean | undefined,
      category: a.category,
      readingMinutes: a.readingMinutes,
    })
  );
  const posts = [...fromListing, ...extras];
  const featured = posts.find((p) => p.featured) ?? posts[0];
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <div id="srb-blog">
      <PageHero
        id="blog-heading"
        testId="blog-hero"
        title="Blog"
        // lede="Expert advice on heavy-duty truck repair, maintenance, and roadside service — from the SRB Equipment team in Edmonton."
        image={BLOG_HERO}
      />

      <section className="section blog-list" aria-label="Blog articles">
        <div className="container blog-list__shell">
          <div className="blog-list__intro section__head section__head--center">
            <h2 className="section__title">
              Truck Repair <em>Insights</em>
            </h2>
            <p className="section__lede">
              Maintenance guides, fleet tips, and expert advice from SRB Equipment
              in Edmonton.
            </p>
          </div>

          {featured ? (
            <article className="blog-spotlight">
              <Link className="blog-spotlight__link" href={featured.href}>
                <figure className="blog-spotlight__media">
                  <Image
                    src={
                      featured.image ||
                      "/images/2025/11/truck-repair-in-shop.jpg"
                    }
                    alt={featured.alt}
                    width={1280}
                    height={720}
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <span className="blog-spotlight__badge">Featured</span>
                  <span className="blog-card__media-shade" aria-hidden="true" />
                </figure>
                <div className="blog-spotlight__body">
                  <div className="blog-card__meta">
                    <span className="blog-card__pill">{featured.category}</span>
                    <time dateTime={featured.date}>{featured.date}</time>
                    <span>{featured.readingMinutes} min read</span>
                  </div>
                  <h2 className="blog-spotlight__title">{featured.title}</h2>
                  <p className="blog-spotlight__excerpt">{featured.excerpt}</p>
                  <span className="blog-card__cta blog-card__cta--spotlight">
                    Read Article
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </article>
          ) : null}

          <div className="blog-grid">
            {rest.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link className="blog-card__link" href={post.href}>
                  <figure className="blog-card__media">
                    <Image
                      src={
                        post.image ||
                        "/images/2025/11/truck-repair-in-shop.jpg"
                      }
                      alt={post.alt}
                      width={640}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className="blog-card__pill blog-card__pill--overlay">
                      {post.category}
                    </span>
                    <span className="blog-card__media-shade" aria-hidden="true" />
                    <span className="blog-card__media-chip">
                      <i className="fa-solid fa-book-open" aria-hidden="true" />
                      Read
                    </span>
                  </figure>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <time className="blog-card__date">{post.date}</time>
                      <span className="blog-card__dot" aria-hidden="true" />
                      <span>{post.readingMinutes} min</span>
                    </div>
                    <h2 className="blog-card__title">{post.title}</h2>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <span className="blog-card__cta">
                      Read Article
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-newsletter" id="newsletter">
        <div className="container blog-list__shell">
          <div className="blog-newsletter__card">
            <div className="blog-newsletter__content">
              <div className="section__head section__head--center">
                <span className="blog-newsletter__badge">
                  <i className="fa-solid fa-envelope" aria-hidden="true" /> Stay
                  Updated
                </span>
                <h2 className="section__title">
                  Get Truck Repair Tips in Your Inbox
                </h2>
                <p className="section__lede">
                  Subscribe for maintenance guides, Edmonton fleet advice, and
                  updates from SRB Equipment.
                </p>
              </div>
            </div>
            <div className="blog-newsletter__form-wrap">
              <form className="blog-newsletter__form" action="#" method="post">
                <div className="blog-newsletter__row">
                  <label className="blog-newsletter__field">
                    <span>Email address</span>
                    <input
                      id="blog-email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                  <button type="submit" className="btn btn--primary">
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="blog-newsletter__note">
                We respect your privacy. Your email is only used for SRB
                Equipment updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
