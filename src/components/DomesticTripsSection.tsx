import washingtonDcImg from "@/assets/washington-dc.jpg";
import arkExperienceImg from "@/assets/ark-experience.jpg";
import dollywoodImg from "@/assets/dollywood.jpg";

const domesticTrips = [
  {
    title: "Washington D.C.",
    image: washingtonDcImg,
    description:
      "Explore the nation's capital — monuments, museums, and rich American history at every turn.",
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

const DomesticTripsSection = () => {
  return (
    <section id="domestic" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Closer to Home
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domestic Getaway Ideas
          </h2>
          <p className="text-muted-foreground text-lg">
            We're exploring shorter domestic trips too — let us know which
            destinations excite you!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {domesticTrips.map((trip) => (
            <div
              key={trip.title}
              className="bg-card rounded-lg overflow-hidden group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground">
                  Coming Soon
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {trip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trip.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-primary font-medium text-sm hover:underline"
                >
                  I'm interested →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomesticTripsSection;
