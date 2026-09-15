import { SITE } from "@/lib/site";
import { HOME_FAQS } from "@/lib/home-data";

export default function HomeStructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    image: `${SITE.url}${SITE.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "15304 Yellowhead Trail",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      postalCode: "T5V 1A1",
      addressCountry: "CA",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
