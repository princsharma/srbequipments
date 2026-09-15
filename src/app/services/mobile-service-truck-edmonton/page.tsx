import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceCtaBanner from "@/components/services/ServiceCtaBanner";
import { SITE } from "@/lib/site";

const HERO_IMAGE =
  "/images/2026/02/white-color-mobile-service-truck-edmonton.jpg";

const HERO_LEDE =
  "Your truck broke down, and every minute it sits is costing you money. SRB Equipment sends a certified heavy-duty mechanic straight to your location, no tow truck, no shop wait, no lost day. We provide fast, on-site repairs for semi-trucks, trailers, and heavy-duty diesel vehicles throughout Edmonton.";

export const metadata: Metadata = {
  title: "Mobile Truck Repair in Edmonton",
  description: HERO_LEDE,
};

const SERVICES = [
  {
    num: "01",
    title: "Engine & Diesel Repairs",
    body: "Engine trouble doesn't wait for business hours, and neither do we. Our mobile diesel mechanics diagnose and repair issues on-site — no-start conditions, overheating, fuel system faults, turbo problems, power loss, and rough running. We work on all major commercial makes, including Kenworth, Peterbilt, Freightliner, International, Mack, Volvo, and Western Star.",
  },
  {
    num: "02",
    title: "Mobile Truck Tire Repair & Replacement",
    body: "A blown tire on a loaded rig can shut down your whole route. SRB Equipment provides mobile truck tire repair across Edmonton - flat repairs, full replacements, and bead seating for both trucks and trailers. Our service trucks stock common commercial tire sizes, so most calls are resolved in a single visit without a tow.",
  },
  {
    num: "03",
    title: "Trailer Repairs",
    body: "Trailer downtime costs just as much as truck downtime. Our mobile truck and trailer repair service covers brake issues, landing gear, mud flaps, lights and wiring, kingpin wear, gladhand replacement, and air line problems. We work on both flatdeck and dry van trailers common across Alberta's industrial and agriculture sectors.",
  },
  {
    num: "04",
    title: "Brake System & Brake Chamber Repairs",
    body: "Air brake failures are a safety issue and a guaranteed roadside inspection fail. Our mechanics handle brake chamber replacement, slack adjusters, brake shoe replacement, air line repairs, and brake drum inspections - all on-site, all to standard.",
  },
  {
    num: "05",
    title: "Electrical & ABS Diagnostics",
    body: "Dead lights, faulty sensors, ABS codes, or wiring flagged during a roadside stop add up fast in fines and downtime. We use advanced diagnostic tools to find and fix electrical and ABS faults on location, so you stay compliant and keep moving.",
  },
  {
    num: "06",
    title: "Air System & Suspension Repair",
    body: "Alberta's temperature swings are hard on air systems. Air ride suspension failures, leaking air lines, and air dryer issues show up more in extreme cold or heat, and they directly affect how your load sits and how safely your truck handles. We carry the parts to repair air systems roadside and keep your suspension stable and your load legal.",
  },
  {
    num: "07",
    title: "Transmission Repair",
    body: "Clutch issues, fluid leaks, and worn components don't fix themselves, and ignoring them usually turns a small repair into a major one. We handle transmission repairs on-site to restore smooth shifting and reliable performance before a minor issue becomes a breakdown.",
  },
  {
    num: "08",
    title: "Differential Repair",
    body: "Our mechanics inspect and repair differential leaks, worn gears, and unusual noise on-site, making sure power reaches your wheels evenly and your drivetrain runs the way it should.",
  },
  {
    num: "09",
    title: "Battery & Jump Start",
    body: "A dead battery shouldn't end your day. We provide on-site jump-starts, battery testing, and replacements, and we make sure your charging system is working properly before we leave — not just that the engine turns over.",
  },
  {
    num: "10",
    title: "Mobile Truck A/C Repair",
    body: "Alberta summers get hot, and a failed cab A/C is more than uncomfortable — it's a fatigue and safety issue on long hauls. We service and repair commercial truck air conditioning on-site, including refrigerant recharging and compressor diagnostics.",
  },
  {
    num: "11",
    title: "Preventive Maintenance On-Site",
    body: "Most breakdowns are preventable. We offer scheduled mobile preventive maintenance for fleets and owner-operators — oil changes, filter replacements, fluid checks, and pre-trip inspection support - done at your yard or job site instead of taking a truck out of service for a shop visit.",
  },
  {
    num: "12",
    title: "CVIP Inspection",
    body: "Our certified technicians perform on-site CVIP inspections covering brakes, suspension, and other key systems, keeping your truck or trailer road-legal and compliant with Alberta safety standards without a shop appointment.",
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Give Us a Call",
    body: `Reach our dispatch line at ${SITE.phoneDisplay}. Tell us what issue you're facing and the type of truck you have. We'll gather the details before heading your way.`,
  },
  {
    title: "We Head to Your Location",
    body: "We dispatch the mobile unit to your location without delay and provide a clear arrival time so you know exactly when to expect us.",
  },
  {
    title: "On-Site Diagnosis & Repair",
    body: "Our technician arrives, diagnoses the issue, walks you through what's needed, and gets to work. We focus on honest service with no unnecessary repairs.",
  },
  {
    title: "Back on the Road",
    body: "Before we leave, we confirm everything is running properly. You sign off, pay for the work done, and get back to hauling.",
  },
] as const;

