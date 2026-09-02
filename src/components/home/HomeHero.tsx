import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const HERO_IMAGE =
  "/images/2026/05/Gemini_Generated_Image_h4pvmih4pvmih4pv-1-1-1.webp";
const ICON_RED_SEAL =
  "/images/2026/06/red-seal-1-150x150.webp";
const ICON_24_7 =
  "/images/2026/06/24-7-Emergency-Assistance-150x150.webp";
const ICON_10_YEAR =
  "/images/2026/06/10-year-150x150.webp";

export default function HomeHero() {
  return (
    <section className="hero" data-testid="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--y" />
        <div className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow eyebrow--light" data-testid="hero-eyebrow">
            <span className="eyebrow__dot" /> Trusted Truck Repair Shop For
            Commercial Vehicles - Since 2015
          </span>
          <h1 className="hero__title" data-testid="hero-title">
            Truck &amp; Trailer <em>Repair Shop</em> in Edmonton
          </h1>
          <p className="hero__lede">
            Red Seal-certified technicians delivering fast truck and trailer
            repairs, proactive maintenance, and 24/7 roadside service to minimize
            downtime across Edmonton and surrounding areas.
          </p>

          <div className="hero__actions">
            <a
              href={SITE.phoneHref}
              className="btn btn--primary btn--lg"
              data-testid="hero-call-btn"
            >
              <i className="fa-solid fa-phone-volume" aria-hidden="true" />
              Call Us for Roadside Assistance
            </a>
            <Link
              href="#services"
              className="btn btn--ghost btn--lg"
              data-testid="hero-services-btn"
            >
              <i className="fa-solid fa-wrench" aria-hidden="true" />
              Our Services
            </Link>
          </div>

          <div className="hero__meta">
            <div className="hero__phone">
              <span className="hero__phone-label">24/7 Roadside Assistance</span>
              <a href={SITE.phoneHref} className="hero__phone-number">
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="hero__rating">
              <div className="hero__rating-stars" aria-label="Rated 4.8 out of 5">
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star" aria-hidden="true" />
                <i className="fa-solid fa-star-half-stroke" aria-hidden="true" />
              </div>
              <span className="hero__rating-text">
                <strong>4.8 / 5.0</strong>
                <small>Google Reviews</small>
              </span>
            </div>
          </div>
        </div>

        <div className="hero__visual" data-testid="hero-visual">
          <div className="hero__image-card">
            <Image
              src={HERO_IMAGE}
              alt="Heavy duty truck being repaired at SRB Equipment workshop"
              width={800}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="hero__badge">
              <Image
                className="hero_right_icon"
                src={ICON_RED_SEAL}
                alt="Red Seal"
                width={56}
                height={56}
              />
              <div>
                <strong>Red Seal</strong>
                <small>Certified Mechanics</small>
              </div>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--top">
            <Image
              className="hero_right_icon"
              src={ICON_24_7}
              alt="24/7 Service"
              width={56}
              height={56}
            />
            <div>
              <strong>24/7 Service</strong>
              <small>Mobile &amp; In-Shop</small>
            </div>
          </div>

          <div className="hero__floating-card hero__floating-card--bottom">
            <Image
              className="hero_right_icon"
              src={ICON_10_YEAR}
              alt="10+ years icon"
              width={56}
              height={56}
            />
            <div>
              <strong>10+ Years</strong>
              <small>Heavy-Duty Expertise</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__stats" data-testid="hero-stats">
          <div className="hero__stat">
            <strong className="hero__stat-num">
              10<span>+</span>
            </strong>
            <span className="hero__stat-label">Years in Business</span>
          </div>
          <div className="hero__stat">
            <strong className="hero__stat-num">
              5,000<span>+</span>
            </strong>
            <span className="hero__stat-label">Trucks Repaired</span>
          </div>
          <div className="hero__stat">
            <strong className="hero__stat-num">
              24<span>/7</span>
            </strong>
            <span className="hero__stat-label">Mobile Roadside</span>
          </div>
        </div>
      </div>
    </section>
  );
}
