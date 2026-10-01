import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqSection from "@/components/faq/FaqSection";
import { HOME_FAQS } from "@/lib/home-data";

export default function HomeFaq() {
  return (
    <FaqSection>
      <FaqAccordion
        items={HOME_FAQS.map((item) => ({
          question: item.q,
          answer: item.a,
        }))}
      />
    </FaqSection>
  );
}
