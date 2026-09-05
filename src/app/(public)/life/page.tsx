import type { Metadata } from "next";
import { DimensionPage } from "@/components/marketing/DimensionPage";

export const metadata: Metadata = {
  title: "Life",
  description:
    "Personal growth and living intentionally. Become the person you want to be.",
};

export default function LifePage() {
  return (
    <DimensionPage
      name="Life"
      hero="Become the person you want to be."
      intro="Not a five-year plan you'll abandon by March. A way of paying attention to what actually matters to you, and building a life around it on purpose."
      journalCategory="life"
      themes={[
        {
          title: "Know what matters",
          blurb:
            "Before you optimize anything, get honest about what you're actually optimizing for.",
        },
        {
          title: "Keep learning",
          blurb:
            "The version of you five years from now is built by what you choose to learn between now and then.",
        },
        {
          title: "Stay curious",
          blurb:
            "Curiosity is what keeps competence from quietly turning into autopilot.",
        },
        {
          title: "Grow through challenge",
          blurb:
            "The moments that stretch you are doing more for who you're becoming than the ones that go smoothly.",
        },
        {
          title: "Live intentionally",
          blurb:
            "A life can be busy and still be aimed at nothing in particular. Intention is the aim.",
        },
        {
          title: "Contribute",
          blurb: "What you build eventually matters less than who it was for.",
        },
      ]}
    />
  );
}
