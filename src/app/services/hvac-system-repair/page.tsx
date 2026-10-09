import type { Metadata } from "next";
import Image from "next/image";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqSection from "@/components/faq/FaqSection";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCtaBanner from "@/components/services/ServiceCtaBanner";
import { SITE } from "@/lib/site";

const HERO_IMAGE =
  "/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg";
const SIGNS_IMAGE = "/images/2025/11/DOT.jpg";
const SERVICES_IMAGE = "/images/2025/10/truck-repair.jpg";
const AREA_IMAGE =
  "/images/2026/02/white-color-mobile-service-truck-edmonton.jpg";

const HERO_LEDE =
  "Reliable HVAC repair for heavy-duty trucks and semi-trucks. SRB Equipment repairs truck AC, heating, ventilation, and defrost systems working properly and your truck ready for the road.";

export const metadata: Metadata = {
  title: "Heavy-Duty Truck HVAC System Repair in Edmonton, AB",
  description: HERO_LEDE,
  alternates: {
    canonical: "/services/hvac-system-repair",
  },
};

const SIGNS = [
  {
    icon: "fa-temperature-high",
    title: "AC blows warm or only slightly cooler than outside air",
  },
  {
    icon: "fa-fire-flame-curved",
    title: "The heater is not working, or takes too long to warm the cab",
  },
  {
    icon: "fa-wind",
    title: "No proper airflow even at the highest fan setting",
  },
  {
    icon: "fa-droplet",
    title: "Musty or damp smell from the vents",
  },
  {
    icon: "fa-truck",
    title: "HVAC doesn't work while idling",
  },
  {
    icon: "fa-snowflake",
    title: "Trouble defrosting the windshield",
  },
  {
    icon: "fa-fan",
    title: "Blower fan working intermittently or not working at all",
  },
] as const;

const HVAC_SERVICES = [
  {
    icon: "fa-snowflake",
    title: "Truck AC Repair",
    items: [
      "AC blowing warm air",
      "Compressor issues",
      "Condenser problems",
      "Evaporator issues",
      "Refrigerant leaks",
      "Refrigerant recharge",
      "AC electrical diagnosis",
    ],
  },
  {
    icon: "fa-fire",
    title: "Truck Heater Repair",
    items: [
      "Heater not producing heat",
      "Heater core problems",
      "Thermostat issues",
      "Coolant-related heating problems",
      "Temperature control problems",
    ],
  },
  {
    icon: "fa-wind",
    title: "Truck Ventilation & Airflow Repair",
    items: [
      "Weak airflow",
      "No airflow",
      "Blower motor problems",
      "Fan speed problems",
      "Blocked ducts/vents",
      "HVAC control problems",
    ],
  },
  {
    icon: "fa-window-maximize",
    title: "Truck Defrost System Repair",
    items: [
      "Windshield not defrosting properly",
      "Weak defrost airflow",
      "HVAC control issues affecting defrosting",
    ],
  },
  {
    icon: "fa-temperature-low",
    title: "Auxiliary Heater Service",
    items: ["Webasto", "Espar", "Auxiliary cab heaters"],
  },
] as const;

