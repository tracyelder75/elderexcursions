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
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-base tracking-[0.2em] uppercase font-medium mb-3">
            A Different Way to Travel
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Travel with Purpose & Joy
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Elder Excursions offers journeys designed for travelers who want more
            than a checklist—who seek connection, comfort, and unforgettable moments.
          </p>
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
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
