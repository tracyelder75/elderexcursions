import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Journeys", href: "#journeys" },
    { label: "What's Included", href: "#included" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-heading text-xl font-bold tracking-wide text-primary">
          Elder Excursions
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/trips/england-wales"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Wales/England Trip
          </Link>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Request Info
          </a>
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/trips/england-wales"
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
          >
            Wales/England Trip
          </Link>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium text-center"
          >
            Request Info
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
