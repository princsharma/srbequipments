import Image from "next/image";
import Link from "next/link";
import { HOME_GALLERY } from "@/lib/home-data";

export default function HomeGallery() {
  return (
    <section id="gallery" className="section section--gallery" data-testid="gallery">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow">Our Shop</span>
          <h2 className="section__title">
            Our Work <em>in Action</em>
          </h2>
          <p className="section__lede">
            A peek inside the SRB Equipment workshop and mobile service unit.
          </p>
        </div>

        <div className="gallery-grid" data-testid="gallery-grid">
          {HOME_GALLERY.map((item) => (
            <Link
              key={item.caption}
              href="/gallery"
              className={`gallery-grid__item${item.large ? " gallery-grid__item--lg" : ""}`}
              aria-label={item.caption}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={516}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <span className="gallery-grid__caption">{item.caption}</span>
            </Link>
          ))}
        </div>

        <div className="section__actions section__actions--center">
          <Link
            href="/gallery"
            className="btn btn--outline"
            data-testid="gallery-view-all"
          >
            View Full Gallery{" "}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
