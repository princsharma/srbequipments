import { SITE } from "@/lib/site";

export const HOME_SERVICES = [
  {
    title: "Brake Repair",
    description:
      "Detailed brake inspections and quality repairs so your truck and trailer stop smoothly and safely.",
    image:
      "/images/2025/11/brake-repair.jpg",
    alt: "Truck brake repair service",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "Coolant System Repair",
    description:
      "We fix coolant system issues to prevent overheating and protect your engine performance.",
    image:
      "/images/2026/07/coolant-repair-system.webp",
    alt: "Truck coolant system repair",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "Electrical Repair",
    description:
      "We diagnose and repair electrical problems affecting lights, batteries, wiring, and other systems.",
    image:
      "/images/2025/11/electrical-repair.jpg",
    alt: "Truck electrical repair",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "Suspension Repair",
    description:
      "We repair suspension components to improve stability, handling, and overall driving comfort.",
    image:
      "/images/2025/11/suspension-repair.jpg",
    alt: "Truck suspension repair",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "Transmission & Clutch",
    description:
      "Skilled mechanics identify shifting issues, clutch wear, and transmission faults - then restore smooth performance.",
    image:
      "/images/2026/07/heavy-duty-truck-driveline-repair.webp",
    alt: "Transmission and clutch repair",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "Engine Repair & Overhaul",
    description:
      "We repair and rebuild engines to restore power, efficiency, and dependable operation.",
    image: "/images/2025/11/DOT.jpg",
    alt: "Diesel engine repair and overhaul",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "Exhaust System Repair",
    description:
      "A damaged exhaust reduces efficiency and creates compliance issues. We repair exhaust concerns to keep you compliant.",
    image:
      "/images/2026/07/truck-exhaust-repair-system.webp",
    alt: "Truck exhaust system repair",
    cta: "Book Service",
    featured: false,
  },
  {
    title: "CVIP Inspection",
    description:
      "Thorough CVIP inspections to ensure your truck or trailer meets Alberta safety requirements and stays road-ready.",
    image:
      "/images/2026/07/cvip-inspection.webp",
    alt: "CVIP truck inspection",
    cta: "Book Inspection",
    featured: false,
  },
  {
    title: "Mobile Truck Repair",
    description:
      "Our fully equipped mobile unit delivers on-site diagnostics and 24-hour repair support to get you back on schedule fast.",
    image:
      "/images/2026/07/mobile-truck-repair.webp",
    alt: "Mobile truck repair service",
    cta: "Call Now",
    featured: true,
  },
] as const;

export const HOME_GALLERY = [
  {
    src: "/images/2026/02/truck-cvip-inspection-in-srb-equipment-shop-400x516.webp",
    alt: "Truck CVIP inspection in SRB Equipment shop",
    caption: "Truck CVIP Inspection",
    large: true,
  },
  {
    src: "/images/2026/02/b620-tank-inspection-and-repair-image-400x516.webp",
    alt: "B620 tank inspection and repair",
    caption: "B620 Tank Inspection",
    large: false,
  },
  {
    src: "/images/2026/02/white-color-mobile-service-truck-edmonton-400x516.webp",
    alt: "White mobile service truck Edmonton",
    caption: "Mobile Service Truck",
    large: false,
  },
  {
    src: "/images/2026/02/trailer-repair-in-srb-equipment-shop-400x516.webp",
    alt: "Trailer repair in SRB Equipment shop",
    caption: "Trailer Repair",
    large: false,
  },
] as const;

export const WHY_FEATURES = [
  {
    num: "01",
    title: "Red Seal-Certified Mechanics",
    description:
      "Experienced technicians delivering accurate diagnostics and dependable repairs for heavy-duty trucks and trailers.",
    icon: "/images/2026/06/red-seal-1-150x150.webp",
    accent: false,
  },
  {
    num: "02",
    title: "Proven Experience",
    description:
      "Serving Edmonton's trucking industry since 2015 with trusted repair solutions and reliable service.",
    icon: "/images/2026/06/10-year-150x150.webp",
    accent: false,
  },
  {
    num: "03",
    title: "Fast Turnaround Times",
    description:
      "Efficient repairs and timely service to help reduce downtime and keep trucks moving.",
    icon: "/images/2026/06/Minimized-Downtime-150x150.webp",
    accent: false,
  },
  {
    num: "04",
    title: "Complete Fleet Support",
    description:
      "Reliable maintenance and repair services designed to keep fleet vehicles operating at their best.",
    icon: "/images/2026/06/Fleet-Continuity-150x150.webp",
    accent: false,
  },
  {
    num: "05",
    title: "24/7 Emergency Response",
    description:
      "Quick roadside assistance and repair support when unexpected breakdowns disrupt your operations.",
    icon: "/images/2026/06/24-7-Emergency-Assistance-150x150.webp",
    accent: true,
  },
] as const;

export const REPAIR_STEPS = [
  {
    title: "Detailed Diagnostics",
    description:
      "We begin with a thorough inspection using advanced diagnostic tools to accurately identify mechanical or system issues.",
  },
  {
    title: "Clear Repair Plan",
    description:
      "Once the problem is identified, we explain the issue, outline the required repairs, and provide a clear service timeline.",
  },
  {
    title: "Professional Repairs",
    description:
      "Our experienced technicians complete repairs using high-quality parts and proven repair procedures to deliver long-lasting results.",
  },
  {
    title: "Final Safety Inspection",
    description:
      "Before your truck or trailer leaves the shop, we perform a final inspection to ensure everything operates safely and reliably.",
  },
] as const;

