import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel, Home, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-surface min-h-[85vh] flex items-center justify-center text-foreground">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-6 bg-secondary/10 text-secondary rounded-full mb-8 animate-bounce">
          <Gavel className="h-16 w-16" />
        </div>
        <h1 className="text-8xl font-heading font-extrabold text-primary mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          {language === "en" 
            ? "Jurisdiction Not Found" 
            : language === "ta" 
            ? "பக்கம் கண்டறியப்படவில்லை" 
            : "अधिकार क्षेत्र नहीं मिला"}
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          {language === "en" 
            ? "The legal route or case file you are looking for does not exist. It may have been moved, deleted, or the address entered is incorrect."
            : language === "ta"
            ? "நீங்கள் தேடும் பக்கம் அல்லது கோப்பு இல்லை. அது நகர்த்தப்பட்டிருக்கலாம் அல்லது முகவரி தவறாக இருக்கலாம்."
            : "आप जिस कानूनी मार्ग या केस फ़ाइल की तलाश कर रहे हैं उसका अस्तित्व नहीं है। हो सकता है कि इसे स्थानांतरित कर दिया गया हो, हटा दिया गया हो, या दर्ज किया गया पता गलत हो।"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 cursor-pointer">
              <Home className="mr-2 h-4 w-4" /> 
              {language === "en" ? "Return Home" : language === "ta" ? "முகப்பிற்குச் செல்ல" : "होमपेज पर वापस जाएं"}
            </Button>
          </Link>
          <Link to="/practice-areas">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted h-12 px-6 cursor-pointer">
              {language === "en" ? "View Practice Areas" : language === "ta" ? "சட்டப் பிரிவுகளைப் பார்க்க" : "कार्यक्षेत्र देखें"}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
