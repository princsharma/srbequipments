import Image from "next/image";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

type Pill = { strong: string; label: string };

type ServiceHeroProps = {
  variant?: "cinematic" | "service";
  image: string;
  imageAlt: string;
  title: ReactNode;
  price?: string;
  tagline?: string;
  lede?: string;
  eyebrow?: string;
  pills?: Pill[];
  actions: ReactNode;
  showPhoneMeta?: boolean;
  phoneLabel?: string;
  priority?: boolean;
};

export default function ServiceHero({
  variant = "cinematic",
  image,
  imageAlt,
  title,
  price,
  tagline,
  lede,
  eyebrow,
  pills,
  actions,
  showPhoneMeta = false,
  phoneLabel = "Call Anytime",
  priority = true,
}: ServiceHeroProps) {
  const sectionClass = [
    "hero",
    `hero--${variant}`,
    price ? "hero--priced" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClass} data-testid="hero">
      <div className="hero__photo" aria-hidden="true">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      </div>
      {variant === "cinematic" && (
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow hero__glow--y" />
        </div>
      )}
      <div className="container">
        <div className="hero__content">
          {eyebrow ? (
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" /> {eyebrow}
            </span>
          ) : null}
          <h1 className="hero__title">{title}</h1>
          {price ? <p className="hero__price">{price}</p> : null}
          {tagline ? <p className="hero__tagline">{tagline}</p> : null}
          {lede ? <p className="hero__lede">{lede}</p> : null}
          <div className="hero__actions">{actions}</div>
          {pills && pills.length > 0 ? (
            <ul className="hero__pill-row">
              {pills.map((pill) => (
                <li key={pill.label} className="hero__pill">
                  <strong>{pill.strong}</strong> {pill.label}
                </li>
              ))}
            </ul>
          ) : null}
          {showPhoneMeta ? (
            <div className="hero__meta">
              <div className="hero__phone">
                <span className="hero__phone-label">{phoneLabel}</span>
                <a href={SITE.phoneHref} className="hero__phone-number">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
