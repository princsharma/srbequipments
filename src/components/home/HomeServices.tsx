import Image from "next/image";
import { HOME_SERVICES } from "@/lib/home-data";
import { SITE } from "@/lib/site";

export default function HomeServices() {
  return (
    <section id="services" className="section section--services" data-testid="services">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">What We Do</span>
          <h2 className="section__title">
            Services We Provide in Our Truck &amp; Trailer Repair Shop
          </h2>
          <p className="section__lede">
            You can get a wide range of essential repairs completed in one place.
            Our facility handles essential mechanical systems for commercial
            trucks and trailers.
          </p>
        </div>

        <div className="service-grid" data-testid="service-grid">
          {HOME_SERVICES.map((service) => (
            <article
              key={service.title}
              className={`service-card${service.featured ? " service-card--featured" : ""}`}
            >
              {service.featured ? (
                <span className="service-card__badge">24/7</span>
              ) : null}
              <div className="service-card__media">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={715}
                  height={340}
                  sizes="(max-width: 768px) 100vw, 398px"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p>{service.description}</p>
                <a
                  href={SITE.phoneHref}
                  className="service-card__link btn btn--outline-dark"
                >
                  {service.cta}{" "}
                  <i
                    className={`fa-solid ${service.featured ? "fa-phone" : "fa-arrow-right"}`}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
