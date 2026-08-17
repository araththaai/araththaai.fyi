import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Clock } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const blogPosts = [
  {
    slug: "understanding-pmla-investigations",
    title: {
      en: "Understanding PMLA Search & Seizure Operations",
      ta: "PMLA தேடுதல் மற்றும் சொத்து முடக்க நடவடிக்கைகளைப் புரிந்துகொள்ளுதல்"
    },
    summary: {
      en: "An overview of constitutional protections and rights during enforcement searches under the Prevention of Money Laundering Act.",
      ta: "பணமோசடி தடுப்புச் சட்டத்தின் (PMLA) கீழ் அமலாக்கத் துறை சோதனைகளின் போது அரசியலமைப்பு உரிமைகள் மற்றும் தற்காப்புகள் பற்றிய கண்ணோட்டம்."
    },
    category: {
      en: "Personal Rights",
      ta: "தனிநபர் உரிமைகள்"
    },
    date: {
      en: "August 12, 2026",
      ta: "ஆகஸ்ட் 12, 2026"
    },
    readTime: {
      en: "8 min read",
      ta: "8 நிமிட வாசிப்பு"
    },
    author: "Mohammad Muzammil",
    authorTitle: {
      en: "Managing Partner & Criminal Lawyer",
      ta: "நிர்வாக பங்குதாரர் & குற்றவியல் வழக்கறிஞர்"
    },
    initials: "MM"
  },
  {
    slug: "gst-compliance-audits-2026",
    title: {
      en: "Navigating GST Audits: Key Focus Areas for Businesses",
      ta: "ஜிஎஸ்டி தணிக்கைகளை எதிர்கொள்ளுதல்: வணிகங்களுக்கான முக்கிய வழிகாட்டுதல்கள்"
    },
    summary: {
      en: "Tax assessment frameworks are shifting. Discover critical compliance points and classification dispute guidelines to mitigate liability.",
      ta: "வரி மதிப்பீட்டு முறைகள் மாறுகின்றன. பொறுப்பைக் குறைக்க முக்கியமான இணக்க புள்ளிகள் மற்றும் வகைப்பாடு தகராறு வழிகாட்டுதல்களைக் கண்டறியவும்."
    },
    category: {
      en: "Compliance",
      ta: "இணக்கத்தன்மை"
    },
    date: {
      en: "July 28, 2026",
      ta: "ஜூலை 28, 2026"
    },
    readTime: {
      en: "6 min read",
      ta: "6 நிமிட வாசிப்பு"
    },
    author: "Aseema Khaudhar",
    authorTitle: {
      en: "Founder & Senior Partner",
      ta: "நிறுவனர் & மூத்த பங்குதாரர்"
    },
    initials: "AK"
  },
  {
    slug: "trademark-infringement-digital-brand",
    title: {
      en: "Brand Protection: Enforcing Trademarks in Digital Spaces",
      ta: "பிராண்ட் பாதுகாப்பு: டிஜிட்டல் தளங்களில் வர்த்தக முத்திரைகளை நிலைநாட்டுதல்"
    },
    summary: {
      en: "As platforms evolve, copycats multiply. Learn how to secure permanent injunctions and quash trademark passing-off acts.",
      ta: "டிஜிட்டல் தளங்கள் வளரும்போது, நகல்களும் பெருகுகின்றன. நிரந்தர தடையuத்தரவுகளைப் பெறுவது மற்றும் வர்த்தக முத்திரை மீறல்களை எவ்வாறு தடுப்பது என்று கற்றுக்கொள்ளுங்கள்."
    },
    category: {
      en: "Intellectual Property",
      ta: "அறிவுசார் சொத்துரிமை"
    },
    date: {
      en: "June 15, 2026",
      ta: "ஜூன் 15, 2026"
    },
    readTime: {
      en: "5 min read",
      ta: "5 நிமிட வாசிப்பு"
    },
    author: "Aseema Khaudhar",
    authorTitle: {
      en: "Founder & Senior Partner",
      ta: "நிறுவனர் & மூத்த பங்குதாரர்"
    },
    initials: "AK"
  },
  {
    slug: "rera-disputes-builder-delays",
    title: {
      en: "Delayed RERA Project Handovers: Legal Remedies for Buyers",
      ta: "தாமதமான RERA திட்ட ஒப்படைப்புகள்: வாங்குபவர்களுக்கான சட்டரீதியான தீர்வுகள்"
    },
    summary: {
      en: "Filing complaints and securing compensation under real estate development regulations. Know your statutory rights.",
      ta: "ரியல் எஸ்டேட் ஒழுங்குமுறை சட்டத்தின் கீழ் புகார்களைப் பதிவுசெய்து இழப்பீடுகளைப் பெறுதல். உங்கள் சட்டப்பூர்வ உரிமைகளைத் தெரிந்துகொள்ளுங்கள்."
    },
    category: {
      en: "Property Law",
      ta: "சொத்து சட்டம்"
    },
    date: {
      en: "May 20, 2026",
      ta: "மே 20, 2026"
    },
    readTime: {
      en: "7 min read",
      ta: "7 நிமிட வாசிப்பு"
    },
    author: "Mohammad Muzammil",
    authorTitle: {
      en: "Managing Partner & Criminal Lawyer",
      ta: "நிர்வாக பங்குதாரர் & குற்றவியல் வழக்கறிஞர்"
    },
    initials: "MM"
  }
];

