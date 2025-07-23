import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const faqs = [
  {
    question: "What is a cafeteria management system?",
    answer: "A cafeteria management system is comprehensive software that automates and streamlines all aspects of cafeteria operations, including ordering, billing, inventory management, and customer service. Our cafeteria management solution provides end-to-end automation for dining facilities, from mobile ordering and kitchen displays to analytics and reporting."
  },
  {
    question: "How does our cafeteria management software improve efficiency?",
    answer: "Our cafeteria management software eliminates manual processes through automated ordering, real-time kitchen displays, inventory tracking, and digital payment processing. This reduces wait times by up to 70%, decreases operational costs by 40%, and improves overall customer satisfaction significantly."
  },
  {
    question: "Can your canteen management system handle multiple locations?",
    answer: "Yes, our multi-location cafeteria management solution supports operations across multiple sites with centralized management, location-specific customization, and consolidated reporting capabilities. You can manage hundreds of locations from a single dashboard while maintaining local flexibility."
  },
  {
    question: "Is this the best cafeteria management system for corporate offices?",
    answer: "Absolutely. Our corporate cafeteria management software is specifically designed for corporate environments with features like employee meal management systems, departmental billing, seamless integration with HR systems, and advanced analytics tailored for corporate dining operations."
  },
  {
    question: "What makes your Android-based cafeteria management software unique?",
    answer: "Our Android-based cafeteria management software offers superior flexibility, offline capabilities, and cross-device compatibility. It works seamlessly on tablets, smartphones, and desktops, ensuring uninterrupted operations even during connectivity issues, making it the ideal cafeteria system for modern businesses."
  },
  {
    question: "What types of reports does the cafeteria management solution generate?",
    answer: "Our cafeteria management solution provides comprehensive analytics including sales reports, inventory usage tracking, customer behavior analysis, financial performance metrics, popular item insights, peak hour analytics, and profit & loss statements for data-driven decision making."
  },
  {
    question: "How quickly can the system be implemented?",
    answer: "Implementation typically takes 2-4 weeks depending on complexity and customization requirements. Our team provides complete setup, data migration, staff training, and ongoing support to ensure smooth transition to your new cafeteria management system."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 technical support, regular system updates, staff training, and dedicated account management. Our support team includes cafeteria operations experts who understand the unique challenges of food service management."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our cafeteria management system and how it can transform your dining operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-background border-0 shadow-medium">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-background border-0 shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl">Need More Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Can't find the answer you're looking for? Our expert team is here to help you with any questions about our cafeteria management system.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Live Chat Support
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="mr-3 h-5 w-5" />
                    Schedule a Call
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Mail className="mr-3 h-5 w-5" />
                    Email Support
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-large">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Experience the best cafeteria management system with a free demo
                </p>
                <Button size="lg" variant="secondary" className="w-full">
                  Get Free Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;