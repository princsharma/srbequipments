import ContactInfoCard from "@/components/contact/ContactInfoCard";
import { SITE } from "@/lib/site";

export default function HomeContact() {
  return (
    <section id="contact" className="section section--contact" data-testid="contact">
      <div className="container two-col">
        <div className="two-col__content">
          <ContactInfoCard />
        </div>
        <div className="two-col__media">
          <div className="contact-map" data-testid="contact-map">
            <iframe
              title={`${SITE.name} location on Google Maps`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
