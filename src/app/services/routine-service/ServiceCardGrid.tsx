"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceItem = {
  href: string;
  title: string;
  image: string;
  imageAlt: string;
  text: string;
};

export default function ServiceCardGrid({ services }: { services: ServiceItem[] }) {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (href: string) => {
    setFlippedCards((current) => ({
      ...current,
      [href]: !current[href],
    }));
  };

  return (
    <div className="service-grid">
      {services.map((service) => {
        const isFlipped = Boolean(flippedCards[service.href]);

        return (
          <article
            key={service.href}
            className={`service-card${isFlipped ? " is-flipped" : ""}`}
            onClick={() => toggleCard(service.href)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleCard(service.href);
              }
            }}
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            aria-label={`${service.title} card`}
          >
            <div className="service-card__inner">
              <div className="service-card__face service-card__face--front">
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="service-card__link">
                    Learn More{" "}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div className="service-card__face service-card__face--back">
                <div className="service-card__media">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={715}
                    height={340}
                  />
                </div>

                <div className="service-card__back-content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <Link href={service.href} className="service-card__link">
                    View Service{" "}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
