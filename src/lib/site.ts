export const SITE = {
  name: "SRB Equipment",
  phoneDisplay: "(780) 878-5221",
  phoneHref: "tel:+17808785221",
  email: "info@srbequipment.ca",
  address: "15304 Yellowhead Trail, Edmonton, AB T5V 1A1, Canada",
  logo: "/images/2026/06/logo-1.webp",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact us" },
  { href: "/faq", label: "FAQs" },
] as const;

export const SERVICE_LINKS = [
  {
    href: "/services/mobile-service-truck-edmonton",
    label: "Mobile Service Truck Edmonton",
  },
  { href: "/services/cvip-inspections", label: "CVIP Inspections" },
  { href: "/services/routine-service", label: "Routine Service" },
  { href: "/services/engine-repair", label: "Engine Repair" },
  { href: "/services/air-conditioning", label: "Air Conditioning" },
  {
    href: "/services/emission-system-repair-service",
    label: "Emission System Repair/Service",
  },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/srbequipment", label: "Facebook", short: "FB" },
  { href: "https://x.com/srbequipment", label: "X", short: "X" },
  { href: "https://www.instagram.com/srb_equipment/", label: "Instagram", short: "IG" },
  { href: "https://www.pinterest.com/srb_equipment/", label: "Pinterest", short: "PT" },
  {
    href: "https://www.youtube.com/channel/UC77ZEfElEuK_NJZz4Vl3McA",
    label: "YouTube",
    short: "YT",
  },
] as const;
