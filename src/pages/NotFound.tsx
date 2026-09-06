import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Netlify's SPA fallback answers unknown URLs with HTTP 200, so without
          this a bad URL is a soft 404 carrying the homepage's title and meta —
          exactly the kind of duplicate Google will index instead of "/". */}
      <Helmet>
        <title>Page Not Found – Elder Excursions</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-32">
        <div className="text-center">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-medium mb-3">404</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page not found
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