const BENEFITS = [
  {
    num: "01",
    title: "No Tow Needed - We Come to You",
    icon: "/images/2026/06/Convenience-Flexibility.webp",
    iconAlt: "No tow needed icon",
    body: "Towing a loaded truck is expensive and slow. Our mobile repair service eliminates the tow for most jobs - we bring the tools and parts to fix the problem where it happened.",
  },
  {
    num: "02",
    title: "Available 24/7 - Including Weekends & Holidays",
    icon: "/images/2026/06/24-7-Emergency-Assistance-150x150.webp",
    iconAlt: "24/7 availability icon",
    body: "Breakdowns don't follow a schedule, and neither do we. SRB Equipment runs 24/7 mobile truck and trailer repair across Edmonton and the surrounding region, including emergency calls in the middle of the night.",
  },
  {
    num: "03",
    title: "Certified Heavy-Duty Diesel Mechanics",
    icon: "/images/2026/06/red-seal-1-150x150.webp",
    iconAlt: "Certified mechanics icon",
    body: "Every technician we send is a certified heavy-duty mechanic with hands-on experience on commercial equipment. You don't get someone learning on the job - you get someone who already knows diesel trucks.",
  },
  {
    num: "04",
    title: "Fully Equipped Mobile Units",
    icon: "/images/2026/06/Minimized-Downtime.webp",
    iconAlt: "Fully equipped mobile units icon",
    body: "Our service trucks carry diagnostic tools, common commercial parts, tire equipment, and the specialized gear heavy-duty work requires. Most calls are resolved in a single visit.",
  },
  {
    num: "05",
    title: "Transparent Pricing - No Hidden Shop Fees",
    icon: "/images/2026/06/lowest-cost.webp",
    iconAlt: "Transparent pricing icon",
    body: "No shop overhead, no markup on bay time. You'll know what the job costs before we start, and that's what you'll pay.",
  },
  {
    num: "06",
    title: "Built for Edmonton's Roads and Weather",
    icon: "/images/2026/06/Edmonton-Alberta-150x150.webp",
    iconAlt: "Built for Edmonton icon",
    body: "We work in Edmonton every day. We know the routes, the seasonal extremes, and what local fleets deal with - that's what lets us respond fast and fix it right the first time.",
  },
] as const;

