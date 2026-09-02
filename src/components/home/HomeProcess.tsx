import { REPAIR_STEPS } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function HomeProcess() {
  return (
    <section className="section section--process" data-testid="repair-process">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 className="section__title">
            Our Truck and Trailer Repair Process
          </h2>
          <p className="section__lede">
            We follow a clear repair process to keep your truck operating
            reliably.
          </p>
        </div>

        <ol className="repair-steps">
          {REPAIR_STEPS.map((step, index) => (
            <li key={step.title}>
              <span className="repair-steps__num" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="section__actions section__actions--center">
          <a
            href={SITE.phoneHref}
            className="btn btn--primary btn--lg"
            data-testid="process-schedule-btn"
          >
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
