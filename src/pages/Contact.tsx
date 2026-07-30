import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our team is ready to provide you with the expert legal counsel you need. Schedule a consultation or reach out with your inquiries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Reach Out to Us</h2>
              <p className="text-muted-foreground mb-8">
                We handle every inquiry with strict confidentiality. Contact our office directly via phone or email during our business hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-foreground">Office Address</h3>
                    <p className="mt-1 text-muted-foreground">
                      123 Legal Avenue, Business District<br />
                      Chennai, Tamil Nadu 600001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-foreground">Phone</h3>
                    <p className="mt-1 text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 44 2345 6789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-foreground">Email</h3>
                    <p className="mt-1 text-muted-foreground">consult@araththaai.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-foreground">Business Hours</h3>
                    <p className="mt-1 text-muted-foreground">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="bg-surface p-8 rounded-xl border border-border shadow-sm">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <input type="email" id="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input type="text" id="subject" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="How can we help you?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Please provide details about your inquiry..." />
              </div>
              
              <Button type="button" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
