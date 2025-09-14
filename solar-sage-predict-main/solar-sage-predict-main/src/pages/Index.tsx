import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { PredictionForm } from "@/components/PredictionForm";
import { PredictionResults } from "@/components/PredictionResults";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <PredictionForm />
      <PredictionResults />
      <Footer />
    </main>
  );
};

export default Index;