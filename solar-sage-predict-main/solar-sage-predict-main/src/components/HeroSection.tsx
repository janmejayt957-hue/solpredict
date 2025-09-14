import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap } from "lucide-react";
import heroImage from "@/assets/solar-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Floating solar elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sun className="w-12 h-12 text-primary animate-energy-pulse" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <Zap className="w-8 h-8 text-accent animate-energy-pulse" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">AI-Powered</span>
            <br />
            <span className="text-white">Solar Prediction</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of machine learning to predict solar energy output with unprecedented accuracy. 
            Optimize your solar installations for maximum efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="solar-button text-lg px-8 py-6 min-w-48"
            >
              Start Prediction
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card text-white border-white/30 hover:bg-white/10 text-lg px-8 py-6 min-w-48"
            >
              View Demo
            </Button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in delay-300">
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">98.5%</div>
            <div className="text-white/80">Prediction Accuracy</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-white/80">Solar Installations</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">15%</div>
            <div className="text-white/80">Efficiency Increase</div>
          </div>
        </div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};