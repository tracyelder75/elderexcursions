import heroImage from "@/assets/hero-england.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Scenic English countryside village at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight mb-6">
          Thoughtfully Designed Journeys for Curious Travelers
        </h1>
        <p className="text-secondary text-lg md:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Small-group journeys crafted with care, depth, and ease—balancing iconic
          destinations with meaningful, lesser-known experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#journeys"
            className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-medium text-base hover:opacity-90 transition-opacity"
          >
            Explore Our Journeys
          </a>
          <a
            href="#contact"
            className="border border-secondary/40 text-secondary px-8 py-3.5 rounded-md font-medium text-base hover:bg-secondary/10 transition-colors"
          >
            Request Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
