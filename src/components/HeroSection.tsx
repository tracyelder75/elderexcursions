import heroImage from "@/assets/hero-england.jpg";

const HeroSection = () => {
  // pt-24 reserves the fixed navbar's height. Without it the vertically
  // centered content creeps under the nav on short viewports — a 1366x620
  // laptop window put the heading 36px behind it.
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      <img
        src={heroImage}
        alt="Scenic English countryside village at golden hour on an Elder Excursions small-group journey"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
        {/* The brand name lives inside the H1, not just in the nav wordmark, so
            a search for "Elder Excursions" matches the homepage's main heading. */}
        <h1 className="font-heading font-bold text-secondary mb-6">
          <span className="block text-lg md:text-xl tracking-[0.25em] uppercase font-semibold mb-4">
            Elder Excursions
          </span>{" "}
          <span className="block text-4xl md:text-6xl lg:text-7xl leading-tight">
            Thoughtfully Designed Journeys for Curious Travelers
          </span>
        </h1>
        <p className="text-secondary text-lg md:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Small-group journeys crafted with care, depth, and ease—balancing iconic
          destinations with meaningful, lesser-known experiences.
        </p>
        <div className="flex justify-center">
          <a
            href="#journeys"
            className="bg-accent text-accent-foreground px-12 py-5 rounded-md font-semibold text-lg md:text-xl hover:opacity-90 transition-opacity"
          >
            Explore Our Journeys
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
