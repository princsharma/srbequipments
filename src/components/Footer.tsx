import Image from "next/image";
import Link from "next/link";
import { SERVICE_LINKS, SITE, SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer" id="srb-footer">
      <div className="site-footer__bg" aria-hidden="true">
        <div className="site-footer__grid" />
      </div>

      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <Link href="/" className="brand brand--light" aria-label={`${SITE.name} — Home`}>
              <Image
                className="brand__logo"
                src={SITE.logo}
                alt={`${SITE.name} logo`}
                width={88}
                height={88}
              />
            </Link>
            <div className="site-footer__brand-divider" aria-hidden="true" />
            <p className="site-footer__tagline">
              Truck and Trailer Repair Shop in Edmonton
            </p>
            <p>
              Trusted truck and trailer repair specialists serving Edmonton with
              quality maintenance, inspections, diagnostics, and repair solutions
              for commercial vehicles.
            </p>
          </div>

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
                <span className="site-footer__contact-icon" aria-hidden="true">
                  📞
                </span>
                <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <span className="site-footer__contact-icon" aria-hidden="true">
                  ✉
                </span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <span className="site-footer__contact-icon" aria-hidden="true">
                  📍
                </span>
                <span>{SITE.address}</span>
              </li>
            </ul>

            <div className="site-footer__social">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
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
