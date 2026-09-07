import Reveal from "@/components/Reveal";
import { REPAIR_STEPS } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function HomeProcess() {
  return (
    <section className="section section--process" data-testid="repair-process">
      <div className="container">
        <Reveal variant="up" className="section__head section__head--center">
          <span className="eyebrow">How We Work</span>
          <h2 className="section__title">
            Our Truck and Trailer Repair Process
          </h2>
          <p className="section__lede">
            We follow a clear repair process to keep your truck operating
            reliably.
          </p>
        </Reveal>

        <ol className="repair-steps">
          {REPAIR_STEPS.map((step, index) => (
            <Reveal
              key={step.title}
              as="li"
              variant="up"
              delay={index * 90}
            >
              <span className="repair-steps__num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal variant="up" delay={200} className="section__actions section__actions--center">
          <a
            href={SITE.phoneHref}
            className="btn btn--primary btn--lg"
            data-testid="process-schedule-btn"
          >
            {SITE.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
