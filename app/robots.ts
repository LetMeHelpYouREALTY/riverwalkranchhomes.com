import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveSiteUrl } from "@/lib/contact";
import { AI_CRAWLER_AGENTS, CRAWLER_DISALLOW } from "@/lib/aeo-surface";

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("x-domain") || headers().get("host");
  const siteUrl = resolveSiteUrl(host);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...CRAWLER_DISALLOW],
      },
      {
        userAgent: ["Googlebot", "Googlebot-Image", ...AI_CRAWLER_AGENTS],
        allow: "/",
        disallow: [...CRAWLER_DISALLOW],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: new URL(siteUrl).host,
  };
}
