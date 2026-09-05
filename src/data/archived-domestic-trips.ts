/**
 * ARCHIVED — not rendered anywhere on the site.
 *
 * The "Closer to Home / Domestic Getaway Ideas" block was removed from the
 * homepage Journeys section. The copy and imagery are preserved here so the
 * block can be restored later without rebuilding it from scratch.
 *
 * To bring it back: import `domesticTrips` into
 * `src/components/JourneysSection.tsx`, re-add the "Closer to Home" markup,
 * and re-add the domestic options to the "Which journey interests you?"
 * select in `src/components/ContactSection.tsx`.
 *
 * Photos live in src/assets/: washington-dc.jpg, ark-experience.jpg,
 * dollywood.jpg.
 */

import washingtonDcImg from "@/assets/washington-dc.jpg";
import arkExperienceImg from "@/assets/ark-experience.jpg";
import dollywoodImg from "@/assets/dollywood.jpg";

export const domesticSectionCopy = {
  eyebrow: "Closer to Home",
  heading: "Domestic Getaway Ideas",
  subheading:
    "We're exploring shorter domestic trips too — let us know which destinations excite you!",
  badge: "Coming Soon",
  cta: "I'm interested",
};

export const domesticTrips = [
  {
    title: "Washington D.C.",
    image: washingtonDcImg,
    description:
      "Explore the nation's capital — monuments, Smithsonian Museums, Museum of the Bible, and rich American history at every turn.",
  },
  {
    title: "The Ark Experience",
    image: arkExperienceImg,
    description:
      "Visit the life-size Noah's Ark in Kentucky — a one-of-a-kind, awe-inspiring journey of faith and wonder.",
  },
  {
    title: "Dollywood",
    image: dollywoodImg,
    description:
      "Enjoy the charm of the Smoky Mountains with world-class entertainment, crafts, and Southern hospitality.",
  },
];

/** Options removed from the contact form's journey picker. */
export const domesticContactOptions = [
  "Washington D.C.",
  "The Ark Experience",
  "Dollywood",
];
