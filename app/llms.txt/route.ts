import { headers } from "next/headers";
import { resolveSiteUrl } from "@/lib/contact";
import { isRiverwalkHost } from "@/lib/riverwalk-ranch";
import { buildLlmsTxt } from "@/lib/aeo-surface";

export function GET() {
  const host = headers().get("x-domain") || headers().get("host");
  const body = buildLlmsTxt(resolveSiteUrl(host), isRiverwalkHost(host));
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
