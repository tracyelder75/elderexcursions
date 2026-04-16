import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import scotlandImg from "@/assets/IMG_0824.JPG";

const days = [
  {
    day: 1,
    date: "Saturday, April 25, 2028",
    location: "Arrival in Edinburgh",
    emoji: "✈️",
    description:
      "Touch down at Edinburgh Airport and transfer to our boutique hotel nestled in the heart of the historic Old Town. After freshening up, gather with your fellow travelers for a welcome reception and orientation dinner at a traditional Scottish restaurant on the Royal Mile — haggis for the adventurous, Scotch broth for everyone.",
    highlights: [
      "Airport transfer & hotel check-in",
      "Welcome reception & orientation",
      "Group dinner on the Royal Mile",
    ],
  },
  {
    day: 2,
    date: "Sunday, April 26, 2028",
    location: "Edinburgh Old Town & Castle",
    emoji: "🏰",
    description:
      "Start the morning with an expertly guided tour of Edinburgh Castle, perched dramatically on volcanic rock above the city. Explore the Scottish Crown Jewels, the Stone of Destiny, and panoramic views across the city. Spend the afternoon at your own pace on the cobblestoned Royal Mile — browse independent shops, step into centuries-old closes, and visit the Palace of Holyroodhouse. Evening is free to explore the lively Grassmarket district.",
    highlights: [
      "Guided Edinburgh Castle tour",
      "Scottish Crown Jewels & Stone of Destiny",
      "Palace of Holyroodhouse",
      "Free evening in Grassmarket",
    ],
  },
  {
    day: 3,
    date: "Monday, April 27, 2028",
    location: "Edinburgh New Town & St Andrews",
    emoji: "🎓",
    description:
      "A morning stroll through Edinburgh's elegant Georgian New Town, a UNESCO World Heritage Site, then a visit to the National Museum of Scotland for a sweeping introduction to Scottish history and culture. After lunch we board the coach east to St Andrews, home of the world's oldest golf course and a stunning medieval cathedral. A scenic coastal walk along the East Sands rounds out the day before dinner in town.",
    highlights: [
      "Georgian New Town walking tour",
      "National Museum of Scotland",
      "St Andrews Cathedral ruins",
      "Coastal walk on the East Sands",
    ],
  },
  {
    day: 4,
    date: "Tuesday, April 28, 2028",
    location: "East Neuk & Stirling Castle",
    emoji: "⚔️",
    description:
      "Drive south through the charming fishing villages of the East Neuk of Fife — Crail, Anstruther, and Pittenweem — where colorful harbors and fresh seafood have barely changed in centuries. Pick up a famous Anstruther fish-and-chip lunch before heading west to mighty Stirling Castle, the childhood home of Mary Queen of Scots and site of breathtaking views over the Forth Valley. Overnight in Stirling.",
    highlights: [
      "East Neuk fishing village drive",
      "Famous Anstruther fish & chips lunch",
      "Guided Stirling Castle tour",
      "Views over the Forth Valley",
    ],
  },
  {
    day: 5,
    date: "Wednesday, April 29, 2028",
    location: "Loch Lomond & the Trossachs",
    emoji: "🏔️",
    description:
      "Head into Loch Lomond & The Trossachs National Park, Scotland's first national park and a landscape of breathtaking beauty. A leisurely cruise on the bonnie, bonnie banks of Loch Lomond is followed by a guided walk through the ancient oak woodlands of Rowardennan. Afternoon tea at a lochside hotel before continuing north through the dramatic Trossachs to our Callander accommodation.",
    highlights: [
      "Loch Lomond boat cruise",
      "Rowardennan woodland walk",
      "Afternoon tea at a lochside hotel",
      "Scenic Trossachs drive",
    ],
  },
  {
    day: 6,
    date: "Thursday, April 30, 2028",
    location: "Glen Coe & Fort William",
    emoji: "🌄",
    description:
      "Drive north through Rannoch Moor, one of the last true wildernesses in Europe — a vast, treeless expanse of bog and water that feels like the edge of the world. Arrive at the haunting Valley of Glen Coe, site of the 1692 massacre, and take in the sheer drama of the three ridges known as the Three Sisters. Continue to Fort William at the foot of Ben Nevis, the highest peak in the British Isles, for dinner and overnight.",
    highlights: [
      "Rannoch Moor scenic crossing",
      "Glen Coe viewpoints & history",
      "Three Sisters of Glen Coe",
      "Fort William & Ben Nevis views",
    ],
  },
  {
    day: 7,
    date: "Friday, May 1, 2028",
    location: "Loch Ness & Inverness",
    emoji: "🐉",
    description:
      "Follow the Great Glen north along the Caledonian Canal to Loch Ness, the largest body of freshwater in Britain — and home to its most famous resident. A guided boat tour on the loch brings you to the moody ruins of Urquhart Castle, perched dramatically on the water's edge. Continue to Inverness, the capital of the Highlands, for an afternoon at leisure in its charming city center. Visit the haunting Culloden Battlefield before a group dinner at a Highland inn.",
    highlights: [
      "Loch Ness boat tour",
      "Urquhart Castle ruins",
      "Culloden Battlefield visitor center",
      "Dinner at a traditional Highland inn",
    ],
  },
  {
    day: 8,
    date: "Saturday, May 2, 2028",
    location: "Journey to the Isle of Skye",
    emoji: "🌊",
    description:
      "Depart Inverness and wind through some of Scotland's most dramatic coastal scenery en route to the Isle of Skye. A highlight stop at Eilean Donan Castle — perhaps the most photographed castle in Scotland — where three sea lochs meet in a landscape of timeless beauty. Cross the Skye Bridge onto the island and settle into our boutique hotel in Portree, the island's colorful harbor town. Evening stroll around the harbor.",
    highlights: [
      "Eilean Donan Castle visit",
      "Crossing the Skye Bridge",
      "Portree harbor walk",
      "Check-in to Skye boutique hotel",
    ],
  },
  {
    day: 9,
    date: "Sunday, May 3, 2028",
    location: "Isle of Skye Highlights",
    emoji: "🧚",
    description:
      "A full day to experience the wild magic of Skye. Morning visit to Dunvegan Castle, clan seat of the MacLeods and the oldest continuously inhabited castle in Scotland. Head south to the Talisker Distillery for an intimate single-malt tasting. In the afternoon, a gentle guided walk to the otherworldly Fairy Pools — crystal-clear turquoise pools fed by waterfalls at the foot of the Black Cuillin mountains. End the day back in Portree for a farewell-to-Skye dinner.",
    highlights: [
      "Dunvegan Castle & clan museum",
      "Talisker Distillery tasting",
      "Fairy Pools guided walk",
      "Farewell dinner in Portree",
    ],
  },
  {
    day: 10,
    date: "Monday, May 4, 2028",
    location: "Speyside Whisky Trail",
    emoji: "🥃",
    description:
      "Cross back to the mainland and head east into Speyside, home to more whisky distilleries than anywhere else on Earth. Your exclusive distillery experience at Glenfiddich includes a behind-the-scenes warehouse tour, a cooperage demonstration, and a guided tasting of rare single-cask expressions. Afternoon at leisure to browse the Dufftown village, dubbed 'the Whisky Capital of the World.' Overnight in nearby Grantown-on-Spey.",
    highlights: [
      "Speyside scenery & Dufftown village",
      "Glenfiddich Distillery exclusive tour",
      "Single-cask whisky tasting",
      "Grantown-on-Spey overnight",
    ],
  },
  {
    day: 11,
    date: "Tuesday, May 5, 2028",
    location: "Pitlochry & Return to Edinburgh",
    emoji: "🌸",
    description:
      "Head south through the gorgeous Cairngorms National Park and into the Highland Perthshire town of Pitlochry, famous for its Victorian spa heritage, salmon ladder, and the enchanting Festival Theatre. A visit to Blair Castle — the white-turreted seat of the Duke of Atholl and home to the only private army in Europe — concludes your Highland adventures. Return to Edinburgh for a final farewell dinner at a celebrated Scottish restaurant.",
    highlights: [
      "Cairngorms National Park crossing",
      "Blair Castle guided tour",
      "Pitlochry salmon ladder & town",
      "Farewell dinner in Edinburgh",
    ],
  },
  {
    day: 12,
    date: "Wednesday, May 6, 2028",
    location: "Departure",
    emoji: "🏡",
    description:
      "After a leisurely Scottish breakfast, transfer to Edinburgh Airport for your homeward flight. Depart with a heart full of heather, a bag full of shortbread, and memories of a Scotland that will stay with you for a lifetime.",
    highlights: [
      "Scottish breakfast at the hotel",
      "Airport transfer & departure",
      "Fond farewells & future adventures",
    ],
  },
];

