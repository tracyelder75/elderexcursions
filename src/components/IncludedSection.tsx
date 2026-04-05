import { Bus, BedDouble, Utensils, Ticket, Sparkles, ArrowRightLeft } from "lucide-react";

const items = [
  { icon: Bus, label: "All ground transportation throughout the trip" },
  { icon: BedDouble, label: "Accommodations for the full journey" },
  { icon: Utensils, label: "Most meals—breakfast daily plus select lunches and dinners" },
  { icon: Ticket, label: "All entrance fees and guided excursions" },
  { icon: Sparkles, label: "Unique experiences beyond typical tourist itineraries" },
  { icon: ArrowRightLeft, label: "Seamless logistics from arrival to departure" },
];

const IncludedSection = () => {
  return (
    <section id="included" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Stress-Free Travel
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's Included
          </h2>
          <p className="text-muted-foreground text-lg">
            We handle every detail so you can focus on the experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-start gap-4 p-5 rounded-lg bg-card" style={{ boxShadow: "var(--shadow-soft)" }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <item.icon size={20} />
              </div>
              <p className="text-foreground text-sm leading-relaxed pt-1.5">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-8 italic">
          Airfare not included. Suggested flights will be provided; travelers may choose their preferred flights.
        </p>
      </div>
    </section>
  );
};

export default IncludedSection;