export const HOME_REVIEWS = [
  {
    initials: "SC",
    color: "#0ea5e9",
    name: "Steph Carvalho",
    text: "We are a young company and have tried several mechanical shops and SRB Equipment is by far the best. Shaun and his team are amazing to work with and so knowledgeable. We have worked with them for 2 years and they are always there for us — from CVIP to running out to diagnose breakdowns and everything in between.",
  },
  {
    initials: "BJ",
    color: "#f59e0b",
    name: "Braeden Jones",
    text: "Got me in last minute to do an emergency tire swap. They were fair and more than helpful. Definitely recommend!",
  },
  {
    initials: "CC",
    color: "#10b981",
    name: "Charles Cameron",
    text: "We at CDR Rentals have used Shaun as our go-to for our fleet for a couple of years. Never misses a beat. Professional, personable and fair. Thanks Shaun!",
  },
  {
    initials: "PI",
    color: "#8b5cf6",
    name: "Piper",
    text: "I have been going to SRB Equipment for the last two years. Shaun has never turned me away for repairs on my truck. I'm always pleased with the repairs done. He does my yearly inspection for me as well.",
  },
  {
    initials: "CR",
    color: "#ef4444",
    name: "Craig Cranna",
    text: "Knowledgeable old school mechanic able to troubleshoot and not only rely on a computer. Reasonable rates and repairs done in a timely manner.",
  },
  {
    initials: "JH",
    color: "#0f172a",
    name: "Josh Hesse",
    text: "We have used SRB for all our truck and trailer repairs. Fast efficient service. Definitely will continue sending all our equipment to SRB.",
  },
] as const;

export const BRAND_LOGOS = [
  {
    src: "/images/2025/11/cat.jpg",
    alt: "CAT",
  },
  {
    src: "/images/2025/11/frightliner.jpg",
    alt: "Freightliner",
  },
  {
    src: "/images/2025/11/hino.jpg",
    alt: "Hino",
  },
  {
    src: "/images/2025/11/volvo.jpg",
    alt: "Volvo",
  },
  {
    src: "/images/2025/11/international.jpg",
    alt: "International",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "Can I get same-day repair service for my heavy-duty truck?",
    a: "Yes. We offer same-day truck repair service, both in-shop and on-site. Our certified technicians use the best diagnostic tools to reduce downtime and get your truck back on the road quickly in Edmonton.",
  },
  {
    q: "Do you offer mobile service for both truck and trailer repairs?",
    a: "Absolutely. Our fully equipped mobile service unit handles both truck and trailer repairs at your yard or roadside throughout the Edmonton area and beyond.",
  },
  {
    q: "What routine truck service can you perform at my facility?",
    a: "We perform oil changes, brake service, DOT/CVIP inspections, fluid top-ups, lighting, tire checks, suspension, and minor mechanical repairs at your facility.",
  },
  {
    q: "Do you provide emergency repairs for cargo trucks?",
    a: `Yes — we provide 24/7 emergency repair service for cargo trucks, semi-trucks, and trailers. Call ${SITE.phoneDisplay} for immediate dispatch.`,
  },
  {
    q: "Do you offer 24/7 mobile truck repair in Edmonton?",
    a: "Yes. Our mobile truck repair service is available 24/7 across Edmonton and surrounding regions for fleet customers and one-time emergencies.",
  },
  {
    q: "Can you perform CVIP inspections in Edmonton?",
    a: "Yes. We are a licensed CVIP inspection facility serving Edmonton and surrounding areas. We inspect trucks, trailers, and buses in line with Alberta provincial safety standards.",
  },
  {
    q: "Are your diesel truck mechanics certified?",
    a: "All of our diesel truck mechanics are Red Seal certified with extensive heavy-duty experience on Class 8 trucks and trailers.",
  },
  {
    q: "Can you perform a full engine overhaul?",
    a: "Yes. We perform full engine overhauls and in-frame rebuilds on most major diesel truck engines — CAT, Cummins, Detroit, Volvo, and more.",
  },
  {
    q: "What areas do you service around Edmonton?",
    a: "We service Edmonton, Sherwood Park, Leduc, Nisku, Spruce Grove, St. Albert, Fort Saskatchewan, Acheson, and surrounding Alberta communities.",
  },
  {
    q: "What are common signs my truck needs immediate repair?",
    a: "Warning lights, loss of power, unusual noises, smoke, brake issues, leaks, overheating, or abnormal vibrations — these all warrant immediate inspection.",
  },
  {
    q: "How long does a typical truck or trailer repair take?",
    a: "Most routine repairs are completed the same day. Larger jobs like engine overhauls or full transmissions vary depending on parts availability. We'll give you a clear ETA after diagnostics.",
  },
] as const;

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=SRB+Equipment+Edmonton+reviews#lrd=0x53a021bacc008249:0xd1e1aa7820e0b8a1,1";
