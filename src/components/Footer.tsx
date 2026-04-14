const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-xl font-bold mb-2">Elder Excursions</p>
        <p className="text-primary-foreground/90 text-base mb-6">
          Thoughtfully Designed Journeys for Curious Travelers
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-base text-primary-foreground mb-6">
          <a href="mailto:elderexcursions@gmail.com" className="hover:opacity-80 transition-opacity">
            elderexcursions@gmail.com
          </a>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          © {new Date().getFullYear()} Elder Excursions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
