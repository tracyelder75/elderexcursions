import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Every detail and activity so carefully planned and curated. Thank you for the tremendous work that you did to make it memorable and special. What a wonderful resource and guide you are.",
    name: "Andrea",
    trip: "Scotland 2025",
  },
  {
    quote: "Your attention to every detail was outstanding! I'm so glad I could go and experience it! Thank you for all your time and energy!",
    name: "Kathy",
    trip: "Scotland 2025",
  },
  {
    quote: "What a great way to travel! All arrangements made expertly by somebody who knows and loves the country. I can't imagine how much time it took to plan and book hotels, meals, excursions, and more.",
    name: "Rosemary",
    trip: "Scotland 2025",
  },
  {
    quote: "Amazing trip because you show so much care and organization.",
    name: "Beth & Bucky",
    trip: "Scotland 2018",
  },
  {
    quote: "Will go down as one of my favorite trips! Really enjoyed the camaraderie. Thanks for your amazing efforts to keep us all pleased. Loved it!",
    name: "Shirley",
    trip: "Scotland 2018",
  },
  {
    quote: "This has been one of the very best trips we've ever taken, Tracy. Thanks for everything!",
    name: "Nancy and Kurt",
    trip: "Scotland 2018",
  },
  {
    quote: "You get the gold star for the best travel agent in the world!",
    name: "Margean",
    trip: "Scotland 2018",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
            From Our Travelers
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What People Are Saying
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real words from real travelers — shared after three journeys through
            Scotland, Wales, and England.
          </p>
        </div>

        {/*
          Uniform cards: every card is the same width and stretches to the
          height of its row, with the attribution pinned to the bottom. A
          wrapping flex row (rather than a grid) keeps a trailing partial row
          centred. On phones this collapses to a single column that scrolls
          just as before.
        */}
        <ul className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto list-none p-0">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <figure
                className="h-full flex flex-col bg-card rounded-lg border border-border p-7"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <Quote
                  size={24}
                  className="text-accent/50 shrink-0 mb-4"
                  aria-hidden="true"
                />
                <blockquote className="text-muted-foreground text-base leading-relaxed italic flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <p className="text-foreground text-base font-semibold">{t.name}</p>
                  <p className="text-accent text-xs font-medium tracking-widest uppercase mt-1">
                    {t.trip}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TestimonialsSection;
