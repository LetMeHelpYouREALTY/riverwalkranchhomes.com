"use client";

import Image from "next/image";
import { calendly, ctaPhone, nap } from "@/lib/contact";
import { photos } from "@/lib/media";
import "@/components/calendly/types";

/**
 * Agent portrait and the showing calendar for one page section.
 * The Calendly script loads once in the root layout. This opens that
 * showing calendar in a popup so a full inline frame is not repeated
 * inside every section.
 */
export default function SectionPresence() {
  function bookShowing(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendly.showingUrl });
      return;
    }
    window.location.assign(calendly.showingUrl);
  }

  return (
    <div className="not-prose mt-8 flex flex-wrap items-center gap-3 border-t border-current/15 pt-5">
      <Image
        src={photos.portrait.src}
        alt={photos.portrait.alt}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full object-cover"
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-tight">{nap.shortName}</p>
        <p className="text-xs opacity-80">License {nap.license}</p>
      </div>
      <button
        type="button"
        onClick={bookShowing}
        className="inline-flex min-h-11 items-center rounded-full border border-current px-4 text-sm font-semibold hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
      >
        Book a showing
      </button>
      <a
        href={ctaPhone.href}
        className="text-sm font-semibold underline underline-offset-4"
      >
        Call {ctaPhone.display}
      </a>
    </div>
  );
}
