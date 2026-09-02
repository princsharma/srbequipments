import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SRB Equipment — Edmonton's full-service truck repair company offering in-shop and 24/7 mobile repair services.",
};

export default function AboutUsPage() {
  return <AboutContent />;
}
