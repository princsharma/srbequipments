import type { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";
import "@/styles/blog.css";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert advice on heavy-duty truck repair, maintenance, and roadside service — from the SRB Equipment team in Edmonton.",
};

export default function Page() {
  return <BlogPage />;
}
