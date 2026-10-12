import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import "@/styles/services.css";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "About SRB Equipment | Truck Repair in Edmonton",
  description:
    "Since 2015, SRB Equipment has provided truck and trailer repair, maintenance, and inspections for commercial operators in Edmonton and surrounding areas.",
};

export default function AboutUsPage() {
  return <AboutContent />;
}
