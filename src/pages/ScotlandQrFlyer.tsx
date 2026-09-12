import { Helmet } from "react-helmet-async";
import { Printer } from "lucide-react";

/** Served straight from public/ so Tracy can also grab the bare code at
 *  elderexcursions.com/scotland-2028-qr.svg for other handouts. */
const qrImg = "/scotland-2028-qr.svg";

/** The address encoded in that QR code. Keep the two in sync —
 *  regenerate the SVG if this ever changes. */
const QR_TARGET = "https://elderexcursions.com/trips/scotland#interest";

const facts = ["15 Days", "13 Nights", "Small Group", "Summer 2028"];

const highlights = [
  "Four home bases: Inverness, Dornoch, Pitlochry & Edinburgh",
  "Culloden Battlefield, plus Cawdor, Dunrobin & Blair Castles",
  "A full-day ferry excursion to the Orkney Islands",
  "Optional Scottish Open add-on in North Berwick",
];

/**
 * A single letter-size sheet Tracy can print and set on a booth table: the
 * Scotland 2028 trip in brief, plus a QR code to the interest list. Deliberately
 * standalone — no navbar, footer, or sub-nav — so what is on screen is what
 * comes out of the printer.
 */
const ScotlandQrFlyer = () => {
  return (
    <div className="min-h-screen bg-muted print:bg-white py-10 px-4 print:p-0">
      <Helmet>
        <title>Scotland 2028 Booth Flyer | Elder Excursions</title>
        {/* A print handout, not a page for search results. */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Screen-only controls. */}
      <div className="max-w-[8.5in] mx-auto mb-6 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-heading text-2xl font-bold text-foreground">
              Scotland 2028 booth flyer
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Prints on one letter-size sheet. The QR code opens{" "}
              <span className="font-medium">{QR_TARGET}</span>
            </p>
          </div>
          <button
            onClick={() => window.print()}
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            <Printer size={18} aria-hidden="true" />
            Print this page
          </button>
        </div>
        <p className="text-muted-foreground text-xs mt-3">
          Tip: in the print dialog choose Portrait and turn off headers &amp; footers. Need the code
          on its own for another handout?{" "}
          <a href={qrImg} className="underline hover:text-primary" download>
            Download the QR image
          </a>
          .
        </p>
      </div>

      {/* The sheet. */}
      <div className="print-sheet max-w-[8.5in] mx-auto bg-white text-foreground border border-border rounded-lg shadow-lg print:border-0 print:rounded-none print:shadow-none px-8 py-10 sm:px-12 sm:py-14 text-center">
        <p className="text-accent text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold">
          Elder Excursions
        </p>
        <div className="w-16 h-px bg-accent mx-auto my-5" />

        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary leading-tight">
          Scotland Awaits
        </h1>
        <p className="font-heading text-xl sm:text-2xl italic text-foreground/80 mt-3">
          Highlands, castles, whisky &amp; the Scottish Open
        </p>

        <p className="text-sm sm:text-base text-muted-foreground mt-5">
          {facts.join("  ·  ")}
        </p>

        <ul className="mt-6 inline-block text-left text-sm sm:text-base text-foreground/90 space-y-1.5">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span className="text-accent" aria-hidden="true">
                ●
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="print-rule w-full h-px bg-border my-8" />

        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
          Scan for the full itinerary
        </h2>
        <p className="text-base sm:text-lg text-foreground/80 mt-2">
          and to join the interest list
        </p>

        <img
          src={qrImg}
          alt={`QR code linking to ${QR_TARGET}`}
          className="print-qr w-56 sm:w-64 h-auto mx-auto mt-6 border border-border"
        />

        <p className="text-base sm:text-lg font-medium text-foreground mt-5">
          elderexcursions.com/trips/scotland
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Dates &amp; pricing coming soon — add your name and Tracy will reach out first.
        </p>

        <div className="print-rule w-full h-px bg-border my-8" />

        <p className="text-sm sm:text-base text-foreground/80">
          Questions? Tracy Elder ·{" "}
          <span className="font-medium">tracyelder75@gmail.com</span>
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground italic mt-1.5">
          Thoughtfully Designed Journeys for Curious Travelers
        </p>
      </div>
    </div>
  );
};

export default ScotlandQrFlyer;