export default function Blog() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = [
    { key: "All", en: "All", ta: "அனைத்தும்" },
    { key: "Compliance", en: "Compliance", ta: "இணக்கத்தன்மை" },
    { key: "Personal Rights", en: "Personal Rights", ta: "தனிநபர் உரிமைகள்" },
    { key: "Intellectual Property", en: "Intellectual Property", ta: "அறிவுசார் சொத்துரிமை" },
    { key: "Property Law", en: "Property Law", ta: "சொத்து சட்டம்" }
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const titleText = language === "en" ? post.title.en : post.title.ta;
    const summaryText = language === "en" ? post.summary.en : post.summary.ta;
    
    const matchesSearch = titleText.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          summaryText.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCat === "All" || post.category.en === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {language === "en" ? "Legal Insights" : "சட்ட நுண்ணறிவுகள்"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {language === "en" ? "Knowledge Hub & Resources" : "அறிவு மையம் & கட்டுரைகள்"}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {language === "en"
              ? "Stay informed with legal articles, legislative reviews, and compliance briefs written by our senior partners."
              : "எங்கள் வழக்கறிஞர்களால் எழுதப்பட்ட சட்டக் கட்டுரைகள், சட்ட விவாதங்கள் மற்றும் இணக்க வழிகாட்டுதல்கள் மூலம் விழிப்புடன் இருங்கள்."}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCat(cat.key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                  selectedCat === cat.key
                    ? "bg-primary text-primary-foreground shadow-md font-semibold"
                    : "bg-surface hover:bg-muted text-muted-foreground border border-border"
                }`}
              >
                {language === "en" ? cat.en : cat.ta}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={language === "en" ? "Search articles..." : "கட்டுரைகளைத் தேட..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredPosts.map((post, idx) => {
              const categoryText = language === "en" ? post.category.en : post.category.ta;
              const readTimeText = language === "en" ? post.readTime.en : post.readTime.ta;
              const titleText = language === "en" ? post.title.en : post.title.ta;
              const summaryText = language === "en" ? post.summary.en : post.summary.ta;
              const authorTitleText = language === "en" ? post.authorTitle.en : post.authorTitle.ta;

              return (
                <div key={idx} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between">
                  
                  {/* Visual Header */}
                  <div className="p-8 pb-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                        {categoryText}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {readTimeText}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary font-heading mb-4 leading-snug group-hover:text-secondary transition-colors">
                      {titleText}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {summaryText}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="p-8 pt-6 mt-6 border-t border-border/60 flex items-center justify-between bg-muted/40">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center font-bold text-primary text-xs select-none">
                        {post.initials}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-primary">{post.author}</h4>
                        <p className="text-[10px] text-muted-foreground">{authorTitleText}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-secondary font-bold hover:text-primary transition-colors text-xs uppercase tracking-wider inline-flex items-center gap-1 group/link"
                    >
                      {language === "en" ? "Read Article" : "மேலும் படிக்க"} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl max-w-5xl mx-auto">
            <p className="text-muted-foreground text-lg">
              {language === "en" ? "No insights matched your query." : "தேடலுக்குரிய கட்டுரைகள் எதுவும் இல்லை."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
