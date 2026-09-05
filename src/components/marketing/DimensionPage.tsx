import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export type Theme = {
  title: string;
  blurb: string;
};

export function DimensionPage({
  name,
  hero,
  intro,
  themes,
  journalCategory,
}: {
  name: string;
  hero: string;
  intro: string;
  themes: Theme[];
  journalCategory: string;
}) {
  return (
    <>
      <section className="border-b border-rule pt-16 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <Eyebrow>XCELLENC {name}</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
            {hero}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        </Container>
      </section>

      <section>
        {themes.map((theme, i) => (
          <div
            key={theme.title}
            className={`border-b border-rule py-10 ${i === 0 ? "border-t border-rule" : ""}`}
          >
            <Container className="grid gap-3 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-10">
              <h2 className="font-display text-2xl sm:text-3xl">
                {theme.title}
              </h2>
              <p className="max-w-xl text-[16px] leading-relaxed text-ink-soft">
                {theme.blurb}
              </p>
            </Container>
          </div>
        ))}
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[15px] text-ink-soft">
            Ideas on {name.toLowerCase()} from the XCELLENC Circle.
          </p>
          <div className="flex gap-4">
            <Link
              href={`/journal/${journalCategory}`}
              className="text-[14px] font-medium text-accent-strong hover:opacity-80"
            >
              Read {name} in the Journal &rarr;
            </Link>
            <Link
              href="/join"
              className="text-[14px] font-medium text-ink-soft hover:text-ink"
            >
              Join the Circle &rarr;
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
