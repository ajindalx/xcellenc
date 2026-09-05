import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

// Placeholder per the v1 spec — replaced with a real policy before launch,
// once auth, storage, and the Connections privacy model are built.
export default function PrivacyPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container className="max-w-2xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          This is a placeholder. XCELLENC&rsquo;s real privacy policy will be
          published here before any account creation, data collection, or
          public launch — covering what&rsquo;s collected, how it&rsquo;s used, and how
          private information (including the future Connections feature) is
          protected.
        </p>
      </Container>
    </section>
  );
}
