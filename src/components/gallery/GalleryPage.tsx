import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { GALLERY_HERO, GALLERY_ITEMS } from "@/lib/gallery-data";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

export default function GalleryPage() {
  return (
    <div id="srb-gallery">
      <section className="section gallery-hero section--dark">
        <div className="gallery-hero__bg" aria-hidden="true">
          <Image
            src={GALLERY_HERO}
            alt=""
            width={1920}
            height={720}
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <div className="section__head section__head--center">
            <h1>Gallery</h1>
            <span className="eyebrow eyebrow--light mb-20">
              <span className="eyebrow__dot" aria-hidden="true" /> Inside Our
              Workshop
            </span>
            <p className="section__lede">
              A look at the engines, frames, and heavy-duty repairs our Edmonton
              team handles every day — in the shop and on the road.
            </p>
          </div>
        </div>
      </section>

      <section className="section gallery-grid-section">
        <div className="container">
          <GalleryLightbox items={GALLERY_ITEMS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-cta">
            <div className="section__head">
              <h2 className="section__title">Need Expert Truck Repair?</h2>
              <p className="section__lede">
                Book in-shop service or call our 24/7 mobile team — we keep your
                fleet moving.
              </p>
            </div>
            <div className="gallery-cta__actions">
              <a href={SITE.phoneHref} className="phone-pill">
                <span className="phone-pill__icon" aria-hidden="true">
                  <i className="fa-solid fa-phone" />
                </span>
                <span className="phone-pill__meta">
                  <small>Call Now</small>
                  <strong>{SITE.phoneDisplay}</strong>
                </span>
              </a>
              <Link href="/contact-us" className="btn btn--dark btn--lg">
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
