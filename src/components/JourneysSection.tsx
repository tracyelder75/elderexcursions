import { Link } from "react-router-dom";
import englandWalesImg from "@/assets/stonehenge.jpg";
import scotlandImg from "@/assets/IMG_0824.JPG";
import irelandImg from "@/assets/ireland.jpg";

const trips = [
  {
    year: "2027",
    dates: "July 21 – Aug 4, 2027",
    title: "England & Wales",
    status: "Now Forming",
    image: englandWalesImg,
    imageAlt: "Stonehenge at dusk on the Elder Excursions England & Wales 2027 journey",
    itineraryPath: "/trips/england-wales",
    highlights: [
      "Iconic castles, palaces & historic sites",
      "Charming villages & stunning countryside",
      "Cultural excursions with local depth",
      "Coastal Cornwall & the Welsh landscape",
    ],
  },
  {
    year: "2028",
    dates: "Summer 2028",
    title: "Scotland",
    status: "Now Forming",
    image: scotlandImg,
    imageAlt: "Urquhart Castle ruins above Loch Ness, visited on the Elder Excursions Scotland 2028 journey",
    itineraryPath: "/trips/scotland",
    highlights: [
      "Edinburgh's Royal Mile & castle",
      "Scottish Highlands & lochs",
      "Orkney Islands",
      "Whisky distillery experiences",
      "Historic castles & coastal villages",
    ],
  },
  {
    year: "2029",
    title: "Ireland",
    status: "Future Journey",
    image: irelandImg,
    imageAlt: "Green fields and dry stone walls above the Irish coast, the Elder Excursions Ireland 2029 journey",
    itineraryPath: null,
    highlights: [
      "Dublin's pubs, museums, and city buzz",
      "Killarney's castles, national park, and coastal drives",
      "Cliffs of Moher, Galway, and the Aran Islands",
      "Giant's Causeway, Belfast, and the Titanic Museum",
    ],
  },
];

const statusColor: Record<string, string> = {
  "Now Forming": "bg-accent text-white",
  "Preview Coming Soon": "bg-primary text-primary-foreground",
  "Future Journey": "bg-foreground/80 text-background",
};

const JourneysSection = () => {
  return (
    <section id="journeys" className="scroll-mt-24 py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-base tracking-[0.2em] uppercase font-medium mb-3">
            Annual Signature Journeys
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Will We Go Next?
          </h2>
          <p className="text-muted-foreground text-lg">
            Each year brings a new carefully planned adventure.
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
                {trip.itineraryPath ? (
                  <Link to={trip.itineraryPath} className="block w-full h-full" aria-label={`View ${trip.title} itinerary`}>
                    <img
                      src={trip.image}
                      alt={trip.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </Link>
                ) : (
                  <img
                    src={trip.image}
                    alt={trip.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                )}
                <span
                  className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold shadow-md ${statusColor[trip.status]}`}
                >
                  {trip.status}
                </span>
              </div>
              <div className="p-6">
                <p className="text-accent font-semibold text-base mb-1">
                  {trip.year}{trip.dates ? ` · ${trip.dates}` : ""}
                </p>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  {trip.itineraryPath ? (
                    <Link to={trip.itineraryPath} className="hover:text-primary transition-colors">
                      {trip.title}
                    </Link>
                  ) : (
                    trip.title
                  )}
                </h3>
                <ul className="space-y-2">
                  {trip.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-base text-muted-foreground">
                      <span className="text-accent mt-1" aria-hidden="true">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
                {trip.itineraryPath ? (
                  <Link
                    to={trip.itineraryPath}
                    className="inline-block mt-6 text-primary font-medium text-base hover:underline"
                    aria-label={`Learn more about ${trip.title}`}
                  >
                    Learn more
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="inline-block mt-6 text-primary font-medium text-base hover:underline"
                    aria-label={`Learn more about ${trip.title}`}
                  >
                    Learn more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneysSection;
