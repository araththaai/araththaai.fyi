import { Shield } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-secondary/10 text-secondary rounded-full mb-4">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            {language === "en" ? "Privacy Policy" : "தனியுரிமைக் கொள்கை"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {language === "en" ? "Last Updated: August 15, 2026" : "கடைசியாகப் புதுப்பிக்கப்பட்டது: ஆகஸ்ட் 15, 2026"}
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-lg text-foreground font-medium mb-6">
            {language === "en"
              ? "At Araththaai (AKM Associates & Legal Consultants), we hold client confidentiality and data protection in the highest regard. This policy details how we collect, safeguard, and utilize information."
              : "அறத்தாய் (AKM அசோசியேட்ஸ் & சட்ட ஆலோசகர்கள்) நிறுவனத்தில், வாடிக்கையாளர் ரகசியத்தன்மை மற்றும் தரவுப் பாதுகாப்பிற்கு நாங்கள் மிக உயர்ந்த முன்னுரிமை அளிக்கிறோம். இந்த தனியுரிமைக் கொள்கை நாங்கள் தகவல்களை எவ்வாறு சேகரிக்கிறோம், பாதுகாக்கிறோம் மற்றும் பயன்படுத்துகிறோம் என்பதை விளக்குகிறது."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "1. Attorney-Client Privilege & Confidentiality" : "1. வழக்கறிஞர்-வாடிக்கையாளர் ரகசியத்தன்மை"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "All correspondence, consultations, and document uploads submitted through this platform are subject to strict professional secrecy and attorney-client privilege rules under relevant bar regulations. We do not disclose any client case details unless authorized or compelled by law."
              : "இந்த தளத்தின் மூலம் சமர்ப்பிக்கப்படும் அனைத்து கடிதப் பரிமாற்றங்களும், ஆலோசனைகளும் மற்றும் பதிவேற்றப்படும் ஆவணங்களும் தொழில்முறை ரகசிய விதிகளின் கீழ் பாதுகாக்கப்படுகின்றன. சட்டத்தால் கட்டாயப்படுத்தப்பட்டால் அல்லது வாடிக்கையாளர் அனுமதித்தால் ஒழிய, வழக்கு விவரங்கள் யாருக்கும் பகிரப்பட மாட்டாது."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "2. Information We Collect" : "2. நாங்கள் சேகரிக்கும் தகவல்கள்"}
          </h2>
          <p className="mb-4">
            {language === "en"
              ? "We collect information that you voluntarily provide to us when scheduling consultations or submitting inquiries:"
              : "ஆலோசனைகளைத் திட்டமிடும்போது அல்லது விசாரணைகளைச் சமர்ப்பிக்கும்போது நீங்கள் எங்களுக்குத் தானாக முன்வந்து வழங்கும் தகவல்களை நாங்கள் சேகரிக்கிறோம்:"}
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>{language === "en" ? "Identity & Contact Info:" : "அடையாளம் & தொடர்பு விபரங்கள்:"}</strong>{" "}
              {language === "en" ? "Full name, telephone number, email address." : "முழு பெயர், தொலைபேசி எண், மின்னஞ்சல் முகவரி."}
            </li>
            <li>
              <strong>{language === "en" ? "Case-Related Information:" : "வழக்கு தொடர்பான தகவல்கள்:"}</strong>{" "}
              {language === "en" ? "Brief descriptions of your legal matter, documents uploaded for review, and booking dates." : "உங்கள் சட்ட விவகாரங்களின் சுருக்கம், மதிப்பாய்வுக்கான ஆவணங்கள் மற்றும் முன்பதிவு தேதிகள்."}
            </li>
            <li>
              <strong>{language === "en" ? "Technical Data:" : "தொழில்நுட்பத் தரவுகள்:"}</strong>{" "}
              {language === "en" ? "Anonymized usage data, browser specifications, and connection details to optimize system performance." : "தளத்தின் செயல்திறனை மேம்படுத்துவதற்கான அநாமதேய பயன்பாட்டுத் தரவுகள் மற்றும் இணைப்பு விவரங்கள்."}
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "3. How We Use Your Data" : "3. உங்கள் தரவை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "Your information is used solely to evaluate your case, process booking requests, communicate scheduling updates, and comply with conflict-of-interest checks required before legal representation begins. We never sell, rent, or trade client information to third parties."
              : "உங்கள் வழக்கு விபரங்களை மதிப்பிடவும், முன்பதிவு கோரிக்கைகளைச் செயல்படுத்தவும், சந்திப்பு நேரங்களை மாற்றியமைக்கவும் மற்றும் முரண்பாடுகளைச் சரிபார்க்கவும் மட்டுமே உங்கள் தகவல்கள் பயன்படுத்தப்படுகின்றன. உங்கள் தகவல்களை நாங்கள் மூன்றாம் தரப்பினருக்கு விற்கவோ, வாடகைக்கு விடவோ அல்லது வர்த்தகம் செய்யவோ மாட்டோம்."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "4. Data Security" : "4. தரவு பாதுகாப்பு"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "We use enterprise-grade encryption and secure access controls to store your information. Uploaded documents are encrypted during transfer and storage. While we take every measure to protect your data, no electronic system can be guaranteed 100% secure."
              : "உங்கள் தகவல்களைச் சேமிக்க நாங்கள் உயர்தர குறியாக்கவியல் மற்றும் பாதுகாப்பான அணுகல் கட்டுப்பாடுகளைப் பயன்படுத்துகிறோம். பதிவேற்றப்படும் ஆவணங்கள் குறியாக்கம் செய்யப்படுகின்றன. இருப்பினும், எந்தவொரு மின்னணு அமைப்பும் 100% பாதுகாப்பானது என்று உத்தரவாதம் அளிக்க முடியாது."}
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">
            {language === "en" ? "5. Contact Our Compliance Team" : "5. இணக்கக் குழுவைத் தொடர்பு கொள்ளவும்"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "If you have questions about our privacy policies, or wish to request the deletion of your personal records from our intake system, please contact our compliance desk at "
              : "எங்கள் தனியுரிமைக் கொள்கைகள் குறித்து ஏதேனும் கேள்விகள் இருந்தால், அல்லது உங்கள் தனிப்பட்ட பதிவுகளை நீக்கக் கோர விரும்பினால், எங்கள் இணக்கப் பிரிவைத் தொடர்பு கொள்ளவும்: "}
            <strong>akmattorney@gmail.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
