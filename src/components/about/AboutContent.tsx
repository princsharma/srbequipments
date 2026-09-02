import Image from "next/image";
import Link from "next/link";
import { BRAND_LOGOS } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function AboutContent() {
  return (
    <div id="srb-about">
      <section className="section about-intro" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__content">
              <span className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Repair. Maintenance. Service.
              </span>
              <h1 id="about-heading">About {SITE.name}</h1>
              <p className="section__lede">
                Starting from a small-scale truck repair shop in Edmonton, we
                have grown into a reputed truck repair company serving high-end
                and reliable services. From heavyweight truck servicing to
                inspection, maintenance, and everything in between, we have got
                it all covered.
              </p>

              <ul className="about-intro__stats">
                <li className="about-intro__stat">
                  <strong>10+</strong>
                  <span>Years Experience</span>
                </li>
                <li className="about-intro__stat">
                  <strong>24/7</strong>
                  <span>Mobile Service</span>
                </li>
                <li className="about-intro__stat">
                  <strong>100%</strong>
                  <span>Fleet Focused</span>
                </li>
              </ul>

              <div className="section__actions">
                <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
                  <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                  Call Us
                </a>
                <Link href="/contact-us" className="btn btn--outline btn--lg">
                  Contact Us
                </Link>
              </div>
            </div>

            <figure className="about-intro__media">
              <Image
                src="/images/2026/02/truck-cvip-inspection-in-srb-equipment-shop-400x516.webp"
                alt="Truck repair and inspection at SRB Equipment workshop in Edmonton"
                width={400}
                height={516}
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section about-history">
        <div className="container">
          <div className="about-history__grid">
            <div className="about-media">
              <Image
                src="/images/2025/11/truck-repair-in-shop.jpg"
                alt="truck repair in shop edmonton"
                width={600}
                height={720}
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="about-media__badge">
                <div>
                  <strong>24x7</strong>
                  <span>Mobile Service</span>
                </div>
              </div>
            </div>

            <div className="about-history__content">
              <span className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" /> Our History
              </span>
              <h2 className="section__title">
                Providing Expert &amp; Honest Service For Years
              </h2>

              <p>
                {SITE.name} is a full-service truck repair company. We believe
                that quality services shouldn&apos;t be difficult to access and
                not be confined to specific locations only. That is why we have
                brought in shop and mobile repair services in Edmonton.
              </p>

              <p>
                With years of experience in the field, our team of experts has
                the technical knowledge of handling it all nicely and getting the
                trucks up to shift them into a running state quickly.
              </p>

              <p>
                The best part of choosing us is that we offer 24 X 7 mobile truck
                repair services. So, in the emergencies
              </p>

              <blockquote className="quote-box">
                &quot;You can count on us!!&quot;
              </blockquote>

              <p>
                Therefore, whenever your vehicle breaks down, connect
                immediately and our mobile mechanics will visit on-site and
                provide expert services.
              </p>

              <p>
                <strong>
                  <em>So no more costly downtime!</em>
                </strong>{" "}
                Call reliable truck repair service experts now!
              </p>

              <a href={SITE.phoneHref} className="phone-pill">
                <span className="phone-pill__icon" aria-hidden="true">
                  📞
                </span>
                <span className="phone-pill__meta">
                  <small>Call Now</small>
                  <strong>{SITE.phoneDisplay}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">Trusted by Leading Truck Brands</h2>
          </div>
          <div className="brand-strip">
            {BRAND_LOGOS.map((brand) => (
              <div key={brand.alt} className="brand-strip__item">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
