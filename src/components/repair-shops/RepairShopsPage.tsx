import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";
import {
  REPAIR_SHOP_AREAS,
  REPAIR_SHOPS,
  REPAIR_SHOPS_HERO,
  type RepairShop,
} from "@/lib/repair-shops-data";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="shop-card__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => (
        <span key={`full-${i}`} className="shop-card__star">
          ★
        </span>
      ))}
      {hasHalf ? (
        <span className="shop-card__star shop-card__star--half">★</span>
      ) : null}
    </div>
  );
}

function ShopCard({ shop }: { shop: RepairShop }) {
  return (
    <article
      id={shop.id}
      className={`shop-card${shop.featured ? " shop-card--featured" : ""}`}
    >
      <div className="shop-card__media">
        <Image
          src={shop.image}
          alt={shop.alt}
          width={800}
          height={600}
          sizes={
            shop.featured
              ? "(max-width: 1024px) 100vw, 55vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          }
          priority={shop.featured}
        />
        <span className="shop-card__rank">{shop.rank}</span>
      </div>
      <div className="shop-card__body">
        {shop.featured ? (
          <span className="shop-card__badge">
            <i className="fa-solid fa-star" aria-hidden="true" /> Editor&apos;s
            Pick
          </span>
        ) : null}
        <h3 className="shop-card__title">{shop.title}</h3>
        <span className="shop-card__area">
          <i className="fa-solid fa-location-dot" aria-hidden="true" />{" "}
          {shop.area}
        </span>
        <StarRating rating={shop.rating} />
        <div className="shop-card__meta">
          {shop.meta.map((item) => (
            <span key={`${shop.id}-${item.text}`}>
              <i className={item.icon} aria-hidden="true" />{" "}
              {item.href ? <a href={item.href}>{item.text}</a> : item.text}
            </span>
          ))}
        </div>
        <blockquote className="shop-card__quote">{shop.quote}</blockquote>
        <p className="shop-card__desc">{shop.description}</p>
        <ul className="shop-card__highlights">
          {shop.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="shop-card__footer">
          <a
            href={SITE.phoneHref}
            className={`btn ${shop.featured ? "btn--primary" : "btn--dark"}`}
          >
            Call Now
          </a>
          {shop.showQuoteLink ? (
            <Link href="/contact-us" className="btn btn--ghost">
              Get a Quote
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function RepairShopsPage() {
  return (
    <div id="srb-repair-shops">
      <PageHero
        eyebrow="Updated 2026"
        title={
          <>
            Best Truck Repair Shop <em>in Edmonton</em>
          </>
        }
        lede="Rely on specialists to repair your vehicle professionally and get you back on the road. CVIP inspections, engine repair, emissions, A/C, oil changes, tires, and more."
        image={REPAIR_SHOPS_HERO}
      />

      <div className="trust-strip trust-strip--compact">
        <div className="container trust-strip__grid">
          <div>
            <strong>15</strong>
            <span>Top-Rated Shops</span>
          </div>
          <div>
            <strong>Edmonton</strong>
            <span>Alberta (AB)</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>Updated List</span>
          </div>
        </div>
      </div>

      <section id="listings" className="section section--listings section--gray">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="eyebrow">
              <span className="eyebrow__dot" /> Local Directory
            </span>
            <h2 className="section__title">
              Find <em>Truck Repair Shop</em> Near Me
            </h2>
            <p className="section__lede">
              Compare trusted truck and trailer repair shops across Edmonton and
              surrounding neighbourhoods.
            </p>
            <ul className="area-tags" aria-label="Edmonton neighbourhoods served">
              {REPAIR_SHOP_AREAS.map((area) => (
                <li key={area.shopId}>
                  <a href={area.href} className="area-tag">
                    {area.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="shop-grid">
            {REPAIR_SHOPS.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner__bg">
          <div className="cta-banner__grid" />
        </div>
        <div className="container cta-banner__inner">
          <div className="cta-banner__icon" aria-hidden="true">
            <Image
              src="/images/2026/06/cal-a-technician-1-1.webp"
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div>
            <h2 className="cta-banner__title">
              Need Reliable Truck Repair <em>in Edmonton?</em>
            </h2>
            <p>
              SRB Equipment is your trusted partner for CVIP inspections, engine
              repair, emission systems, air conditioning, and full heavy-duty
              truck &amp; trailer service.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
