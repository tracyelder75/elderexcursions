import { Link } from "react-router-dom";
import englandWalesImg from "@/assets/stonehenge.jpg";
import scotlandImg from "@/assets/IMG_0824.JPG";
import irelandImg from "@/assets/ireland.jpg";
import washingtonDcImg from "@/assets/washington-dc.jpg";
import arkExperienceImg from "@/assets/ark-experience.jpg";
import dollywoodImg from "@/assets/dollywood.jpg";

const trips = [
  {
    year: "2027",
    dates: "July 21 – Aug 4, 2027",
    title: "England & Wales",
    status: "Now Forming",
    image: englandWalesImg,
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
    status: "Preview Coming Soon",
    image: scotlandImg,
    itineraryPath: "/trips/scotland",
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
    itineraryPath: null,
    highlights: [
      "Dublin's pubs, museums, and city buzz",
      "Killarney's castles, national park, and coastal drives",
      "Cliffs of Moher, Galway, and the Aran Islands",
      "Giant's Causeway, Belfast, and the Titanic Museum",
    ],
  },
];

const domesticTrips = [
  {
    title: "Washington D.C.",
    image: washingtonDcImg,
    description:
      "Explore the nation's capital — monuments, Smithsonian Museums, Museum of the Bible, and rich American history at every turn.",
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

const statusColor: Record<string, string> = {
  "Now Forming": "bg-accent text-white",
  "Preview Coming Soon": "bg-primary text-primary-foreground",
  "Future Journey": "bg-foreground/80 text-background",
};

const JourneysSection = () => {
  return (
    <section id="journeys" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent text-base tracking-[0.2em] uppercase font-medium mb-3">
            Annual Signature Journeys
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where Will We Go Next?
          </h2>
          <p className="text-muted-foreground text-lg">
            Each year brings a new carefully planned adventure, both domestic and international.
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
                      alt={`${trip.title} destination`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </Link>
                ) : (
                  <img
                    src={trip.image}
                    alt={`${trip.title} destination`}
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

        {/* Domestic Trips */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-base tracking-[0.2em] uppercase font-medium mb-3">
              Closer to Home
            </p>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Domestic Getaway Ideas
            </h3>
            <p className="text-muted-foreground">
              We're exploring shorter domestic trips too — let us know which destinations excite you!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {domesticTrips.map((trip) => (
              <div
                key={trip.title}
                className="bg-background rounded-lg overflow-hidden group"
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
                  <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold shadow-md bg-foreground/80 text-background">
                    Coming Soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {trip.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block mt-4 text-primary font-medium text-base hover:underline"
                    aria-label={`I'm interested in ${trip.title}`}
                  >
                    I'm interested
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneysSection;
