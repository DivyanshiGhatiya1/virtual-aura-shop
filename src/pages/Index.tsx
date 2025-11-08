import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TryOnSection from "@/components/TryOnSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TryOnSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
