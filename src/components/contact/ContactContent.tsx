import PageHero from "@/components/PageHero";
import HomeContact from "@/components/home/HomeContact";
import { SITE } from "@/lib/site";

export default function ContactContent() {
  return (
    <>
      <PageHero
        id="contact-heading"
        testId="contact-hero"
        title="Contact Us"
        image="/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg"
      />

      <section
        className="section section--gray"
        data-testid="contact-cards"
        aria-label="Contact details"
      >
        <div className="container">
          <div className="contact-quick-grid">
            <article className="contact-quick-card">
              <div className="contact-quick-card__icon" aria-hidden="true">
                <i className="fa-solid fa-phone-volume" />
              </div>
              <h3>Phone</h3>
              <p>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </p>
            </article>

            <article className="contact-quick-card">
              <div className="contact-quick-card__icon" aria-hidden="true">
                <i className="fa-regular fa-envelope" />
              </div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </article>

            <article className="contact-quick-card">
              <div className="contact-quick-card__icon" aria-hidden="true">
                <i className="fa-solid fa-location-dot" />
              </div>
              <h3>Address</h3>
              <p>{SITE.address}</p>
            </article>
          </div>
        </div>
      </section>

      <HomeContact />
    </>
  );
}
