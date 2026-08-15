import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAssociatesDropdownOpen, setIsAssociatesDropdownOpen] = useState(false);
  const [isMobilePracticeOpen, setIsMobilePracticeOpen] = useState(false);
  const [isMobileAssociatesOpen, setIsMobileAssociatesOpen] = useState(false);

  const practiceSubLinks = [
    { name: "Corporate Law", slug: "corporate-law" },
    { name: "Property Law", slug: "property-law" },
    { name: "Family Law", slug: "family-law" },
    { name: "Taxation & GST", slug: "tax-law" },
    { name: "Criminal Defense", slug: "criminal-defense" }
  ];

  const associatesSubLinks = [
    { name: "Attorneys", path: "/attorneys" },
    { name: "Case Results", path: "/case-results" },
    { name: "Insights", path: "/blog" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Branding */}
          <div className="flex items-center shrink-0">
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
          <div className="hidden lg:flex items-center justify-center flex-grow mx-4 xl:mx-8 space-x-1 xl:space-x-4">
            <Link to="/" className="px-3 py-2 text-[10px] xl:text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">Home</Link>
            
            {/* Practice Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                to="/practice-areas" 
                className="px-3 py-2 text-[10px] xl:text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors flex items-center gap-1"
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

            {/* Associates Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsAssociatesDropdownOpen(true)}
              onMouseLeave={() => setIsAssociatesDropdownOpen(false)}
            >
              <button 
                type="button"
                className="px-3 py-2 text-[10px] xl:text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors flex items-center gap-1 focus:outline-none cursor-pointer"
              >
                Associates <ChevronDown className="h-3 w-3" />
              </button>
              {isAssociatesDropdownOpen && (
                <div className="absolute top-full left-0 bg-background border border-border shadow-lg rounded-md py-2 w-56 animate-in fade-in duration-200">
                  {associatesSubLinks.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.path}
                      className="block px-4 py-2 text-xs font-semibold text-foreground hover:bg-muted hover:text-secondary transition-all"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center justify-end space-x-3 shrink-0">
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
            
            {/* Mobile Practice Areas Dropdown */}
            <div>
              <button 
                type="button"
                onClick={() => setIsMobilePracticeOpen(!isMobilePracticeOpen)}
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary focus:outline-none cursor-pointer"
              >
                <span>Practice Areas</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobilePracticeOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobilePracticeOpen && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-secondary/20 ml-3">
                  {practiceSubLinks.map((sub, i) => (
                    <Link
                      key={i}
                      to={`/practice-areas/${sub.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block py-1.5 text-xs text-muted-foreground hover:text-secondary"
                    >
                      {sub.name}
                    </Link>
                  ))}
                  <Link
                    to="/practice-areas"
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 text-xs font-bold text-secondary"
                  >
                    All Practice Areas &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Associates Dropdown */}
            <div>
              <button 
                type="button"
                onClick={() => setIsMobileAssociatesOpen(!isMobileAssociatesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary focus:outline-none cursor-pointer"
              >
                <span>Associates</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileAssociatesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileAssociatesOpen && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-secondary/20 ml-3">
                  {associatesSubLinks.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-1.5 text-xs text-muted-foreground hover:text-secondary"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
