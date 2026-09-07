import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import HazardStripe from "@/components/HazardStripe";
import Reveal from "@/components/Reveal";
import { BRAND_LOGOS, HOME_FAQS, WHY_FEATURES } from "@/lib/home-data";
import { GALLERY_ITEMS } from "@/lib/gallery-data";
import { SITE } from "@/lib/site";

const ABOUT_CHECKS = [
  "Red Seal-certified heavy-duty technicians",
  "In-shop and 24/7 mobile truck repair",
  "CVIP inspections and fleet maintenance",
  "Honest diagnostics — no costly downtime",
];

const FEATURE_ICONS = [
  "fa-solid fa-certificate",
  "fa-solid fa-clock-rotate-left",
  "fa-solid fa-bolt",
  "fa-solid fa-truck",
];

const GALLERY_PREVIEW = GALLERY_ITEMS.slice(0, 4);
const ABOUT_FAQS = HOME_FAQS.slice(0, 5);

export default function AboutContent() {
  return (
    <div id="srb-about">
      {/* 1. Hero */}
      <section className="about-hero" data-testid="about-hero">
        <div className="about-hero__bg" aria-hidden="true">
          <Image
            src="/images/2025/11/truck-repair-in-shop.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container about-hero__inner">
          <h1 id="about-heading">About Us</h1>
          <nav className="about-hero__crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About Us</span>
          </nav>
        </div>
      </section>
      <HazardStripe />

      {/* 2. Intro */}
      <section className="section about-story" aria-labelledby="about-story-heading">
        <div className="container about-story__grid">
          <Reveal variant="left" className="about-story__media">
            <Image
              src="/images/2026/02/truck-cvip-inspection-in-srb-equipment-shop-400x516.webp"
              alt="Truck repair and inspection at SRB Equipment workshop in Edmonton"
              width={520}
              height={670}
              sizes="(max-width: 1024px) 100vw, 520px"
            />
          </Reveal>

          <Reveal variant="right" delay={100} className="about-story__content">
            <span className="about-story__label">Who We Are</span>
            <h2 id="about-story-heading">
              Professional Truck &amp; Trailer Repair Services for Edmonton Drivers
            </h2>
            <p>
              Starting from a small-scale truck repair shop in Edmonton, we have
              grown into a reputed truck repair company serving reliable
              services. From heavyweight truck servicing to inspection,
              maintenance, and everything in between — we have it covered.
            </p>
            <ul className="about-story__checks">
              {ABOUT_CHECKS.map((item) => (
                <li key={item}>
                  <i className="fa-solid fa-check" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="about-story__actions">
              <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
                <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
              <Link href="/contact-us" className="btn btn--dark btn--lg">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Icon features */}
      <section className="section about-features" aria-label="Why choose SRB">
        <div className="container about-features__grid">
          {WHY_FEATURES.slice(0, 4).map((feature, i) => (
            <Reveal
              key={feature.num}
              variant="up"
              delay={i * 80}
              className="about-features__item"
            >
              <span className="about-features__icon" aria-hidden="true">
                <i className={FEATURE_ICONS[i]} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Cinematic banner */}
      <section className="about-banner">
        <div className="about-banner__bg" aria-hidden="true">
          <Image
            src="/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="about-banner__scrim" aria-hidden="true" />
        <div className="container about-banner__inner">
          <Reveal variant="up">
            <h2>
              24/7 Mobile Truck Repair
              <br />
              When You Need It Most
            </h2>
            <a href={SITE.phoneHref} className="about-banner__play" aria-label={`Call ${SITE.phoneDisplay}`}>
              <i className="fa-solid fa-phone" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* 5. Trio cards */}
      <section className="section about-trio">
        <div className="container">
          <Reveal variant="up" className="section__head section__head--center">
            <h2 className="section__title">
              Expanded Assistance for Trucks &amp; Trailers
            </h2>
            <p className="section__lede">
              In-shop expertise and mobile roadside support for commercial fleets
              across Edmonton.
            </p>
          </Reveal>

          <div className="about-trio__grid">
            <Reveal variant="up" delay={0} className="about-trio__card about-trio__card--light">
              <i className="fa-solid fa-clipboard-check" aria-hidden="true" />
              <h3>CVIP Inspections</h3>
              <p>
                Licensed CVIP inspections so your truck or trailer meets Alberta
                safety standards and stays road-ready.
              </p>
              <Link href="/services/cvip-inspections">
                Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal variant="up" delay={80} className="about-trio__card about-trio__card--yellow">
              <strong className="about-trio__big">100%</strong>
              <h3>Fleet Focused</h3>
              <p>
                Dedicated support for commercial drivers, owner-operators, and
                fleet managers who can&apos;t afford downtime.
              </p>
              <Link href="/contact-us">
                Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal variant="up" delay={160} className="about-trio__card about-trio__card--dark">
              <i className="fa-solid fa-truck" aria-hidden="true" />
              <h3>24/7 Mobile Service</h3>
              <p>
                Fully equipped mobile unit for yard calls and roadside breakdowns
                across Edmonton and surrounding areas.
              </p>
              <Link href="/services/mobile-service-truck-edmonton">
                Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Stats */}
      <section className="section about-stats">
        <div className="container about-stats__grid">
          <Reveal variant="left" className="about-stats__media">
            <Image
              src="/images/2026/02/white-color-mobile-service-truck-edmonton-400x516.webp"
              alt="SRB Equipment mobile service truck"
              width={560}
              height={720}
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </Reveal>

          <Reveal variant="right" delay={100} className="about-stats__content">
            <span className="eyebrow">Our Track Record</span>
            <h2 className="section__title">
              Providing Expert &amp; Honest Service For Years
            </h2>
            <p>
              {SITE.name} is a full-service truck repair company. We believe
              quality services shouldn&apos;t be hard to access — that&apos;s why
              we offer both in-shop and 24/7 mobile repairs in Edmonton.
            </p>
            <blockquote className="about-stats__quote">
              &quot;You can count on us!!&quot;
            </blockquote>

            <div className="about-stats__counters">
              <div>
                <strong>
                  <CountUp end={10} suffix="+" />
                </strong>
                <span>Years Experience</span>
              </div>
              <div>
                <strong>
                  <CountUp end={5000} suffix="+" />
                </strong>
                <span>Trucks Repaired</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Roadside Help</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Fleet Focused</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section about-faq section--gray">
        <div className="container">
          <Reveal variant="up" className="section__head section__head--center">
            <h2 className="section__title">Frequently Asked Questions</h2>
          </Reveal>
          <div className="about-faq__list">
            {ABOUT_FAQS.map((faq) => (
              <details key={faq.q} className="about-faq__item">
                <summary>
                  {faq.q}
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="section__actions section__actions--center">
            <Link href="/faq" className="btn btn--dark btn--lg">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Gallery */}
      <section className="section about-gallery">
        <div className="container">
          <Reveal variant="up" className="section__head section__head--center">
            <span className="eyebrow">Inside Our Shop</span>
            <h2 className="section__title">Workshop Gallery</h2>
          </Reveal>
          <div className="about-gallery__grid">
            {GALLERY_PREVIEW.map((item, i) => (
              <Reveal key={item.src} variant="scale" delay={i * 70} className="about-gallery__item">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={480}
                  height={360}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </Reveal>
            ))}
          </div>
          <div className="section__actions section__actions--center">
            <Link href="/gallery" className="btn btn--outline-dark btn--lg">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Brands */}
      <section className="section section--dark about-brands">
        <div className="container">
          <Reveal variant="up" className="section__head section__head--center">
            <h2 className="section__title">Trusted by Leading Truck Brands</h2>
          </Reveal>
          <div className="brand-strip">
            {BRAND_LOGOS.map((brand) => (
              <div key={brand.alt} className="brand-strip__item">
                <Image src={brand.src} alt={brand.alt} width={120} height={48} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Phone CTA */}
      <section className="about-phone-cta">
        <div className="container about-phone-cta__inner">
          <div>
            <span className="about-phone-cta__label">
              <i className="fa-regular fa-clock" aria-hidden="true" /> 24/7
              Roadside Assistance
            </span>
            <a href={SITE.phoneHref} className="about-phone-cta__number">
              {SITE.phoneDisplay}
            </a>
          </div>
          <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
            <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
            Now
          </a>
        </div>
      </section>
    </div>
  );
}
