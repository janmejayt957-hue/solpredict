import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { TrendingUp, Download, Lightbulb, Target, Activity, BarChart3, FileText, Award, DollarSign, Clock } from "lucide-react";

// Mock data for demonstration
const dailyData = [
  { day: 'Mon', current: 45, optimal: 58, weather: 'Sunny' },
  { day: 'Tue', current: 38, optimal: 52, weather: 'Partly Cloudy' },
  { day: 'Wed', current: 42, optimal: 55, weather: 'Sunny' },
  { day: 'Thu', current: 35, optimal: 48, weather: 'Cloudy' },
  { day: 'Fri', current: 48, optimal: 62, weather: 'Sunny' },
  { day: 'Sat', current: 52, optimal: 65, weather: 'Clear' },
  { day: 'Sun', current: 49, optimal: 63, weather: 'Sunny' },
];

const monthlyData = [
  { month: 'Jan', generation: 1200, efficiency: 78 },
  { month: 'Feb', generation: 1450, efficiency: 82 },
  { month: 'Mar', generation: 1800, efficiency: 85 },
  { month: 'Apr', generation: 2200, efficiency: 88 },
  { month: 'May', generation: 2650, efficiency: 91 },
  { month: 'Jun', generation: 2850, efficiency: 93 },
];

export const PredictionResults = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Prediction Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered insights for your solar installation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in delay-200">
          <Card className="glass-card p-6 text-center">
            <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">2,485</div>
            <div className="text-sm text-muted-foreground">kWh/Month Predicted</div>
            <Badge variant="secondary" className="mt-2">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15% vs Current
            </Badge>
          </Card>
          <Card className="glass-card p-6 text-center">
            <Award className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-accent mb-2">89%</div>
            <div className="text-sm text-muted-foreground">Efficiency Score</div>
            <Badge variant="outline" className="mt-2">Excellent</Badge>
          </Card>
          <Card className="glass-card p-6 text-center">
            <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-primary mb-2">$312</div>
            <div className="text-sm text-muted-foreground">Monthly Savings</div>
            <Badge variant="secondary" className="mt-2">Estimated</Badge>
          </Card>
          <Card className="glass-card p-6 text-center">
            <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-accent mb-2">4.2</div>
            <div className="text-sm text-muted-foreground">Years ROI</div>
            <Badge variant="outline" className="mt-2">Projected</Badge>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Generation Chart */}
          <Card className="glass-card p-6 animate-chart-enter">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Daily Generation Comparison
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="current" fill="hsl(var(--muted-foreground))" name="Current Setup" />
                  <Bar dataKey="optimal" fill="hsl(var(--primary))" name="Optimal Setup" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Monthly Trend */}
          <Card className="glass-card p-6 animate-chart-enter delay-200">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Monthly Generation Trend
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="generation" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                    name="Generation (kWh)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="glass-card p-8 mt-8 animate-fade-in delay-400">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-primary" />
            AI Recommendations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Optimal Tilt Angle</h4>
                  <p className="text-muted-foreground">Adjust to 35° for your location to increase generation by 12%</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Panel Orientation</h4>
                  <p className="text-muted-foreground">Face panels 15° west of south for optimal afternoon generation</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Seasonal Adjustment</h4>
                  <p className="text-muted-foreground">Consider adjustable mounting for 8% annual improvement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Expansion Opportunity</h4>
                  <p className="text-muted-foreground">Your roof can accommodate 25% more panels in the southeast section</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="solar-button">
              <FileText className="w-4 h-4 mr-2" />
              Download PDF Report
            </Button>
            <Button variant="outline" className="glass-card border-primary/30">
              <Download className="w-4 h-4 mr-2" />
              Export CSV Data
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};