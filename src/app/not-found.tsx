import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container className="max-w-lg">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-4 font-display text-4xl">
          This page hasn&rsquo;t become anything yet.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Whatever you were looking for isn&rsquo;t here. Head back to the
          homepage and try again.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-sm bg-accent-strong px-6 py-3 text-[15px] font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Back to XCELLENC
        </Link>
      </Container>
    </main>
  );
}
