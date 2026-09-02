import type { Metadata } from "next";
import GalleryPage from "@/components/gallery/GalleryPage";
import "@/styles/gallery.css";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at the engines, frames, and heavy-duty repairs our Edmonton team handles every day — in the shop and on the road.",
};

export default function Page() {
  return <GalleryPage />;
}