const WHY_CHOOSE = [
  {
    title: "Mobile HVAC Repair",
    icon: "/images/2026/06/Convenience-Flexibility.webp",
    iconAlt: "Mobile HVAC repair icon",
    body:
      "SRB Equipment provides mobile truck and trailer HVAC repair across Edmonton and nearby areas.",
  },
  {
    title: "Experienced Technicians",
    icon: "/images/2026/06/red-seal-1-150x150.webp",
    iconAlt: "Experienced technicians icon",
    body:
      "Our technicians have years of experience working on heavy-duty diesel trucks, including Peterbilt, Freightliner, Volvo, International and more.",
  },
  {
    title: "Work Guarantee",
    icon: "/images/2026/06/Minimized-Downtime.webp",
    iconAlt: "Work guarantee icon",
    body:
      "We stand behind our workmanship and are committed to delivering reliable repairs that meet our quality standards.",
  },
  {
    title: "Clear Communication",
    icon: "/images/2026/06/lowest-cost.webp",
    iconAlt: "Clear communication icon",
    body:
      "Making an informed decision is very important because explaining the required repairs will help the truck owner estimate the cost.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Tell Us What's Wrong",
    body: `Call ${SITE.phoneDisplay} and tell us your location, truck details, and HVAC issue. We'll help determine the right service option.`,
  },
  {
    title: "HVAC Diagnostic",
    body:
      "We check the compressor, refrigerant level and leaks, electrical system, and airflow.",
  },
  {
    title: "Get Your Estimate",
    body:
      "Once the problem is identified, we explain the required repair and provide an estimate before work begins.",
  },
  {
    title: "Repair & Testing",
    body:
      "We complete the repair and test the HVAC system to make sure it is operating properly.",
  },
] as const;

const SERVICE_AREAS = [
  "Edmonton",
  "Fort Saskatchewan",
  "Leduc",
  "Camrose",
  "Devon",
  "Tofield",
  "Sherwood Park",
  "St. Albert",
  "Spruce Grove",
  "Stony Plain",
  "Nisku",
  "Beaumont",
] as const;

const FAQS = [
  {
    q: "Why is my semi-truck AC not blowing cold air?",
    a:
      "There can be several reasons, such as low refrigerant level, leakage of refrigerant, compressor malfunction, condenser failure, electrical fault, and clogging of the airflow.",
    open: true,
  },
  {
    q: "How much does truck HVAC repair cost?",
    a:
      "Truck HVAC repair costs depend on the problem, truck, and parts needed. Contact SRB Equipment with your truck details for an estimate.",
  },
  {
    q: "Do you offer mobile HVAC repair for heavy-duty trucks?",
    a:
      "Yes. SRB Equipment offers mobile HVAC repair at your yard, jobsite, or roadside location. Contact us with your location and truck details to confirm service availability.",
  },
  {
    q: "How long does a truck AC repair take?",
    a:
      "Repair time depends on the problem and parts needed. Simple repairs may take less time, while complex repairs may require additional diagnostics or replacement parts.",
  },
  {
    q: "Can you service Webasto or Espar heaters?",
    a:
      "Webasto and Espar auxiliary heating systems can require specialised inspection and service. Contact us with your heater model and the issue to confirm service availability.",
  },
  {
    q: "What does 'HVAC' mean on a Class 8 truck?",
    a:
      "HVAC system means heating, ventilation, and air conditioning. It controls cabin temperature, airflow, heating, cooling, and windshield defrosting.",
  },
  {
    q: "Can you fix a sleeper or bunk AC or an APU?",
    a:
      "Yes, we can diagnose a bunk AC. Contact SRB with your truck details so we can confirm the repair needed.",
  },
  {
    q: "What information should I provide when requesting HVAC service?",
    a:
      "For truck repair, you need to provide the model type, location, and HVAC problem.",
  },
] as const;

