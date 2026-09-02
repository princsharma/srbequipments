import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/home-data";

export default function HomeBrands() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="section__head section__head--center">
          <h2 className="section__title">Trusted by Leading Truck Brands</h2>
        </div>
        <div className="brand-strip">
          {BRAND_LOGOS.map((brand) => (
            <div key={brand.alt} className="brand-strip__item">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={120}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
