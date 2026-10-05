import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/wp-admin/admin-ajax.php"],
      disallow: [
        "/wp-admin/",
        "/wp-includes/",
        "/cgi-bin/",
        "/*?s=",
        "/*?p=",
        "/search/",
        "/*/feed/",
        "/*/trackback/",
        "/*/comments/feed/",
        "/?attachment_id=",
      ],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
