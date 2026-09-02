import type { Metadata } from "next";
import FaqContent from "@/components/faq/FaqContent";
import "@/styles/faq.css";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about SRB Equipment truck repair, CVIP inspections, roadside assistance, and more in Edmonton.",
};

export default function FaqPage() {
  return <FaqContent />;
}
