import englandWalesImg from "@/assets/england-wales.jpg";
import scotlandImg from "@/assets/scotland.jpg";
import irelandImg from "@/assets/ireland.jpg";

const trips = [
  {
    year: "2027",
    title: "Southern England & Wales",
    status: "Now Forming",
    image: englandWalesImg,
    highlights: [
      "Bath & the Roman Baths",
      "Windsor Castle & Stonehenge",
      "Highclere Castle (Downton Abbey)",
      "Blenheim Palace",
      "Cornwall—Penzance, St. Michael's Mount, Eden Project",
      "Stratford-upon-Avon & the Royal Shakespeare Theatre",
      "Cardiff, Swansea & Pembroke in Wales",
    ],
  },
  {
    year: "2028",
    title: "Scotland",
    status: "Preview Coming Soon",
    image: scotlandImg,
    highlights: [
      "Edinburgh's Royal Mile & castle",
      "Scottish Highlands & lochs",
      "Isle of Skye",
      "Whisky distillery experiences",
      "Historic castles & coastal villages",
    ],
  },
  {
    year: "2029",
    title: "Ireland",
    status: "Future Journey",
    image: irelandImg,
    highlights: [
      "Dublin's literary heritage",
      "Ring of Kerry",
      "Cliffs of Moher",
      "Ancient monastic sites",
      "Traditional music & village charm",
    ],
  },
];

const statusColor: Record<string, string> = {
  "Now Forming": "bg-accent text-accent-foreground",
  "Preview Coming Soon": "bg-primary/15 text-primary",
  "Future Journey": "bg-muted text-muted-foreground",
};

const JourneysSection = () => {
  return (
    <section id="journeys" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
            Annual Signature Journeys
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Will We Go Next?
          </h2>
          <p className="text-muted-foreground text-lg">
            Each year brings a new carefully planned adventure across the British Isles and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trips.map((trip) => (
            <div
              key={trip.year}
              className="bg-background rounded-lg overflow-hidden group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={trip.image}
                  alt={`${trip.title} landscape`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColor[trip.status]}`}
                >
                  {trip.status}
                </span>
              </div>
              <div className="p-6">
                <p className="text-accent font-semibold text-sm mb-1">{trip.year}</p>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {trip.title}
                </h3>
                <ul className="space-y-2">
                  {trip.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-block mt-6 text-primary font-medium text-sm hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneysSection;
