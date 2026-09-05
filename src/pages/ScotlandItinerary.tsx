import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, MapPin, CheckCircle, Info, Flag } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TripSubNav from "@/components/TripSubNav";
import heroImg from "@/assets/urquhart-castle.jpg";
import edinburghImg from "@/assets/edinburgh-arthurs-seat.jpg";
import lochImg from "@/assets/scotland.jpg";

type Day = {
  day: number;
  location: string;
  night: string | null;
  description: string;
  tentative?: boolean;
};

const days: Day[] = [
  {
    day: 1,
    location: "Depart the US",
    night: null,
    description: "Fly overnight from the US toward Scotland to kick off the journey.",
  },
  {
    day: 2,
    location: "Inverness",
    night: "Night 1 of 3",
    description: "Arrive in Edinburgh and board the coach north to Inverness, capital of the Highlands, for check-in.",
  },
  {
    day: 3,
    location: "Inverness",
    night: "Night 2 of 3",
    description: "Visit Culloden Battlefield, site of the last pitched battle on British soil, followed by Cawdor Castle.",
  },
  {
    day: 4,
    location: "Inverness",
    night: "Night 3 of 3",
    description: "A day trip to the Isle of Skye — still being finalized as we confirm timing and logistics.",
    tentative: true,
  },
  {
    day: 5,
    location: "Dornoch",
    night: "Night 1 of 3",
    description: "Depart Inverness for Dornoch, with a stop at Tain Pottery along the way.",
  },
  {
    day: 6,
    location: "Dornoch",
    night: "Night 2 of 3",
    description: "Tour Clynelish Distillery and visit Dunrobin Castle, the grandest house in the Highlands.",
  },
  {
    day: 7,
    location: "Dornoch",
    night: "Night 3 of 3",
    description: "A full-day ferry excursion to the Orkney Islands (timing depends on the Maynes/Pentland Ferries schedule) to see ancient sites such as Skara Brae and the Ring of Brodgar.",
  },
  {
    day: 8,
    location: "Pitlochry",
    night: "Night 1 of 3",
    description: "Depart Dornoch for the Highland Perthshire town of Pitlochry.",
  },
  {
    day: 9,
    location: "Pitlochry",
    night: "Night 2 of 3",
    description: "A sheepherding demonstration, a distillery visit, and a tour of Blair Castle, seat of the Duke of Atholl.",
  },
  {
    day: 10,
    location: "Pitlochry",
    night: "Night 3 of 3",
    description: "A free day to explore Pitlochry at your own pace.",
  },
  {
    day: 11,
    location: "Edinburgh",
    night: "Night 1 of 4",
    description: "Depart for Edinburgh, stopping at Stirling Castle, the Kelpies, and the Falkirk Wheel along the way.",
  },
  {
    day: 12,
    location: "Edinburgh",
    night: "Night 2 of 4",
    description: "A day trip to Abbotsford, the historic home of Sir Walter Scott.",
  },
  {
    day: 13,
    location: "Edinburgh",
    night: "Night 3 of 4",
    description: "A free day to explore Edinburgh's Royal Mile, the Castle, and the city at a relaxed pace.",
  },
  {
    day: 14,
    location: "Edinburgh",
    night: "Night 4 of 4",
    description: "A second free day in Edinburgh — extra time to see whatever you missed the first time around.",
  },
  {
    day: 15,
    location: "North Berwick",
    night: "Night 1 of 2",
    description: "Transfer to the Renaissance Club for the Scottish Open Pro-Am.",
  },
  {
    day: 16,
    location: "North Berwick",
    night: "Night 2 of 2",
    description: "Scottish Open, Round 1 — a fitting close to the journey for golf lovers.",
  },
  {
    day: 17,
    location: "Fly Home",
    night: null,
    description: "Depart Scotland for the US with a lifetime of Highland memories.",
  },
];

const stays = [
  { location: "Inverness", nights: 3, note: "Highland base for Culloden, Cawdor Castle, and Skye" },
  { location: "Dornoch", nights: 3, note: "Coastal base for whisky, castles, and the Orkney ferry" },
  { location: "Pitlochry", nights: 3, note: "Perthshire base for distilleries and Blair Castle" },
  { location: "Edinburgh", nights: 4, note: "In-depth time in the capital, at a relaxed pace" },
  { location: "North Berwick", nights: 2, note: "Coastal base for the Scottish Open" },
];

