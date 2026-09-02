import Image from "next/image";
import Link from "next/link";
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
  };
}

export default function BlogPage() {
  // Prefer listing order from blog-data; append any API-only posts not in listing
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
    })
  );
  const posts = [...fromListing, ...extras];

  return (
    <div id="srb-blog">
      <section className="section blog-hero section--dark">
        <div className="blog-hero__bg" aria-hidden="true">
          <Image
            src={BLOG_HERO}
            alt=""
            width={1920}
            height={720}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <div className="section__head section__head--center">
            <h1>Blog</h1>
            <span className="eyebrow eyebrow--light mb-20">
              <span className="eyebrow__dot" aria-hidden="true" /> Truck Repair
              Tips &amp; Insights
            </span>
            <p className="section__lede">
              Expert advice on heavy-duty truck repair, maintenance, and roadside
              service — from the SRB Equipment team in Edmonton.
            </p>
          </div>
        </div>
      </section>

      <section className="section blog-list">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article
                key={post.slug}
                className={`blog-card${post.featured ? " blog-card--featured" : ""}`}
              >
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
                      sizes={
                        post.featured
                          ? "(max-width: 1024px) 100vw, 48vw"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      }
                    />
                  </figure>
                  <div className="blog-card__body">
                    <time className="blog-card__date">{post.date}</time>
                    <h2 className="blog-card__title">{post.title}</h2>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <span className="blog-card__cta">
                      Read Article <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-newsletter" id="newsletter">
        <div className="container">
          <div className="blog-newsletter__card">
            <div className="blog-newsletter__content">
              <div className="section__head">
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
                We respect your privacy. Your email is only used for SRB Equipment
                updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
