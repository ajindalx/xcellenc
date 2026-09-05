import type { Metadata } from "next";
import { DimensionPage } from "@/components/marketing/DimensionPage";

export const metadata: Metadata = {
  title: "Connections",
  description:
    "Personal and professional relationships. Excellence doesn't happen alone.",
};

export default function ConnectionsPage() {
  return (
    <DimensionPage
      name="Connections"
      hero="Excellence doesn't happen alone."
      intro="The relationships that shape who you become — family, friends, mentors, and the people you work alongside — rarely maintain themselves. They take the same intention as everything else worth building."
      journalCategory="connections"
      themes={[
        {
          title: "Family",
          blurb:
            "The relationships you didn't choose often ask the most of you — and give the most back.",
        },
        {
          title: "Friendship",
          blurb:
            "Good friendships don't survive on nostalgia. They survive on attention.",
        },
        {
          title: "Mentorship",
          blurb:
            "Everyone is far enough along to teach someone something, and far enough behind to still need a guide.",
        },
        {
          title: "Professional relationships",
          blurb:
            "The strongest careers are built on trust accumulated one interaction at a time.",
        },
        {
          title: "Community",
          blurb:
            "Belonging isn't something a community gives you. It's something you help build.",
        },
        {
          title: "Contribution",
          blurb:
            "Generosity, offered consistently, is what turns a network into a community.",
        },
      ]}
    />
  );
}
