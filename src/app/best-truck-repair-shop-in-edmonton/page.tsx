import type { Metadata } from "next";
import RepairShopsPage from "@/components/repair-shops/RepairShopsPage";
import "@/styles/repair-shops.css";

export const metadata: Metadata = {
  title: "Best Truck Repair Shop in Edmonton",
  description:
    "Compare top truck repair shops in Edmonton. SRB Equipment leads with CVIP inspections, engine repair, emission systems, and full heavy-duty service.",
};

export default function Page() {
  return <RepairShopsPage />;
}
