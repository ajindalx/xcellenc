import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "Join the Circle",
  description: "Account creation for the XCELLENC Circle opens soon.",
};

// Real sign-up (Supabase Auth) lands in Phase 3 — deliberately no dummy
// form here in the meantime; a form that goes nowhere is worse than none.
export default function JoinPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container className="max-w-2xl">
        <Eyebrow>Join the Circle</Eyebrow>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
          Membership opens soon.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Account creation is being built right now, alongside the rest of
          the Circle. When it&rsquo;s ready, this is where you&rsquo;ll set up a
          profile, start writing in the Journal, and connect with other
          members.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          In the meantime, have a look at{" "}
          <Link href="/about" className="text-accent-strong hover:opacity-80">
            what XCELLENC is about
          </Link>{" "}
          or explore{" "}
          <Link href="/life" className="text-accent-strong hover:opacity-80">
            the four dimensions
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
