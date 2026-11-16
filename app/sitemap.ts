import type { MetadataRoute } from "next";
import { getSlugs } from "@/lib/projects";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/projets`, changeFrequency: "monthly", priority: 0.8 },
    ...getSlugs().map((slug) => ({
      url: `${siteUrl}/projets/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
