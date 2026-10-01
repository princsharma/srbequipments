import { SITE } from "@/lib/site";

const [street, ...cityParts] = SITE.address.split(", ");
const cityLine = cityParts.join(", ");

export default function ContactInfoCard() {
  return (
    <div className="contact-card">
      <h3>{SITE.name}</h3>
      <ul className="contact-card__list">
        <li>
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
          <div>
            <strong>{street}</strong>
            <strong>{cityLine}</strong>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-phone-volume" aria-hidden="true" />
          <div>
            <strong>
              <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
            </strong>
            {/* <span>24/7 Roadside Assistance</span> */}
          </div>
        </li>
        <li>
          <i className="fa-regular fa-envelope" aria-hidden="true" />
          <div>
            <strong>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </strong>
            {/* <span>We respond within 1 hour</span> */}
          </div>
        </li>
        <li>
          <i className="fa-regular fa-clock" aria-hidden="true" />
          <div>
            <strong>Roadside service available 24/7</strong>
            {/* <span>Roadside service available 24/7</span> */}
          </div>
        </li>
      </ul>
    </div>
  );
}
