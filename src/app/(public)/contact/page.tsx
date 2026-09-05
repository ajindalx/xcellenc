import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with XCELLENC.",
};

export default function ContactPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container className="max-w-2xl">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
          Say hello.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Questions, ideas, or something you think XCELLENC should know
          about — reach out directly.
        </p>
        <a
          href="mailto:hello@xcellenc.com"
          className="mt-6 inline-block font-display text-2xl text-accent-strong hover:opacity-80"
        >
          hello@xcellenc.com
        </a>
      </Container>
    </section>
  );
}