export default function HvacSystemRepairPage() {
  return (
    <div id="srb-hvac-service">
      <ServiceHero
        variant="cinematic"
        image={HERO_IMAGE}
        imageAlt="Heavy-duty truck HVAC repair in Edmonton"
        title="Heavy-Duty Truck HVAC System Repair in Edmonton, AB"
        lede={HERO_LEDE}
        actions={
          <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
            Book HVAC Repair – {SITE.phoneDisplay}
          </a>
        }
      />

      <section className="section section--gray" data-testid="signs">
        <div className="container">
          <div className="symptom-block">
            <div className="two-col two-col--reverse">
              <div className="two-col__content">
                <h2 className="section__title subsection-title--flush">
                  Signs Your Truck HVAC System Needs Repair
                </h2>
                <p>
                  Recognising these signs early can help prevent major, expensive
                  repairs for your semi-truck.
                </p>
              </div>
              <div className="two-col__media">
                <div className="image-frame image-frame--short">
                  <Image
                    src={SIGNS_IMAGE}
                    alt="Technician inspecting a heavy-duty truck cab HVAC system"
                    width={800}
                    height={533}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="image-frame__stat">
                    <strong>Stay</strong>
                    <span>Comfortable & Safe</span>
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section section--services"
        data-testid="services"
      >
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Heavy-Duty Truck HVAC Repair Services
            </h2>
            <p className="section__lede">
              SRB Equipment technicians provide a full range of HVAC repair
              services for Class 8 trucks, including:
            </p>
          </div>

          <div className="image-duo">
            <Image
              src={SERVICES_IMAGE}
              alt="Truck HVAC and cab climate system service"
              width={715}
              height={340}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              src="/images/2025/11/electrical-repair.jpg"
              alt="Diagnostic work on truck electrical and HVAC components"
              width={715}
              height={340}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="feature-grid hvac-services-grid">
            {HVAC_SERVICES.map((service) => (
              <article
                key={service.title}
                className="feature-card feature-card--hvac-service"
              >
                <span className="feature-card__icon">
                  <i
                    className={`fa-solid ${service.icon}`}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="feature-card__title">{service.title}</h3>
                <ul className="check-list">
                  {service.items.map((item) => (
                    <li key={item}>
                      <i className="fa-solid fa-check" aria-hidden="true" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--why" data-testid="why-choose">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Why Do Fleet Owners And Drivers Choose SRB Equipment?
            </h2>
            <p className="section__lede">
              HVAC problems can make a truck uncomfortable and affect visibility
              when the defrost system is not working properly. SRB Equipment
              provides both in-shop and mobile HVAC repair, whether your truck
              is at a yard, job site, or roadside.
            </p>
          </div>

          <div className="feature-grid">
            {WHY_CHOOSE.map((item) => (
              <article key={item.title} className="feature-card">
                <span className="feature-card__icon">
                  <Image
                    src={item.icon}
                    alt={item.iconAlt}
                    width={64}
                    height={64}
                  />
                </span>
                <h3 className="feature-card__title">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section section--process" data-testid="process">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              How Our Truck HVAC Repair Process Works
            </h2>
            <p className="section__lede">
              The repair process is designed to identify the problem and
              determine the appropriate solution.
            </p>
          </div>

          <ol className="repair-steps">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="repair-steps__num" aria-hidden="true">
                  {index + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--gray" data-testid="service-area">
        <div className="container two-col">
          <div className="two-col__content">
            <h2 className="section__title">Service Area</h2>
            <p>
              SRB Equipment provides heavy-duty truck HVAC repair in Edmonton,
              Fort Saskatchewan, Leduc, Camrose, Devon, Tofield, Sherwood Park,
              St. Albert, Spruce Grove, Stony Plain, Nisku, and Beaumont. We
              offer mobile service at your location, or you can bring your truck
              to our shop.
            </p>
            <p className="callout">
              Give a call to SRB Equipment to confirm service in your area.
            </p>
            <ul className="tag-list" aria-label="HVAC service areas">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div className="section__actions">
              <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="two-col__media">
            <div className="image-frame image-frame--short">
              <Image
                src={AREA_IMAGE}
                alt="SRB Equipment mobile service for truck HVAC repair"
                width={800}
                height={533}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="image-frame__sticker">
                Mobile &amp; In-Shop · Edmonton
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCtaBanner
        stacked
        title="Need Your Truck's AC or Heater Fixed?"
        description="Tell us where your truck is and what's wrong. We'll help determine whether mobile or in-shop HVAC service is the right option."
        actions={
          <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
            Call {SITE.phoneDisplay}
          </a>
        }
      />

      <FaqSection
        lede="Frequently asked questions about heavy-duty truck HVAC repair in Edmonton."
      >
        <FaqAccordion
          items={FAQS.map((faq) => ({
            question: faq.q,
            answer: faq.a,
            open: "open" in faq ? faq.open : undefined,
          }))}
        />
      </FaqSection>
    </div>
  );
}
