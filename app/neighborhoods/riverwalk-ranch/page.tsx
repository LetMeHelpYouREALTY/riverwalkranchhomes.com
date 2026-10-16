import type { Metadata } from "next";
import { headers } from "next/headers";
import RiverwalkHome from "@/components/riverwalk/RiverwalkHome";
import { pageMetadata } from "@/lib/seo";
import { RIVERWALK_DESCRIPTION, riverwalkKeywords } from "@/lib/riverwalk-ranch";

export async function generateMetadata(): Promise<Metadata> {
  const hostname = headers().get("x-domain");
  return pageMetadata({
    path: "/neighborhoods/riverwalk-ranch",
    hostname,
    title: "Riverwalk Ranch Sections | 89031 North Las Vegas",
    description: RIVERWALK_DESCRIPTION,
    keywords: riverwalkKeywords,
  });
}

export default function RiverwalkRanchPage() {
  return (
    <RiverwalkHome
      heading="Five sections in Riverwalk Ranch"
      lede="Estates, Manor & Estates, Crossing, High Noon, and Cove. North Las Vegas, ZIP 89031."
      showGuideLink={false}
    />
  );
}
