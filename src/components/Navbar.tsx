import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

type NavItem = { label: string; to: string };
type NavGroup = { label: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    label: "Journeys",
    items: [
      { label: "All Journeys", to: "/#journeys" },
      { label: "Wales & England", to: "/trips/england-wales" },
      { label: "Scotland", to: "/trips/scotland" },
    ],
  },
  {
    label: "What We Offer",
    items: [
      { label: "What's Included", to: "/#included" },
      { label: "A Different Way to Travel", to: "/#what-we-offer" },
      { label: "Designed for Travelers Who…", to: "/#designed-for" },
    ],
  },
  {
    label: "About Us",
    items: [
      { label: "About EE", to: "/#about" },
      { label: "What People Are Saying", to: "/#testimonials" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const desktopRef = useRef<HTMLDivElement>(null);

  // Close any open dropdown on outside click or Escape.
  useEffect(() => {
    if (!openGroup) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!desktopRef.current?.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openGroup]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="font-heading text-xl font-bold tracking-wide text-primary">
          Elder Excursions
        </Link>

        {/* Desktop */}
        <div ref={desktopRef} className="hidden md:flex items-center gap-8">
          {navGroups.map((group) => {
            const isOpen = openGroup === group.label;
            const menuId = `nav-menu-${group.label.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup((cur) => (cur === group.label ? null : cur))}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(isOpen ? null : group.label)}
                  className="flex items-center gap-1 text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {group.label}
                  <ChevronDown
                    size={16}
                    aria-hidden="true"
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id={menuId}
                  hidden={!isOpen}
                  className="absolute left-0 top-full min-w-56 rounded-md border border-border bg-background py-2 shadow-lg"
                >
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpenGroup(null)}
                      className="block whitespace-nowrap px-4 py-2.5 text-base font-medium text-muted-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <Link
            to="/#contact"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-base font-medium hover:opacity-90 transition-opacity"
          >
            Request Info
          </Link>
        </div>

        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
          {navGroups.map((group) => (
            <div key={group.label} className="py-1">
              <p className="pt-3 pb-1 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                {group.label}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 text-base font-medium text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 bg-primary text-primary-foreground px-5 py-3 rounded-md text-base font-medium text-center"
          >
            Request Info
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
