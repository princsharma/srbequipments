import Link from "next/link";
import { SERVICE_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.address
  )}&output=embed`;

  return (
    <footer className="site-footer" id="srb-footer">
      <div className="site-footer__bg" aria-hidden="true">
        <div className="site-footer__grid" />
      </div>

      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__col">
            <h4>Our Services</h4>
            <ul>
              {SERVICE_LINKS.map((service) => (
                <li key={service.href}>
                  <Link href={service.href}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/faq">FAQ&apos;s</Link>
              </li>
            </ul>
          </div>

          <div className="site-footer__col site-footer__contact">
            <h4>Contact</h4>

            <ul>
              <li>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span>{SITE.address}</span>
              </li>
            </ul>

<div className="site-footer__social">
  {SOCIAL_LINKS.map((social) => {
    const iconMap: Record<string, string> = {
      Facebook: "fa-brands fa-facebook-f",
      Instagram: "fa-brands fa-instagram",
      Twitter: "fa-brands fa-x-twitter",
      X: "fa-brands fa-x-twitter",
      YouTube: "fa-brands fa-youtube",
      LinkedIn: "fa-brands fa-linkedin-in",
    };

    return (
      <a
        key={social.href}
        href={social.href}
        aria-label={social.label}
        target="_blank"
        rel="noopener noreferrer"
        className="site-footer__social-link"
      >
        <i
          className={iconMap[social.label] || "fa-solid fa-share-nodes"}
          aria-hidden="true"
        />
      </a>
    );
  })}
</div>
</div>

          {/* Google Map */}
          <div className="site-footer__col site-footer__map">
            <h4>Our Location</h4>

            <div className="contact-map" data-testid="contact-map">
              <iframe
                title={`${SITE.name} location on Google Maps`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <div className="site-footer__legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            &nbsp;·&nbsp;
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}