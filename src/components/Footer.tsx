const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-xl font-bold mb-2">Elder Excursions, LLC</p>
        <p className="text-primary-foreground/70 text-sm mb-6">
          Thoughtfully Designed Journeys for Curious Travelers
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/80 mb-6">
          <a href="mailto:tracyelder75@gmail.com" className="hover:text-primary-foreground transition-colors">
            tracyelder75@gmail.com
          </a>
          <span className="hidden sm:inline text-primary-foreground/40">|</span>
          <a href="tel:706-207-2885" className="hover:text-primary-foreground transition-colors">
            706-207-2885
          </a>
        </div>
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} Elder Excursions, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
