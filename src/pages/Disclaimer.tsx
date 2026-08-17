import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Disclaimer() {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-secondary/10 text-secondary rounded-full mb-4">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {language === "en" 
              ? "Legal Disclaimer & Advertising Notice" 
              : language === "ta" 
              ? "மறுப்புரை மற்றும் ஒழுங்குமுறை அறிவிப்பு" 
              : "कानूनी अस्वीकरण और विज्ञापन नोटिस"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {language === "en" ? "Compliance Statement" : language === "ta" ? "ஒழுங்குமுறை இணக்க அறிக்கை" : "अनुपालन विवरण"}
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
            <h3 className="text-lg font-bold text-primary mb-2 font-heading">
              {language === "en" ? "Important Notice" : language === "ta" ? "முக்கிய அறிவிப்பு" : "महत्वपूर्ण सूचना"}
            </h3>
            <p className="text-sm text-foreground/80">
              {language === "en"
                ? "Under the rules of certain jurisdictions, including professional conduct regulations of bar councils, the contents of this website may be considered Attorney Advertising."
                : language === "ta"
                ? "பார் கவுன்சில்களின் தொழில்முறை நடத்தை விதிகள் உட்பட சில சட்ட வரம்புகளின் விதிகளின்படி, இந்த வலைத்தளத்தின் உள்ளடக்கங்கள் வழக்கறிஞர் விளம்பரமாகக் கருதப்படலாம்."
                : "कुछ न्यायक्षेत्रों के नियमों के तहत, बार काउंसिल के पेशेवर आचरण नियमों सहित, इस वेबसाइट की सामग्री को वकील विज्ञापन माना जा सकता है।"}
            </p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" 
              ? "1. Prior Results Do Not Guarantee Future Outcomes" 
              : language === "ta" 
              ? "1. முந்தைய முடிவுகள் எதிர்கால முடிவுகளுக்கு உத்தரவாதம் அளிக்காது" 
              : "1. पिछले परिणाम भविष्य के परिणामों की गारंटी नहीं देते हैं"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "Any case summaries, outcomes, verdicts, or testimonials featured on this website are provided for illustrative purposes only. They represent outcomes achieved in specific circumstances and do not constitute a representation or warranty that the same or similar results can be achieved in your legal matter. Each case is unique and depends upon its own specific facts, legislation, and jurisdiction."
              : language === "ta"
              ? "இந்த வலைத்தளத்தில் இடம்பெற்றுள்ள எந்தவொரு வழக்கு சுருக்கங்களும், முடிவுகளும், தீர்ப்புகளும் அல்லது சான்றுகளும் விளக்க நோக்கங்களுக்காக மட்டுமே வழங்கப்படுகின்றன. அவை குறிப்பிட்ட சூழ்நிலைகளில் எட்டப்பட்ட முடிவுகளைக் குறிக்கின்றன, மேலும் அவை உங்கள் சட்ட விவகாரத்திலும் அதே அல்லது ஒத்த முடிவுகளை அடைய முடியும் என்பதற்கான பிரதிநிதித்துவத்தையோ அல்லது உத்தரவாதத்தையோ உருவாக்காது. ஒவ்வொரு வழக்கும் தனித்துவமானது மற்றும் அதன் சொந்த குறிப்பிட்ட உண்மைகள், சட்டங்கள் மற்றும் அதிகார வரம்பைப் பொறுத்தது."
              : "इस वेबसाइट पर प्रदर्शित कोई भी मामले के सारांश, परिणाम, निर्णय या प्रशंसापत्र केवल उदाहरण के लिए प्रदान किए गए हैं। वे विशिष्ट परिस्थितियों में प्राप्त परिणामों का प्रतिनिधित्व करते हैं और यह गारंटी नहीं देते हैं कि आपके कानूनी मामले में भी वही या समान परिणाम प्राप्त किए जा सकते हैं। प्रत्येक मामला अद्वितीय है और अपने स्वयं के विशिष्ट तथ्यों, कानून और न्यायक्षेत्र पर निर्भर करता है।"}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "2. Non-Reliance" : language === "ta" ? "2. சட்ட ஆலோசனை மறுப்பு" : "2. गैर-निर्भरता"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "The legal information provided on this platform is of a general nature and should not be acted upon without consulting a licensed, qualified attorney in the appropriate jurisdiction. Araththaai (AKM Associates) explicitly disclaims all liability in respect to actions taken or not taken based on any contents of this site."
              : language === "ta"
              ? "இந்த தளத்தில் வழங்கப்படும் சட்டத் தகவல்கள் பொதுவானவை, தகுதியான வழக்கறிஞரை அணுகி ஆலோசனை பெறாமல் இவற்றின் அடிப்படையில் செயல்படக் கூடாது. இந்த தளத்தின் உள்ளடக்கங்களை அடிப்படையாகக் கொண்டு எடுக்கப்படும் அல்லது எடுக்கப்படாத நடவடிக்கைகளுக்கான அனைத்துப் பொறுப்புகளையும் அறத்தாய் (AKM அசோசியேட்ஸ்) வெளிப்படையாக மறுக்கிறது."
              : "इस मंच पर प्रदान की गई कानूनी जानकारी सामान्य प्रकृति की है और उपयुक्त क्षेत्राधिकार में एक लाइसेंस प्राप्त, योग्य वकील से परामर्श किए बिना इस पर कार्रवाई नहीं की जानी चाहिए। अरथाई (एकेएम एसोसिएट्स) इस साइट की किसी भी सामग्री के आधार पर की गई या न की गई कार्रवाइयों के संबंध में सभी देनदारी को स्पष्ट रूप से खारिज करता है।"}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "3. External Links Disclaimer" : language === "ta" ? "3. வெளி இணைப்புகள் மறுப்பு" : "3. बाहरी कड़ियों का अस्वीकरण"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "This website may contain links to third-party resources. We are not responsible for the privacy practices, terms of service, or accuracy of information hosted on external websites."
              : language === "ta"
              ? "இந்த வலைத்தளம் மூன்றாம் தரப்பு இணைப்புகளைக் கொண்டிருக்கலாம். வெளி வலைத்தளங்களில் உள்ள தகவல்களின் துல்லியம் அல்லது அவற்றின் தனியுரிமை நடைமுறைகளுக்கு நாங்கள் பொறுப்பல்ல."
              : "इस वेबसाइट में तीसरे पक्ष के संसाधनों के लिंक हो सकते हैं। हम बाहरी वेबसाइटों पर होस्ट की गई जानकारी की सटीकता, सेवा की शर्तों या गोपनीयता प्रथाओं के लिए ज़िम्मेदार नहीं हैं।"}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "4. Professional Regulations" : language === "ta" ? "4. தொழில்முறை ஒழுங்குமுறைகள்" : "4. व्यावसायिक नियम"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "In compliance with the Bar Council rules, we do not solicit work or advertise through this site. The user, by navigating this website, acknowledges that they are seeking information of their own accord and that no solicitation has occurred."
              : language === "ta"
              ? "பார் கவுன்சில் விதிகளின்படி, இந்த தளத்தின் மூலம் நாங்கள் வாடிக்கையாளர்களை ஈர்க்கவோ அல்லது விளம்பரம் செய்யவோ மாட்டோம். இந்த வலைத்தளத்தைப் பயன்படுத்துவதன் மூலம், பயனர் தனது சொந்த விருப்பத்தின் பேரில் தகவல்களைத் தேடுகிறார் என்றும், எங்களால் எந்தவொரு விளம்பரமும் செய்யப்படவில்லை என்றும் ஒப்புக்கொள்கிறார்."
              : "बार काउंसिल के नियमों के अनुपालन में, हम इस साइट के माध्यम से काम की याचना या विज्ञापन नहीं करते हैं। उपयोगकर्ता, इस वेबसाइट को नेविगेट करके, स्वीकार करता है कि वे अपनी मर्जी से जानकारी मांग रहे हैं और हमारी ओर से कोई याचना नहीं की गई है।"}
          </p>
        </div>
      </div>
    </div>
  );
}
