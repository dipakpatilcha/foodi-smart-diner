import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="text-2xl font-bold text-background mb-4">
                  Foodiisoft
                </div>
                <p className="text-background/80 leading-relaxed">
                  The leading cafeteria management system designed for corporate offices, educational institutions, hospitals, and multi-tenant facilities.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-background">Solutions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Corporate Cafeterias
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Educational Institutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Healthcare Facilities
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Multi-Tenant Complexes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Food Courts
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-background">Features</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Mobile Ordering System
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Kitchen Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Analytics & Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Multi-Location Management
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Payment Integration
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-background">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-background/60" />
                  <span className="text-background/80">sales@foodiisoft.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-background/60" />
                  <span className="text-background/80">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-background/60" />
                  <span className="text-background/80">San Francisco, CA</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-background">Newsletter</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                  />
                  <Button variant="secondary">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © 2024 Foodiisoft. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;