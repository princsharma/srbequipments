import { SITE } from "@/lib/site";

const [street, ...cityParts] = SITE.address.split(", ");
const cityLine = cityParts.join(", ");

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`;

export default function ContactContent() {
  return (
    <>
      <section
        className="hero contact-page-hero"
        data-testid="contact-hero"
        aria-labelledby="contact-heading"
      >
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__mountains" />
          <div className="hero__glow hero__glow--y" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 id="contact-heading" className="hero__title">
              Contact
            </h1>
            <p className="hero__lede">Get in Touch With Us</p>
          </div>
        </div>
      </section>

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

      <section
        id="contact"
        className="section section--contact"
        data-testid="contact"
      >
        <div className="container contact-page-details">
          <div className="contact-card">
            <h3>{SITE.name}</h3>
            <ul className="contact-card__list">
              <li>
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
                <div>
                  <strong>{street}</strong>
                  <span>{cityLine}</span>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume" aria-hidden="true" />
                <div>
                  <strong>
                    <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                  </strong>
                  <span>24/7 Roadside Assistance</span>
                </div>
              </li>
              <li>
                <i className="fa-regular fa-envelope" aria-hidden="true" />
                <div>
                  <strong>
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </strong>
                  <span>We respond within 1 hour (business)</span>
                </div>
              </li>
              <li>
                <i className="fa-regular fa-clock" aria-hidden="true" />
                <div>
                  <strong>Mon – Fri · 7:00am – 6:00pm</strong>
                  <span>Roadside service available 24/7</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="contact-map" data-testid="contact-map">
            <iframe
              title={`${SITE.name} location on Google Maps`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
