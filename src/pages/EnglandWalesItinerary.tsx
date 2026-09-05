import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronUp, MapPin, CheckCircle, XCircle, Download } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TripSubNav from "@/components/TripSubNav";
import heroImg from "@/assets/stonehenge.jpg";
import cardiffCastleImg from "@/assets/cardiff-castle.jpg";
import pembrokeCastleImg from "@/assets/pembroke-castle.jpg";
import caerleonBathsImg from "@/assets/caerleon-baths.jpg";
import tintagelBridgeImg from "@/assets/tintagel-bridge.jpg";
import edenImg from "@/assets/eden-project.jpg";
import minackImg from "@/assets/minack-theatre.jpg";
import cornishMinesImg from "@/assets/cornish-tin-mines.jpg";
import glastonburyImg from "@/assets/glastonbury-abbey.jpg";
import thermaeImg from "@/assets/thermae-spa.jpg";
import romanBathsImg from "@/assets/roman-baths-bath.jpg";
import highclereImg from "@/assets/highclere-castle.jpg";
import windsorImg from "@/assets/windsor-castle.jpg";

type Day = {
  day: number;
  date: string;
  location: string;
  description: string;
  image: string | null;
  alt?: string;
  highlights: string[];
};

const days: Day[] = [
  {
    day: 1,
    date: "Wed, July 21",
    location: "Atlanta — Departure",
    description: "Depart Atlanta for Bristol, England Airport. Recommended flights will be provided but are not mandatory.",
    image: null,
    highlights: ["Depart Atlanta", "Overnight flight to Bristol"],
  },
  {
    day: 2,
    date: "Thu, July 22",
    location: "Bristol to Cardiff, Wales",
    description: "Fly into Bristol Airport and board your coach to Cardiff — the vibrant capital of Wales. Check in to the Clayton Hotel and get settled for the journey ahead.",
    image: null,
    highlights: ["Arrive Bristol", "Coach to Cardiff", "Check in: Clayton Hotel"],
  },
  {
    day: 3,
    date: "Fri, July 23",
    location: "Cardiff Castle",
    description: "Experience nearly 2,000 years of history at Cardiff Castle — the presence of Romans and Normans is everywhere. Marvel at the stunning décor created by the Stuart family, and explore a World War II bomb shelter built into the castle's curtain wall. Free time in the afternoon to explore Cardiff.",
    image: cardiffCastleImg,
    alt: "Cardiff Castle with the Welsh flag flying",
    highlights: ["Cardiff Castle", "Roman & Norman history", "Victorian Gothic interiors", "WWII bomb shelter", "Free afternoon in Cardiff"],
  },
  {
    day: 4,
    date: "Sat, July 24",
    location: "Western Wales — Pembroke Castle & St. David's Cathedral",
    description: "Day trip to western Wales. First stop: Pembroke Castle, first built in 1093 at the heart of Norman-controlled South Wales — birthplace of King Henry VII. After lunch, travel west to St. David's Cathedral at the most westerly point of Wales.",
    image: pembrokeCastleImg,
    alt: "Aerial view of Pembroke Castle",
    highlights: ["Pembroke Castle (1093)", "Birthplace of King Henry VII", "St. David's Cathedral", "Westernmost point of Wales"],
  },
  {
    day: 5,
    date: "Sun, July 25",
    location: "Wye Valley — Caerleon, Chepstow & Tintern",
    description: "Travel back to Roman times at the Roman Amphitheatre and Roman Baths at Caerleon — one of only three permanent Roman legionary fortresses in Britain. Continue through the beautiful Wye Valley with stops at Chepstow Castle, Tintern Abbey, and the charming village of Monmouth.",
    image: caerleonBathsImg,
    alt: "Roman Baths at Caerleon illuminated at night",
    highlights: ["Caerleon Roman Amphitheatre", "Caerleon Roman Baths", "Chepstow Castle", "Tintern Abbey", "Village of Monmouth"],
  },
  {
    day: 6,
    date: "Mon, July 26",
    location: "Tintagel, Cornwall — King Arthur's Castle",
    description: "Depart for Cornwall and visit Tintagel Castle, the legendary birthplace of King Arthur. Experience breathtaking Atlantic cliff views as you cross the dramatic new footbridge which recreates the historic crossing from mainland to headland.",
    image: tintagelBridgeImg,
    alt: "New footbridge at Tintagel crossing the dramatic clifftop",
    highlights: ["Tintagel Castle", "Arthurian legend", "New clifftop footbridge", "Atlantic coastal views"],
  },
  {
    day: 7,
    date: "Tue, July 27",
    location: "Eden Project & Penzance",
    description: "Morning and lunch at the extraordinary Eden Project — home of two giant biomes set in a reclaimed china clay pit, including the world's largest indoor rainforest. Back in Penzance, don't miss the Jubilee Pool — the UK's largest, most celebrated art deco sea water lido, geothermally heated. Don't forget your suit!",
    image: edenImg,
    alt: "Eden Project biome domes in Cornwall",
    highlights: ["Eden Project", "World's largest indoor rainforest", "Jubilee Pool (art deco lido)", "Check in: Premier Inn Penzance"],
  },
  {
    day: 8,
    date: "Wed, July 28",
    location: "Penzance & Minack Theatre",
    description: "A free morning in Penzance with an optional field trip to St. Michael's Mount (tide permitting). After dinner, enjoy a live performance at the world-famous Minack Theatre — Cornwall's extraordinary open-air theatre carved into the clifftops above the crashing sea.",
    image: minackImg,
    alt: "Minack Theatre carved into Cornish clifftops",
    highlights: ["Free morning in Penzance", "St. Michael's Mount (optional)", "Evening at Minack Theatre"],
  },
  {
    day: 9,
    date: "Thu, July 29",
    location: "Cornish Tin Mines & St. Ives",
    description: "Explore the rugged Cornish coast, home to the Levant Mine and Botallack Mine — featuring a working steam-powered beam engine set against dramatic clifftop scenery. If you're a Poldark fan, you will not want to miss this! Continue to the beautiful seaside town of St. Ives.",
    image: cornishMinesImg,
    alt: "Cornish tin mine engine houses on the clifftop",
    highlights: ["Levant Mine", "Botallack Mine", "Steam-powered beam engine", "Poldark country", "St. Ives"],
  },
  {
    day: 10,
    date: "Fri, July 30",
    location: "Exeter Cathedral & Glastonbury Abbey",
    description: "On the journey to Bath, stop at the magnificent Exeter Cathedral for lunch. Next, visit Glastonbury Abbey — the legendary site where King Arthur and Guinevere are reportedly buried, steeped in centuries of Arthurian and Christian heritage.",
    image: glastonburyImg,
    alt: "Glastonbury Abbey ruins",
    highlights: ["Exeter Cathedral", "Glastonbury Abbey", "Legendary burial site of King Arthur", "Travel to Bath", "Check in: Hampton by Hilton Bath"],
  },
  {
    day: 11,
    date: "Sat, July 31",
    location: "Free Day in Bath",
    description: "A full free day to explore the UNESCO World Heritage city of Bath. Suggested activities: pamper yourself at the Thermae Bath Spa (fed by the same ancient spring as the Roman Baths), try a glass blowing experience, visit the Jane Austen Museum with walking tour, or have lunch at the legendary Sally Lunn's.",
    image: thermaeImg,
    alt: "Thermae Bath Spa rooftop pool with Bath skyline",
    highlights: ["Thermae Bath Spa", "Glass blowing experience", "Jane Austen Museum & walking tour", "Lunch at Sally Lunn's"],
  },
  {
    day: 12,
    date: "Sun, Aug 1",
    location: "Roman Baths & Bath Abbey",
    description: "Guided tours of the remarkably preserved Roman Baths — one of the finest historic sites in northern Europe — and the soaring Bath Abbey. Enjoy a special lunch in the historic Pump Room. Free afternoon for exploring Bath's Royal Crescent, Pulteney Bridge, and independent shops.",
    image: romanBathsImg,
    alt: "The Roman Baths with green thermal water in Bath",
    highlights: ["Roman Baths guided tour", "Bath Abbey tour", "Lunch in the Pump Room", "Free afternoon in Bath"],
  },
  {
    day: 13,
    date: "Mon, Aug 2",
    location: "Stonehenge & Highclere Castle (Downton Abbey)",
    description: "A landmark day — two of England's most iconic destinations. Tour Highclere Castle, the real-life setting of Downton Abbey, surrounded by beautiful Hampshire parkland. Then experience the timeless wonder of Stonehenge. Depart for our hotel near Windsor Castle and Heathrow Airport.",
    image: highclereImg,
    alt: "Highclere Castle, the real Downton Abbey",
    highlights: ["Highclere Castle (Downton Abbey)", "Stonehenge", "Travel to Windsor area", "Check in: Courtyard by Marriott Heathrow"],
  },
  {
    day: 14,
    date: "Tue, Aug 3",
    location: "Windsor Castle",
    description: "Our trip would not be complete without a visit to Windsor and Windsor Castle — the world's oldest and largest occupied castle and home to the British Royal Family for nearly 1,000 years. Plenty of time to explore Windsor town and the castle's State Apartments and St. George's Chapel before a farewell dinner together.",
    image: windsorImg,
    alt: "Windsor Castle viewed from the Long Walk",
    highlights: ["Windsor Castle", "State Apartments & St. George's Chapel", "Windsor town", "Farewell dinner"],
  },
  {
    day: 15,
    date: "Wed, Aug 4",
    location: "Homeward Bound — Depart Heathrow",
    description: "Transfer by coach to London Heathrow Airport for your flight home. Depart with wonderful memories, new friendships, and a deep appreciation for the extraordinary history of England and Wales.",
    image: null,
    highlights: ["Coach to Heathrow", "Depart for home"],
  },
];

