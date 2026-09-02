import Image from "next/image";
import { WHY_FEATURES } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function HomeWhy() {
  return (
    <section className="section section--why" data-testid="why-us">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Why SRB Equipment</span>
          <h2 className="section__title">Why Drivers Trust SRB Equipment</h2>
          <p className="section__lede">
            Our commitment to quality repairs, reliable service, and customer
            satisfaction has earned the trust of drivers and fleets across
            Edmonton.
          </p>
        </div>

        <div className="feature-grid feature-grid--five">
          {WHY_FEATURES.map((feature) => (
            <article
              key={feature.num}
              className={`feature-card${feature.accent ? " feature-card--accent" : ""}`}
            >
              <span
                className="feature-card__num"
                style={{ color: feature.accent ? "#fff" : "var(--dark)" }}
              >
                {feature.num}
              </span>
              <span
                className="feature-card__icon"
                style={feature.accent ? { background: "#fff" } : undefined}
              >
                <Image
                  className="hero_right_icon"
                  src={feature.icon}
                  alt=""
                  width={56}
                  height={56}
                />
              </span>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="section__actions section__actions--center">
          <a
            href={SITE.phoneHref}
            className="btn btn--primary btn--lg"
            data-testid="why-quote-btn"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
