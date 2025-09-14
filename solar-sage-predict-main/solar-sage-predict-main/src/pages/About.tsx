import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Globe,
  Heart,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-10 h-10 text-primary" />
              <h1 className="text-4xl md:text-6xl font-bold">
                About <span className="gradient-text">SolarSage</span>
              </h1>
              <Globe className="w-10 h-10 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're on a mission to accelerate the adoption of solar energy through intelligent 
              AI-powered predictions and optimization tools.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-card p-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize solar energy optimization through cutting-edge artificial intelligence, 
                making renewable energy more accessible and efficient for everyone. We believe that 
                data-driven insights can transform how we harness the power of the sun.
              </p>
            </Card>

            <Card className="glass-card p-8 animate-fade-in delay-200">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A world where every solar installation is perfectly optimized, where predictive 
                analytics guide sustainable energy decisions, and where AI accelerates our 
                transition to a clean energy future.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Impact by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "98.5%", label: "Prediction Accuracy", icon: Award },
              { number: "50K+", label: "Installations Optimized", icon: Zap },
              { number: "15%", label: "Average Efficiency Gain", icon: Target },
              { number: "24/7", label: "Real-time Monitoring", icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology</h2>
          <Card className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">Neural Networks</Badge>
                  <Badge variant="secondary">Regression Models</Badge>
                  <Badge variant="secondary">Time Series</Badge>
                  <Badge variant="secondary">Deep Learning</Badge>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Weather APIs</Badge>
                  <Badge variant="outline">Satellite Data</Badge>
                  <Badge variant="outline">Geographic Info</Badge>
                  <Badge variant="outline">Solar Physics</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">hello@solarsage.ai</p>
            </Card>
            <Card className="glass-card p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </Card>
            <Card className="glass-card p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/predict">
              <Button size="lg" className="solar-button">
                Try Our Platform
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};