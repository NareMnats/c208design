import type { MetadataRoute } from "next";
import { clients } from "@/data/clients";

const siteUrl = "https://c208.design";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = clients.map((client) => ({
    url: `${siteUrl}/work/${client.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
