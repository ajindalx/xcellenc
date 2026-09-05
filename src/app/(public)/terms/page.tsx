import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false },
};

// Placeholder per the v1 spec — replaced with real terms before launch.
export default function TermsPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container className="max-w-2xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-4xl">Terms of Service</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          This is a placeholder. XCELLENC&rsquo;s real terms will be published
          here before any account creation or public launch.
        </p>
      </Container>
    </section>
  );
}
