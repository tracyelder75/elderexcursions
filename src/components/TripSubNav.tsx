type SubNavLink = { label: string; href: string };

type TripSubNavProps = {
  links: SubNavLink[];
  cta: SubNavLink;
  /** Accessible name for the nav landmark, e.g. "Scotland 2028 page sections". */
  ariaLabel: string;
};

/**
 * Secondary, page-level navigation for a trip page. Sits in the white space
 * beneath the hero image and the stats bar, and sticks under the global navbar
 * as the visitor scrolls.
 */
const TripSubNav = ({ links, cta, ariaLabel }: TripSubNavProps) => {
  return (
    <nav
      aria-label={ariaLabel}
      className="sticky z-40 bg-background/95 backdrop-blur-md border-b border-border"
      style={{ top: "var(--nav-height)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-3">
          {/* Section links scroll horizontally on narrow screens... */}
          <div className="flex-1 min-w-0 flex items-center gap-6 overflow-x-auto whitespace-nowrap">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          {/* ...while the CTA stays pinned and fully visible. */}
          <a
            href={cta.href}
            className="shrink-0 bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {cta.label}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TripSubNav;
