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
      heading="Riverwalk Ranch sections in North Las Vegas"
      lede="Riverwalk Ranch sections North Las Vegas"
      showGuideLink={false}
    />
  );
}
