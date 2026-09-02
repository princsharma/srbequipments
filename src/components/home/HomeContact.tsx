import Image from "next/image";
import { SITE } from "@/lib/site";

export default function HomeContact() {
  return (
    <section id="contact" className="section section--contact" data-testid="contact">
      <div className="container two-col">
        <div className="two-col__content">
          <div className="contact-card">
            <h3>SRB Equipment</h3>
            <ul className="contact-card__list">
              <li>
                <span
                  className="feature-card__icon"
                  style={{ background: "#fff", padding: 12 }}
                >
                  <Image
                    src="/images/2026/06/Edmonton-Alberta-150x150.webp"
                    alt="Edmonton location icon"
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <strong>Edmonton, Alberta</strong>
                  <span>Serving all of Alberta &amp; surrounding regions</span>
                </div>
              </li>
              <li>
                <span
                  className="feature-card__icon"
                  style={{ background: "#fff", padding: 12 }}
                >
                  <Image
                    src="/images/2026/06/phone-number-150x150.webp"
                    alt="Phone icon"
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <strong>
                    <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                  </strong>
                  <span>24/7 Roadside Assistance</span>
                </div>
              </li>
              <li>
                <span
                  className="feature-card__icon"
                  style={{ background: "#fff", padding: 12 }}
                >
                  <Image
                    src="/images/2026/06/24-7-Emergency-Assistance-150x150.webp"
                    alt="24/7 service icon"
                    width={40}
                    height={40}
                  />
                </span>
                <div>
                  <strong>Mon – Fri · 7:00am – 6:00pm</strong>
                  <span>Roadside service available 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="two-col__media">
          <div className="contact-map" data-testid="contact-map">
            <iframe
              title="SRB Equipment location in Edmonton"
              src="https://www.google.com/maps?q=15304%20Yellowhead%20Trail%2C%20Edmonton%2C%20AB&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
