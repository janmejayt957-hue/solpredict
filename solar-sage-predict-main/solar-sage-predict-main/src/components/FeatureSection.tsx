import { Card } from "@/components/ui/card";
import { 
  Brain, 
  MapPin, 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3,
  Sun,
  Cloud
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Modeling",
    description: "Machine learning algorithms trained on millions of data points for accurate predictions",
    color: "text-primary"
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Precise geographic analysis considering latitude, climate patterns, and local weather",
    color: "text-accent"
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Real-time recommendations to maximize your solar panel efficiency and output",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Weather Integration",
    description: "Live weather data and forecasts integrated into prediction models",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    description: "Instant calculations and updates as you adjust panel configurations",
    color: "text-primary"
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Comprehensive analytics with downloadable reports in multiple formats",
    color: "text-accent"
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by <span className="gradient-text">Advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform combines machine learning, weather analytics, and solar physics 
            to deliver the most accurate predictions in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-2xl bg-gradient-solar">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20 animate-fade-in delay-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Technology Stack</h3>
            <p className="text-muted-foreground">Built with cutting-edge technologies</p>
          </div>

          <Card className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <Sun className="w-12 h-12 text-primary mx-auto animate-energy-pulse" />
                <h4 className="font-semibold">Solar Physics</h4>
                <p className="text-sm text-muted-foreground">Advanced irradiance modeling</p>
              </div>
              <div className="space-y-2">
                <Brain className="w-12 h-12 text-accent mx-auto" />
                <h4 className="font-semibold">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">Neural networks & regression</p>
              </div>
              <div className="space-y-2">
                <Cloud className="w-12 h-12 text-primary mx-auto" />
                <h4 className="font-semibold">Weather API</h4>
                <p className="text-sm text-muted-foreground">Real-time meteorological data</p>
              </div>
              <div className="space-y-2">
                <BarChart3 className="w-12 h-12 text-accent mx-auto" />
                <h4 className="font-semibold">Analytics</h4>
                <p className="text-sm text-muted-foreground">Statistical modeling & forecasting</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};