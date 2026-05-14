import { MetadataRoute } from "next";

const SITE_URL = "https://estudioscerbo.com.ar";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 1,
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}