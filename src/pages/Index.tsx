import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneysSection from "@/components/JourneysSection";
import IncludedSection from "@/components/IncludedSection";
import DesignedForSection from "@/components/DesignedForSection";
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
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneysSection />
      <IncludedSection />
      <DesignedForSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
