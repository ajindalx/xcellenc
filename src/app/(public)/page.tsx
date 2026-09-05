import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/marketing/Eyebrow";

const dimensions = [
  {
    name: "Life",
    verb: "Become.",
    href: "/life",
    line: "Become the person you want to be.",
  },
  {
    name: "Work",
    verb: "Create.",
    href: "/work",
    line: "Do meaningful work. Do it extraordinarily well.",
  },
  {
    name: "Practice",
    verb: "Practice.",
    href: "/practice",
    line: "Excellence is built through what we repeatedly do.",
  },
  {
    name: "Connections",
    verb: "Connect.",
    href: "/connections",
    line: "Excellence doesn't happen alone.",
  },
];

// Placeholder entries — replaced by real Journal content in Phase 5.
const journalPreview = [
  {
    category: "Practice",
    title: "The week you don't feel like it",
    excerpt:
      "Consistency isn't a feeling you wait for. It's what you decide to keep doing without one.",
  },
  {
    category: "Work",
    title: "Good enough, on purpose",
    excerpt:
      "Extraordinary work usually comes from knowing exactly which parts deserve your full attention — and which don't.",
  },
  {
    category: "Connections",
    title: "The friendships that need scheduling",
    excerpt:
      "The relationships that matter most rarely survive on good intentions alone. They survive on a standing invitation.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-rule pt-20 pb-24 sm:pt-28 sm:pb-32">
        <Container>
          <Eyebrow>XCELLENC</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.05]">
            The pursuit of <em className="italic text-accent-strong">becoming</em>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Do what matters. Do it well. Become more. XCELLENC is a place for
            people who&rsquo;ve decided that excellence isn&rsquo;t a trophy — it&rsquo;s a
            practice.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#dimensions"
              className="inline-flex items-center rounded-sm bg-accent-strong px-6 py-3 text-[15px] font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              Explore XCELLENC
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center rounded-sm border border-rule px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink-soft"
            >
              Join the Circle
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Eyebrow>What is XCELLENC?</Eyebrow>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Excellence gets mistaken for perfection, status, or the
                relentless optimization of everything about yourself. It
                isn&rsquo;t any of those. Chased that way, it burns people out
                and rarely satisfies the person chasing it.
              </p>
              <p>
                XCELLENC treats excellence as something quieter: the
                intentional pursuit of becoming better through the things
                that actually matter to you — a piece of work, a
                relationship, a habit, a craft. Not everything, at once,
                forever. The things that matter, done well, on purpose.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="dimensions" className="scroll-mt-20 border-b border-rule">
        {dimensions.map((d, i) => (
          <Link
            key={d.href}
            href={d.href}
            className={`group block border-b border-rule py-10 transition-colors last:border-b-0 hover:bg-paper-raised ${i === 0 ? "border-t border-rule" : ""}`}
          >
            <Container className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-baseline gap-6">
                <span className="font-display text-3xl sm:text-4xl">
                  {d.name}
                </span>
                <span className="font-display text-2xl italic text-accent-strong sm:text-3xl">
                  {d.verb}
                </span>
              </div>
              <span className="flex items-center gap-2 text-[15px] text-ink-soft transition-colors group-hover:text-ink">
                {d.line}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </Container>
          </Link>
        ))}
      </section>

      <section className="border-b border-rule py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Eyebrow>The XCELLENC idea</Eyebrow>
            <div className="max-w-2xl">
              <p className="text-lg leading-relaxed text-ink-soft">
                Start with what actually matters to you, not what everyone
                else is optimizing for. Stay curious enough to keep learning
                once you&rsquo;re already good. Let the hard parts of growth
                do their work instead of avoiding them. Build a practice you
                can repeat on an ordinary Tuesday, not just a good one. And
                rest deliberately — recovery isn&rsquo;t the opposite of
                excellence, it&rsquo;s part of how it&rsquo;s built.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                None of it happens in isolation. The people around
                you&mdash;the ones you learn from, lean on, and show up
                for&mdash;are part of the pursuit, not a distraction from it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-rule py-20 sm:py-24">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <Eyebrow>XCELLENC Journal</Eyebrow>
            <Link
              href="/journal"
              className="hidden text-[14px] text-ink-soft hover:text-ink sm:inline"
            >
              Read the Journal &rarr;
            </Link>
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Ideas from the XCELLENC Circle.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {journalPreview.map((post) => (
              <article key={post.title}>
                <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-ink-faint">
                  {post.category}
                </p>
                <h3 className="mt-3 font-display text-xl leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/journal"
            className="mt-10 inline-block text-[14px] text-ink-soft hover:text-ink sm:hidden"
          >
            Read the Journal &rarr;
          </Link>
        </Container>
      </section>

      <section className="border-b border-rule py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <Eyebrow>XCELLENC Circle</Eyebrow>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl">
                Grow individually. Learn collectively.
                <br />
                Contribute generously.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                The Circle is a community built around contribution, not
                followers — people sharing what they&rsquo;re working on,
                what they&rsquo;re learning, and what they can offer each
                other along the way.
              </p>
              <Link
                href="/circle"
                className="mt-6 inline-block text-[15px] font-medium text-accent-strong hover:opacity-80"
              >
                Meet the Circle &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="text-center">
          <h2 className="mx-auto max-w-xl font-display text-4xl sm:text-5xl">
            Start where you are.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            You don&rsquo;t need a plan for all four dimensions today. Pick
            the one that matters most right now.
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