const FAQS = [
  {
    q: "How Fast Does SRB Equipment Respond To A Mobile Truck Repair Call In Edmonton?",
    a: "For most Edmonton metro calls, we aim to arrive within 1–2 hours. For after-hours emergencies, we dispatch as fast as possible and give you an honest ETA the moment you call.",
    open: true,
  },
  {
    q: "Do You Carry Parts On Your Mobile Service Truck?",
    a: "Yes, our mobile units are stocked with common wear parts, brake components, electrical supplies, tire repair equipment, and diagnostic tools for semi-trucks, trailers, and heavy-duty diesel vehicles, so most repairs can be completed on the first visit.",
  },
  {
    q: "Can You Repair My Truck On The Highway Or A Remote Location?",
    a: "Yes. We perform roadside semi truck repair on highway shoulders, rest areas, job sites, and remote spots around Edmonton and central Alberta. We ask that you get your vehicle to a safe location if possible before we arrive, safety comes first for both our technicians and your driver.",
  },
  {
    q: "What Types Of Trucks Do You Repair?",
    a: "We service semi-trucks, trailers, heavy-duty diesel vehicles, and commercial trucks of all makes and models, including Kenworth, Peterbilt, Freightliner, International, Mack, Volvo, and Western Star. We handle Class 6 through Class 8 commercial vehicles and most trailer types across Edmonton and surrounding areas.",
  },
  {
    q: "Is Your Mobile Truck Repair Service Available On Weekends And Holidays?",
    a: "Yes, SRB Equipment mobile truck repair service operates 24 hours a day, 7 days a week, including weekends and holidays, so you are never left stranded.",
  },
  {
    q: "Can You Perform A CVIP Inspection On-Site?",
    a: "Yes, our certified technicians can perform Commercial Vehicle Inspection Program inspections at your location to keep your truck compliant with Alberta safety standards.",
  },
  {
    q: "What Should I Do While Waiting For Your Mobile Mechanic To Arrive?",
    a: "Pull your truck to a safe spot, turn on your hazard lights, and stay away from traffic. Our team will keep you updated on the arrival time.",
  },
  {
    q: "Do you service the whole Edmonton Area?",
    a: "Yes, All Edmonton quadrants and the greater metro area, including Sherwood Park, Spruce Grove, Leduc, Nisku, St. Albert, Devon, Fort Saskatchewan, Tofield, and Camrose. Call to confirm dispatch availability for your specific location.",
  },
  {
    q: "Do You Offer 24-hour Emergency Truck Repair Service?",
    a: "Yes. SRB Equipment provides 24/7 mobile truck and trailer repair across Edmonton. You can call anytime for roadside or on-site assistance.",
  },
  {
    q: "Do You Offer Mobile Tire Repair And Replacement?",
    a: "Yes. We handle mobile truck tire repair and replacement on-site for both trucks and trailers, getting you back on the road without a tow.",
  },
  {
    q: "Do You Work On Trailers As Well As Trucks?",
    a: "Absolutely. Mobile truck and trailer repair is core to what we do - air lines, brakes, lights, landing gear, glad hands, and structural trailer issues are all within scope.",
  },
  {
    q: "Do You Offer Fleet Maintenance Contracts?",
    a: "We work with fleet operators on a scheduled basis for ongoing preventive maintenance. Call us to discuss your fleet size and a service schedule that fits.",
  },
] as const;

