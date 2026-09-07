import type { Metadata } from "next";
import HazardStripe from "@/components/HazardStripe";
import HomeHero from "@/components/home/HomeHero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeServices from "@/components/home/HomeServices";
import HomeCtaBanner from "@/components/home/HomeCtaBanner";
import HomeGallery from "@/components/home/HomeGallery";
import HomeWhy from "@/components/home/HomeWhy";
import HomeProcess from "@/components/home/HomeProcess";
import HomeReviews from "@/components/home/HomeReviews";
import HomeBrands from "@/components/home/HomeBrands";
import HomeFaq from "@/components/home/HomeFaq";
import HomeContact from "@/components/home/HomeContact";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair Shop in Edmonton",
  description:
    "Red Seal–certified technicians delivering fast truck and trailer repairs, proactive maintenance, and 24/7 roadside service in Edmonton.",
};

export default function HomePage() {
  return (
    <div id="home">
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HazardStripe size="lg" />
      <HomeCtaBanner />
      <HazardStripe size="lg" flip />
      <HomeGallery />
      <HomeWhy />
      <HomeProcess />
      <HomeReviews />
      <HazardStripe />
      <HomeBrands />
      <HomeFaq />
      <HazardStripe />
      <HomeContact />
    </div>
  );
}
