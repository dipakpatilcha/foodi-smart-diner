import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-cafeteria.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-foreground">
                Best Cafeteria Management System & Corporate Cafeteria Management Solution
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your cafeteria operations with Foodiisoft - the leading cafeteria management system designed for corporate offices, educational institutions, hospitals, and multi-tenant facilities. Our comprehensive cafeteria management software streamlines meal ordering, billing, inventory management, and dining operations while enhancing customer experience through our advanced cafeteria system.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Active Cafeterias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">Daily Orders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Cafeteria Management System Dashboard" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;