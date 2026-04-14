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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-medium focus:text-base"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <JourneysSection />
        <IncludedSection />
        <DesignedForSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
