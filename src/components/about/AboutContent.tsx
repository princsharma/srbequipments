import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceHero from "@/components/services/ServiceHero";
import {
  ABOUT_AUDIENCE,
  ABOUT_CTA,
  ABOUT_DIFFERENTIATORS,
  ABOUT_HERO,
  ABOUT_ORIGIN,
  ABOUT_TEAM,
} from "@/lib/about-data";
import { SITE } from "@/lib/site";

export default function AboutContent() {
  return (
    <div id="srb-about">
      <ServiceHero
        variant="cinematic"
        image={ABOUT_HERO.image}
        imageAlt={ABOUT_HERO.imageAlt}
        title={
          <>
            {ABOUT_HERO.titleLine1}
            <br />
            <em>{ABOUT_HERO.titleLine2}</em>
          </>
        }
        lede={ABOUT_HERO.lede}
        actions={<></>}
      />

      <section
        className="section section--gray about-origin"
        aria-labelledby="about-origin-heading"
      >
        <div className="container two-col">
          <Reveal variant="up" className="two-col__content">
            <h2 id="about-origin-heading" className="section__title">
              {ABOUT_ORIGIN.title}
            </h2>
            <p>
              SRB Equipment was founded by{" "}
              <strong>{ABOUT_ORIGIN.founderName}</strong>
              {ABOUT_ORIGIN.introAfterName}
            </p>
            <p>{ABOUT_ORIGIN.secondParagraph}</p>
            <div className="section__actions about-origin__actions">
              <Link href={ABOUT_ORIGIN.servicesHref} className="btn btn--primary btn--lg">
                Our Services
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="up" delay={60} className="two-col__media">
            <div className="image-frame about-origin__figure">
              <Image
                src={ABOUT_ORIGIN.founderImage}
                alt={ABOUT_ORIGIN.founderAlt}
                width={720}
                height={480}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="about-origin__caption">
                <span className="about-origin__caption-bar" aria-hidden="true" />
                <div>
                  <strong>{ABOUT_ORIGIN.founderName}</strong>
                  <span>{ABOUT_ORIGIN.founderRole}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="section section--gray about-audience"
        aria-labelledby="about-audience-heading"
      >
        <div className="container about-audience__layout">
          <Reveal variant="up" className="about-audience__intro">
            <h2 id="about-audience-heading" className="section__title">
              {ABOUT_AUDIENCE.title}
            </h2>
            <p className="about-audience__lede">{ABOUT_AUDIENCE.lede}</p>
          </Reveal>

          <div className="about-audience__columns">
            {ABOUT_AUDIENCE.items.map((item, i) => (
              <Reveal
                key={item.title}
                variant="up"
                delay={i * 50}
                className="about-audience__card"
              >
                <span className="about-audience__icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--dark about-team"
        aria-labelledby="about-team-heading"
      >
        <div className="container about-team__grid">
          <Reveal variant="up" className="about-team__content">
            <h2 id="about-team-heading" className="section__title">
              {ABOUT_TEAM.title}
            </h2>
            <p className="about-team__lede">{ABOUT_TEAM.lede}</p>
            <ul className="about-team__highlights">
              {ABOUT_TEAM.highlights.map((item) => (
                <li key={item.label}>
                  <span className="about-team__highlight-icon" aria-hidden="true">
                    <i className={item.icon} />
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" delay={80} className="about-team__mosaic">
            <div className="about-team__mosaic-main">
              <Image
                src={ABOUT_TEAM.mosaic.main.src}
                alt={ABOUT_TEAM.mosaic.main.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="about-team__mosaic-stack">
              {ABOUT_TEAM.mosaic.secondary.map((img) => (
                <div key={img.src} className="about-team__mosaic-thumb">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 28vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="section section--gray about-differentiators"
        aria-labelledby="about-differentiators-heading"
      >
        <div className="container about-differentiators__layout">
          <Reveal variant="up" className="about-differentiators__intro">
            <h2 id="about-differentiators-heading" className="section__title">
              {ABOUT_DIFFERENTIATORS.title}
            </h2>
            <p className="about-differentiators__lede">{ABOUT_DIFFERENTIATORS.lede}</p>
          </Reveal>

          <div className="about-differentiators__columns">
            {ABOUT_DIFFERENTIATORS.items.map((item, i) => (
              <Reveal
                key={item.title}
                variant="up"
                delay={i * 50}
                className="about-differentiators__card"
              >
                <span className="about-differentiators__icon" aria-hidden="true">
                  <i className={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-v2" data-testid="about-cta">
        <div className="about-cta-v2__bg" aria-hidden="true">
          <Image
            src={ABOUT_CTA.image}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="about-cta-v2__scrim" aria-hidden="true" />
        <div className="container about-cta-v2__inner">
          <Reveal variant="up" className="about-cta-v2__content">
            <h2>{ABOUT_CTA.title}</h2>
            <p>{ABOUT_CTA.lede}</p>
          </Reveal>
          <Reveal variant="up" delay={80} className="about-cta-v2__actions">
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <Link href={ABOUT_CTA.contactHref} className="btn btn--ghost btn--lg">
              Book a Service
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