const highlights = [
  {
    title: "Highlands & Lochs",
    description: "Culloden, Cawdor Castle, and the dramatic scenery of the Scottish Highlands.",
  },
  {
    title: "Whisky & Coastal Villages",
    description: "Distillery visits and charming stops along Scotland's storied coastline.",
  },
  {
    title: "Historic Castles",
    description: "Dunrobin, Blair Castle, Stirling Castle, and more woven throughout the journey.",
  },
  {
    title: "Edinburgh, In Depth",
    description: "Ample time in the capital — the Royal Mile, the Castle, and a relaxed pace to explore.",
  },
  {
    title: "Orkney Islands",
    description: "A full-day journey by ferry to ancient sites — Skara Brae and the Ring of Brodgar.",
  },
  {
    title: "Optional World-Class Golf",
    description: "Add on days at the Scottish Open — a fitting close to the journey.",
  },
];

const travelerTraits = [
  "Enjoy meaningful, culturally rich experiences",
  "Prefer small groups over large tours",
  "Want the details handled without sacrificing quality",
  "Appreciate thoughtful planning and unique experiences",
  "Love the game of golf — or just a great atmosphere",
  "Want comfortable pacing, never rushed or overwhelming",
];

const included = [
  "All ground transportation",
  "Accommodations for the full journey",
  "Most meals — breakfast daily plus select lunches & dinners",
  "All entrance fees & guided excursions",
];

const experience = [
  "Small, like-minded groups",
  "Comfortable pacing — never rushed",
  "A balance of iconic sites and hidden gems",
  "Personally designed and hosted by Tracy Elder",
];

const goodToKnow = [
  "Airfare not included",
  "Suggested flights provided",
  "Travelers may choose their preferred flights",
  "Dates & pricing coming soon",
];

const testimonials = [
  "You get the gold star for the best travel agent in the world!",
  "Amazing trip because you show so much care and organization.",
  "Will go down as one of my favorite trips! Really enjoyed the camaraderie. Thanks for your amazing efforts to keep us all pleased. Loved it!",
];

const subNavLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Lodging", href: "#lodging" },
  { label: "Interest List", href: "#interest" },
];

const subNavCta = { label: "Join the Interest List", href: "#interest" };

