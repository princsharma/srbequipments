import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceSimpleReviews from "@/components/services/ServiceSimpleReviews";
import ServiceBookContact from "@/components/services/ServiceBookContact";
import { SERVICE_PRICE } from "@/lib/service-data";
import { SERVICE_LINKS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Truck Maintenance Services in Edmonton",
  description:
    "Routine truck maintenance and heavy-duty repair services in Edmonton. Fleet maintenance, mobile repairs, engine work, and more. Starting at $133/hr.",
};

const HERO_IMAGE =
  "/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg";

const CHECKLIST = [
  "Heavy-duty truck repairs",
  "Mobile truck repairs",
  "Emergency repairs",
  "Fleet maintenance",
  "Wheel alignments",
  "Engine repairs",
] as const;

const emissionHref =
  SERVICE_LINKS.find((l) => l.href.includes("emission-system"))?.href ??
  "/services/emission-system-repair-service";
const cvipHref =
  SERVICE_LINKS.find((l) => l.href.includes("cvip-inspections"))?.href ??
  "/services/cvip-inspections";
const engineHref =
  SERVICE_LINKS.find((l) => l.href.includes("engine-repair"))?.href ??
  "/services/engine-repair";

const MORE_SERVICES = [
  {
    href: emissionHref,
    title: "Emission System Repair/Service",
    image:
      "/images/2025/11/exhaust-repair.jpg",
    imageAlt: "Emission system repair and service",
    text: "If you manage a fleet and your commercial truck has ample expenses, with exhaust and emission control and repair services, get the truck maintenance at optimal costs.",
  },
  {
    href: cvipHref,
    title: "CVIP Inspections",
    image:
      "/images/2025/11/cvip-inspection.jpg",
    imageAlt: "CVIP inspections for commercial trucks",
    text: "Thorough CVIP inspections for heavy-duty truck and trailer repairs in California. Our team of experts will visit the site and conduct comprehensive CVIP inspections with utmost care.",
  },
  {
    href: engineHref,
    title: "Engine Repair",
    image: "/images/2025/11/DOT.jpg",
    imageAlt: "Truck engine repair service",
    text: "Keeping the heart of your vehicle healthy and operational with quality engine repair and rebuild services. Our team is committed to getting your vehicle back on the road with excellent services and exceptional experience.",
  },
];

export default function RoutineServicePage() {
  return (
    <>
      <ServiceHero
        variant="service"
        image={HERO_IMAGE}
        imageAlt="Truck maintenance services in Edmonton"
        title="Truck Maintenance Services in Edmonton"
        price={SERVICE_PRICE}
        tagline="Fast, valuable, and effective truck repairs at competitive prices!"
        actions={
          <a href="#contact" className="btn btn--white btn--lg">
            Book an Appointment
          </a>
        }
      />

      <section className="section" data-testid="intro">
        <div className="container">
          <p>
            Routine services and regular maintenance keep the vehicle engines
            and heavy-duty equipment a longer lifespan and guaranteed value. Our
            team of experts has in-depth and first-hand knowledge of repairing
            all types of heavy-duty vehicles and equipment, including dozers,
            cranes, excavators, rock trucks, dozers, and other machinery.
          </p>
          <p>
            To ensure a high level of heavy-duty maintenance services, we
            continually stay updated with the latest tools and technologies to
            deliver quality services with the desired modern approach. With
            exclusive access to the latest tools, parts, and pieces of
            machinery, we have the ability to enhance your experience with
            quality and efficient heavy equipment repairs.
          </p>

          <p>
            <strong>Are you looking for :</strong>
          </p>
          <ul className="check-list check-list--two-col">
            {CHECKLIST.map((item) => (
              <li key={item}>
                <i className="fa-solid fa-circle-check" aria-hidden="true" />{" "}
                {item}
              </li>
            ))}
          </ul>
          <p>
            <strong>Or any other! We have got it all covered!</strong>
          </p>

          <div className="section__actions">
            <a href="#contact" className="btn btn--primary btn--lg">
              Connect Now
            </a>
          </div>
        </div>
      </section>

      <section className="section section--gray" data-testid="gallery">
        <div className="container">
          <div className="image-duo">
            <Image
              src="/images/2025/11/suspension-repair.jpg"
              alt="Heavy-duty truck axle and suspension maintenance"
              width={715}
              height={340}
            />
            <Image
              src="/images/2025/11/DOT.jpg"
              alt="Mechanic performing truck engine maintenance"
              width={715}
              height={340}
            />
          </div>
        </div>
      </section>

      <section className="section" data-testid="partner">
        <div className="container">
          <h2 className="section__title">
            SRB Equipment — Your Regular Truck Services Partner!
          </h2>
          <p>
            Not only fixing the heavy-duty truck repairs, but our team of
            professionals is also dedicated to maintaining preventive and
            routine services leading to reduced breakdowns while running on the
            road and lesser financial investments.
          </p>
          <p>
            Our team endeavors to deliver high-quality and value-for-money
            services, guaranteeing maximum productivity for the vehicle&apos;s
            operations. And while maintaining the higher standard in the
            services with the utmost care, our safety programs are updated well
            with the higher environmental ethics, securing the vehicles and
            ecosystem for a longer run.
          </p>
          <a
            href="https://www.bbb.org/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check our BBB Listing and google reviews
          </a>
          <p className="subheading-sm">
            Quality routine and repair services on the go!
          </p>
          <div className="section__actions">
            <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
              Us Now
            </a>
          </div>
        </div>
      </section>

      <section
        id="more-services"
        className="section section--services"
        data-testid="more-services"
      >
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">More Services</h2>
            <p className="section__lede">
              High-Quality repair and rebuild services are now within reach!
            </p>
          </div>

          <div className="service-grid">
            {MORE_SERVICES.map((service) => (
              <article key={service.href} className="service-card">
                <div className="service-card__media">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={715}
                    height={340}
                  />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p>{service.text}</p>
                  <Link href={service.href} className="service-card__link">
                    Learn More{" "}
                    <i
                      className="fa-solid fa-arrow-right"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section__actions section__actions--center">
            <Link href="/#services" className="btn btn--dark btn--lg">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <ServiceSimpleReviews />

      <ServiceBookContact
        title="Book Your Truck Maintenance Service"
        lede="Call SRB Equipment today for routine maintenance and heavy-duty truck repairs in Edmonton."
      />
    </>
  );
}
