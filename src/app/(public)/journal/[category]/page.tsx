import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

const categories = {
  life: "Life",
  work: "Work",
  practice: "Practice",
  connections: "Connections",
} as const;

type Category = keyof typeof categories;

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journal/[category]">): Promise<Metadata> {
  const { category } = await params;
  const label = categories[category as Category];
  return { title: label ? `${label} — Journal` : "Journal" };
}

// Real category archives (with real posts) land in Phase 5.
export default async function JournalCategoryPage({
  params,
}: PageProps<"/journal/[category]">) {
  const { category } = await params;
  const label = categories[category as Category];
  if (!label) notFound();

  return (
    <section className="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <Container>
        <Eyebrow>Journal &middot; {label}</Eyebrow>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
          {label} writing from the Circle.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          This archive is being built alongside the rest of the Journal.
          Join the Circle to be notified when {label.toLowerCase()} pieces
          start publishing.
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
