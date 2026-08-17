import { Button } from "@/components/ui/button";
import { ShieldAlert, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServerError() {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-surface min-h-[85vh] flex items-center justify-center text-foreground">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-6 bg-destructive/10 text-destructive rounded-full mb-8">
          <ShieldAlert className="h-16 w-16" />
        </div>
        <h1 className="text-8xl font-heading font-extrabold text-primary mb-4 tracking-tight">
          500
        </h1>
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          {language === "en" 
            ? "Internal Court Adjournment" 
            : language === "ta" 
            ? "உள் சேவையகப் பிழை" 
            : "आंतरिक सर्वर त्रुटि"}
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          {language === "en" 
            ? "Our servers encountered an unexpected issue while processing your request. Please try reloading the page, or contact our support team."
            : language === "ta"
            ? "உங்கள் கோரிக்கையைச் செயலாக்குவதில் எதிர்பாராத பிழை ஏற்பட்டது. தயவுசெய்து பக்கத்தை மீண்டும் ஏற்றவும் அல்லது ஆதரவுக் குழுவைத் தொடர்பு கொள்ளவும்."
            : "आपके अनुरोध को संसाधित करते समय हमारे सर्वर पर एक अप्रत्याशित समस्या आई। कृपया पृष्ठ को पुनः लोड करने का प्रयास करें, या हमारी सहायता टीम से संपर्क करें।"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 cursor-pointer border-none"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> 
            {language === "en" ? "Reload Page" : language === "ta" ? "மீண்டும் ஏற்றுக" : "पृष्ठ पुनः लोड करें"}
          </Button>
          <a href="mailto:akmattorney@gmail.com">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted h-12 px-6 cursor-pointer">
              <Mail className="mr-2 h-4 w-4" /> 
              {language === "en" ? "Email Support" : language === "ta" ? "மின்னஞ்சல் ஆதரவு" : "ईमेल सहायता"}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
