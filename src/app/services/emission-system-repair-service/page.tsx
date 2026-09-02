import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCtaGradient from "@/components/services/ServiceCtaGradient";
import ServiceSimpleReviews from "@/components/services/ServiceSimpleReviews";
import ServiceBookContact from "@/components/services/ServiceBookContact";
import { SERVICE_PRICE } from "@/lib/service-data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Emission System Repair Service",
  description:
    "Truck exhaust and emission system repair in Edmonton. SRB Equipment services sensors, exhaust components, and emission controls. Starting at $133/hr.",
};

const HERO_IMAGE =
  "/images/2025/11/exhaust-repair.jpg";

const POLLUTANTS = [
  {
    name: "Carbon Monoxide (CO):",
    text: "CO is an odorless, poisonless, and colorless gas that is formed by gasoline combustion when the carbon present in the fuel doesn't burn completely.",
  },
  {
    name: "Nitrogen Oxides (NOx):",
    text: "The fuel produces NOx when it combusts completely. This type of air pollutant is generally present in areas having higher population density.",
  },
  {
    name: "Hydrocarbons (HC):",
    text: "HC is a compound emitted into the atmosphere when combustion doesn't occur appropriately.",
  },
] as const;

const INDICATIONS = [
  {
    title: "Your Check Engine Light Turns on.",
    text: "Verify if the engine light turns on, this could indicate several things simultaneously. This may include malfunctioning in the sensors, hose leakage, or even pressure loss in some components of the emission system. This could be a sign that the system requires repairs.",
  },
  {
    title: "The Vehicle is Not Performing the Way it Should!",
    text: "The vehicle's emissions system is linked to the whole fuel and exhaust system. So there is some issue with the system that can directly impact its performance.",
  },
  {
    title: "The Smell of Gas or Fuel Inside or Outside the Car",
    text: "If the vehicle is liberating the gas or you have noted some fuel smell, then take the car to the emission repair service immediately. Inhaling this can be harmful, leading to nausea and headache.",
  },
  {
    title: "Getting Fewer Miles Per Gallon",
    text: "Vehicle fuel evaporates swiftly and even when the vehicle is not in a running state. Therefore, if something is wrong with the vehicle's emission system, you will also experience swift fuel utilization, which indicates going to the repair services immediately.",
  },
] as const;

export default function EmissionSystemRepairPage() {
  return (
    <>
      <ServiceHero
        variant="service"
        image={HERO_IMAGE}
        imageAlt="Emission system repair service for trucks"
        title="Emission System Repair Service"
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
            <h2 className="section__title">Truck Exhaust Repair Edmonton</h2>
            <p>
              Every vehicle emits air pollution; however, the vehicle&apos;s
              emission system functions to diminish the harmful gases liberated
              in the environment.
            </p>
            <p>
              Therefore, SRB Equipment provide complete emission system repair
              services to keep the engines running without much air pollution.
              Fuel system components, an array of sensors, exhaust components,
              and computerized engine controls, everything functions altogether
              to control the emission output of the vehicles.
            </p>
            <p>
              The range of pollutants generated from vehicles requires
              attention, which is where the exhaust system repair help.
            </p>
          </div>
          <div className="two-col__media">
            <div className="em-intro__media">
              <Image
                src={HERO_IMAGE}
                alt="Truck exhaust system components"
                width={715}
                height={340}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gray" data-testid="pollutants">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Common Pollutants Released From Vehicles!
            </h2>
          </div>

          {POLLUTANTS.map((item) => (
            <p key={item.name} className="em-pollutant">
              <strong>{item.name}</strong> {item.text}
            </p>
          ))}
        </div>
      </section>

      <section className="section" data-testid="indications">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Indications That Your Truck Requires Exhaust System Repairs!
            </h2>
          </div>

          {INDICATIONS.map((item) => (
            <article key={item.title} className="em-indication">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}

          <ServiceCtaGradient>
            <p>Are you experiencing any of the issues mentioned above?</p>
            <p>Connect with the emission repair experts today!</p>
          </ServiceCtaGradient>

          <div className="section__actions section__actions--center">
            <a href="#contact" className="btn btn--dark btn--lg">
              Connect Now
            </a>
          </div>
        </div>
      </section>

      <section className="section section--gray" data-testid="partner">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              SRB Equipment – Your Reliable Stop For Emissions Repair Service!
            </h2>
            <p className="section__lede">
              With several years of experience in the field, SRB Equipment has
              become the #1 truck and trailer repair shop in Edmonton.
            </p>
            <p className="section__lede">
              Our team of experts proficiently handles everything with the
              utmost care, so you do not have to worry about vehicle-related
              issues while moving on the road.
            </p>
          </div>

          <ServiceCtaGradient large>
            <h2>High-Quality Truck Exhaust System Repair Edmonton</h2>
            <p>Just a Call Away!</p>
          </ServiceCtaGradient>

          <div className="section__actions section__actions--center">
            <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
              Now
            </a>
          </div>
        </div>
      </section>

      <ServiceSimpleReviews />

      <ServiceBookContact
        title="Schedule Emission System Repair"
        lede="Call SRB Equipment for truck exhaust and emission system repair in Edmonton."
      />
    </>
  );
}
