import Image from "next/image";
import Reveal from "@/components/Reveal";
import { WHY_FEATURES } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function HomeWhy() {
  return (
    <section className="section section--why why-split" data-testid="why-us">
      <div className="why-split__pattern" aria-hidden="true" />

      <div className="container why-split__layout">
        <Reveal variant="left" as="aside" className="why-split__intro">
          <span className="why-split__label">Why SRB Equipment</span>
          <h2 className="why-split__title">Why Drivers Trust SRB Equipment</h2>
          <p className="why-split__lede">
            Our commitment to quality repairs, reliable service, and customer
            satisfaction has earned the trust of drivers and fleets across
            Edmonton.
          </p>

          <div className="why-split__proof">
            <Image
              className="why-split__proof-logo"
              src={SITE.logo}
              alt=""
              width={52}
              height={52}
            />
            <div className="why-split__proof-text">
              <strong>5,000+</strong>
              <span>Trucks Repaired &amp; Counting</span>
            </div>
          </div>

          <a
            href={SITE.phoneHref}
            className="btn btn--primary btn--lg"
            data-testid="why-quote-btn"
          >
            <i className="fa-solid fa-phone-volume" aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </Reveal>

        <div className="why-split__grid">
          {WHY_FEATURES.map((feature, i) => (
            <Reveal
              key={feature.num}
              as="article"
              variant="up"
              delay={i * 80}
              className={`why-split__card${feature.accent ? " why-split__card--accent" : ""}`}
            >
              <div className="why-split__card-top">
                <span className="why-split__card-icon">
                  <Image src={feature.icon} alt="" width={48} height={48} />
                </span>
                <span className="why-split__card-num">{feature.num}</span>
              </div>
              <h3 className="why-split__card-title">{feature.title}</h3>
              <p>{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