const ScotlandItinerary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={scotlandImg}
          alt="Scottish Highlands landscape"
          className="w-full h-full object-cover"
          width={1600}
          height={900}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{ background: "var(--hero-overlay)" }}
        >
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full mb-5">
            2028 Signature Journey
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Scotland
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-xl">
            Highlands, History &amp; Whisky — A 12-Day Journey Through the Soul of Scotland
          </p>
        </div>
      </div>

      {/* Trip at a Glance */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Duration", value: "12 Days / 11 Nights" },
              { label: "Departure", value: "April 25, 2028" },
              { label: "Return", value: "May 6, 2028" },
              { label: "Group Size", value: "Max 16 Travelers" },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-primary-foreground/60 text-xs uppercase tracking-widest mb-1">
                  {item.label}
                </dt>
                <dd className="font-heading text-lg font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
            About This Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Where Ancient Legends Meet Wild Landscapes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From the cobblestoned closes of Edinburgh's Old Town to the mist-draped peaks of the
            Highlands, from the fairy-tale shores of the Isle of Skye to the fragrant oak barrels
            of Speyside's legendary distilleries — this 12-day journey is designed to show you the
            very best of Scotland at a pace that lets you truly savour every moment. Our small group
            of no more than 16 ensures personal attention, flexible scheduling, and the kind of
            access that larger tours simply cannot offer.
          </p>
          <div className="mt-8 inline-block bg-accent/10 border border-accent/20 rounded-lg px-6 py-4">
            <p className="text-accent font-semibold text-sm">
              🔔 Itinerary Preview — Spots will open for registration in early 2027.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Express your interest below and be first in line.
            </p>
          </div>
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Day by Day
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Your Scotland Itinerary
            </h2>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {days.map((d) => (
                <div key={d.day} className="flex gap-6">
                  {/* Day number bubble */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center shadow-md z-10 relative">
                      <span className="text-[9px] uppercase tracking-wide leading-none">Day</span>
                      <span className="font-heading font-bold text-sm leading-none">{d.day}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className="flex-1 bg-card rounded-lg p-6 mb-1"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <p className="text-muted-foreground text-xs mb-1">{d.date}</p>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                      <span className="mr-2">{d.emoji}</span>
                      {d.location}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {d.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {d.highlights.map((h) => (
                        <li
                          key={h}
                          className="bg-background border border-border rounded-full px-3 py-1 text-xs text-muted-foreground"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Everything Taken Care Of
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground">
              What's Included
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Round-Trip International Airfare",
                detail: "Economy class from a major U.S. hub, taxes & fees included",
              },
              {
                title: "11 Nights Accommodation",
                detail: "Boutique hotels and charming guesthouses, twin/double occupancy",
              },
              {
                title: "All Transportation in Scotland",
                detail: "Private coach, Loch Ness boat cruise, Loch Lomond cruise",
              },
              {
                title: "Most Meals",
                detail: "Daily breakfast, 6 group dinners, and 3 special lunches",
              },
              {
                title: "Expert Guides",
                detail:
                  "Local Scottish guides at every major site plus your dedicated Elder Excursions host",
              },
              {
                title: "Entrance Fees",
                detail:
                  "Edinburgh Castle, Stirling Castle, Urquhart Castle, Dunvegan Castle, Blair Castle, Glenfiddich Distillery, and more",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 bg-background rounded-lg p-5"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span className="text-primary mt-1 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ready to Claim Your Spot?
        </h2>
        <p className="text-primary-foreground/75 text-lg max-w-xl mx-auto mb-8">
          Registration opens in early 2027. Express your interest today and we'll reach out the
          moment spots become available — no commitment required.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-accent text-white font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-sm"
        >
          Express My Interest
        </a>
        <div className="mt-8">
          <a
            href="/"
            className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
          >
            ← Back to all journeys
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScotlandItinerary;
