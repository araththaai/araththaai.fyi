import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Award, GraduationCap, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const attorneysList = [
  {
    slug: "aseema-khaudhar",
    name: "Aseema Khaudhar",
    role: {
      en: "Founder & Senior Partner",
      ta: "நிறுவனர் மற்றும் மூத்த பங்குதாரர்",
      hi: "संस्थापक और वरिष्ठ भागीदार"
    },
    practice: {
      en: "Tax & Civil Law Specialist",
      ta: "வரி மற்றும் சிவில் சட்ட நிபுணர்",
      hi: "कराधान और नागरिक कानून विशेषज्ञ"
    },
    practiceSlug: "tax-law",
    initials: "AK",
    bio: {
      en: "Founder and Senior Partner of AKM Associates. She advises clients on a comprehensive suite of legal matters across Tamil Nadu, maintaining key offices in Karur and Chennai.",
      ta: "AKM அசோசியேட்ஸ் நிறுவனத்தின் நிறுவனர் மற்றும் மூத்த பங்குதாரர். கரூர் மற்றும் சென்னையில் அலுவலகங்களைக் கொண்டு, தமிழகம் முழுவதும் வாடிக்கையாளர்களுக்கு சட்ட ஆலோசனைகளை வழங்கி வருகிறார்.",
      hi: "एकेएम एसोसिएट्स की संस्थापक और वरिष्ठ भागीदार। वह करूर और चेन्नई में कार्यालयों के साथ पूरे तमिलनाडु में ग्राहकों को कानूनी सलाह प्रदान करती हैं।"
    },
    education: {
      en: "LL.B. (Hons) - Madras High Court Jurisdiction & Legal Studies",
      ta: "சட்ட இளங்கலை (LL.B. Hons) - சென்னை உயர் நீதிமன்ற அதிகார வரம்பு & சட்டக் கல்வி",
      hi: "एलएल.बी. (ऑनर्स) - मद्रास उच्च न्यायालय अधिकार क्षेत्र और कानूनी अध्ययन"
    },
    admissions: {
      en: "Bar Council of Tamil Nadu (Karur & Chennai)",
      ta: "தமிழ்நாடு வழக்கறிஞர் மன்றம் (கரூர் & சென்னை)",
      hi: "तमिलनाडु बार काउंसिल (करूर और चेन्नई)"
    },
    whatsapp: "8610792622",
    instagram: "@ARATHTHAAI"
  },
  {
    slug: "mohammad-muzammil",
    name: "Mohammad Muzammil",
    role: {
      en: "Managing Partner & Criminal Defence Lawyer",
      ta: "நிர்வாக பங்குதாரர் & குற்றவியல் தற்காப்பு வழக்கறிஞர்",
      hi: "प्रबंध भागीदार और आपराधिक बचाव वकील"
    },
    practice: {
      en: "Criminal Defense & Trial Advocacy",
      ta: "குற்றவியல் தற்காப்பு & வழக்கு விசாரணை வாதம்",
      hi: "आपराधिक बचाव और ट्रायल वकालत"
    },
    practiceSlug: "criminal-defense",
    initials: "MM",
    bio: {
      en: "Managing Partner of AKM Associates. Specializes in criminal trial defense, representing clients before trial courts, district courts, High Court, and regulatory tribunals.",
      ta: "AKM அசோசியேட்ஸ் நிறுவனத்தின் நிர்வாக பங்குதாரர். குற்றவியல் தற்காப்பு வாதங்களில் நிபுணத்துவம் பெற்றவர், விசாரணை நீதிமன்றங்கள், மாவட்ட நீதிமன்றங்கள் மற்றும் உயர் நீதிமன்றங்களில் வாடிக்கையாளர்களுக்காகப் பிரதிநிதித்துவப்படுத்துகிறார்.",
      hi: "एकेएम एसोसिएट्स के प्रबंध भागीदार। आपराधिक मुकदमे की पैरवी में विशेषज्ञता रखते हैं, ग्राहकों का प्रतिनिधित्व ट्रायल कोर्ट, जिला अदालतों और उच्च न्यायालय के समक्ष करते हैं।"
    },
    education: {
      en: "LL.B. - Chennai Government Law College",
      ta: "சட்ட இளங்கலை (LL.B.) - சென்னை அரசு சட்டக் கல்லூரி",
      hi: "एलएल.बी. - चेन्नई सरकारी लॉ कॉलेज"
    },
    admissions: {
      en: "Bar Council of Tamil Nadu",
      ta: "தமிழ்நாடு வழக்கறிஞர் மன்றம்",
      hi: "तमिलनाडु बार काउंसिल"
    },
    whatsapp: "7200269349"
  }
];

