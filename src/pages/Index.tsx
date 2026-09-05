import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneysSection from "@/components/JourneysSection";
import IncludedSection from "@/components/IncludedSection";
import DifferentWaySection from "@/components/DifferentWaySection";
import DesignedForSection from "@/components/DesignedForSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Elder Excursions – Small-Group Journeys to England, Wales, Scotland & Ireland</title>
        <meta name="description" content="Elder Excursions offers thoughtfully designed small-group travel to England, Wales, Scotland, and Ireland. Carefully curated itineraries, comfortable pacing, and unforgettable history-themed experiences." />
        <meta property="og:url" content="https://elderexcursions.com/" />
        <meta property="og:title" content="Elder Excursions – Small-Group History Journeys to the British Isles" />
        <meta property="og:description" content="Thoughtfully designed small-group travel to England, Wales, Scotland, and Ireland. Curated itineraries, comfortable pacing, and unforgettable memories." />
        <link rel="canonical" href="https://elderexcursions.com/" />
      </Helmet>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:text-base"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        {/* Section order mirrors the global nav: Journeys, What We Offer
            (What's Included / A Different Way to Travel / Designed for
            Travelers Who…), About Us (About Elder Excursions / What People
            Are Saying), then Request Info. */}
        <JourneysSection />
        <IncludedSection />
        <DifferentWaySection />
        <DesignedForSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
