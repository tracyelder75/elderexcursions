import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneysSection from "@/components/JourneysSection";
import IncludedSection from "@/components/IncludedSection";
import DomesticTripsSection from "@/components/DomesticTripsSection";
import DesignedForSection from "@/components/DesignedForSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneysSection />
      <IncludedSection />
      <DomesticTripsSection />
      <DesignedForSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
