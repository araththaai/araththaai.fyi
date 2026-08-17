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
      ta: "நிறுவனர் மற்றும் மூத்த பங்குதாரர்"
    },
    practice: {
      en: "Tax & Civil Law Specialist",
      ta: "வரி மற்றும் சிவில் சட்ட நிபுணர்"
    },
    practiceSlug: "tax-law",
    initials: "AK",
    bio: {
      en: "Founder and Senior Partner of AKM Associates. She advises clients on a comprehensive suite of legal matters across Tamil Nadu, maintaining key offices in Karur and Chennai.",
      ta: "AKM அசோசியேட்ஸ் நிறுவனத்தின் நிறுவனர் மற்றும் மூத்த பங்குதாரர். கரூர் மற்றும் சென்னையில் அலுவலகங்களைக் கொண்டு, தமிழகம் முழுவதும் வாடிக்கையாளர்களுக்கு சட்ட ஆலோசனைகளை வழங்கி வருகிறார்."
    },
    education: {
      en: "LL.B. (Hons) - Madras High Court Jurisdiction & Legal Studies",
      ta: "சட்ட இளங்கலை (LL.B. Hons) - சென்னை உயர் நீதிமன்ற அதிகார வரம்பு & சட்டக் கல்வி"
    },
    admissions: {
      en: "Bar Council of Tamil Nadu (Karur & Chennai)",
      ta: "தமிழ்நாடு வழக்கறிஞர் மன்றம் (கரூர் & சென்னை)"
    },
    whatsapp: "8610792622",
    instagram: "@ARATHTHAAI"
  },
  {
    slug: "mohammad-muzammil",
    name: "Mohammad Muzammil",
    role: {
      en: "Managing Partner & Criminal Defence Lawyer",
      ta: "நிர்வாக பங்குதாரர் & குற்றவியல் தற்காப்பு வழக்கறிஞர்"
    },
    practice: {
      en: "Criminal Defense & Trial Advocacy",
      ta: "குற்றவியல் தற்காப்பு & வழக்கு விசாரணை வாதம்"
    },
    practiceSlug: "criminal-defense",
    initials: "MM",
    bio: {
      en: "Managing Partner of AKM Associates. Specializes in criminal trial defense, representing clients before trial courts, district courts, High Court, and regulatory tribunals.",
      ta: "AKM அசோசியேட்ஸ் நிறுவனத்தின் நிர்வாக பங்குதாரர். குற்றவியல் தற்காப்பு வாதங்களில் நிபுணத்துவம் பெற்றவர், விசாரணை நீதிமன்றங்கள், மாவட்ட நீதிமன்றங்கள் மற்றும் உயர் நீதிமன்றங்களில் வாடிக்கையாளர்களுக்காகப் பிரதிநிதித்துவப்படுத்துகிறார்."
    },
    education: {
      en: "LL.B. - Chennai Government Law College",
      ta: "சட்ட இளங்கலை (LL.B.) - சென்னை அரசு சட்டக் கல்லூரி"
    },
    admissions: {
      en: "Bar Council of Tamil Nadu",
      ta: "தமிழ்நாடு வழக்கறிஞர் மன்றம்"
    },
    whatsapp: "7200269349"
  },
  {
    slug: "ak-munusamy",
    name: "A. K. Munusamy",
    role: {
      en: "Senior Partner",
      ta: "மூத்த பங்குதாரர்"
    },
    practice: {
      en: "Corporate & Commercial Law",
      ta: "கார்ப்பரேட் மற்றும் வணிகச் சட்டம்"
    },
    practiceSlug: "corporate-law",
    initials: "AKM",
    bio: {
      en: "Over 25 years of extensive experience in high-stakes corporate disputes, corporate restructurings, and strategic litigation before various high courts.",
      ta: "உயர் நீதிமன்றங்களில் கார்ப்பரேட் தகராறுகள், நிறுவன மறுசீரமைப்பு மற்றும் மூலோபாய வழக்குகளில் 25 ஆண்டுகளுக்கும் மேலான விரிவான அனுபவம் கொண்டவர்."
    },
    education: {
      en: "LL.B. (Hons) - Madras Law College",
      ta: "சட்ட இளங்கலை (LL.B. Hons) - சென்னை சட்டக் கல்லூரி"
    },
    admissions: {
      en: "Bar Council of Tamil Nadu (1998)",
      ta: "தமிழ்நாடு வழக்கறிஞர் மன்றம் (1998)"
    }
  }
];

export default function Attorneys() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState(language === "en" ? "All" : "அனைத்தும்");

  const roles = language === "en" 
    ? ["All", "Founder", "Managing Partner", "Partner"]
    : ["அனைத்தும்", "நிறுவனர்", "நிர்வாக பங்குதாரர்", "பங்குதாரர்"];

  const filteredAttorneys = attorneysList.filter((attorney) => {
    const nameText = attorney.name.toLowerCase();
    const practiceText = (language === "en" ? attorney.practice.en : attorney.practice.ta).toLowerCase();
    
    const matchesSearch = nameText.includes(searchTerm.toLowerCase()) || 
                          practiceText.includes(searchTerm.toLowerCase());
    
    let matchesRole = true;
    if (selectedRole !== "All" && selectedRole !== "அனைத்தும்") {
      const roleEn = attorney.role.en;
      if (selectedRole === "Founder" || selectedRole === "நிறுவனர்") {
        matchesRole = roleEn.includes("Founder");
      } else if (selectedRole === "Managing Partner" || selectedRole === "நிர்வாக பங்குதாரர்") {
        matchesRole = roleEn.includes("Managing Partner");
      } else if (selectedRole === "Partner" || selectedRole === "பங்குதாரர்") {
        matchesRole = roleEn.includes("Partner");
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
            {language === "en" ? "Meet Our Attorneys" : "எங்கள் வழக்கறிஞர்களைச் சந்திக்கவும்"}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {language === "en"
              ? "A premier team of legal minds combining local jurisprudential authority with client-centric integrity."
              : "உள்நாட்டு சட்ட அதிகாரம் மற்றும் வாடிக்கையாளர் நலன் சார்ந்த நேர்மையைக் கொண்ட முதன்மையான வழக்கறிஞர் குழு."}
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
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedRole === r
                    ? "bg-primary text-primary-foreground shadow-md"
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
              placeholder={language === "en" ? "Search attorney name or practice..." : "வழக்கறிஞர் பெயர் அல்லது பிரிவைத் தேடுக..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Attorneys Grid */}
        {filteredAttorneys.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {filteredAttorneys.map((attorney, i) => {
              const roleName = language === "en" ? attorney.role.en : attorney.role.ta;
              const practiceName = language === "en" ? attorney.practice.en : attorney.practice.ta;
              const bioText = language === "en" ? attorney.bio.en : attorney.bio.ta;
              const educationText = language === "en" ? attorney.education.en : attorney.education.ta;
              const admissionsText = language === "en" ? attorney.admissions.en : attorney.admissions.ta;
              
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
                          {language === "en" ? "View Complete Profile" : "முழு விவரம் காண்க"} <ArrowRight className="h-4 w-4" />
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
              {language === "en" ? "No attorneys match your query." : "உங்கள் தேடலுடன் பொருந்தும் வழக்கறிஞர்கள் யாரும் இல்லை."}
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedRole(language === "en" ? "All" : "அனைத்தும்"); }}
              className="text-secondary hover:text-primary font-bold transition-colors bg-transparent border-none cursor-pointer"
            >
              {language === "en" ? "Reset Filters" : "வடிப்பான்களை நீக்கவும்"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
