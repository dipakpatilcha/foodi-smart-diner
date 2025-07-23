import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap,
  Database,
  Wifi,
  RefreshCw,
  Lock,
  CheckCircle,
  Settings,
  Globe,
  CreditCard
} from "lucide-react";

const technologyFeatures = [
  {
    icon: Smartphone,
    title: "Android-Based Platform Advantages",
    description: "Our cafeteria management system works seamlessly across all devices with advanced capabilities",
    features: [
      {
        icon: Globe,
        title: "Cross-Device Compatibility",
        description: "Works seamlessly on tablets, smartphones, and desktops"
      },
      {
        icon: Wifi,
        title: "Offline Capabilities", 
        description: "Continue cafeteria operations during connectivity issues"
      },
      {
        icon: RefreshCw,
        title: "Cloud Synchronization",
        description: "Real-time data sync across devices with our cafeteria management solution"
      },
      {
        icon: Zap,
        title: "Regular Updates",
        description: "Continuous feature enhancements for optimal performance"
      }
    ]
  },
  {
    icon: Settings,
    title: "Integration Capabilities",
    description: "Seamlessly connect with your existing business systems and workflows",
    features: [
      {
        icon: Database,
        title: "ERP Integration",
        description: "Connect our canteen management system with existing business systems"
      },
      {
        icon: CheckCircle,
        title: "HR System Integration",
        description: "Employee data synchronization with our corporate cafeteria management software"
      },
      {
        icon: CreditCard,
        title: "Accounting Software",
        description: "Automated financial reporting and cost tracking"
      },
      {
        icon: Smartphone,
        title: "POS System Integration",
        description: "Seamless payment processing with our cafeteria system"
      }
    ]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures to protect your data and ensure compliance",
    features: [
      {
        icon: Lock,
        title: "Data Encryption",
        description: "Secure customer and business information in our cafeteria management software"
      },
      {
        icon: CreditCard,
        title: "PCI Compliance",
        description: "Safe payment processing standards"
      },
      {
        icon: CheckCircle,
        title: "User Access Control",
        description: "Role-based permissions for different user types"
      },
      {
        icon: Database,
        title: "Audit Trail",
        description: "Complete transaction tracking and compliance reporting"
      }
    ]
  }
];

const techStats = [
  { label: "Uptime Guarantee", value: "99.9%", icon: Cloud },
  { label: "Data Centers", value: "12+", icon: Database },
  { label: "API Response Time", value: "<100ms", icon: Zap },
  { label: "Security Certifications", value: "ISO 27001", icon: Shield }
];

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Advanced Android-Based Cafeteria Management Software
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge technology with enterprise-grade security, seamless integrations, and unmatched reliability for your cafeteria management needs.
          </p>
        </div>

        {/* Technology Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStats.map((stat, index) => (
            <Card key={index} className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Features */}
        <div className="space-y-12">
          {technologyFeatures.map((section, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-medium">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <section.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl mb-4">{section.title}</CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Benefits */}
        <div className="mt-16">
          <Card className="bg-gradient-hero border-0 shadow-large">
            <CardContent className="py-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Android-Based Platform?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="space-y-3">
                  <CheckCircle className="h-8 w-8 text-success mx-auto" />
                  <h4 className="font-semibold">Superior Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized for speed and reliability across all devices
                  </p>
                </div>
                <div className="space-y-3">
                  <Shield className="h-8 w-8 text-success mx-auto" />
                  <h4 className="font-semibold">Enterprise Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Bank-level security with comprehensive compliance
                  </p>
                </div>
                <div className="space-y-3">
                  <Zap className="h-8 w-8 text-success mx-auto" />
                  <h4 className="font-semibold">Rapid Deployment</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick setup and seamless integration with existing systems
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;