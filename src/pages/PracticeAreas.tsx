import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ShieldCheck, Scale, Landmark, BookOpen, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const practiceAreasList = [
  {
    slug: "corporate-law",
    category: "Corporate",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-600",
    title: {
      en: "Corporate & Commercial Matters",
      ta: "கார்ப்பரேட் மற்றும் வணிக விவகாரங்கள்",
      hi: "कॉर्पोरेट और व्यावसायिक मामले"
    },
    description: {
      en: "Corporate advisory, commercial contracts, agreements, business structuring, compliance, corporate governance, and commercial disputes.",
      ta: "கார்ப்பரேட் ஆலோசனை, வணிக ஒப்பந்தங்கள், ஒப்பந்த வரைவுகள், வணிகக் கட்டமைப்பு, சட்ட இணக்கத்தன்மை, கார்ப்பரேட் ஆளுமை மற்றும் வணிகத் தகராறுகள்.",
      hi: "कॉर्पोरेट सलाहकार, वाणिज्यिक अनुबंध, समझौते, व्यावसायिक संरचना, अनुपालन, कॉर्पोरेट प्रशासन और वाणिज्यिक विवाद।"
    },
    bullets: {
      en: ["Corporate Advisory", "Commercial Contracts & Agreements", "Business Structuring & Compliance", "Corporate Governance", "Commercial Disputes"],
      ta: ["கார்ப்பரேட் ஆலோசனை", "வணிக ஒப்பந்தங்கள்", "வணிகக் கட்டமைப்பு & இணக்கம்", "கார்ப்பரேட் ஆளுமை", "வணிகத் தகராறுகள்"],
      hi: ["कॉर्पोरेट सलाहकार", "वाणिज्यिक अनुबंध और समझौते", "व्यावसायिक संरचना और अनुपालन", "कॉर्पोरेट प्रशासन", "वाणिज्यिक विवाद"]
    }
  },
  {
    slug: "property-law",
    category: "Property & Civil",
    icon: Landmark,
    color: "bg-amber-500/10 text-amber-600",
    title: {
      en: "Civil Disputes & Property Matters",
      ta: "சிவில் தகராறுகள் மற்றும் சொத்து விவகாரங்கள்",
      hi: "सिविल विवाद और संपत्ति मामले"
    },
    description: {
      en: "Property disputes, title verification, land and possession disputes, injunctions, declarations, recovery proceedings, partition, specific performance, and other civil litigation.",
      ta: "சொத்து தகராறுகள், பத்திர சரிபார்ப்பு, நிலம் மற்றும் உடைமை தகராறுகள், தடையுத்தரவுகள், பிரகடனங்கள், மீட்பு நடவடிக்கைகள், பாகப்பிரிவினை, ஒப்பந்த செயல்திறன் மற்றும் பிற சிவில் வழக்குகள்.",
      hi: "संपत्ति विवाद, शीर्षक सत्यापन, भूमि और कब्जे के विवाद, निषेधाज्ञा, घोषणाएं, वसूली कार्यवाही, विभाजन, विशिष्ट प्रदर्शन और अन्य सिविल मुकदमेबाजी।"
    },
    bullets: {
      en: ["Property Disputes & Title Verification", "Land & Possession Disputes", "Injunctions & Declarations", "Partition & Partition Deeds", "Recovery Proceedings & Specific Performance"],
      ta: ["சொத்து தகராறுகள் & பத்திர சரிபார்ப்பு", "நிலம் & உடைமை தகராறுகள்", "தடையுத்தரவுகள் & பிரகடனங்கள்", "பாகப்பிரிவினை & பாகப்பிரிவினை ஆவணங்கள்", "மீட்பு நடவடிக்கைகள் & குறிப்பிட்ட செயல்திறன்"],
      hi: ["संपत्ति विवाद और शीर्षक सत्यापन", "भूमि और कब्जा विवाद", "निषेधाज्ञा और घोषणाएं", "विभाजन और विभाजन विलेख", "वसूली कार्यवाही और विशिष्ट प्रदर्शन"]
    }
  },
  {
    slug: "hr-ce",
    category: "Litigation",
    icon: BookOpen,
    color: "bg-cyan-500/10 text-cyan-600",
    title: {
      en: "HR & CE Cases",
      ta: "HR & CE வழக்குகள் (அறநிலையத்துறை)",
      hi: "एचआर एंड सीई मामले"
    },
    description: {
      en: "Legal representation in matters involving the Hindu Religious & Charitable Endowments Department, temple properties, encroachment proceedings, Section 78/79 proceedings, title and possession disputes, and related civil and writ proceedings.",
      ta: "இந்து சமய அறநிலையத்துறை சம்பந்தப்பட்ட விவகாரங்கள், கோவில் சொத்துக்கள், ஆக்கிரமிப்பு அகற்றுதல் நடவடிக்கைகள், பிரிவு 78/79 நடவடிக்கைகள், உரிமை மற்றும் உடைமை தகராறுகள் மற்றும் சிவில் மற்றும் ரிட் வழக்குகள்.",
      hi: "हिंदू धार्मिक और धर्मार्थ बंदोबस्ती विभाग, मंदिर संपत्तियों, अतिक्रमण हटाने की कार्यवाही, धारा 78/79 की कार्यवाही, स्वामित्व और कब्जे के विवाद और संबंधित नागरिक और रिट कार्यवाही से जुड़े मामलों में कानूनी प्रतिनिधित्व।"
    },
    bullets: {
      en: ["Temple Properties & Endowments", "Encroachment Clearance Proceedings", "Section 78/79 Proceedings", "Title & Possession Disputes", "Civil & Writ Proceedings"],
      ta: ["கோவில் சொத்துக்கள் & அறக்கட்டளைகள்", "ஆக்கிரமிப்பு அகற்றுதல் நடவடிக்கைகள்", "பிரிவு 78/79 நடவடிக்கைகள்", "உரிமை & உடைமை தகராறுகள்", "சிவில் & ரிட் மேல்முறையீடுகள்"],
      hi: ["मंदिर संपत्ति और बंदोबस्ती", "अतिक्रमण हटाने की कार्यवाही", "धारा 78/79 कार्यवाही", "स्वामित्व और कब्जा विवाद", "सिविल और रिट कार्यवाही"]
    }
  },
  {
    slug: "criminal-defense",
    category: "Litigation",
    icon: ShieldCheck,
    color: "bg-indigo-500/10 text-indigo-600",
    title: {
      en: "Trial Defence & Litigation",
      ta: "வழக்கு விசாரணை மற்றும் தற்காப்பு வாதம்",
      hi: "मुकदमा और आपराधिक बचाव"
    },
    description: {
      en: "Strong representation before Trial Courts, District Courts, High Court, and other appropriate forums in civil, criminal, commercial, and regulatory proceedings, with a focus on strategic trial defence and effective advocacy.",
      ta: "சிவில், குற்றவியல், வணிக மற்றும் ஒழுங்குமுறை விவகாரங்களில் விசாரணை நீதிமன்றங்கள், மாவட்ட நீதிமன்றங்கள், உயர் நீதிமன்றம் மற்றும் பிற மன்றங்களில் வலுவான பிரதிநிதித்துவம் மற்றும் தற்காப்பு வாதம்.",
      hi: "रणनीतिक मुकदमे के बचाव और प्रभावी वकालत पर ध्यान देने के साथ सिविल, आपराधिक, वाणिज्यिक और नियामक कार्यवाही में ट्रायल कोर्ट, जिला न्यायालयों, उच्च न्यायालय और अन्य उपयुक्त मंचों के समक्ष मजबूत प्रतिनिधित्व।"
    },
    bullets: {
      en: ["Trial & District Court Representation", "High Court Litigation", "Strategic Trial Defence", "Civil, Criminal & Regulatory Advocacy", "Effective Advocacy & Appeals"],
      ta: ["விசாரணை & மாவட்ட நீதிமன்ற பிரதிநிதித்துவம்", "உயர் நீதிமன்ற வழக்குகள்", "மூலோபாய தற்காப்பு வாதம்", "சிவில், குற்றவியல் & ஒழுங்குமுறை வாதங்கள்", "மேல்முறையீடுகள் & தீர்வுகள்"],
      hi: ["ट्रायल और जिला न्यायालय प्रतिनिधित्व", "उच्च न्यायालय मुकदमेबाजी", "रणनीतिक मुकदमा बचाव", "सिविल, आपराधिक और नियामक वकालत", "प्रभावी वकालत और अपील"]
    }
  },
  {
    slug: "tax-law",
    category: "Corporate",
    icon: Scale,
    color: "bg-emerald-500/10 text-emerald-600",
    title: {
      en: "Taxation & GST",
      ta: "வரிவிதிப்பு மற்றும் ஜிஎஸ்டி",
      hi: "कराधान और जीएसटी"
    },
    description: {
      en: "Advisory and representation relating to GST, income-tax, tax notices, assessments, appeals, compliance, tax disputes, and other direct and indirect taxation matters.",
      ta: "ஜிஎஸ்டி, வருமான வரி, வரி அறிவிப்புகள், வரி மதிப்பீடுகள், மேல்முறையீடுகள், இணக்கம், வரி தகராறுகள் மற்றும் பிற நேரடி மற்றும் மறைமுக வரி விவகாரங்கள்.",
      hi: "जीएसटी, आयकर, कर नोटिस, मूल्यांकन, अपील, अनुपालन, कर विवाद और अन्य प्रत्यक्ष और अप्रत्यक्ष कराधान मामलों से संबंधित सलाह और प्रतिनिधित्व।"
    },
    bullets: {
      en: ["GST Advisory & Compliance", "Income Tax Assessments", "Tax Notices & Appeals", "Tax Disputes & Litigation", "Direct & Indirect Taxation"],
      ta: ["ஜிஎஸ்டி ஆலோசனை & இணக்கம்", "வருமான வரி மதிப்பீடுகள்", "வரி அறிவிப்புகள் & மேல்முறையீடுகள்", "வரி தகராறுகள் & வழக்குகள்", "நேரடி & மறைமுக வரிவிதிப்பு"],
      hi: ["जीएसटी सलाह और अनुपालन", "आयकर मूल्यांकन", "कर नोटिस और अपील", "कर विवाद और मुकदमेबाजी", "प्रत्यक्ष और अप्रत्यक्ष कराधान"]
    }
  }
];

