import { Users, Compass, Clock, Heart, MapPin } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Small Groups",
    desc: "Intimate groups of 18–25 like-minded travelers who share a love of discovery.",
  },
  {
    icon: Compass,
    title: "Curated Itineraries",
    desc: "Carefully crafted routes blending cultural depth, historical richness, and hidden gems.",
  },
  {
    icon: Clock,
    title: "Comfortable Pacing",
    desc: "Never rushed, never overwhelming—each day designed for enjoyment, not exhaustion.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    desc: "Every journey is personally designed and hosted by Tracy Elder.",
  },
  {
    icon: MapPin,
    title: "Iconic & Hidden",
    desc: "A thoughtful balance of must-see landmarks and lesser-known treasures.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-accent text-base tracking-[0.2em] uppercase font-medium mb-3 text-center">
            About Elder Excursions
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Travel Thoughtfully. Travel Well.
          </h2>

          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              Elder Excursions was founded on a simple belief: that curious, experienced travelers
              deserve journeys as thoughtfully planned as they are memorable.
            </p>
            <p>
              Tracy Elder brings over a decade of expertise in international travel planning, having
              spent ten years at the University of Georgia managing study abroad programs that took
              students across the globe. In 2016, she was approached by UGA’s Osher Lifelong
              Learning Institute (OLLI) to design a travel experience for their members — and Elder
              Excursions, LLC was born.
            </p>
            <p>
              Since then, Tracy has led small groups on immersive journeys through Scotland, Wales,
              and England, building a reputation for meticulous planning, seamless logistics, and
              the kind of personal attention that turns a trip into a true experience. Whether
              organizing a journey for twenty friends or a small group of first-time international
              travelers, she brings the same professionalism and passion to every itinerary.
            </p>
            <p>
              Following her retirement from UGA in 2021, Tracy has returned to her passion for
              travel with renewed purpose. Now rooted in an active 55+ community, she understands
              firsthand what today’s travelers are looking for — adventure without the headaches,
              discovery without the stress. Elder Excursions is back and better than ever, with an
              upcoming Wales and England journey already in the works.
            </p>
          </div>

          {/* Tagline pull quote */}
          <blockquote className="mt-10 border-l-4 border-primary pl-6 text-foreground font-heading text-xl md:text-2xl italic font-medium">
            Because the best travel is still ahead of you.
          </blockquote>
        </div>

        {/* Feature cards */}
        <div id="what-we-offer" className="scroll-mt-24 text-center mb-10">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-2">
            What We Offer
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            A Different Way to Travel
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-lg p-8 text-center"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5" aria-hidden="true">
                <f.icon size={26} />
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                {f.title}
              </h4>
              <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
