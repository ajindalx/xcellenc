import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "Circle",
  description:
    "XCELLENC Circle — a community of people learning, growing, practicing, and contributing together.",
};

// Member profiles and directory land in Phase 4 — this is a holding page
// so the nav link and CTA destination aren't dead in the meantime.
export default function CirclePage() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container>
        <Eyebrow>XCELLENC Circle</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
          Grow individually. Learn collectively.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          The Circle is a community of people interested in learning,
          growing, practicing, creating, and helping each other do it well —
          not a feed to accumulate followers on. Profiles and the full
          directory are being built now.
        </p>
        <Link
          href="/join"
          className="mt-8 inline-flex items-center rounded-sm bg-accent-strong px-6 py-3 text-[15px] font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Join the Circle
        </Link>
      </Container>
    </section>
  );
}
