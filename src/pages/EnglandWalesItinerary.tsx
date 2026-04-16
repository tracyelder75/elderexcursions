import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/stonehenge.jpg";
import windsorImg from "@/assets/windsor-castle.jpg";
import bathAbbeyImg from "@/assets/bath-abbey.jpg";
import romanBathsImg from "@/assets/roman-baths-bath.jpg";
import thermaeImg from "@/assets/thermae-spa.jpg";
import highclereImg from "@/assets/highclere-castle.jpg";
import glastonburyImg from "@/assets/glastonbury-abbey.jpg";
import edenImg from "@/assets/eden-project.jpg";
import minackImg from "@/assets/minack-theatre.jpg";
import jubileePoolImg from "@/assets/jubilee-pool.jpg";
import stIvesImg from "@/assets/st-ives-coast.jpg";
import cornishMinesImg from "@/assets/cornish-tin-mines.jpg";
import tintagelImg from "@/assets/tintagel-coast.jpg";
import tintagelBridgeImg from "@/assets/tintagel-bridge.jpg";
import pembrokeCastleImg from "@/assets/pembroke-castle.jpg";
import cardiffCastleImg from "@/assets/cardiff-castle.jpg";
import caerleonBathsImg from "@/assets/caerleon-baths.jpg";
import collageImg from "@/assets/brochure-collage.jpg";
import glassBlowingImg from "@/assets/glass-blowing.jpg";

const days = [
  {
    day: 1,
    title: "Arrival — Windsor",
    description:
      "Fly into London and transfer to Windsor. Settle in and enjoy a welcome dinner with your group. Stroll the charming Windsor town center.",
    image: windsorImg,
    alt: "Windsor Castle",
  },
  {
    day: 2,
    title: "Windsor Castle & Highclere Castle",
    description:
      "Explore the majestic Windsor Castle—the oldest and largest occupied castle in the world. Afternoon visit to Highclere Castle, the real-life setting of Downton Abbey.",
    image: highclereImg,
    alt: "Highclere Castle, known as the Downton Abbey estate",
  },
  {
    day: 3,
    title: "Stonehenge & Bath",
    description:
      "Morning visit to the iconic Stonehenge. Continue to the Georgian city of Bath for a guided walking tour of the Royal Crescent, Pulteney Bridge, and the magnificent Bath Abbey.",
    image: bathAbbeyImg,
    alt: "Bath Abbey interior",
  },
  {
    day: 4,
    title: "Roman Baths & Thermae Bath Spa",
    description:
      "Discover the remarkably preserved Roman Baths, one of Britain's finest historic sites. Optional free afternoon to soak in the modern Thermae Bath Spa, built over the same natural hot springs.",
    image: romanBathsImg,
    alt: "Roman Baths in Bath, England",
  },
  {
    day: 5,
    title: "Glastonbury & Somerset",
    description:
      "Visit the legendary Glastonbury Abbey, steeped in Arthurian myth and early Christian history. Explore the town and take in sweeping views from Glastonbury Tor.",
    image: glastonburyImg,
    alt: "Glastonbury Abbey ruins",
  },
  {
    day: 6,
    title: "Into Cornwall — Eden Project",
    description:
      "Journey southwest into Cornwall. Spend the afternoon at the award-winning Eden Project—home to the world's largest indoor rainforest, set inside stunning geodesic biomes.",
    image: edenImg,
    alt: "Eden Project biomes in Cornwall",
  },
  {
    day: 7,
    title: "St Ives & the Cornish Coast",
    description:
      "Explore the picturesque fishing village of St Ives with its cobbled streets, art galleries, and golden beaches. Walk the stunning coastal path for breathtaking Atlantic views.",
    image: stIvesImg,
    alt: "St Ives coastal view, Cornwall",
  },
  {
    day: 8,
    title: "Minack Theatre & Jubilee Pool",
    description:
      "Visit the extraordinary Minack Theatre—an open-air theatre carved into the clifftops above the sea. Stroll along the waterfront and see the iconic Art Deco Jubilee Pool in Penzance.",
    image: minackImg,
    alt: "Minack Theatre on the Cornish clifftops",
  },
  {
    day: 9,
    title: "Cornish Heritage — Tin Mines & Tintagel",
    description:
      "Explore the UNESCO-listed Cornish mining landscape and its fascinating industrial heritage. Continue to the dramatic clifftop ruins of Tintagel Castle, legendary birthplace of King Arthur.",
    image: tintagelImg,
    alt: "Tintagel coastline in Cornwall",
  },
  {
    day: 10,
    title: "Tintagel Castle & North Cornwall",
    description:
      "Cross the stunning new Tintagel footbridge for up-close views of the castle ruins perched above the crashing sea. Afternoon at leisure to explore the village and coast.",
    image: tintagelBridgeImg,
    alt: "Tintagel Castle footbridge",
  },
  {
    day: 11,
    title: "Into Wales — Pembroke Castle",
    description:
      "Cross the border into Wales. Visit the magnificent Pembroke Castle—birthplace of Henry VII and one of the most impressive Norman fortresses in Britain.",
    image: pembrokeCastleImg,
    alt: "Pembroke Castle, Wales",
  },
  {
    day: 12,
    title: "Roman Caerleon & Cardiff",
    description:
      "Discover Caerleon, one of only three permanent legionary fortresses in Roman Britain, with its remarkably preserved amphitheatre and baths. Evening arrival in Cardiff.",
    image: caerleonBathsImg,
    alt: "Roman baths at Caerleon, Wales",
  },
  {
    day: 13,
    title: "Cardiff Castle & Welsh Culture",
    description:
      "Explore the extraordinary Cardiff Castle with its lavish Victorian Gothic interiors. Enjoy an afternoon of Welsh culture—crafts, music, and local flavors in the Welsh capital.",
    image: cardiffCastleImg,
    alt: "Cardiff Castle, Wales",
  },
  {
    day: 14,
    title: "Departure",
    description:
      "Transfer to the airport for your return flights home, carrying memories of an unforgettable journey through England and Wales.",
    image: collageImg,
    alt: "England and Wales trip highlights collage",
  },
];

