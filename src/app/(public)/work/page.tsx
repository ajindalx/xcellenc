import type { Metadata } from "next";
import { DimensionPage } from "@/components/marketing/DimensionPage";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Professional growth and meaningful work. Do meaningful work. Do it extraordinarily well.",
};

export default function WorkPage() {
  return (
    <DimensionPage
      name="Work"
      hero="Do meaningful work. Do it extraordinarily well."
      intro="Career growth that isn't just about the next title. It's about doing work worth being known for, and getting better at the parts that actually create value."
      journalCategory="work"
      themes={[
        {
          title: "Lead",
          blurb:
            "Leadership is less about having answers and more about making it safe for good ones to surface.",
        },
        {
          title: "Create",
          blurb:
            "Creation is what turns effort into something that outlasts the effort itself.",
        },
        {
          title: "Focus",
          blurb:
            "Extraordinary work is rarely the product of doing more. It's the product of doing less, better.",
        },
        {
          title: "Transform",
          blurb:
            "The best professionals aren't the ones who resist change — they're the ones who get ahead of it.",
        },
        {
          title: "Learn",
          blurb:
            "Expertise ages. The willingness to keep learning is what keeps it current.",
        },
        {
          title: "Contribute",
          blurb:
            "Meaningful work leaves the people and systems around it better than it found them.",
        },
      ]}
    />
  );
}
