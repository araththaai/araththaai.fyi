import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/lib/LanguageContext";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAssociatesDropdownOpen, setIsAssociatesDropdownOpen] = useState(false);
  const [isMobilePracticeOpen, setIsMobilePracticeOpen] = useState(false);
  const [isMobileAssociatesOpen, setIsMobileAssociatesOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  const practiceSubLinks = [
    { 
      name: language === "en" ? "Corporate & Commercial" 
            : language === "ta" ? "கார்ப்பரேட் மற்றும் வணிகம்" 
            : "कॉर्पोरेट और व्यावसायिक मामले", 
      slug: "corporate-law" 
    },
    { 
      name: language === "en" ? "Civil & Property Matters" 
            : language === "ta" ? "சிவில் மற்றும் சொத்து விவகாரங்கள்" 
            : "सिविल और संपत्ति मामले", 
      slug: "property-law" 
    },
    { 
      name: language === "en" ? "HR & CE Cases" 
            : language === "ta" ? "HR & CE வழக்குகள்" 
            : "एचआर एंड सीई मामले", 
      slug: "hr-ce" 
    },
    { 
      name: language === "en" ? "Trial Defence & Litigation" 
            : language === "ta" ? "வழக்கு விசாரணை & தற்காப்பு" 
            : "मुकदमा और आपराधिक बचाव", 
      slug: "criminal-defense" 
    },
    { 
      name: language === "en" ? "Taxation & GST" 
            : language === "ta" ? "வரிவிதிப்பு மற்றும் ஜிஎஸ்டி" 
            : "कराधान और जीएसटी", 
      slug: "tax-law" 
    }
  ];

  const associatesSubLinks = [
    { 
      name: language === "en" ? "Attorneys" 
            : language === "ta" ? "வழக்கறிஞர்கள்" 
            : "वकील", 
      path: "/attorneys" 
    },
    { 
      name: language === "en" ? "Case Results" 
            : language === "ta" ? "வழக்கு முடிவுகள்" 
            : "मामलों के परिणाम", 
      path: "/case-results" 
    },
    { 
      name: language === "en" ? "Insights / Blog" 
            : language === "ta" ? "சட்டக் கட்டுரைகள்" 
            : "लेख एवं ब्लॉग", 
      path: "/blog" 
    },
    { 
      name: language === "en" ? "About Us" 
            : language === "ta" ? "எங்களைப் பற்றி" 
            : "हमारे बारे में", 
      path: "/about" 
    },
    { 
      name: language === "en" ? "Contact Us" 
            : language === "ta" ? "தொடர்புகொள்ள" 
            : "संपर्क करें", 
      path: "/contact" 
    }
  ];

  const currentLangLabel: Record<Language, string> = {
    en: "English (Default)",
    hi: "हिन्दी",
    as: "অসমীয়া",
    bn: "বাংলা",
    gu: "ગુજરાતી",
    kn: "ಕನ್ನಡ",
    ml: "മലയാളം",
    mr: "मराठी",
    or: "ଓଡ଼ିଆ",
    pa: "ਪੰਜਾਬੀ",
    ta: "தமிழ்",
    te: "తెలుగు"
  };

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
            <Link to="/" className="px-3 py-2 text-[10px] xl:text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors">
              {t("nav.home")}
            </Link>
            
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
                {t("nav.practiceAreas")} <ChevronDown className="h-3 w-3" />
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
                      {t("nav.allPractice")} &rarr;
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
                className="px-3 py-2 text-[10px] xl:text-xs uppercase tracking-wider font-semibold text-foreground hover:text-secondary transition-colors flex items-center gap-1 focus:outline-none cursor-pointer animate-none bg-transparent border-none"
              >
                {t("nav.associates")} <ChevronDown className="h-3 w-3" />
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
            {/* Language Switcher Dropdown */}
            <div 
              className="relative notranslate"
              translate="no"
              onMouseEnter={() => setIsLangDropdownOpen(true)}
              onMouseLeave={() => setIsLangDropdownOpen(false)}
            >
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted text-[10px] xl:text-xs font-bold text-secondary hover:text-primary transition-all cursor-pointer select-none"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{currentLangLabel[language]}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 pt-2 z-50">
                  <div className="bg-background border border-border shadow-lg rounded-xl py-2 w-44 max-h-60 overflow-y-auto animate-in fade-in duration-200">
                    {(["en", "hi", "as", "bn", "gu", "kn", "ml", "mr", "or", "pa", "ta", "te"] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-muted transition-all cursor-pointer border-none bg-transparent ${
                          language === lang ? "text-secondary font-bold" : "text-foreground"
                        }`}
                      >
                        {currentLangLabel[lang]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/sign-in">
              <Button variant="ghost" className="text-xs uppercase tracking-wider font-semibold text-primary hover:text-secondary h-10 cursor-pointer">
                {language === "en" ? "Admin" : language === "ta" ? "நிர்வாகி" : "एडमिन"}
              </Button>
            </Link>
            <Link to="/book-consultation">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/95 text-xs uppercase tracking-wider font-semibold px-5 h-10 rounded cursor-pointer">
                {t("nav.bookConsultation")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language Switcher for Mobile */}
            <div className="relative notranslate" translate="no">
              <button
                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border bg-card text-xs font-bold text-secondary cursor-pointer select-none"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{currentLangLabel[language]}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileLangOpen && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="bg-background border border-border shadow-lg rounded-xl py-2 w-40 max-h-60 overflow-y-auto animate-in fade-in duration-200">
                    {(["en", "hi", "as", "bn", "gu", "kn", "ml", "mr", "or", "pa", "ta", "te"] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsMobileLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-muted transition-all cursor-pointer border-none bg-transparent ${
                          language === lang ? "text-secondary font-bold" : "text-foreground"
                        }`}
                      >
                        {currentLangLabel[lang]}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-secondary focus:outline-none cursor-pointer"
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
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary">
              {t("nav.home")}
            </Link>
            
            {/* Mobile Practice Areas Dropdown */}
            <div>
              <button 
                type="button"
                onClick={() => setIsMobilePracticeOpen(!isMobilePracticeOpen)}
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary focus:outline-none cursor-pointer bg-transparent border-none"
              >
                <span>{t("nav.practiceAreas")}</span>
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
                    {t("nav.allPractice")} &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Associates Dropdown */}
            <div>
              <button 
                type="button"
                onClick={() => setIsMobileAssociatesOpen(!isMobileAssociatesOpen)}
                className="w-full flex justify-between items-center px-3 py-2 text-sm font-semibold text-foreground hover:text-secondary focus:outline-none cursor-pointer bg-transparent border-none"
              >
                <span>{t("nav.associates")}</span>
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
                <Button variant="outline" className="w-full justify-center text-xs uppercase tracking-wider font-semibold">
                  {language === "en" ? "Admin Access" : language === "ta" ? "நிர்வாகி அணுகல்" : "एडमिन एक्सेस"}
                </Button>
              </Link>
              <Link to="/book-consultation" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center bg-primary text-primary-foreground text-xs uppercase tracking-wider font-semibold">
                  {t("nav.bookConsultation")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
