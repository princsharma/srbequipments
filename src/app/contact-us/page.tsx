import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SRB Equipment in Edmonton — phone, email, and address for truck and trailer repair and 24/7 roadside assistance.",
};

export default function ContactUsPage() {
  return <ContactContent />;
}
