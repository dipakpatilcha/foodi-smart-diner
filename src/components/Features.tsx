import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Smartphone, 
  ChefHat, 
  Building2, 
  MapPin, 
  BarChart3, 
  CreditCard,
  Clock,
  Shield,
  Users,
  Utensils,
  TrendingUp,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Smart Mobile Cafeteria System",
    description: "Self-service ordering from smartphones with real-time menu updates, pre-order capabilities, and seamless digital payment integration.",
    highlights: ["Self-Service Ordering", "Menu Management", "Pre-order Capabilities", "Digital Payment Integration"]
  },
  {
    icon: ChefHat,
    title: "Kitchen Management & Chef Display",
    description: "Real-time order display for kitchen staff with order tracking, inventory integration, and standardized recipe management.",
    highlights: ["Real-Time Order Display", "Order Tracking", "Inventory Integration", "Recipe Management"]
  },
  {
    icon: Building2,
    title: "Corporate Cafeteria Management Solutions",
    description: "Comprehensive subscription-based dining options with departmental billing, nutritional tracking, and attendance integration.",
    highlights: ["Employee Meal Management", "Departmental Billing", "Nutritional Tracking", "Attendance Integration"]
  },
  {
    icon: MapPin,
    title: "Multi-Location Management",
    description: "Centralized control for multiple cafeterias with location-specific menus and consolidated reporting across all sites.",
    highlights: ["Centralized Control", "Location-Specific Menus", "Consolidated Reporting", "Chain Management"]
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reporting",
    description: "Track revenue, optimize inventory, analyze customer behavior, and generate comprehensive financial reports for data-driven decisions.",
    highlights: ["Sales Analytics", "Inventory Optimization", "Customer Behavior Analysis", "Financial Reporting"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with data encryption, PCI compliance, user access control, and complete audit trail capabilities.",
    highlights: ["Data Encryption", "PCI Compliance", "User Access Control", "Audit Trail"]
  }
];

const additionalFeatures = [
  { icon: CreditCard, title: "Multiple Payment Options", description: "Support for various payment methods" },
  { icon: Clock, title: "Real-time Updates", description: "Instant synchronization across all devices" },
  { icon: Users, title: "User Management", description: "Role-based access and permissions" },
  { icon: Utensils, title: "Menu Customization", description: "Flexible menu management system" },
  { icon: TrendingUp, title: "Performance Analytics", description: "Detailed insights and metrics" },
  { icon: Zap, title: "Quick Setup", description: "Fast deployment and configuration" }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive Cafeteria Management System Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Foodiisoft is recognized as the best cafeteria management system for corporate offices, offering more than just canteen management software - it's a complete ecosystem that revolutionizes how organizations manage their dining facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {additionalFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <feature.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;