import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCtaGradient from "@/components/services/ServiceCtaGradient";
import ServiceGoogleReviews from "@/components/services/ServiceGoogleReviews";
import ServiceBookContact from "@/components/services/ServiceBookContact";
import { SERVICE_PRICE } from "@/lib/service-data";

export const metadata: Metadata = {
  title: "Truck AC Repair in Edmonton",
  description:
    "Professional truck air conditioning repair in Edmonton. SRB Equipment diagnoses refrigerant issues, compressor noise, moisture, and AC leaks. Starting at $133/hr.",
};

const HERO_IMAGE =
  "/images/2025/11/coolant-repair-1.jpg";
const INTRO_IMAGE =
  "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800";
const SIGNS_IMAGE =
  "https://images.pexels.com/photos/3806287/pexels-photo-3806287.jpeg?auto=compress&cs=tinysrgb&w=800";

const SIGNS = [
  {
    icon: "fa-snowflake",
    title: "The Air Conditioner is Not Cooling.",
    text: "Mostly the air conditioner loses its cooling property due to lower refrigerant levels. This could be a strong indication that air conditioning requires repair.",
  },
  {
    icon: "fa-volume-high",
    title: "Strange Noises Come Up When the Air Conditioner is on",
    text: "Generally, the awkward noise comes from the vehicle when the compressor is not functioning the way it is required. However, this can be due to using the wrong lubricant or cross-contaminated refrigerant.",
  },
  {
    icon: "fa-droplet",
    title: "Moisture Inside The Vehicle",
    text: "This could be a reason as the debris or moisture trapped in the air conditioning can also lead to the requirement to repair the air conditioning.",
  },
  {
    icon: "fa-triangle-exclamation",
    title: "Leakage From The Air Conditioner",
    text: "Leaking refrigerant can be dangerous and immediately needs to be addressed. With air conditioning repairs, this leakage issue can be addressed.",
  },
] as const;

const TRUST_ITEMS = [
  { icon: "fa-user-gear", label: "Highly trained professionals" },
  { icon: "fa-boxes-stacked", label: "High-quality parts" },
  { icon: "fa-hand-holding-dollar", label: "Fair prices" },
  {
    icon: "fa-truck",
    label: "Dedicated team for truck and trailer repairs",
  },
  { icon: "fa-bolt", label: "Quicker response times" },
] as const;

export default function AirConditioningPage() {
  return (
    <>
      <ServiceHero
        variant="cinematic"
        image={HERO_IMAGE}
        imageAlt="Truck AC repair service in Edmonton"
        title="Truck AC Repair in Edmonton"
        price={SERVICE_PRICE}
        actions={
          <a href="#contact" className="btn btn--ghost btn--lg">
            Book an Appointment
          </a>
        }
      />

      <section className="section" data-testid="intro">
        <div className="container two-col">
          <div className="two-col__content">
            <h2 className="section__title">Edmonton Truck AC Repair Service</h2>
            <p>
              Air conditioning systems within the vehicles do not produce cold
              air but generally eradicate heat from the air entering the system.
              The refrigerant used in the vehicles typically alternates between
              a liquid and gaseous state.
            </p>
            <p>
              There exists a whole process behind the air conditioning
              functioning. SRB Equipment understands the technical know-how of
              the entire process and appropriately provides the repair services
              to keep the vehicle running on the road.
            </p>
          </div>
          <div className="two-col__media">
            <div className="image-frame image-frame--short">
              <Image
                src={INTRO_IMAGE}
                alt="Mechanic servicing truck air conditioning system"
                width={800}
                height={533}
              />
              <div className="image-frame__sticker">AC Repair · Edmonton</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray" data-testid="signs">
        <div className="container">
          <div className="symptom-block">
            <div className="two-col two-col--reverse">
              <div className="two-col__content">
                <span className="eyebrow">
                  <span className="eyebrow__dot" /> Warning Signs
                </span>
                <h2 className="section__title subsection-title--flush">
                  Signs Indicating Vehicles Require Air Conditioning Services!
                </h2>
              </div>
              <div className="two-col__media">
                <div className="image-frame image-frame--short">
                  <Image
                    src={SIGNS_IMAGE}
                    alt="Technician inspecting truck front end and AC system"
                    width={800}
                    height={533}
                  />
                  <div className="image-frame__stat">
                    <strong>Stay</strong>
                    <span>Cab Comfortable</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="detail-icon-grid">
              {SIGNS.map((sign) => (
                <li key={sign.title}>
                  <span className="detail-icon-grid__icon">
                    <i className={`fa-solid ${sign.icon}`} aria-hidden="true" />
                  </span>
                  <div className="detail-icon-grid__body">
                    <h3>{sign.title}</h3>
                    <p>{sign.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" data-testid="partner">
        <div className="container">
          <h2 className="section__title">
            SRB Equipment – Your Reliable Air Conditioning Repair Partner!
          </h2>
          <p>
            <strong>
              Quality air conditioning repair services are now within your
              reach!
            </strong>
          </p>
          <p>
            Our team of proficient experts has years of knowledge and combined
            experience to keep your vehicle ready to go. From commercial vehicle
            inspection services to engine repairs, emission control, and air
            conditioning repairs, we have got it all covered.
          </p>

          <ServiceCtaGradient>
            <p>
              Connect Now and Access the Quality Truck AC Repair Services at
              Your Fingertips!
            </p>
          </ServiceCtaGradient>

          <div className="section__actions section__actions--center">
            <a href="#contact" className="btn btn--primary btn--lg">
              Connect Now
            </a>
          </div>
        </div>
      </section>

      <section className="section section--gray" data-testid="trust">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">Why Trust SRB Equipment?</h2>
            <p className="section__lede">
              Being a leading automotive service provider in Edmonton, we have
              built a stronger reputation in the truck repair industry with
            </p>
          </div>

          <div className="premium-band">
            <span className="premium-band__label">
              <i className="fa-solid fa-shield-halved" aria-hidden="true" /> Why
              Trust Us
            </span>
            <ul className="service-icon-grid">
              {TRUST_ITEMS.map((item) => (
                <li key={item.label}>
                  <span className="service-icon-grid__icon">
                    <i
                      className={`fa-solid ${item.icon}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="service-icon-grid__label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="section__actions section__actions--center">
            <a href="#contact" className="btn btn--dark btn--lg">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>

      <ServiceGoogleReviews />

      <ServiceBookContact
        title="Book Truck AC Repair in Edmonton"
        lede="Call SRB Equipment for professional truck air conditioning repair and service."
      />
    </>
  );
}
