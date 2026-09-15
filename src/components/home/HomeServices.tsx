import Image from "next/image";
import Reveal from "@/components/Reveal";
import { HOME_SERVICES } from "@/lib/home-data";
import { SITE } from "@/lib/site";

const SERVICE_ICONS: Record<string, string> = {
  "Brake Repair": "fa-solid fa-traffic-light",
  "Coolant System Repair": "fa-solid fa-temperature-half",
  "Electrical Repair": "fa-solid fa-bolt",
  "Suspension Repair": "fa-solid fa-road",
  "Transmission & Clutch": "fa-solid fa-gears",
  "Engine Repair & Overhaul": "fa-solid fa-industry",
  "Exhaust System Repair": "fa-solid fa-smog",
  "CVIP Inspection": "fa-solid fa-clipboard-check",
  "Mobile Truck Repair": "fa-solid fa-truck",
};

const FEATURED_GRID = HOME_SERVICES.slice(0, 6);

export default function HomeServices() {
  return (
    <section
      id="services"
      className="section section--services services-split"
      data-testid="services"
    >
      <div className="services-split__pattern" aria-hidden="true" />

      <div className="container services-split__layout">
        <Reveal variant="left" as="aside" className="services-split__intro">
          <h2 className="services-split__title">
            Full Range of Truck &amp; Trailer Repair Services
          </h2>
          <p className="services-split__lede">
            Get essential commercial repairs completed in one place — from brakes
            and engines to CVIP inspections and 24/7 mobile roadside support.
          </p>
        </Reveal>

        <div className="services-split__grid" data-testid="service-grid">
          {FEATURED_GRID.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              variant="up"
              delay={i * 70}
              className="services-split__card"
            >
              <div className="services-split__card-inner">
                <div className="services-split__card-face services-split__card-face--front">
                  <span className="services-split__icon" aria-hidden="true">
                    <i
                      className={
                        SERVICE_ICONS[service.title] || "fa-solid fa-wrench"
                      }
                    />
                  </span>
                  <h3 className="services-split__card-title">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                  <a href={SITE.phoneHref} className="services-split__link">
                    {service.cta}{" "}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
                <div className="services-split__card-face services-split__card-face--back">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="services-split__card-overlay">
                    <h3>{service.title}</h3>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
