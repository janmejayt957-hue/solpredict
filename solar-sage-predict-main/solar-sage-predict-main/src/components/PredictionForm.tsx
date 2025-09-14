import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { MapPin, Settings, Calendar, Compass, Ruler, RotateCw, Zap } from "lucide-react";
import { useState } from "react";

export const PredictionForm = () => {
  const [tiltAngle, setTiltAngle] = useState([30]);
  const [azimuthAngle, setAzimuthAngle] = useState([180]);
  const [panelArea, setPanelArea] = useState([50]);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Solar Power</span> Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your location and panel specifications to get AI-powered predictions
          </p>
        </div>

        <Card className="glass-card p-8 animate-fade-in delay-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Location Details</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="city">City or Address</Label>
                  <Input 
                    id="city"
                    placeholder="Enter city name or address"
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input 
                      id="latitude"
                      placeholder="e.g., 37.7749"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input 
                      id="longitude"
                      placeholder="e.g., -122.4194"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Configuration */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Panel Configuration</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Ruler className="w-4 h-4 text-primary" />
                    <Label>Panel Surface Area: {panelArea[0]} m²</Label>
                  </div>
                  <Slider
                    value={panelArea}
                    onValueChange={setPanelArea}
                    max={200}
                    min={10}
                    step={5}
                    className="mt-3"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <RotateCw className="w-4 h-4 text-primary" />
                    <Label>Tilt Angle: {tiltAngle[0]}°</Label>
                  </div>
                  <Slider
                    value={tiltAngle}
                    onValueChange={setTiltAngle}
                    max={90}
                    min={0}
                    step={1}
                    className="mt-3"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-primary" />
                    <Label>Azimuth Angle: {azimuthAngle[0]}°</Label>
                  </div>
                  <Slider
                    value={azimuthAngle}
                    onValueChange={setAzimuthAngle}
                    max={360}
                    min={0}
                    step={1}
                    className="mt-3"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Prediction Period */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Prediction Period</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="start-date">Start Date</Label>
                <Input 
                  id="start-date"
                  type="date"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="end-date">End Date</Label>
                <Input 
                  id="end-date"
                  type="date"
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Generate Prediction Button */}
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="solar-button text-lg px-12 py-6"
            >
              <Zap className="w-5 h-5 mr-2" />
              Generate AI Prediction
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};