import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "XCELLENC is built on the idea that excellence is the intentional pursuit of becoming better through things that matter — not perfection, and not hustle.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-rule pt-16 pb-16 sm:pt-20 sm:pb-20">
        <Container>
          <Eyebrow>About XCELLENC</Eyebrow>
          <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.08]">
            Excellence, redefined as a practice.
          </h1>
        </Container>
      </section>

      <section className="border-b border-rule py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Eyebrow>Why XCELLENC exists</Eyebrow>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Most conversations about excellence eventually turn into
                conversations about hustle — more hours, more optimization,
                more proof that you&rsquo;re serious. That version of excellence is
                exhausting, and for most people it doesn&rsquo;t even work.
              </p>
              <p>
                XCELLENC starts from a different premise: excellence is what
                happens when you decide, on purpose, what actually matters to
                you — and then do that well, consistently, for long enough
                that it changes who you are. Not everything. Not always. The
                things that matter, done with intention.
              </p>
              <p>
                That idea plays out across four parts of a life that rarely
                get treated as connected: how you grow personally, how you
                work, what you practice daily, and who you do it alongside.
                XCELLENC treats them as one pursuit, not four separate
                projects.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Eyebrow>How it&rsquo;s organized</Eyebrow>
            <dl className="max-w-2xl space-y-6">
              {[
                { name: "Life", href: "/life", desc: "Personal growth and living intentionally." },
                { name: "Work", href: "/work", desc: "Professional growth and meaningful work." },
                { name: "Practice", href: "/practice", desc: "The daily rhythms — move, renew, center, practice." },
                { name: "Connections", href: "/connections", desc: "The relationships that make the pursuit worth it." },
              ].map((d) => (
                <div key={d.name} className="flex flex-wrap items-baseline gap-x-3">
                  <dt>
                    <Link href={d.href} className="font-display text-xl text-ink hover:text-accent-strong">
                      {d.name}
                    </Link>
                  </dt>
                  <dd className="text-[15px] text-ink-soft">{d.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="py-16 text-center sm:py-20">
        <Container>
          <h2 className="mx-auto max-w-lg font-display text-3xl sm:text-4xl">
            Bring what you&rsquo;re working on.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
            The Circle is built by people who show up with something to
            learn, something to share, or both.
          </p>
          <Link
            href="/join"
            className="mt-8 inline-flex items-center rounded-sm bg-accent-strong px-7 py-3.5 text-[15px] font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Join the Circle
          </Link>
        </Container>
      </section>
    </>
  );
}
