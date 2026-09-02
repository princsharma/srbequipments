import Image from "next/image";
import { SITE } from "@/lib/site";

export default function HomeAbout() {
  return (
    <section id="about" className="section section--about" data-testid="about">
      <div className="container two-col two-col--reverse">
        <div className="two-col__media">
          <div className="image-frame">
            <Image
              src="/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg"
              alt="White semi truck being repaired in SRB Equipment workshop"
              width={720}
              height={656}
              sizes="(max-width: 768px) 100vw, 592px"
            />
          </div>
        </div>
        <div className="two-col__content">
          <span className="eyebrow">About SRB Equipment</span>
          <h2 className="section__title">
            Edmonton&apos;s Trusted Truck Repair Shop <em>Since 2015</em>
          </h2>
          <p className="section__lede">
            For over a decade, SRB Equipment has supported commercial drivers,
            owner-operators, and fleet managers with dependable truck and trailer
            repair services in Edmonton. Since 2015, we have built our reputation
            on honest workmanship, reliable service, and a commitment to keeping
            hardworking vehicles on the road.
          </p>
          <p className="section__lede">
            Our shop is staffed by Red Seal-certified mechanics with experience
            working on a wide range of heavy-duty trucks and trailers. Combined
            with responsive service and 24/7 roadside assistance, we provide
            support when and where it is needed most.
          </p>
          <p className="section__lede">
            At SRB Equipment, we believe strong customer relationships are built
            on trust, consistency, and quality work. Every repair, inspection,
            and maintenance service is completed with attention to detail so you
            can get back on the road with confidence and keep your business
            moving forward.
          </p>
          <div className="section__actions">
            <a
              href={SITE.phoneHref}
              className="btn btn--primary"
              data-testid="about-call-btn"
            >
              <i className="fa-solid fa-phone" aria-hidden="true" />{" "}
              {SITE.phoneDisplay}
            </a>
            <a
              href="#services"
              className="btn btn--dark btn--lg"
              data-testid="about-services-btn"
            >
              Explore Services <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
