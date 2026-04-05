import { Smile, Users, Sparkles, ClipboardCheck } from "lucide-react";

const traits = [
  { icon: Smile, text: "Enjoy meaningful, culturally rich experiences" },
  { icon: Users, text: "Prefer small groups over large tours" },
  { icon: ClipboardCheck, text: "Want the details handled without sacrificing quality" },
  { icon: Sparkles, text: "Appreciate thoughtful planning and unique experiences" },
];

const DesignedForSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Is This You?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
            Designed for Travelers Who…
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {traits.map((t) => (
              <div
                key={t.text}
                className="flex items-center gap-4 bg-background rounded-lg p-5 text-left"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <t.icon size={20} />
                </div>
                <p className="text-foreground text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedForSection;
