import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const practiceSubLinks = [
    { name: "Corporate Law", slug: "corporate-law" },
    { name: "Property Law", slug: "property-law" },
    { name: "Family Law", slug: "family-law" },
    { name: "Taxation & GST", slug: "tax-law" },
    { name: "Criminal Defense", slug: "criminal-defense" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Branding */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative h-12 w-12 flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden rounded-md">
                <img
                  src="/lgo.jpg" 
                  alt="Araththaai Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-primary">Araththaai</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">AKM Associates & Legal</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">Home</Link>
            
            {/* Practice Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                to="/practice-areas" 
                className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors flex items-center gap-1 py-4"
              >
                Practice Areas <ChevronDown className="h-3 w-3" />
              </Link>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-background border border-border shadow-lg rounded-md py-2 w-56 animate-in fade-in duration-200">
                  {practiceSubLinks.map((sub, i) => (
                    <Link
                      key={i}
                      to={`/practice-areas/${sub.slug}`}
                      className="block px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted hover:text-secondary transition-all"
                    >
                      {sub.name}
                    </Link>
                  ))}
                  <div className="border-t border-border mt-1 pt-1">
                    <Link
                      to="/practice-areas"
                      className="block px-4 py-2 text-xs font-bold text-secondary hover:bg-muted"
                    >
                      All Practice Areas &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/attorneys" className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">Attorneys</Link>
            <Link to="/case-results" className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">Case Results</Link>
            <Link to="/blog" className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">Insights</Link>
            <Link to="/about" className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">About</Link>
            <Link to="/contact" className="text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">Contact</Link>
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/sign-in">
              <Button variant="ghost" className="text-xs uppercase tracking-wider font-semibold text-primary hover:text-secondary h-10">Admin Access</Button>
            </Link>
            <Link to="/book-consultation">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs uppercase tracking-wider font-semibold px-5 h-10 rounded">Book Consultation</Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">Home</Link>
            <Link to="/practice-areas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">Practice Areas</Link>
            <Link to="/attorneys" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">Attorneys</Link>
            <Link to="/case-results" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">Case Results</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">Insights</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">Contact</Link>
            <div className="mt-4 flex flex-col space-y-2 px-3 pb-3">
              <Link to="/sign-in" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full justify-center text-xs uppercase tracking-wider font-semibold">Admin Access</Button>
              </Link>
              <Link to="/book-consultation" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center bg-primary text-primary-foreground text-xs uppercase tracking-wider font-semibold">Book Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
