import { Sun, Github, Twitter, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="w-8 h-8 text-primary animate-energy-pulse" />
              <span className="text-2xl font-bold gradient-text">SolarSage</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Advanced AI-powered solar energy prediction platform for optimized renewable energy generation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Predictions
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Analytics
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Reports
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                API Access
              </a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Documentation
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Tutorials
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Case Studies
              </a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink className="w-3 h-3" />
                Blog
              </a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                hello@solarsage.ai
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 SolarAI. All rights reserved. Built with sustainable technology.</p>
        </div>
      </div>
    </footer>
  );
};