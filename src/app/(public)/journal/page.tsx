import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "Journal",
  description: "Ideas from the XCELLENC Circle.",
};

// Full authoring, review, and archive land in Phase 5 — this is a holding
// page so the nav link isn't dead in the meantime.
export default function JournalPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container>
        <Eyebrow>XCELLENC Journal</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
          Ideas from the XCELLENC Circle.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          The Journal — original writing from Circle members across Life,
          Work, Practice, and Connections — is being built. Join the Circle
          to be notified when the first pieces publish.
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
