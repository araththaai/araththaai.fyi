import React, { createContext, useState, useContext } from "react";

export type Language = "en" | "ta";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.practiceAreas": "Practice Areas",
    "nav.associates": "Associates",
    "nav.caseResults": "Case Results",
    "nav.insights": "Insights",
    "nav.aboutUs": "About Us",
    "nav.contactUs": "Contact Us",
    "nav.bookConsultation": "Book Consultation",
    "nav.allPractice": "All Practice Areas",
    "nav.attorneys": "Attorneys",

    // Home Hero
    "hero.badge": "Premier Legal Consultancy & Advocacy",
    "hero.title1": "Authority. Integrity.",
    "hero.title2": "Uncompromising Results.",
    "hero.desc": "Araththaai (AKM Associates) represents corporations, startups, and families through complex jurisdictions. We deliver high-stakes courtroom victories and comprehensive compliance structures.",
    "hero.btnIntake": "Schedule Privileged Intake",
    "hero.btnExplore": "Explore Practice Areas",

    // Home Statistics
    "stats.exp.val": "11+",
    "stats.exp.lbl": "Years Active Experience",
    "stats.settle.val": "98%",
    "stats.settle.lbl": "Favorable Settlements",
    "stats.clients.val": "5,000+",
    "stats.clients.lbl": "Corporate & Private Clients",
    "stats.credentials.val": "Top Tier",
    "stats.credentials.lbl": "Legal Bar Credentials",

    // Home Sections
    "home.practice.badge": "Specialized Jurisdictions",
    "home.practice.title": "Practice Areas",
    "home.practice.desc": "Our firm balances corporate governance advisory, land title audit investigations, and trial defense advocacy at premium standards.",
    "home.practice.all": "View All Practice Areas",
    
    "home.team.badge": "Elite Counsel",
    "home.team.title": "Spotlight Partners",
    "home.team.desc": "Dedicated advocates combining specialized knowledge and decades of trial experience.",
    "home.team.viewProfile": "View Profile",
    "home.team.all": "Meet All Attorneys",

    "home.testimonials.badge": "Client Feedback",
    "home.testimonials.title": "Trusted by Leaders",
    
    // Contact Info
    "contact.badge": "Our Legal Services",
    "contact.title": "Expertise That Matters",
    "contact.office": "Branch Offices & Helpline",
    "contact.officeDesc": "Inquiries are treated with strict confidentiality under professional lawyer codes. Access our direct offices or contact our emergency desk.",
    "contact.branchChennai": "Headquarters (Chennai Office)",
    "contact.branchKarur": "Branch Office (Karur Office)",
    "contact.helpline": "Emergency Legal Helpline",
    "contact.helplineDesc": "Direct access for bails & immediate custody issues (24/7)",
    "contact.email": "Email Inquiries",
    "contact.hours": "Office Hours",
    "contact.hoursWeek": "Monday - Friday: 9:00 AM - 7:00 PM",
    "contact.hoursSat": "Saturday: 10:00 AM - 2:00 PM (Appts Only)",
    "contact.formTitle": "Send a Privileged Inquiry",
    "contact.name": "Full Name",
    "contact.emailAddr": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Message / Case Details",
    "contact.btnSend": "Send Privileged Inquiry",
    "contact.successTitle": "Inquiry Sent Successfully",
    "contact.successDesc": "Your message has been encrypted and delivered. A senior partner will contact you directly within 24 business hours.",
    "contact.btnAnother": "Send another message",

    // Footer
    "footer.desc": "Araththaai (AKM Associates) is a premier legal consultancy and advocacy firm representing corporations, institutions, and individuals.",
    "footer.contact": "Contact Info",
    "footer.rights": "All rights reserved.",
    "footer.disclaimerTitle": "Attorney Advertising Disclaimer:",
    "footer.disclaimerText": "Under rules of professional conduct in certain jurisdictions, contents on this site may be considered attorney advertising. Prior outcomes achieved do not guarantee similar results. Consultation bookings do not constitute a binding attorney-client relationship.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.disclaimer": "Disclaimer",
  },
  ta: {
    // Navbar
    "nav.home": "முகப்பு",
    "nav.practiceAreas": "சட்டப் பிரிவுகள்",
    "nav.associates": "வழக்கறிஞர்கள்",
    "nav.caseResults": "வழக்கு முடிவுகள்",
    "nav.insights": "சட்டக் கட்டுரைகள்",
    "nav.aboutUs": "எங்களைப் பற்றி",
    "nav.contactUs": "தொடர்புகொள்ள",
    "nav.bookConsultation": "ஆலோசனை பதிவு",
    "nav.allPractice": "அனைத்து சட்டப் பிரிவுகள்",
    "nav.attorneys": "வழக்கறிஞர்கள்",

    // Home Hero
    "hero.badge": "முதன்மை சட்ட ஆலோசனை & வாதாடுதல்",
    "hero.title1": "அதிகாரம். நேர்மை.",
    "hero.title2": "சமரசமற்ற முடிவுகள்.",
    "hero.desc": "அறத்தாய் (AKM அசோசியேட்ஸ்) நிறுவனங்கள், ஸ்டார்ட்-அப்கள் மற்றும் குடும்பங்களின் சிக்கலான சட்ட விவகாரங்களை கையாள்கிறது. நாங்கள் நீதிமன்ற வெற்றிகளையும் முழுமையான சட்ட ஆலோசனைகளையும் வழங்குகிறோம்.",
    "hero.btnIntake": "ஆலோசனை பெற",
    "hero.btnExplore": "சட்டப் பிரிவுகளை ஆராய்க",

    // Home Statistics
    "stats.exp.val": "11+",
    "stats.exp.lbl": "வருடங்கள் நேரடி அனுபவம்",
    "stats.settle.val": "98%",
    "stats.settle.lbl": "சாதகமான தீர்வுகள்",
    "stats.clients.val": "5,000+",
    "stats.clients.lbl": "நிறுவனங்கள் & தனிநபர் வாடிக்கையாளர்கள்",
    "stats.credentials.val": "உயர்தர",
    "stats.credentials.lbl": "சட்டச் சான்றுகள்",

    // Home Sections
    "home.practice.badge": "சிறப்பு சட்டப்பிரிவுகள்",
    "home.practice.title": "சட்டப் பிரிவுகள்",
    "home.practice.desc": "எங்கள் நிறுவனம் கார்ப்பரேட் ஆளுமை ஆலோசனை, நிலப் பத்திர சரிபார்ப்புகள் மற்றும் நீதிமன்ற வழக்கு வாதங்களை உயர்தரத்தில் வழங்குகிறது.",
    "home.practice.all": "அனைத்து சட்டப் பிரிவுகளையும் காண்க",
    
    "home.team.badge": "சிறந்த வழக்கறிஞர்கள்",
    "home.team.title": "முக்கிய பங்குதாரர்கள்",
    "home.team.desc": "சிறப்பு அறிவும் பல வருட வழக்கு அனுபவமும் கொண்ட அர்ப்பணிப்புள்ள வழக்கறிஞர்கள்.",
    "home.team.viewProfile": "விவரம் காண்க",
    "home.team.all": "அனைத்து வழக்கறிஞர்களையும் சந்திக்கவும்",

    "home.testimonials.badge": "வாடிக்கையாளர் கருத்துக்கள்",
    "home.testimonials.title": "தலைவர்களின் நம்பிக்கை",
    
    // Contact Info
    "contact.badge": "எங்கள் சட்ட சேவைகள்",
    "contact.title": "முக்கியமான சட்ட நிபுணத்துவம்",
    "contact.office": "கிளை அலுவலகங்கள் & உதவி எண்",
    "contact.officeDesc": "அனைத்து விசாரணைகளும் வழக்கறிஞர் விதிகளின் கீழ் கடுமையான ரகசியத்தன்மையுடன் கையாளப்படுகின்றன. எங்களை நேரடியாகவோ அல்லது அவசர உதவி எண் மூலமாகவோ தொடர்பு கொள்ளவும்.",
    "contact.branchChennai": "தலைமையகம் (சென்னை அலுவலகம்)",
    "contact.branchKarur": "கிளை அலுவலகம் (கரூர் அலுவலகம்)",
    "contact.helpline": "அவசர சட்ட உதவி எண்",
    "contact.helplineDesc": "ஜாமீன் & அவசர சட்டப் பிரச்சனைகளுக்கான நேரடித் தொடர்பு (24/7)",
    "contact.email": "மின்னஞ்சல் தொடர்புகள்",
    "contact.hours": "அலுவலக நேரங்கள்",
    "contact.hoursWeek": "திங்கள் - வெள்ளி: காலை 9:00 - மாலை 7:00",
    "contact.hoursSat": "சனி: காலை 10:00 - மதியம் 2:00 (முன்பதிவு மட்டும்)",
    "contact.formTitle": "சட்ட ஆலோசனைக்கு செய்தி அனுப்பவும்",
    "contact.name": "முழு பெயர்",
    "contact.emailAddr": "மின்னஞ்சல் முகவரி",
    "contact.phone": "தொலைபேசி எண்",
    "contact.message": "செய்தி / வழக்கு விவரங்கள்",
    "contact.btnSend": "செய்தி அனுப்புக",
    "contact.successTitle": "செய்தி வெற்றிகரமாக அனுப்பப்பட்டது",
    "contact.successDesc": "உங்கள் செய்தி பாதுகாப்பாக அனுப்பப்பட்டது. எங்கள் மூத்த வழக்கறிஞர் ஒருவர் 24 மணி நேரத்திற்குள் உங்களைத் தொடர்புகொள்வார்.",
    "contact.btnAnother": "மறுபடி செய்தி அனுப்ப",

    // Footer
    "footer.desc": "அறத்தாய் (AKM அசோசியேட்ஸ்) என்பது நிறுவனங்கள், அமைப்புகள் மற்றும் தனிநபர்களைப் பிரதிநிதித்துவப்படுத்தும் ஒரு முன்னணி சட்ட ஆலோசனை மற்றும் வாதாடும் நிறுவனமாகும்.",
    "footer.contact": "தொடர்பு விபரங்கள்",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    "footer.disclaimerTitle": "வழக்கறிஞர் விளம்பர மறுப்புரை:",
    "footer.disclaimerText": "சில சட்ட வரம்புகளில் உள்ள தொழில்முறை நடத்தை விதிகளின் கீழ், இந்த தளத்தின் உள்ளடக்கங்கள் வழக்கறிஞர் விளம்பரமாகக் கருதப்படலாம். முந்தைய வழக்கு முடிவுகள் தற்போதைய முடிவுகளுக்கு உத்தரவாதம் அளிக்காது. ஆலோசனை முன்பதிவுகள் வழக்கறிஞர்-வாடிக்கையாளர் உறவை உருவாக்காது.",
    "footer.privacy": "தனியுரிமைக் கொள்கை",
    "footer.terms": "சேவை விதிமுறைகள்",
    "footer.disclaimer": "பொறுப்புத் துறப்பு",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("app_lang");
    return saved === "en" || saved === "ta" ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
