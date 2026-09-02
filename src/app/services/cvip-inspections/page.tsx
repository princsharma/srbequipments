import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "CVIP Inspection Services in Edmonton",
  description:
    "Trusted Commercial Vehicle inspections (CVIP) for heavy-duty trucks and trailers that make safety and compliance simple. Our experienced technicians deliver quick certification and help you stay confident and road-ready.",
};

export default function CvipInspectionsPage() {
  return (
    <>
      <section className="section cvip-hero" data-testid="hero">
        <div className="container two-col">
          <div className="two-col__content">
            <span className="eyebrow">Certified CVIP Inspection</span>
            <h1 className="section__title">
              CVIP Inspection Services in Edmonton
            </h1>
            <p className="section__lede">
              Trusted Commercial Vehicle inspections (CVIP) for heavy-duty trucks
              and trailers that make safety and compliance simple. Our
              experienced technicians deliver quick certification and help you
              stay confident and road-ready.
            </p>
            <div className="section__actions">
              <a href="#contact" className="btn btn--dark btn--lg">
                Book Your CVIP Inspection Now
              </a>
            </div>
            <div className="cvip-stat-row">
              <div>
                <strong>1000+</strong>
                <span>Inspections Done</span>
              </div>
              <div>
                <strong>24 Hr</strong>
                <span>Turnaround Time</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Certified Technicians</span>
              </div>
            </div>
          </div>
          <div className="two-col__media">
            <div className="cvip-hero__media">
              <Image
                src="/images/2025/11/cvip-inspection.jpg"
                alt="CVIP inspection for commercial truck in Edmonton"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cvip-hero__badge">
                <i className="fa-solid fa-shield-halved" />
                <div>
                  <strong>Safety First</strong>
                  <small>100% Compliant</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-testid="importance">
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Importance of CVIP Inspections in Edmonton, AB
            </h2>
            <p className="section__lede">
              A Commercial Vehicle Inspection Program (CVIP) Inspection is a
              mandatory safety check for commercial vehicles in Alberta. This
              inspection is important for trucks, trailers, and buses to ensure
              they meet the safety standards set by the Alberta Transportation
              Authority. You must get a CVIP inspection every year if your
              vehicle weighs 11,794 kg or more in Alberta or 4,500 kg or more
              when used outside the province.
            </p>
          </div>
          <p className="cvip-importance__note">
            We follow Alberta&apos;s official CVIP Inspection checklist to ensure
            every commercial vehicle meets safety standards.
          </p>

          <div className="cvip-feature-grid">
            <article className="cvip-feature-card">
              <span className="cvip-feature-card__icon">
                <i className="fa-solid fa-circle-exclamation" />
              </span>
              <h3>Brake Systems</h3>
              <p>
                We inspect all brake components (brake pads, air or hydraulic
                lines, and brake shoes) to ensure the vehicle stops safely.
              </p>
            </article>
            <article className="cvip-feature-card">
              <span className="cvip-feature-card__icon">
                <i className="fa-solid fa-gears" />
              </span>
              <h3>Steering &amp; Suspension</h3>
              <p>
                We ensure the steering and suspension (springs, airbags, joints,
                and shock absorbers) are functioning properly, keeping the
                vehicle stable on the road.
              </p>
            </article>
            <article className="cvip-feature-card">
              <span className="cvip-feature-card__icon">
                <i className="fa-solid fa-lightbulb" />
              </span>
              <h3>Lighting &amp; Electrical</h3>
              <p>
                All lights (headlights, brake lights, and turn signals) and
                electrical wiring are inspected to ensure they function correctly
                and safely, especially in low-light conditions.
              </p>
            </article>
            <article className="cvip-feature-card">
              <span className="cvip-feature-card__icon">
                <i className="fa-solid fa-truck" />
              </span>
              <h3>Frame &amp; Body</h3>
              <p>
                The vehicle&apos;s frame and body are inspected for rust, cracks,
                or other damage to ensure the structure is strong and safe.
              </p>
            </article>
            <article className="cvip-feature-card">
              <span className="cvip-feature-card__icon">
                <i className="fa-solid fa-compact-disc" />
              </span>
              <h3>Tires &amp; Wheels</h3>
              <p>
                We check tires for sufficient tread, no cracks or bulges, and
                proper inflation, and ensure that wheels/rims are not damaged, as
                tires and wheels keep the vehicle safely on the road.
              </p>
            </article>
            <article className="cvip-feature-card">
              <span className="cvip-feature-card__icon">
                <i className="fa-solid fa-oil-can" />
              </span>
              <h3>Engine &amp; Exhaust</h3>
              <p>
                Technicians check that the engine runs smoothly and that the
                exhaust system has no leaks, ensuring the vehicle runs safely and
                does not harm the environment.
              </p>
            </article>
          </div>

          <div className="section__actions section__actions--center">
            <a href="#contact" className="btn btn--dark btn--lg">
              Schedule Inspection Now
            </a>
          </div>
        </div>
      </section>

      <section className="section cvip-process" data-testid="process">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="cvip-process__badge">
              Step-by-Step CVIP Inspection Process
            </span>
          </div>
          <div className="two-col">
            <div className="two-col__media">
              <div className="cvip-process__media">
                <Image
                  src="/images/2026/02/truck-cvip-inspection-in-srb-equipment-shop-400x516.webp"
                  alt="Mechanic performing CVIP truck inspection"
                  width={400}
                  height={516}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
            <div className="two-col__content">
              <p>
                At SRB Equipment, we understand how important a proper CVIP
                inspection is for keeping your truck or trailer safe, compliant,
                and performing at its best. Our certified team follows
                Alberta&apos;s strict CVIP standards to provide you with a clear,
                reliable assessment of your vehicle&apos;s condition. Here&apos;s
                how we handle your inspection from start to finish.
              </p>
              <ol className="cvip-steps">
                <li>
                  <span className="cvip-steps__num">1</span>
                  <div>
                    <h4>Pre-Inspection Consultation</h4>
                    <p>
                      We review your vehicle&apos;s concerns and the manual to
                      determine what to focus on during the inspection.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="cvip-steps__num">2</span>
                  <div>
                    <h4>Comprehensive Inspection</h4>
                    <p>
                      Our certified technicians conduct a full CVIP inspection,
                      checking every safety-critical component.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="cvip-steps__num">3</span>
                  <div>
                    <h4>Detailed Reporting</h4>
                    <p>
                      You receive a clear CVIP inspection report and the official
                      CVIP inspection form outlining all findings and required
                      attention.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="cvip-steps__num">4</span>
                  <div>
                    <h4>Repairs and Maintenance</h4>
                    <p>
                      If we spot a problem, we offer quick repair and maintenance
                      options to get your truck or trailer back to compliance.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="cvip-steps__num">5</span>
                  <div>
                    <h4>Certification</h4>
                    <p>
                      Once your vehicle meets all requirements, we provide the
                      official CVIP certification.
                    </p>
                  </div>
                </li>
              </ol>
              <div className="section__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  Get Your Truck Inspected
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cvip-trusted" data-testid="trusted">
        <div className="container two-col">
          <div className="two-col__content">
            <h2 className="section__title">
              Trusted Alberta CVIP Inspections for <em>Trucks &amp; Trailers</em>
            </h2>
            <p className="section__lede">
              With years of expertise and a dedication to accuracy, we deliver
              reliable commercial vehicle inspections that keep your fleet
              compliant, your drivers protected, and your operations running
              smoothly.
            </p>
            <div className="cvip-benefit-grid">
              <div className="cvip-benefit">
                <span className="cvip-benefit__icon">
                  <i className="fa-solid fa-truck" />
                </span>
                <div>
                  <strong>Certified Technicians</strong>
                  <span>
                    Qualified Technicians with official CVIP certification
                  </span>
                </div>
              </div>
              <div className="cvip-benefit">
                <span className="cvip-benefit__icon">
                  <i className="fa-solid fa-clock" />
                </span>
                <div>
                  <strong>Quick Turnaround</strong>
                  <span>Most inspections are completed within 24 hours</span>
                </div>
              </div>
              <div className="cvip-benefit">
                <span className="cvip-benefit__icon">
                  <i className="fa-solid fa-clipboard-list" />
                </span>
                <div>
                  <strong>Detailed Reports</strong>
                  <span>
                    Clear CVIP Inspection reports showing all issues and findings
                  </span>
                </div>
              </div>
              <div className="cvip-benefit">
                <span className="cvip-benefit__icon">
                  <i className="fa-solid fa-shield-halved" />
                </span>
                <div>
                  <strong>Safety Focused</strong>
                  <span>
                    Thorough checks are designed to ensure maximum road safety
                  </span>
                </div>
              </div>
              <div className="cvip-benefit">
                <span className="cvip-benefit__icon">
                  <i className="fa-solid fa-dollar-sign" />
                </span>
                <div>
                  <strong>Competitive Pricing</strong>
                  <span>Fair inspection rates with no hidden costs</span>
                </div>
              </div>
              <div className="cvip-benefit">
                <span className="cvip-benefit__icon">
                  <i className="fa-solid fa-handshake" />
                </span>
                <div>
                  <strong>Customer Service</strong>
                  <span>24/7 support is available throughout the process</span>
                </div>
              </div>
            </div>
            <div className="section__actions">
              <a href="#contact" className="btn btn--dark btn--lg">
                Get Inspected Now
              </a>
            </div>
          </div>
          <div className="two-col__media">
            <div className="cvip-trusted__media">
              <Image
                src="https://images.pexels.com/photos/4489741/pexels-photo-4489741.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Technician using diagnostic tablet during CVIP inspection"
                width={800}
                height={533}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="section cvip-final-cta"
        data-testid="contact"
      >
        <div className="container">
          <div className="section__head section__head--center">
            <h2 className="section__title">
              Ready to Get Your CVIP Certification?
            </h2>
            <p className="section__lede">
              Keep your fleet running without interruptions. Secure your CVIP
              appointment today and meet all required safety standards.
            </p>
          </div>
          <div className="cvip-contact-cards">
            <a href={SITE.phoneHref} className="cvip-contact-card">
              <span className="cvip-contact-card__icon cvip-contact-card__icon--blue">
                <i className="fa-solid fa-phone-volume" />
              </span>
              <h3>Book Inspection</h3>
              <p>Schedule your CVIP inspection quickly and easily</p>
            </a>
            <a href={`mailto:${SITE.email}`} className="cvip-contact-card">
              <span className="cvip-contact-card__icon cvip-contact-card__icon--green">
                <i className="fa-solid fa-envelope" />
              </span>
              <h3>Contact Us</h3>
              <p>
                Have questions? Our team is ready to help you with any inquiries.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