export default function Page() {
  return (
    <>
      <ServiceHero
        variant="cinematic"
        image={HERO_IMAGE}
        imageAlt="Mobile truck repair service in Edmonton"
        title={
          <>
            <em>Mobile Truck Repair</em> in Edmonton - We Come to You, 24/7
          </>
        }
        lede={HERO_LEDE}
        actions={
          <>

            <a href={SITE.phoneHref} className="btn btn--ghost btn--lg">
              Call For Emergency Service
            </a>
          </>
        }
      // pills={[
      //   { strong: "24/7", label: "Emergency Service" },
      //   { strong: "On-Site", label: "Repairs" },
      //   { strong: "Certified", label: "Diesel Mechanics" },
      // ]}
      // showPhoneMeta
      />

      <div className="trust-strip">
        <div className="container trust-strip__grid">
          <div>
            <strong>24/7</strong>
            <span>Emergency Service</span>
          </div>
          <div>
            <strong>Edmonton</strong>
            <span>& Surrounding Areas</span>
          </div>
          <div>
            <strong>Certified</strong>
            <span>Diesel Mechanics</span>
          </div>
        </div>
      </div>

      <section id="about" className="section section--about">
        <div className="container two-col">
          <div className="two-col__content">
            <h2 className="section__title">
              On-Site Heavy-Duty Truck & Trailer Repair - Edmonton's Mobile Mechanics
            </h2>
            <p>
              SRB Equipment provides mobile truck and trailer repair across Edmonton and nearby areas.
              Our Mobile units carry the diagnostic equipment, tools,
              and parts needed to handle most commercial truck and
              trailer repairs without a tow. Our technicians work right where your equipment sits
              - a highway shoulder, a construction site,
              a fuel yard, or your own lot - and we treat every call with the same
              urgency you'd expect if it were our own truck losing money on the side of the road.
            </p>
            <p>
              We have 11 years of hands-on experience handling engine,
              brake, electrical, and trailer issues on-site. We work on all major
              commercial makes, including Kenworth, Peterbilt,
              Freightliner, International, Mack, Volvo, and
              Western Star.
            </p>
            <div className="section__actions">
              {/* <Link href="#services" className="btn btn--dark">
                Our Services
              </Link> */}
            </div>
          </div>
          <div className="two-col__media">
            <div
              className="image-frame image-frame--short"
              style={{ height: 420 }}
            >
              <Image
                src={HERO_IMAGE}
                alt="Semi-truck on Edmonton highway"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              {/* <div className="image-frame__sticker">
                Mobile Service · Edmonton & Area
              </div> */}
              <div className="image-frame__stat">
                <strong>24/7</strong>
                <span>Roadside Ready</span>
              </div>
            </div>
            <h3 style={{ marginTop: 30 }}>Key Areas We Serve:</h3>
            <ul className="tag-list">
              <li>Edmonton</li>
              <li>Leduc</li>
              <li>Edmonton</li>
              <li>Tofield</li>
              <li>Camrose</li>
              <li>Devon</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="section section--services">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">
              Mobile Truck & Trailer Repair Services We Provide
            </h2>
            <p className="section__lede">
              When your truck can&apos;t make it to the shop, we bring the Mobile
              Truck & Trailer Repair Services We Provideshop to you. Our mobile
              team arrives with professional tools, quality parts, and the
              expertise to handle most issues on-site. Here&apos;s what our
              roadside repair service covers.
            </p>
          </div>

          <div className="service-list">
            {SERVICES.map((service) => (
              <article key={service.num} className="service-row">
                <span className="service-row__num">{service.num}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="inline-cta">
            <div>
              <h3>Need a Service Not Listed?</h3>
              <p>
                Our certified mechanics handle a wide range of truck and trailer
                repairs. Contact us to discuss your specific needs.
              </p>
            </div>
            <a href={SITE.phoneHref} className="btn btn--primary">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <ServiceCtaBanner
        stacked
        title="Can't Get to the Shop? Want a Mechanic to Come to You?"
        description="We bring the on-site repair shop to your location with quick, professional roadside service across Edmonton."
        actions={
          <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
            Call for Fast Repair
          </a>
        }
      />

      <section id="why-us" className="section section--why">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Why Edmonton Truckers Call SRB Equipment First
            </h2>
            <p className="section__lede">
              At SRB Equipment, we know how stressful a breakdown can be. That
              is why Edmonton drivers and fleet owners call us first. We show
              up fast, fix it right, and get you back on the road without the
              hassle.
            </p>
          </div>
          <div className="feature-grid">
            {BENEFITS.map((benefit) => (
              <article key={benefit.num} className="feature-card">
                <span className="feature-card__icon">
                  <Image
                    src={benefit.icon}
                    alt={benefit.iconAlt}
                    width={64}
                    height={64}
                  />
                </span>
                <h3 className="feature-card__title">{benefit.title}</h3>
                <p>{benefit.body}</p>
              </article>
            ))}
          </div>
          <div className="section__actions" style={{ justifyContent: "center", marginTop: "var(--space-5)" }}>
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
              Get a Mobile Mechanic Now
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="section section--process">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              How Our Mobile Truck Repair Process Works
            </h2>
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

          <div className="section__actions section__actions--center">
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
              Schedule Your Repair Today
            </a>
          </div>
        </div>
      </section>

      <section className="cta-banner cta-banner--cinematic" data-testid="urgent-cta">
        <div className="cta-banner__photo" aria-hidden="true">
          <Image
            src="/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="cta-banner__scrim" aria-hidden="true" />

        <div className="container cta-banner__inner">
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">
              Need Mobile Truck Repair in Edmonton?
              <br />
              We Are Ready to Help
            </h2>
            <p>
              Our certified mechanics are available 24/7 to get your truck
              back on the road fast. No towing, no waiting, just on-site
              repair you can count on.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a href={SITE.phoneHref} className="btn btn--primary btn--lg cta-pulse">
              <i className="fa-solid fa-phone-volume" aria-hidden="true" /> Call
              Us Now
            </a>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="section section--contact">
        <div className="container two-col two-col--narrow">
          <div className="two-col__content">
            <h2 className="section__title">
              Truck Mobile Repair Service Across Edmonton & Beyond
            </h2>
            <p>
              Here are the neighborhoods and surrounding zones in and around
              Edmonton where we regularly provide mobile repair:
            </p>

            <div className="contact-card">
              <h3>Fast Response Guarantee</h3>
              <p>
                We know every minute counts. That&apos;s why our team responds
                quickly to get you the help you need, right when you need it.
              </p>
              <p className="spaced-top-sm">
                Our mobile service trucks cover key routes and are positioned at
                strategic points to reach you quickly and keep your downtime
                minimal.
              </p>
              <ul className="contact-card__list spaced-top">
                <li>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <div>
                    <strong>Call Us 24/7</strong>
                    <span>
                      <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                    </span>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <div>
                    <strong>Email</strong>
                    <span>
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="two-col__media">
            <div className="contact-media" style={{ height: 520 }}>
              <Image
                src="/images/2025/10/truck-repair-1.jpg"
                alt="Professional truck repair and maintenance"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="contact-media__caption">
                <strong>Professional Repair & Maintenance</strong>
                <span>
                  We are available 24/7 for all your emergency mobile truck and
                  trailer repair needs across Edmonton.
                </span>
              </div>
            </div>

            <h3 style={{ marginTop: 30 }}>Primary Service Areas</h3>
            <ul className="tag-list">
              <li>Fort Saskatchewan</li>
              <li>Leduc</li>
              <li>Tofield</li>
              <li>Edmonton</li>
              <li>Devon</li>
              <li>Camrose</li>
            </ul>
            <div className="section__actions">
              <a href={SITE.phoneHref} className="btn btn--primary btn--lg">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section id="faq" className="section section--faq">
        <div className="container faq-layout">
          <div className="section__head">
            <h2 className="section__title">Frequently Asked Questions</h2>
            <p className="section__lede">
              Common questions about our mobile truck and trailer repair services
              across Edmonton.
            </p>
            <div className="section__actions">
              <a href={SITE.phoneHref} className="btn btn--dark">
                Still Have Questions? Call Our Dispatch Line
              </a>
            </div>
          </div>
          <div className="faq-list">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="faq-item"
                open={"open" in faq ? faq.open : undefined}
              >
                <summary>
                  <h3 style={{ textTransform: "capitalize", margin: 0, display: "inline" }}>
                    {faq.q}
                  </h3>{" "}
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                </summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>

          {/* <div className="section__actions section__actions--center spaced-top">
            <a href={SITE.phoneHref} className="btn btn--dark btn--lg">
              Still Have Questions? Call Our Dispatch Line
            </a>
          </div> */}
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="bottom-cta">
            <div>
              <h2>Ready to Get Your Truck Back on the Road?</h2>
              <p>
                Book mobile truck service now — fast response, certified
                mechanics, and repairs at your location across Edmonton.
              </p>
            </div>
            <a href={SITE.phoneHref} className="bottom-cta__phone">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
