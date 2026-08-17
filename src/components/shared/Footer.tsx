import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export function Footer() {
  const { language, t } = useLanguage();

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
              <div className="flex flex-col notranslate" translate="no">
                <span className="font-heading font-bold text-xl tracking-tight text-primary">
                  {language === "ta" ? "அறத்தாய்" : language === "hi" ? "अरथाई" : "ARATHTHAAI"}
                </span>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                  {language === "ta" ? "AKM அசோசியேட்ஸ்" : language === "hi" ? "एकेएम एसोसिएट्स" : "AKM ASSOCIATES"}
                </span>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex space-x-4 text-xs text-muted-foreground">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Facebook</a>
            </div>
          </div>

          {/* Directory Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-6 text-primary uppercase tracking-wider">
              {language === "ta" ? "விரைவு இணைப்புகள்" : language === "hi" ? "त्वरित संपर्क" : "Quick Links"}
            </h3>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li><Link to="/" className="hover:text-secondary transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">{t("nav.aboutUs")}</Link></li>
              <li><Link to="/attorneys" className="hover:text-secondary transition-colors">{t("nav.attorneys")}</Link></li>
              <li><Link to="/case-results" className="hover:text-secondary transition-colors">{t("nav.caseResults")}</Link></li>
              <li><Link to="/blog" className="hover:text-secondary transition-colors">{t("nav.insights")}</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-6 text-primary uppercase tracking-wider">
              {t("nav.practiceAreas")}
            </h3>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li>
                <Link to="/practice-areas/corporate-law" className="hover:text-secondary transition-colors">
                  {language === "ta" ? "கார்ப்பரேட் மற்றும் வணிக விவகாரங்கள்" : language === "hi" ? "कॉर्पोरेट और व्यावसायिक मामले" : "Corporate & Commercial Matters"}
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/property-law" className="hover:text-secondary transition-colors">
                  {language === "ta" ? "சிவில் மற்றும் சொத்து விவகாரங்கள்" : language === "hi" ? "सिविल विवाद और संपत्ति मामले" : "Civil Disputes & Property Matters"}
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/hr-ce" className="hover:text-secondary transition-colors">
                  {language === "ta" ? "HR & CE வழக்குகள்" : language === "hi" ? "एचआर एंड सीई मामले" : "HR & CE Cases"}
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/criminal-defense" className="hover:text-secondary transition-colors">
                  {language === "ta" ? "வழக்கு விசாரணை & தற்காப்பு" : language === "hi" ? "मुकदमा और आपराधिक बचाव" : "Trial Defence & Litigation"}
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/tax-law" className="hover:text-secondary transition-colors">
                  {language === "ta" ? "வரிவிதிப்பு மற்றும் ஜிஎஸ்டி" : language === "hi" ? "कराधान और जीएसटी" : "Taxation & GST"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div>
            <h3 className="font-heading font-semibold text-sm mb-6 text-primary uppercase tracking-wider">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4 text-xs text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>
                  {language === "ta" ? "கரூர் & சென்னை அலுவலகங்கள்," : language === "hi" ? "करूर और चेन्नई कार्यालय," : "Karur & Chennai Offices,"} <br/>
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+91 86107 92622 / +91 72002 69349</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>akmattorney@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Footer Disclaimer Panel */}
        <div className="border-t border-border pt-8 pb-6 flex flex-col gap-4 text-[10px] text-muted-foreground">
          <div className="flex items-start gap-2 bg-card p-4 rounded border border-border">
            <AlertCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>{t("footer.disclaimerTitle")}</strong> {t("footer.disclaimerText")}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} <span className="notranslate" translate="no">{language === "ta" ? "அறத்தாய்" : language === "hi" ? "अरथाई" : "Araththaai"}</span> (AKM Associates). {t("footer.rights")}</p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="hover:text-secondary transition-colors">{t("footer.privacy")}</Link>
              <Link to="/terms-of-service" className="hover:text-secondary transition-colors">{t("footer.terms")}</Link>
              <Link to="/disclaimer" className="hover:text-secondary transition-colors">{t("footer.disclaimer")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
