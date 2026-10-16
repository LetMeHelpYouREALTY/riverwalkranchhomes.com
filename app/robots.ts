import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveSiteUrl } from "@/lib/contact";

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("x-domain") || headers().get("host");
  const siteUrl = resolveSiteUrl(host);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/monitoring/"],
      },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: new URL(siteUrl).host,
  };
}
