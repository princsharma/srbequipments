import Image from "next/image";
import type { ReactNode } from "react";
import HazardStripe from "@/components/HazardStripe";
import { SITE } from "@/lib/site";

type PageHeroProps = {
  title: ReactNode;
  lede?: string;
  eyebrow?: string;
  image?: string;
  showCall?: boolean;
  align?: "left" | "center";
  id?: string;
  testId?: string;
};

export default function PageHero({
  title,
  lede,
  eyebrow,
  image,
  showCall = true,
  align = "left",
  id,
  testId,
}: PageHeroProps) {
  return (
    <>
      <section
        className={`page-hero${align === "center" ? " page-hero--center" : ""}`}
        data-testid={testId}
        aria-labelledby={id}
      >
        {image ? (
          <div className="page-hero__bg" aria-hidden="true">
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ) : (
          <div className="page-hero__bg page-hero__bg--solid" aria-hidden="true">
            <div className="hero__grid" />
          </div>
        )}
        <div className="container">
          {eyebrow ? (
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" /> {eyebrow}
            </span>
          ) : null}
          <h1 id={id}>{title}</h1>
          {lede ? <p className="section__lede">{lede}</p> : null}
          {showCall ? (
            <div className="page-hero__cta">
              <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
                <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                Call {SITE.phoneDisplay}
              </a>
              <div className="phone-cta">
                <span className="phone-cta__label">24/7 Roadside Help</span>
                <a href={SITE.phoneHref} className="phone-cta__number">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </section>
      <HazardStripe />
    </>
  );
}
