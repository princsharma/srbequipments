import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCtaGradient from "@/components/services/ServiceCtaGradient";
import ServiceGoogleReviews from "@/components/services/ServiceGoogleReviews";
import { SITE } from "@/lib/site";
import { SERVICE_PRICE } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Truck Engine Repair in Edmonton",
  description:
    "Diesel engine repair, rebuilds, and diagnostics in Edmonton starting at $133/hr. Certified technicians at SRB Equipment keep your truck on the road.",
};

const DIESEL_SERVICES = [
  { icon: "fa-screwdriver-wrench", label: "Engine Repairs" },
  { icon: "fa-arrows-rotate", label: "Engine Rebuild" },
  { icon: "fa-filter", label: "Engine Blockage Repair" },
  { icon: "fa-smog", label: "Exhaust and Emissions Control" },
  { icon: "fa-truck-front", label: "Fleet Maintenance" },
  { icon: "fa-fan", label: "Turbocharger Repair" },
  { icon: "fa-stethoscope", label: "Engine Diagnostics" },
  { icon: "fa-layer-group", label: "Out Frame / In Frame Rebuilds" },
  { icon: "fa-industry", label: "Major Engine Overhauls" },
  { icon: "fa-plus", label: "And Many More!", accent: true },
] as const;

const WARNING_SIGNS = [
  { icon: "fa-gas-pump", label: "Diminished Fuel Efficiency" },
  { icon: "fa-key", label: "The Engine gets difficult to start" },
  { icon: "fa-oil-can", label: "Enhanced Oil Consumption" },
  { icon: "fa-gauge-simple", label: "Noticeable power decrease" },
  { icon: "fa-cloud", label: "Excessive exhaust smoke" },
  { icon: "fa-volume-high", label: "Rattling noise from the Engine" },
  { icon: "fa-gauge-high", label: "Trouble accelerating" },
] as const;

const HELP_CARDS = [
  {
    icon: "fa-truck-medical",
    text: "Urgently require the truck repair services?",
  },
  {
    icon: "fa-calendar-check",
    text: "Or looking for regular heavy-duty maintenance only?",
  },
  { icon: "fa-circle-check", text: "We have got it all covered!" },
] as const;