const ScotlandItinerary = () => {
  const [openDays, setOpenDays] = useState<number[]>([]);

  const toggle = (day: number) =>
    setOpenDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Scotland 2028 Itinerary – Elder Excursions</title>
        <meta name="description" content="Preview the 17-day Scotland 2028 small-group journey from Elder Excursions — Inverness, Dornoch, Pitlochry, Edinburgh, and an optional Scottish Open golf experience in North Berwick." />
        <meta property="og:url" content="https://elderexcursions.com/trips/scotland" />
        <meta property="og:title" content="Scotland 2028 – Elder Excursions Trip Itinerary" />
        <meta property="og:description" content="A 17-day small-group journey through the Scottish Highlands, Dornoch, Pitlochry, and Edinburgh, closing with the Scottish Open in North Berwick. Dates & pricing coming soon." />
        <meta property="og:image" content="https://elderexcursions.com/og-image.jpg" />
        <link rel="canonical" href="https://elderexcursions.com/trips/scotland" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": "Scotland 2028",
          "description": "17-day small-group journey through the Scottish Highlands, Dornoch, Pitlochry, and Edinburgh, closing with the Scottish Open in North Berwick.",
          "organizer": {
            "@type": "TravelAgency",
            "name": "Elder Excursions, LLC",
            "url": "https://elderexcursions.com",
            "email": "tracyelder75@gmail.com"
          },
          "touristType": "Culturally curious travelers, small-group travelers, golf enthusiasts",
          "itinerary": {
            "@type": "ItemList",
            "name": "17-Day Itinerary",
            "numberOfItems": 17
          }
        })}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <img src={heroImg} alt="Urquhart Castle on the shore of Loch Ness, hero image for the Scotland 2028 itinerary" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1067} />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full pb-16 pt-24">
          <p className="text-white text-sm tracking-[0.25em] uppercase font-medium mb-3">Elder Excursions · A New Journey</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            Scotland Awaits
          </h1>
          <p className="text-white text-xl md:text-2xl font-light italic mb-4">
            Highlands, castles, whisky &amp; the Scottish Open — Summer 2028
          </p>
          <p className="text-white text-sm mb-8">17 Days &nbsp;·&nbsp; 16 Nights &nbsp;·&nbsp; Dates &amp; Pricing Coming Soon</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#interest" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-medium hover:opacity-90 transition-opacity">
              Join the Interest List
            </a>
            <a href="#itinerary" className="border-2 border-white text-white px-8 py-3.5 rounded-md font-medium hover:bg-white/20 transition-colors">
              View Full Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "17", label: "Days of Adventure" },
              { value: "16", label: "Nights Lodging" },
              { value: "5", label: "Destinations" },
              { value: "2028", label: "Summer, Dates TBD" },
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
        ariaLabel="Scotland 2028 page sections"
      />

      {/* Overview / Journey Highlights */}
      <section id="overview" className="scroll-mt-32 md:scroll-mt-40 py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">What to Expect</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Journey Highlights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-card rounded-lg p-6 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Is This You? */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src={edinburghImg} alt="View of Arthur's Seat above the city of Edinburgh" className="w-full h-72 md:h-full object-cover rounded-lg" loading="lazy" width={1000} height={667} />
            <div>
              <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">Is This You?</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Designed for Travelers Who…</h2>
              <ul className="space-y-3">
                {travelerTraits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included / Experience / Good to Know */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">Stress-Free Travel</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">A Different Way to Travel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">What's Included</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">The Experience</h3>
              <ul className="space-y-3">
                {experience.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={15} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Good to Know</h3>
              <ul className="space-y-3">
                {goodToKnow.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info size={15} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day */}
      <section id="itinerary" className="scroll-mt-32 md:scroll-mt-40 py-20 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">Day by Day</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Full 17-Day Itinerary</h2>
            <p className="text-muted-foreground mt-2">Summer 2028 — exact dates depend on the Scottish Open schedule</p>
          </div>
          <div className="space-y-3">
            {days.map((d) => (
              <div key={d.day} className="bg-background rounded-lg border border-border overflow-hidden" style={{ boxShadow: "var(--shadow-soft)" }}>
                <button onClick={() => toggle(d.day)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full shrink-0">Day {d.day}</span>
                    <div>
                      <p className="font-heading font-bold text-foreground">
                        {d.location}
                        {d.tentative && (
                          <span className="ml-2 text-xs font-medium text-accent align-middle">(tentative)</span>
                        )}
                      </p>
                      {d.night && <p className="text-xs text-muted-foreground">{d.night}</p>}
                    </div>
                  </div>
                  {openDays.includes(d.day) ? <ChevronUp size={18} className="text-muted-foreground shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                </button>
                {openDays.includes(d.day) && (
                  <div className="px-6 pb-5 border-t border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">{d.description}</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">16 Nights, 5 Home Bases</h2>
            <p className="text-muted-foreground mt-2">Specific hotels will be confirmed once dates are locked in.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stays.map((s) => (
              <div key={s.location} className="bg-card rounded-lg p-6 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {s.nights} {s.nights === 1 ? "Night" : "Nights"}
                  </span>
                  <MapPin size={16} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{s.location}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.note}</p>
              </div>
            ))}
            <div className="bg-primary/10 border border-accent/30 rounded-lg p-6 flex flex-col justify-center">
              <Flag size={18} className="text-accent mb-2" />
              <p className="font-semibold text-sm text-foreground mb-1">A Fitting Finish</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The final two nights in North Berwick center on the Scottish Open — an optional golf-focused close to the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traveler quotes */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3 text-center">From Past Travelers</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
            What Wales &amp; Cornwall 2023 Travelers Had to Say About Tracy and Elder Excursions
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((quote) => (
              <div key={quote} className="bg-background rounded-lg p-7 border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
                <blockquote className="text-muted-foreground text-sm leading-relaxed italic">"{quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest List CTA */}
      <section id="interest" className="scroll-mt-32 md:scroll-mt-40 relative py-20 overflow-hidden">
        <img src={lochImg} alt="Scottish loch and heather at sunset" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative container mx-auto px-4 max-w-3xl text-center text-primary-foreground">
          <p className="text-primary-foreground/80 text-sm tracking-[0.2em] uppercase font-medium mb-3">Stay Connected</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Be First in Line</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-8">
            Dates and pricing are coming soon. Share your name, email, and phone and Tracy will
            reach out the moment registration opens for Scotland 2028.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Interest List
          </Link>
          <div className="mt-6">
            <a href="mailto:tracyelder75@gmail.com" className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors">
              tracyelder75@gmail.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScotlandItinerary;