export default function PracticeAreas() {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    language === "en" ? "All" : language === "ta" ? "அனைத்தும்" : "सभी"
  );

  const categories = language === "en" 
    ? ["All", "Corporate", "Property & Civil", "Litigation"]
    : language === "ta"
    ? ["அனைத்தும்", "கார்ப்பரேட்", "சொத்து & சிவில்", "வழக்குகள்"]
    : ["सभी", "कॉर्पोरेट", "संपत्ति और सिविल", "मुकदमेबाजी"];

  const filteredAreas = practiceAreasList.filter((area) => {
    const activeTitle = language === "en" ? area.title.en : language === "ta" ? area.title.ta : area.title.hi;
    const activeDesc = language === "en" ? area.description.en : language === "ta" ? area.description.ta : area.description.hi;
    
    const matchesSearch = activeTitle.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          activeDesc.toLowerCase().includes(searchTerm.toLowerCase());
    
    const catEn = area.category;
    let matchesCategory = true;
    
    if (selectedCategory !== "All" && selectedCategory !== "அனைத்தும்" && selectedCategory !== "सभी") {
      const catMap: Record<string, string> = {
        "Corporate": "Corporate",
        "Property & Civil": "Property & Civil",
        "Litigation": "Litigation",
        "கார்ப்பரேட்": "Corporate",
        "சொத்து & சிவில்": "Property & Civil",
        "வழக்குகள்": "Litigation",
        "कॉर्पोरेट": "Corporate",
        "संपत्ति और सिविल": "Property & Civil",
        "मुकदमेबाजी": "Litigation"
      };
      matchesCategory = catEn === catMap[selectedCategory];
    }
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {t("nav.practiceAreas")}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {language === "en" ? "Fields of Legal Expertise" : language === "ta" ? "எங்கள் சட்ட நிபுணத்துவத் துறைகள்" : "हमारे विधिक विशेषज्ञता क्षेत्र"}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {language === "en" 
              ? "AKM Associates delivers authoritative representation across a vast legal spectrum. Filter our practice areas below to find the specialized legal team for your needs."
              : language === "ta"
              ? "AKM அசோசியேட்ஸ் பரந்த சட்ட நிபுணத்துவத்தைக் கொண்டு வாடிக்கையாளர்களுக்கு வலுவான பாதுகாப்பை வழங்குகிறது. உங்களின் தேவைகளுக்கான குறிப்பிட்ட சட்டப்பிரிவை கீழே தேடி தேர்ந்தெடுக்கவும்."
              : "एकेएम एसोसिएट्स एक विशाल कानूनी क्षेत्र में प्रभावी प्रतिनिधित्व प्रदान करता है। अपनी आवश्यकताओं के लिए विशेष कानूनी टीम खोजने के लिए हमारे अभ्यास क्षेत्रों को नीचे फ़िल्टर करें।"}
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md font-semibold"
                    : "bg-surface hover:bg-muted text-muted-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === "en" ? "Search legal issues..." : language === "ta" ? "சட்டப் பிரச்சனைகளைத் தேடவும்..." : "कानूनी मुद्दे खोजें..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
            />
          </div>
        </div>

        {/* Practice Areas Grid */}
        {filteredAreas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {filteredAreas.map((area, index) => {
              const Icon = area.icon;
              const title = language === "en" ? area.title.en : language === "ta" ? area.title.ta : area.title.hi;
              const desc = language === "en" ? area.description.en : language === "ta" ? area.description.ta : area.description.hi;
              const bullets = language === "en" ? area.bullets.en : language === "ta" ? area.bullets.ta : area.bullets.hi;
              
              return (
                <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all text-left flex flex-col group h-full">
                  <div className="mb-6 flex justify-between items-center">
                    <div className={`p-3 rounded-lg ${area.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {language === "en" ? area.category : language === "ta" ? (
                        area.category === "Corporate" ? "கார்ப்பரேட்" : area.category === "Property & Civil" ? "சொத்து & சிவில்" : "வழக்குகள்"
                      ) : (
                        area.category === "Corporate" ? "कॉर्पोरेट" : area.category === "Property & Civil" ? "संपत्ति और सिविल" : "मुकदमेबाजी"
                      )}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-4 text-primary group-hover:text-secondary transition-colors">
                    {title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {desc}
                  </p>

                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6 border-t border-border/50 pt-4">
                      {bullets.map((bullet, i) => (
                        <li key={i} className="text-xs text-primary/80 flex items-center">
                          <ArrowRight className="h-3 w-3 mr-2 text-secondary shrink-0" /> {bullet}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={`/practice-areas/${area.slug}`} 
                      className="text-secondary font-bold hover:text-primary transition-colors inline-flex items-center text-sm uppercase tracking-wider group/link"
                    >
                      {language === "en" ? "Explore Details" : language === "ta" ? "மேலும் விவரங்கள்" : "विवरण देखें"}{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground text-lg mb-4">
              {language === "en" ? "No practice areas match your filters." : language === "ta" ? "உங்கள் வடிப்பான்களுடன் பொருந்தும் சட்டப் பிரிவுகள் எதுவும் இல்லை." : "आपके फ़िल्टर से मेल खाने वाला कोई कार्यक्षेत्र नहीं मिला।"}
            </p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory(language === "en" ? "All" : language === "ta" ? "அனைத்தும்" : "सभी"); }}
              className="text-secondary hover:text-primary font-bold transition-colors bg-transparent border-none cursor-pointer"
            >
              {language === "en" ? "Clear filters and search" : language === "ta" ? "வடிப்பான்களை நீக்கவும்" : "फ़िल्टर साफ़ करें"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
