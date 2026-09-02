import Image from "next/image";
import { SITE } from "@/lib/site";

export default function HomeCtaBanner() {
  return (
    <section className="cta-banner" data-testid="urgent-cta">
      <div className="cta-banner__bg" aria-hidden="true">
        <div className="cta-banner__grid" />
      </div>
      <div className="container cta-banner__inner">
        <div className="cta-banner__icon">
          <Image
            src="/images/2026/06/cal-a-technician-1-1.webp"
            alt="Call a technician icon"
            width={90}
            height={90}
          />
        </div>
        <div className="cta-banner__content">
          <span className="eyebrow eyebrow--light">
            Need Urgent Truck Repair Service?
          </span>
          <h2 className="cta-banner__title">
            Call a Technician Now - We&apos;ll Come{" "}
            <em>To Your Yard or Roadside</em>
          </h2>
          <p>
            When unexpected downtime affects your schedule, SRB Equipment is ready
            to help. Our mobile technicians provide on-site truck repairs across
            Edmonton and surrounding areas, helping you get back to work with
            minimal disruption.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a
            href={SITE.phoneHref}
            className="btn btn--dark btn--lg"
            data-testid="banner-call-btn"
          >
            <i className="fa-solid fa-phone-volume" aria-hidden="true" />{" "}
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
