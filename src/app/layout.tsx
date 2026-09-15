import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HazardStripe from "@/components/HazardStripe";
import { SITE } from "@/lib/site";
import "./globals.css";
import "@/styles/globalstyles.css";
import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/home.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const DEFAULT_DESCRIPTION =
  "Red Seal–certified technicians delivering fast truck and trailer repairs, proactive maintenance, and 24/7 roadside service in Edmonton.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SRB Equipment | Truck & Trailer Repair Shop in Edmonton",
    template: "%s | SRB Equipment",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "truck repair Edmonton",
    "trailer repair Edmonton",
    "heavy-duty truck repair",
    "CVIP inspection Edmonton",
    "mobile truck repair",
    "24/7 roadside assistance Edmonton",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE.url,
    siteName: SITE.name,
    title: "SRB Equipment | Truck & Trailer Repair Shop in Edmonton",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: SITE.logo,
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRB Equipment | Truck & Trailer Repair Shop in Edmonton",
    description: DEFAULT_DESCRIPTION,
    images: [SITE.logo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />
        <HazardStripe size="sm" />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