export default function Attorneys() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState(
    language === "ta" ? "அனைத்தும்" : language === "hi" ? "सभी" : "All"
  );

  const roles = language === "en" 
    ? ["All", "Founder", "Managing Partner"]
    : language === "ta"
    ? ["அனைத்தும்", "நிறுவனர்", "நிர்வாக பங்குதாரர்"]
    : ["सभी", "संस्थापक", "प्रबंध भागीदार"];

  const filteredAttorneys = attorneysList.filter((attorney) => {
    const nameText = attorney.name.toLowerCase();
    const activePractice = language === "ta" ? attorney.practice.ta : language === "hi" ? attorney.practice.hi : attorney.practice.en;
    const practiceText = activePractice.toLowerCase();
    
    const matchesSearch = nameText.includes(searchTerm.toLowerCase()) || 
                          practiceText.includes(searchTerm.toLowerCase());
    
    let matchesRole = true;
    if (selectedRole !== "All" && selectedRole !== "அனைத்தும்" && selectedRole !== "सभी") {
      const roleEn = attorney.role.en;
      if (selectedRole === "Founder" || selectedRole === "நிறுவனர்" || selectedRole === "संस्थापक") {
        matchesRole = roleEn.includes("Founder");
      } else if (selectedRole === "Managing Partner" || selectedRole === "நிர்வாக பங்குதாரர்" || selectedRole === "प्रबंध भागीदार") {
        matchesRole = roleEn.includes("Managing Partner");
      }
    }
    return matchesSearch && matchesRole;
  });

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {t("nav.associates")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {language === "ta" ? "எங்கள் வழக்கறிஞர்களைச் சந்திக்கவும்" : language === "hi" ? "हमारे वकीलों से मिलें" : "Meet Our Attorneys"}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {language === "ta" ? "உள்நாட்டு சட்ட அதிகாரம் மற்றும் வாடிக்கையாளர் நலன் சார்ந்த நேர்மையைக் கொண்ட முதன்மையான வழக்கறிஞர் குழு." : language === "hi" ? "स्थानीय विधिक प्राधिकार और क्लाइंट-केंद्रित सत्यनिष्ठा को संयोजित करने वाली वकीलों की एक प्रमुख टीम।" : "A premier team of legal minds combining local jurisprudential authority with client-centric integrity."}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          {/* Role filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                  selectedRole === r
                    ? "bg-primary text-primary-foreground shadow-md font-semibold"
                    : "bg-surface hover:bg-muted text-muted-foreground border border-border"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === "ta" ? "வழக்கறிஞர் பெயரைத் தேடுக..." : language === "hi" ? "वकील का नाम खोजें..." : "Search attorney name..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
            />
          </div>
        </div>

        {/* Attorneys Grid */}
        {filteredAttorneys.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {filteredAttorneys.map((attorney, i) => {
              const roleName = language === "ta" ? attorney.role.ta : language === "hi" ? attorney.role.hi : attorney.role.en;
              const practiceName = language === "ta" ? attorney.practice.ta : language === "hi" ? attorney.practice.hi : attorney.practice.en;
              const bioText = language === "ta" ? attorney.bio.ta : language === "hi" ? attorney.bio.hi : attorney.bio.en;
              const educationText = language === "ta" ? attorney.education.ta : language === "hi" ? attorney.education.hi : attorney.education.en;
              const admissionsText = language === "ta" ? attorney.admissions.ta : language === "hi" ? attorney.admissions.hi : attorney.admissions.en;
              
              return (
                <div key={i} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group flex flex-col">
                  {/* Visual Initials Avatar */}
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                    <div className="text-6xl font-extrabold text-muted-foreground/30 group-hover:text-secondary/20 transition-colors font-heading tracking-tighter select-none">
                      {attorney.initials}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                      {roleName}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1 font-heading group-hover:text-secondary transition-colors">
                        {attorney.name}
                      </h3>
                      <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                        <Award className="h-4 w-4 shrink-0" /> {practiceName}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                        {bioText}
                      </p>
                    </div>

                    <div className="border-t border-border/60 pt-4 space-y-3 mt-auto">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <GraduationCap className="h-4 w-4 text-secondary shrink-0" />
                        <span className="truncate" title={educationText}>{educationText}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-4 w-4 text-secondary shrink-0" />
                        <span className="truncate" title={admissionsText}>{admissionsText}</span>
                      </div>

                      <Link to={`/attorneys/${attorney.slug}`} className="block pt-2">
                        <button className="w-full bg-primary hover:bg-primary/95 text-white py-2 rounded font-semibold text-sm transition-all flex items-center justify-center gap-1 cursor-pointer border-none">
                          {language === "ta" ? "முழு விவரம் காண்க" : language === "hi" ? "पूरी प्रोफ़ाइल देखें" : "View Complete Profile"} <ArrowRight className="h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground text-lg mb-4">
              {language === "ta" ? "உங்கள் தேடலுடன் பொருந்தும் வழக்கறிஞர்கள் யாரும் இல்லை." : language === "hi" ? "आपकी खोज से मेल खाने वाला कोई वकील नहीं मिला।" : "No attorneys match your query."}
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedRole(language === "ta" ? "அனைத்தும்" : language === "hi" ? "सभी" : "All"); }}
              className="text-secondary hover:text-primary font-bold transition-colors bg-transparent border-none cursor-pointer"
            >
              {language === "ta" ? "வடிப்பான்களை நீக்கவும்" : language === "hi" ? "फ़िल्टर रीसेट करें" : "Reset Filters"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