const hotels = [
  {
    nights: "Nights 1–4",
    dates: "July 22–26",
    name: "Clayton Hotel Cardiff",
    location: "Cardiff, Wales",
    description: "Contemporary hotel in the heart of Cardiff city centre, steps from Cardiff Castle.",
    url: "https://www.claytonhotels.com/cardiff/",
  },
  {
    nights: "Nights 5–8",
    dates: "July 26–30",
    name: "Premier Inn Penzance",
    location: "Penzance, Cornwall",
    description: "Comfortable, well-located hotel in Penzance, convenient for exploring Cornwall's coast and attractions.",
    url: "https://www.premierinn.com/gb/en/hotels/england/cornwall/penzance/penzance.html",
  },
  {
    nights: "Nights 9–11",
    dates: "July 30–Aug 2",
    name: "Hampton by Hilton",
    location: "Bath, England",
    description: "Modern hotel in the UNESCO World Heritage city of Bath, close to the Roman Baths.",
    url: "https://www.hilton.com/en/hotels/batumhx-hampton-bath-city/?SEO_id=GMB-EMEA-HX-BATUMHX",
  },
  {
    nights: "Nights 12–13",
    dates: "Aug 2–4",
    name: "Courtyard by Marriott",
    location: "London Heathrow",
    description: "Comfortable airport hotel for the final nights before your homeward departure.",
    url: "https://www.marriott.com/en-us/hotels/lhrcy-courtyard-london-heathrow-airport/overview/?cid=NAT_google_hotel_url",
  },
];

const subNavLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Lodging", href: "#lodging" },
  { label: "Pricing", href: "#pricing" },
];

const subNavCta = { label: "Reserve Now", href: "#pricing" };

const EnglandWalesItinerary = () => {
  const [openDays, setOpenDays] = useState<number[]>([]);

  const toggle = (day: number) =>
    setOpenDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cornwall, England & Wales 2027 Itinerary – Elder Excursions</title>
        <meta name="description" content="Full 15-day itinerary for the Cornwall, England & Wales 2027 small-group journey. July 21–August 4, 2027. Includes Cardiff Castle, Tintagel, Stonehenge, Highclere Castle, Roman Baths, Windsor Castle and more." />
        <meta property="og:url" content="https://elderexcursions.com/trips/england-wales" />
        <meta property="og:title" content="Cornwall, England & Wales 2027 – Elder Excursions Trip Itinerary" />
        <meta property="og:description" content="15-day small-group journey through Cornwall, England and Wales. July 21–August 4, 2027. From $4,395/person. Visit Stonehenge, Tintagel, Highclere Castle, Windsor Castle and more." />
        <meta property="og:image" content="https://elderexcursions.com/og-image-england-wales.jpg" />
        <link rel="canonical" href="https://elderexcursions.com/trips/england-wales" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Cornwall, England & Wales 2027",
          "description": "15-day small-group history-themed journey through Cornwall, England and Wales.",
          "startDate": "2027-07-21",
          "endDate": "2027-08-04",
          "offers": {
            "@type": "Offer",
            "price": "4395",
            "priceCurrency": "USD",
            "availability": "https://schema.org/LimitedAvailability",
            "validThrough": "2026-12-01"
          },
          "organizer": {
            "@type": "TravelAgency",
            "name": "Elder Excursions, LLC",
            "url": "https://elderexcursions.com",
            "email": "tracyelder75@gmail.com"
          },
          "touristType": "History enthusiasts, small-group travelers",
          "itinerary": {
            "@type": "ItemList",
            "name": "15-Day Itinerary",
            "numberOfItems": 15
          }
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <img src={heroImg} alt="Stonehenge monument at dusk, hero image for the Cornwall, England and Wales 2027 itinerary" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full pb-16 pt-24">
          <p className="text-white text-sm tracking-[0.25em] uppercase font-medium mb-3">Elder Excursions · 2027</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Cornwall, England & Wales
          </h1>
          <p className="text-white text-xl md:text-2xl font-light italic mb-4">
            “Travel through time in Southern England and Wales”
          </p>
          <p className="text-white text-sm mb-8">July 21 – August 4, 2027 &nbsp;·&nbsp; 15 Days &nbsp;·&nbsp; 18–25 Participants</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-medium hover:opacity-90 transition-opacity">
              Reserve Your Spot
            </a>
            <a href="#itinerary" className="border-2 border-white text-white px-8 py-3.5 rounded-md font-medium hover:bg-white/20 transition-colors">
              View Full Itinerary
            </a>
            <a
              href="/Cornwall%20Wales%20England%20Brochure%202027.pdf"
              download
              className="flex items-center justify-center gap-2 border-2 border-white/70 text-white px-8 py-3.5 rounded-md font-medium hover:bg-white/20 transition-colors"
            >
              <Download size={18} aria-hidden="true" />
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "15", label: "Days of Adventure" },
              { value: "13", label: "Nights Lodging" },
              { value: "27", label: "Meals Included" },
              { value: "18–25", label: "Participants" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold font-heading">{s.value}</p>
                <p className="text-primary-foreground/90 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <TripSubNav
        links={subNavLinks}
        cta={subNavCta}
        ariaLabel="Cornwall, England & Wales 2027 page sections"
      />

      {/* Overview */}
      <section id="overview" className="scroll-mt-32 md:scroll-mt-40 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">What's Included</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Trip Overview</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Everything Included</h3>
              <ul className="space-y-3">
                {[
                  "All ground transportation",
                  "13 nights lodging",
                  "27 meals — 7 dinners, 7 lunches, all breakfasts",
                  "Cardiff Castle, Pembroke Castle, Tintagel",
                  "Highclere Castle, Roman Baths, Stonehenge",
                  "Tin Mines, Minack Theatre, Windsor Castle",
                  "All entrance fees, tips and taxes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-4 bg-muted rounded-lg border border-border">
                <p className="text-sm font-semibold text-foreground flex items-center gap-2 mb-1">
                  <XCircle size={14} className="text-destructive" /> Not Included
                </p>
                <p className="text-sm text-muted-foreground">Airfare. Trip cancellation insurance is strongly recommended.</p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Historical Eras Covered</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { era: "Prehistoric", icon: "🗿", note: "Stonehenge" },
                  { era: "Roman", icon: "🏛️", note: "Caerleon & Bath" },
                  { era: "Arthurian", icon: "⚔️", note: "Tintagel & Glastonbury" },
                  { era: "Norman", icon: "🏰", note: "Pembroke & Windsor" },
                  { era: "Victorian", icon: "🎩", note: "Highclere & Bath" },
                  { era: "WWII", icon: "🎖️", note: "Cardiff Castle shelter" },
                ].map((item) => (
                  <div key={item.era} className="bg-card rounded-lg p-3 border border-border">
                    <p className="text-lg mb-1">{item.icon}</p>
                    <p className="font-semibold text-sm text-foreground">{item.era}</p>
                    <p className="text-xs text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
                <p className="font-semibold text-sm text-foreground mb-1">Activity Level — Moderately Challenging</p>
                <p className="text-sm text-muted-foreground">Walking up to 5 miles/day over varied terrain (some steep). Stairs without railings; handicap access not always available. Must be able to carry your own bag.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day */}
      <section id="itinerary" className="scroll-mt-32 md:scroll-mt-40 py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">Day by Day</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Full 15-Day Itinerary</h2>
            <p className="text-muted-foreground mt-2">July 21 – August 4, 2027</p>
          </div>
          <div className="space-y-3">
            {days.map((d) => (
              <div key={d.day} className="bg-background rounded-lg border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
                <button onClick={() => toggle(d.day)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full shrink-0">Day {d.day}</span>
                    <div>
                      <p className="font-heading font-bold text-foreground">{d.location}</p>
                      <p className="text-xs text-muted-foreground">{d.date}</p>
                    </div>
                  </div>
                  {openDays.includes(d.day) ? <ChevronUp size={18} className="text-muted-foreground shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                </button>
                {openDays.includes(d.day) && (
                  <div className="px-6 pb-5 border-t border-border">
                    <div className={`mt-4 ${d.image ? "flex flex-col md:flex-row gap-4" : ""}`}>
                      {d.image && (
                        <img src={d.image} alt={d.alt} className="w-full md:w-52 h-36 object-cover rounded-lg shrink-0" loading="lazy" />
                      )}
                      <div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">{d.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {d.highlights.map((h) => (
                            <span key={h} className="bg-accent/10 text-accent border border-accent/20 text-xs px-2.5 py-1 rounded-full font-medium">{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lodging */}
      <section id="lodging" className="scroll-mt-32 md:scroll-mt-40 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">Where You'll Stay</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Your Hotels</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {hotels.map((h) => (
              <div key={h.name} className="bg-card rounded-lg p-6 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">{h.nights}</span>
                  <span className="text-accent text-xs font-semibold">{h.dates}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                  <a href={h.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline transition-colors">{h.name} ↗</a>
                </h3>
                <p className="text-accent text-sm font-medium mb-2 flex items-center gap-1"><MapPin size={12} />{h.location}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler quotes */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-10 text-center">From Past Travelers</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "I can only imagine the hours of work you put into choosing destinations, arranging hotels, guides, and meal plans. You created unique experiences that we will treasure for years to come.", name: "Donna", trip: "Wales & England 2023" },
              { quote: "I saw more in less time than I ever thought possible and fulfilled longtime dreams of seeing castles, cathedrals, and historic sites — not to mention the great dining, new friends, and your amazing ability to handle scheduling challenges.", name: "John", trip: "Wales & England 2023" },
            ].map((t) => (
              <div key={t.name} className="bg-background rounded-lg p-7 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic mb-4">"{t.quote}"</blockquote>
                <p className="text-foreground text-sm font-semibold">— {t.name}</p>
                <p className="text-accent text-xs font-medium tracking-wide uppercase mt-1">{t.trip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-32 md:scroll-mt-40 py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">Ready to Join Us?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Pricing & Registration</h2>
            <p className="text-destructive font-semibold text-sm mt-3">Registration deadline: December 1, 2026 · Group size: 18–25 participants</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background rounded-lg p-8 border-2 border-primary text-center" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="text-muted-foreground text-sm font-medium mb-2">Double Occupancy</p>
              <p className="font-heading text-5xl font-bold text-primary mb-1">$4,395</p>
              <p className="text-muted-foreground text-sm">per person</p>
            </div>
            <div className="bg-background rounded-lg p-8 border border-border text-center" style={{ boxShadow: "var(--shadow-card)" }}>
              <p className="text-muted-foreground text-sm font-medium mb-2">Single Occupancy</p>
              <p className="font-heading text-5xl font-bold text-foreground mb-1">$5,295</p>
              <p className="text-muted-foreground text-sm">per person</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Payment Schedule</h3>
              <div className="space-y-3">
                {[
                  { label: "Deposit (at enrollment)", value: "$500" },
                  { label: "Balance due", value: "February 1, 2027" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between py-3 border-b border-border text-sm">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-semibold text-foreground">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Cancellation Policy</h3>
              <div className="space-y-3">
                {[
                  { label: "120+ days before", value: "Full refund of unspent funds" },
                  { label: "30–119 days before", value: "75% refund" },
                  { label: "Less than 30 days", value: "50% refund" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between py-3 border-b border-border text-sm">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-semibold text-foreground">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-xl p-8 text-center text-primary-foreground">
            <h3 className="font-heading text-2xl font-bold mb-2">Reserve Your Spot</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">Contact Tracy Elder directly to register or ask any questions. Space is limited to 25 participants.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:tracyelder75@gmail.com" className="flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity">
                tracyelder75@gmail.com
              </a>
              <a
                href="/Cornwall%20Wales%20England%20Brochure%202027.pdf"
                download
                className="flex items-center justify-center gap-2 border-2 border-primary-foreground/70 text-primary-foreground px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <Download size={16} aria-hidden="true" />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnglandWalesItinerary;