export default function Page() {
  return (
    <>
      <ServiceHero
        variant="cinematic"
        image="/images/2025/11/DOT.jpg"
        imageAlt="Truck engine repair in Edmonton"
        title="Truck Engine Repair in Edmonton"
        price={SERVICE_PRICE}
        actions={
          <a href="#contact" className="btn btn--ghost btn--lg">
            Book an Appointment
          </a>
        }
      />

      <section className="section" data-testid="intro">
        <div className="container">
          <div className="two-col">
            <div className="two-col__content">
              <h2 className="section__title">
                Offering Engine Repair Services For More Than Decades
              </h2>
              <p>
                SRB Equipment has specialized in Engine repairing from many years
                now! Engines are the heart of all vehicles that requires special
                attention and expertise.
              </p>
              <p>
                We have brought this expertise with the help of our proficient
                professionals that are certified in delivering excellence to the
                vehicle&apos;s heart with high-quality engine repair services.
              </p>
              <p>
                Our team is committed to getting your truck back on the road with
                the following diesel engine repair services!
              </p>
            </div>
            <div className="two-col__media">
              <div className="image-frame image-frame--short">
                <Image
                  src="/images/2025/10/truck-repair.jpg"
                  alt="SRB Equipment diesel engine repair in Edmonton"
                  width={720}
                  height={420}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="image-frame__sticker">
                  Engine Repair · Edmonton
                </div>
              </div>
            </div>
          </div>

          <div className="premium-band">
            <span className="premium-band__label">
              <i className="fa-solid fa-bolt" aria-hidden="true" /> Diesel Engine
              Services
            </span>
            <ul className="service-icon-grid">
              {DIESEL_SERVICES.map((item) => (
                <li
                  key={item.label}
                  className={"accent" in item ? "is-accent" : undefined}
                >
                  <span className="service-icon-grid__icon">
                    <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                  </span>
                  <span className="service-icon-grid__label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="symptom-block">
            <div className="two-col two-col--reverse">
              <div className="two-col__content">
                <span className="eyebrow">
                  <span className="eyebrow__dot" /> Warning Signs
                </span>
                <h3 className="subsection-title subsection-title--flush">
                  Some Indications Which Helps You To Know Your Engine Requires
                  Repairing!
                </h3>
                <p>Do you know that engines also give indications that it needs repair?</p>
                <p>
                  Engines make considerable noise that can sometimes be complicated
                  to deal with! Here are a few indications that your Engine needs
                  repair!
                </p>
              </div>
              <div className="two-col__media">
                <div className="image-frame image-frame--short">
                  <Image
                    src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Mechanic diagnosing a diesel engine"
                    width={720}
                    height={420}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="image-frame__stat">
                    <strong>Early</strong>
                    <span>Detection Saves Cost</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="symptom-icon-grid">
              {WARNING_SIGNS.map((item) => (
                <li key={item.label}>
                  <span className="symptom-icon-grid__icon">
                    <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                  </span>
                  <span className="symptom-icon-grid__label">{item.label}</span>
                </li>
              ))}
            </ul>

            <div className="alert-bar">
              Experiencing any of the issues? Connect today with Engine Repair
              Experts!
            </div>

            <div className="section__actions">
              <a href="#contact" className="btn btn--dark btn--lg">
                Connect Now
              </a>
            </div>
          </div>

          <p>
            These can be strong indications that your Engine might require repair,
            and detecting these early can play an imperative role in the longevity
            and greater health of the Engine.
          </p>
          <p>
            With the complete diagnosis of the engine issues and repair services,
            SRB Equipment provide preventive maintenance services to keep the
            engines working at optimal performance and save the owners from costly
            repairs later!
          </p>
        </div>
      </section>

      <section className="section section--gray" data-testid="diesel-repairs">
        <div className="container">
          <div className="image-duo">
            <Image
              src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mechanic working on diesel engine components"
              width={800}
              height={420}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              src="https://images.pexels.com/photos/3806287/pexels-photo-3806287.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Technicians rebuilding a heavy-duty truck engine"
              width={800}
              height={420}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <h2 className="section__title">
            High-Quality Diesel Engine Repairs and Rebuilds
          </h2>
          <p>
            Being the truck engine repair and rebuild specialist in the Edmonton,
            our team of professionals is proficient in handling everything related
            to engine rebuilding and repairing, including cylinder heads
            maintenance, piston ring replacements, overhaul kits, and other
            services to make sure that the powered trucks run as smooth as new
            ones!
          </p>

          <h3 className="subsection-title">Get Professional help today!</h3>
          <ul className="help-cards">
            {HELP_CARDS.map((item) => (
              <li key={item.text}>
                <span className="help-cards__icon">
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>

          <div className="section__actions">
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
              Now
            </a>
          </div>
        </div>
      </section>

      <section data-testid="cta-banner">
        <ServiceCtaGradient>
          <div className="container">
            <p>SRB Equipment Keep You and Your Business Up and Running</p>
            <p className="cta-gradient__sub">Call the Expert Now</p>
            <h2>#1 Truck Engine Repair Shop in Edmonton</h2>
            <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
              Now
            </a>
          </div>
        </ServiceCtaGradient>
      </section>

      <ServiceGoogleReviews />

      <section id="contact" className="section section--contact" data-testid="contact">
        <div className="container two-col two-col--narrow">
          <div className="two-col__content">
            <div className="section__head section__head--center">
              <h2 className="section__title">Book Your Engine Repair Service</h2>
              <p className="section__lede">
                Call SRB Equipment for diesel engine repair, rebuilds, and
                diagnostics in Edmonton.
              </p>
              <div className="section__actions section__actions--center">
                <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
                  <i className="fa-solid fa-phone-volume" aria-hidden="true" />{" "}
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
          <div className="two-col__media">
            <div className="image-frame image-frame--short">
              <Image
                src="/images/2025/10/truck-repair-1.jpg"
                alt="Book truck engine repair at SRB Equipment Edmonton"
                width={720}
                height={420}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
