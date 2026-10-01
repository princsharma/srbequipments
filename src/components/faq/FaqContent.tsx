import Image from "next/image";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqSection from "@/components/faq/FaqSection";
import { FAQ_ENTRIES } from "@/components/faq/faqEntries";
import { SITE } from "@/lib/site";

const CTA_BG =
  "/images/2026/03/white-semi-truck-repair-in-srb-equipment-workshop.jpg";

export default function FaqContent() {
  return (
    <>
      <PageHero
        id="faq-heading"
        testId="faq-hero"
        title="Frequently Asked Questions"
        image={CTA_BG}
      />

      <FaqSection>
        <FaqAccordion
          items={FAQ_ENTRIES.map(({ id, question, answer }) => ({
            id,
            question,
            answer,
          }))}
        />
      </FaqSection>

      <section id="contact" className="faq-page-cta" data-testid="faq-cta">
        <div className="faq-page-cta__bg" aria-hidden="true">
          <Image
            src={CTA_BG}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.3 }}
          />
        </div>
        <div className="container">
          <h2>Have a Different Question?</h2>
          <p>Call us anytime</p>
          <a href={SITE.phoneHref} className="faq-page-cta__phone">
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
