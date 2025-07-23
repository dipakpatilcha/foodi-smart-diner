import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  GraduationCap, 
  Hospital, 
  Home,
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
  Shield
} from "lucide-react";

const solutions = [
  {
    icon: Building,
    title: "Corporate Offices",
    subtitle: "Best Cafeteria Management System for Corporate Offices",
    description: "Employee dining programs with our comprehensive cafeteria management software",
    features: [
      "Employee dining programs with comprehensive cafeteria management software",
      "Flexible meal plans and corporate cafeteria management solutions", 
      "Department-wise billing and cost allocation",
      "Productivity-focused dining with our advanced cafeteria system"
    ],
    stats: { clients: "200+", satisfaction: "98%" }
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions", 
    subtitle: "Complete Canteen Management System",
    description: "Student meal management and hostel dining solutions",
    features: [
      "Student meal management and hostel dining solutions",
      "Nutritional compliance and dietary tracking",
      "Mess management systems with our cafeteria management solution",
      "Campus-wide dining facility management"
    ],
    stats: { clients: "150+", satisfaction: "96%" }
  },
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    subtitle: "Specialized Cafeteria Management Software", 
    description: "Patient meal management and dietary restrictions tracking",
    features: [
      "Patient meal management and dietary restrictions tracking",
      "Staff cafeteria operations with our canteen management system",
      "Nutritional compliance and therapeutic diet management",
      "Multi-department dining coordination"
    ],
    stats: { clients: "100+", satisfaction: "99%" }
  },
  {
    icon: Home,
    title: "Multi-Tenant Complexes",
    subtitle: "Multi-Location Cafeteria Management Solution",
    description: "Shared dining facilities management",
    features: [
      "Shared dining facilities management",
      "Tenant-specific billing and payment processing", 
      "Scalable operations with our cafeteria management system",
      "Community dining solutions and event management"
    ],
    stats: { clients: "80+", satisfaction: "97%" }
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Cafeteria Management System Solutions by Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Android-based cafeteria management software eliminates operational bottlenecks and creates seamless dining experiences across multiple industries and locations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-background border-0 shadow-medium hover:shadow-large transition-all duration-300 group">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="flex space-x-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{solution.stats.clients}</div>
                        <div className="text-xs text-muted-foreground">Clients</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">{solution.stats.satisfaction}</div>
                        <div className="text-xs text-muted-foreground">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">{solution.title}</CardTitle>
                  <div className="text-sm font-medium text-primary mb-3">{solution.subtitle}</div>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-large">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Cafeteria Operations?</h3>
              <p className="text-lg mb-8 opacity-90">
                Join hundreds of organizations already using our cafeteria management system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Schedule Demo
                  <Calendar className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Sales
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Solutions;