const highlights = [
  "Iconic castles, palaces & historic sites",
  "Charming villages & stunning countryside",
  "Cultural excursions with local depth",
  "Coastal Cornwall & the Welsh landscape",
  "Roman history at Bath & Caerleon",
  "Arthurian legends at Tintagel & Glastonbury",
  "Exclusive Downton Abbey location visit",
  "Small group with expert local guidance",
];

const included = [
  "All ground transportation throughout the trip",
  "13 nights accommodation in quality hotels",
  "Breakfast daily plus select lunches & dinners",
  "All entrance fees and guided excursions",
  "Unique experiences beyond typical tourist itineraries",
  "Seamless logistics from arrival to departure",
];

const EnglandWalesItinerary = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src={heroImg}
          alt="Stonehenge at sunrise"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <p className="text-accent font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            2027 Signature Journey
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary leading-tight mb-4">
            England & Wales
          </h1>
          <p className="text-secondary/90 text-lg md:text-xl max-w-xl mx-auto">
            14 days exploring castles, coastlines, and centuries of history
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Trip Overview
              </p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-5">
                A Journey Through Time
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From the ancient mystery of Stonehenge to the dramatic clifftop ruins of Tintagel,
                from Bath's Georgian elegance to the wild beauty of Cornwall's Atlantic coast — this
                carefully crafted 14-day journey covers the very best of England and Wales.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We travel as a small, close-knit group, with every detail handled so you can
                simply be present and enjoy each extraordinary moment. Expect a pace that
                balances exploration with rest, and itineraries that go beyond the typical
                tourist trail.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Groups are kept intentionally small to ensure a personal experience, flexible
                scheduling, and genuine connections with the places and people we encounter.
              </p>
            </div>
            <div>
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Trip Highlights
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5 text-base leading-none">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 rounded-lg bg-card" style={{ boxShadow: "var(--shadow-soft)" }}>
                <p className="font-heading font-bold text-foreground mb-1">Now Forming — 2027</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Secure your spot early. Space is intentionally limited.
                </p>
                <a
                  href="/#contact"
                  className="inline-block bg-accent text-white px-6 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Request Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Stress-Free Travel
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                What's Included
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-background" style={{ boxShadow: "var(--shadow-soft)" }}>
                  <span className="text-accent mt-0.5 text-base leading-none flex-shrink-0">✓</span>
                  <p className="text-sm text-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6 italic">
              Airfare not included. Suggested flights will be provided; travelers may choose their preferred flights.
            </p>
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Day by Day
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Your Itinerary
            </h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-10">
            {days.map((d, idx) => (
              <div
                key={d.day}
                className={`flex flex-col md:flex-row gap-6 items-start ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-2/5 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                  <img
                    src={d.image}
                    alt={d.alt}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="flex-1 py-2">
                  <p className="text-accent font-semibold text-sm mb-1">Day {d.day}</p>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Blowing / Unique Experiences callout */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
              <img
                src={glassBlowingImg}
                alt="Traditional Cornish glass blowing experience"
                className="w-full h-64 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="flex-1">
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
                Beyond the Typical Itinerary
              </p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Unique Local Experiences
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every Elder Excursions journey includes carefully chosen experiences that connect you
                with the local culture in meaningful ways — from traditional Cornish craft
                demonstrations to intimate talks with local historians.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These moments — not found on typical group tours — are what our travelers
                remember most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-heading text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Space is limited. Reach out today to learn about availability, pricing, and how to
            reserve your spot on the 2027 England & Wales journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-accent text-white px-8 py-3.5 rounded-md font-medium text-base hover:opacity-90 transition-opacity"
            >
              Request Information
            </a>
            <Link
              to="/"
              className="border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-md font-medium text-base hover:bg-primary-foreground/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnglandWalesItinerary;
