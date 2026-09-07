import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import HazardStripe from "@/components/HazardStripe";
import { SITE } from "@/lib/site";

const HERO_VEHICLE =
  "/images/Homepage/70a4df0f-f838-42fd-bae3-cd039671290f.webp";

export default function HomeHero() {
  return (
    <section className="hero hero--towis" data-testid="hero">
      <HazardStripe size="lg" />

      <div className="hero__sky" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <a
            href={SITE.phoneHref}
            className="hero__phone-pill hero-anim hero-anim--1"
            data-testid="hero-call-btn"
          >
            <span className="hero__phone-pill-icon" aria-hidden="true">
              <i className="fa-solid fa-phone" />
            </span>
            <span className="hero__phone-pill-num">{SITE.phoneDisplay}</span>
          </a>

          <h1
            className="hero__title hero-anim hero-anim--2"
            data-testid="hero-title"
          >
            Truck &amp; Trailer
            <br />
            <span className="hero__title-line">
              <em>Repair Shop</em> in Edmonton
            </span>
          </h1>

          <p className="hero__lede hero-anim hero-anim--3">
            Red Seal-certified technicians. Fast repairs and 24/7 roadside
            service across Edmonton.
          </p>

          <div className="hero__actions hero-anim hero-anim--4">
            <Link
              href="#services"
              className="btn btn--dark btn--lg"
              data-testid="hero-services-btn"
            >
              <i className="fa-solid fa-wrench" aria-hidden="true" />
              Our Services
            </Link>
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="hero__vehicle hero-anim hero-anim--vehicle">
        <Image
          src={HERO_VEHICLE}
          alt="SRB Equipment truck and trailer repair in Edmonton"
          width={2170}
          height={725}
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
        />
      </div>

      <div className="hero__stats-wrap">
        <div className="container">
          <div className="hero__stats" data-testid="hero-stats">
            <div className="hero__stat">
              <strong className="hero__stat-num">
                <CountUp end={10} suffix="+" />
              </strong>
              <span className="hero__stat-label">Years in Business</span>
            </div>
            <div className="hero__stat">
              <strong className="hero__stat-num">
                <CountUp end={5000} suffix="+" />
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
      </div>
    </section>
  );
}
