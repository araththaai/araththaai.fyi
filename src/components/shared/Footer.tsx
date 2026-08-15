import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-foreground pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-primary/10 p-1">
                <img 
                  src="/lgo.jpg" 
                  alt="Araththaai Logo" 
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-primary">ARATHTHAAI</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">AKM ASSOCIATES</span>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AKM Associates & Legal Consultants. Delivering authoritative legal advisory, compliance strategies, and trial advocacy under the highest professional standards.
            </p>
            <div className="flex space-x-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
              <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
            </div>
          </div>

          {/* Directory Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-6 text-primary uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/attorneys" className="hover:text-secondary transition-colors">Our Attorneys</Link></li>
              <li><Link to="/case-results" className="hover:text-secondary transition-colors">Case Results</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">Insights & Hub</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-6 text-primary uppercase tracking-wider">Practice Areas</h3>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li><Link to="/practice-areas/corporate-law" className="hover:text-secondary transition-colors">Corporate Governance</Link></li>
              <li><Link to="/practice-areas/property-law" className="hover:text-secondary transition-colors">Property & Titles</Link></li>
              <li><Link to="/practice-areas/family-law" className="hover:text-secondary transition-colors">Family & Matrimonial</Link></li>
              <li><Link to="/practice-areas/tax-law" className="hover:text-secondary transition-colors">Taxation & GST</Link></li>
              <li><Link to="/practice-areas/criminal-defense" className="hover:text-secondary transition-colors">Criminal Defense</Link></li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-6 text-primary uppercase tracking-wider">Contact Info</h3>
            <ul className="space-y-4 text-xs text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>123 Legal Avenue, Business District, <br/>Chennai, Tamil Nadu 600001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>consult@araththaai.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Footer Disclaimer Panel */}
        <div className="border-t border-border pt-8 pb-6 flex flex-col gap-4 text-[10px] text-muted-foreground">
          <div className="flex items-start gap-2 bg-card p-4 rounded border border-border">
            <AlertCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Attorney Advertising Disclaimer:</strong> Under rules of professional conduct in certain jurisdictions, contents on this site may be considered attorney advertising. Prior outcomes achieved do not guarantee similar results. Consultation bookings do not constitute a binding attorney-client relationship.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Araththaai (AKM Associates). All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/disclaimer" className="hover:text-secondary transition-colors">Advertising Disclaimer</Link>
              <Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
