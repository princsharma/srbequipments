import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

const CTA_BG =
  "/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg";

export default function HomeCtaBanner() {
  return (
    <section className="cta-banner cta-banner--cinematic" data-testid="urgent-cta">
      <div className="cta-banner__photo" aria-hidden="true">
        <Image
          src={CTA_BG}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="cta-banner__scrim" aria-hidden="true" />

      <div className="container cta-banner__inner">
        <Reveal variant="up">
          <div className="cta-banner__content">
            <span className="eyebrow eyebrow--light">24/7 Roadside Help</span>
            <h2 className="cta-banner__title">
              Emergency Truck Repair
              <br />
              When You Need It
            </h2>
            <p>
              Mobile technicians ready for yard calls and roadside breakdowns
              across Edmonton and surrounding areas.
            </p>
          </div>
        </Reveal>
        <Reveal variant="up" delay={120}>
          <div className="cta-banner__actions">
            <a
              href={SITE.phoneHref}
              className="cta-banner__phone"
              data-testid="banner-call-btn"
            >
              {SITE.phoneDisplay}
            </a>
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg cta-pulse">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
              Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
