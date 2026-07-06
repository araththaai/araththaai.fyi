import Link from "next/link";
import { Scale, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-secondary" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">Araththaai</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-gray-400">AKM Associates & Legal</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Providing premium, transparent, and authoritative legal consultancy services for individuals and enterprises worldwide.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
              <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About the Firm</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition-colors">Practice Areas</Link></li>
              <li><Link href="/insights" className="hover:text-secondary transition-colors">Legal Insights</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Practice Areas</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/services/corporate-law" className="hover:text-secondary transition-colors">Corporate Law</Link></li>
              <li><Link href="/services/property-law" className="hover:text-secondary transition-colors">Property Law</Link></li>
              <li><Link href="/services/family-law" className="hover:text-secondary transition-colors">Family Law</Link></li>
              <li><Link href="/services/taxation" className="hover:text-secondary transition-colors">Taxation & GST</Link></li>
              <li><Link href="/services/startup-compliance" className="hover:text-secondary transition-colors">Startup Compliance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>123 Legal Avenue, Business District, <br/>Chennai, TN 600001, India</span>
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

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Araththaai – AKM Associates. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
