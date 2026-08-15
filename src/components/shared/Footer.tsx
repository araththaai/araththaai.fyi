"use client";

import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-white/10 p-1">
                <img 
                  src="/lgo.jpg" 
                  alt="Araththaai Logo" 
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">ARATHTHAAI</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-gray-400">AKM ASSOCIATES</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              AKM ASSOCIATES AND LEGAL CONSULTANTS. Providing premium, trustworthy, and authoritative legal consultation with a commitment to excellence.
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
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/knowledge-hub" className="hover:text-secondary transition-colors">Knowledge Hub</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/services#corporate-law" className="hover:text-secondary transition-colors">Corporate Law</Link></li>
              <li><Link to="/services#civil-litigation" className="hover:text-secondary transition-colors">Civil Litigation</Link></li>
              <li><Link to="/services#family-law" className="hover:text-secondary transition-colors">Family Law</Link></li>
              <li><Link to="/services#real-estate" className="hover:text-secondary transition-colors">Real Estate</Link></li>
              <li><Link to="/services#intellectual-property" className="hover:text-secondary transition-colors">Intellectual Property</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>123 Legal Avenue, Business District, <br/>City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>consult@araththaai.fyi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Araththaai (AKM Associates). All rights reserved. | Developed by AustralAI</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
