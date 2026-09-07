import Image from "next/image";
import Link from "next/link";
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
          <span className="services-split__label">Our Services</span>
          <h2 className="services-split__title">
            Full Range of Truck &amp; Trailer Repair Services
          </h2>
          <p className="services-split__lede">
            Get essential commercial repairs completed in one place — from brakes
            and engines to CVIP inspections and 24/7 mobile roadside support.
          </p>

          <div className="services-split__proof">
            <Image
              className="services-split__proof-logo"
              src={SITE.logo}
              alt=""
              width={52}
              height={52}
            />
            <div className="services-split__proof-text">
              <strong>5,000+</strong>
              <span>Customers Trust Us</span>
            </div>
          </div>

          <Link href="/contact-us" className="btn btn--dark btn--lg">
            Get a Quote
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
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
              <span className="services-split__icon" aria-hidden="true">
                <i
                  className={
                    SERVICE_ICONS[service.title] || "fa-solid fa-wrench"
                  }
                />
              </span>
              <h3 className="services-split__card-title">{service.title}</h3>
              <p>{service.description}</p>
              <a href={SITE.phoneHref} className="services-split__link">
                {service.cta}{" "}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
