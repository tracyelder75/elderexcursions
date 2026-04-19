const testimonials = [
  {
    quote: "Thank you, Tracy, for your dedication and commitment to this trip and for making this special travel experience happen. I can only imagine the hours of work you put into choosing destinations, arranging hotels, guides, meal plans. You even helped with our preparation during packing and helped us as we tried to understand the history of each place. Each of us has been blessed by your efforts and expertise as we traveled to these amazing places and you created unique experiences that we can continually treasure for years to come.",
    name: "Donna Clendenning",
    trip: "Wales & England 2023",
  },
  {
    quote: "I had a great trip, saw more in less time than I ever thought possible, and fulfilled a number of longtime dreams of seeing the homeland and many of the castles, cathedrals, and other sites I had read about in school, but had long forgotten. Not to mention the great dining, drinking, and new friends, and your amazing ability to respond to scheduling challenges.",
    name: "John Joerschke",
    trip: "Wales & England 2023",
  },
  {
    quote: "Every detail and activity so carefully planned and curated. Thank you for the tremendous work that you did to make it memorable and special for this group. What a wonderful resource and guide you are.",
    name: "Andrea Pearson",
    trip: "Scotland 2025",
  },
  {
    quote: "Your attention to every detail was outstanding! I'm so glad I could go and experience it! Thank you for all your time and energy!",
    name: "Kathy Little",
    trip: "Scotland 2025",
  },
  {
    quote: "What a great way to travel! All arrangements made expertly by somebody who knows and loves the country we're visiting! I can't imagine how much time it took you to plan and book hotels, meals, excursions, boat rides, buses, play tickets, etc.",
    name: "Rosemary Belger",
    trip: "Scotland 2025",
  },
  {
    quote: "Amazing trip because you show so much care and organization.",
    name: "Beth & Bucky Scarborough",
    trip: "Scotland 2018",
  },
  {
    quote: "Will go down as one of my favorite trips! Really enjoyed the camaraderie. Thanks for your amazing efforts to keep us all pleased. Loved it!",
    name: "Shirley Baker",
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
    <section className="py-24 bg-card">
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid mb-6 bg-background rounded-lg p-7"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
                {t.trip}
              </p>
              <blockquote className="text-muted-foreground text-sm leading-relaxed italic mb-5">
                "{t.quote}"
              </blockquote>
              <p className="text-foreground text-sm font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
