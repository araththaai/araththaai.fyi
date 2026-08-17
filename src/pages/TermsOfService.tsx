import { FileText } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function TermsOfService() {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-secondary/10 text-secondary rounded-full mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {language === "ta" ? "சேவை விதிமுறைகள்" : language === "hi" ? "सेवा की शर्तें" : "Terms of Service"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {language === "ta" ? "கடைசியாகப் புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 15, 2026" : language === "hi" ? "अंतिम अद्यतन: 15 अगस्त, 2026" : "Last Updated: August 15, 2026"}
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-lg text-foreground font-medium mb-6">
            {language === "ta" ? "அறத்தாய் வலைத்தளத்திற்கு உங்களை வரவேற்கிறோம். எங்கள் சேவைகளை அணுகுவதன் மூலம் அல்லது பயன்படுத்துவதன் மூலம், பின்வரும் விதிமுறைகள் மற்றும் நிபந்தனைகளுக்குக் கட்டுப்பட ஒப்புக்கொள்கீர்கள்." : language === "hi" ? "अरथाई वेबसाइट पर आपका स्वागत है। हमारी सेवाओं का उपयोग करके, आप निम्नलिखित नियमों और शर्तों का पालन करने और उनसे बंधे रहने के लिए सहमत होते हैं।" : "Welcome to the Araththaai website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "ta" ? "1. வழக்கறிஞர்-வாடிக்கையாளர் உறவு இன்மை" : language === "hi" ? "1. कोई वकील-क्लाइंट संबंध नहीं" : "1. No Attorney-Client Relationship"}
          </h2>
          <p className="mb-6">
            {language === "ta" ? "இந்த வலைத்தளத்தில் உள்ள தகவல்கள் தகவல் நோக்கங்களுக்காக மட்டுமே, அவை முறையான சட்ட ஆலோசனை ஆகாது. இந்தத் தளத்தை அணுகுவது, முன்பதிவு முறைகளைப் பயன்படுத்துவது அல்லது செய்தி அனுப்புவது வழக்கறிஞர்-வாடிக்கையாளர் உறவை உருவாக்காது. அறத்தாய் நிறுவனத்தின் பங்குதாரர் மற்றும் வாடிக்கையாளர் இருவராலும் கையெழுத்திடப்பட்ட எழுதப்பட்ட ஒப்பந்தத்தின் மூலமே அத்தகைய உறவு உருவாக்கப்படும்." : language === "hi" ? "इस वेबसाइट पर दी गई जानकारी केवल सूचनात्मक उद्देश्यों के लिए है और औपचारिक कानूनी सलाह नहीं है। इस साइट पर जाना, इसकी बुकिंग प्रणालियों का उपयोग करना, या फॉर्म/ईमेल के माध्यम से पूछताछ भेजना वकील-क्लाइंट संबंध स्थापित नहीं करता है। ऐसा संबंध तभी बनता है जब अरथाई (एकेएम एसोसिएट्स) के एक भागीदार और क्लाइंट दोनों द्वारा एक लिखित अनुबंध पर हस्ताक्षर किए जाते हैं।" : "The information contained on this website is for informational purposes only and does not constitute formal legal advice. Accessing this site, using its booking systems, or transmitting inquiries via form/email does not create or establish an attorney-client relationship. Such a relationship is only formed when an explicit written engagement agreement is signed by both a partner of Araththaai (AKM Associates) and the client."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "ta" ? "2. ஆலோசனைகள் பற்றிய விவரம்" : language === "hi" ? "2. परामर्श का विवरण" : "2. Description of Consultations"}
          </h2>
          <p className="mb-6">
            {language === "ta" ? "முன்பதிவு மூலம் கோரப்படும் ஆரம்ப ஆலோசனைகள் எங்கள் விருப்பத்தின் பேரில் திட்டமிடப்படுகின்றன. முரண்பாடுகள், கால அட்டவணை அல்லது வழக்கின் தன்மையைப் பொறுத்து முன்பதிவு கோரிக்கைகளை நிராகரிக்க எங்களுக்கு உரிமை உண்டு." : language === "hi" ? "ऑनलाइन बुकिंग विजेट के माध्यम से अनुरोधित प्रारंभिक परामर्श हमारे विवेक पर निर्धारित किए जाते हैं। हम हितों के टकराव, उपलब्धता या कानूनी मामले की उपयुक्तता के आधार पर परामर्श अनुरोधों को अस्वीकार करने का अधिकार सुरक्षित रखते हैं।" : "Initial consultations requested via the online booking widget are scheduled at our discretion. We reserve the right to decline consultation requests based on potential conflicts of interest, availability, or suitability of the legal matter."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "ta" ? "3. பயனர் உள்ளடக்கங்கள் & பதிவேற்றங்கள்" : language === "hi" ? "3. उपयोगकर्ता सामग्री और अपलोड" : "3. User Content & Uploads"}
          </h2>
          <p className="mb-6">
            {language === "ta" ? "எங்கள் முன்பதிவு தளம் வழியாக ஆவணங்களைச் சமர்ப்பிக்கும் போது, அக்கோப்புகளை அனுப்ப உங்களுக்கு உரிமை உள்ளது என்றும், தகவல்கள் துல்லியமானவை என்றும் உறுதியளிக்கிறீர்கள். வைரஸ்கள் அல்லது சட்டவிரோதப் பொருட்களைப் பதிவேற்றக் கூடாது என்று ஒப்புக்கொள்கிறீர்கள்." : language === "hi" ? "हमारे बुकिंग पोर्टल के माध्यम से दस्तावेज़ जमा करते समय, आप वारंटी देते हैं कि आपके पास इन फ़ाइलों को भेजने का अधिकार है और सभी जानकारी आपकी सर्वोत्तम जानकारी के अनुसार सटीक है। आप मैलवेयर, वायरस या अवैध सामग्री वाली फ़ाइलों को अपलोड न करने के लिए सहमत हैं।" : "When submitting documents through our booking portal, you warrant that you have the right to transmit these files and that all information is accurate to the best of your knowledge. You agree not to upload files containing malware, viruses, or illegal material."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "ta" ? "4. அறிவுசார் சொத்துரிமை" : language === "hi" ? "4. बौद्धिक संपदा" : "4. Intellectual Property"}
          </h2>
          <p className="mb-6">
            {language === "ta" ? "இந்தத் தளத்தில் உள்ள அனைத்து உரைகள், லோகோக்கள், கிராபிக்ஸ் மற்றும் வடிவமைப்பு ஆகியவை அறத்தாய் நிறுவனத்திற்குச் சொந்தமானவை. முன் அனுமதியின்றி இந்தத் தளத்தின் எந்தப் பகுதியையும் நகலெடுக்கவோ அல்லது விநியோகிக்கவோ கூடாது." : language === "hi" ? "इस मंच पर सभी पाठ, लोगो, कस्टम ग्राफिक्स और संरचना अरथाई के स्वामित्व में हैं। आप पूर्व लिखित सहमति के बिना साइट के किसी भी हिस्से की नकल, पुनरुत्पादन या वितरण नहीं कर सकते हैं।" : "All text, logos, custom graphics, and structure on this platform are owned by Araththaai. You may not copy, reproduce, or distribute any portion of the site without prior written consent."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "ta" ? "5. விதிமுறைகளில் மாற்றங்கள்" : language === "hi" ? "5. शर्तों में संशोधन" : "5. Modifications to Terms"}
          </h2>
          <p className="mb-6">
            {language === "ta" ? "இந்த விதிமுறைகளை எப்போது வேண்டுமானாலும் மாற்றியமைக்க எங்களுக்கு உரிமை உண்டு. மாற்றங்கள் பதிவேற்றப்பட்ட பின்னர் தளத்தைத் தொடர்ந்து பயன்படுத்துவது புதிய விதிமுறைகளை ஏற்றுக்கொள்வதாகக் கருதப்படும்." : language === "hi" ? "हम किसी भी समय इन शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। अपडेट पोस्ट होने के बाद मंच का आपका निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।" : "We reserve the right to modify these terms at any time. Your continued use of the platform after updates are posted constitutes acceptance of the revised terms."}
          </p>
        </div>
      </div>
    </div>
  );
}
