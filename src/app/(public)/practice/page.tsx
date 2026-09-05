import type { Metadata } from "next";
import { DimensionPage } from "@/components/marketing/DimensionPage";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Daily practices that support physical, mental, and emotional well-being. Excellence is built through what we repeatedly do.",
};

export default function PracticePage() {
  return (
    <DimensionPage
      name="Practice"
      hero="Excellence is built through what we repeatedly do."
      intro="Not another tracker asking you to measure everything. Four sustainable rhythms — move, renew, center, practice — built to survive an ordinary week, not just a good one."
      journalCategory="practice"
      themes={[
        {
          title: "Move",
          blurb:
            "The body that carries everything else you do deserves more than an afterthought.",
        },
        {
          title: "Renew",
          blurb:
            "Rest isn't the reward for hard work. It's one of the ways the work actually gets done.",
        },
        {
          title: "Center",
          blurb:
            "A few quiet, unhurried minutes a day change how you meet the other twenty-three hours.",
        },
        {
          title: "Practice",
          blurb:
            "Excellence isn't a single decision. It's a small one, repeated, on the days you don't feel like it.",
        },
      ]}
    />
  );
}
