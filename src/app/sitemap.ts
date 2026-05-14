import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const SITE_URL = "https://estudioscerbo.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/otros-servicios`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/informacion`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Dynamic service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/servicios/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}