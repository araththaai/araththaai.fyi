import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Scale, Award, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/shared/LiquidEther";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { language, t } = useLanguage();

  const spotlightPartners = [
    { 
      name: "Aseema Khaudhar", 
      role: language === "en" ? "Founder & Senior Partner" : "நிறுவனர் & மூத்த பங்குதாரர்", 
      area: language === "en" ? "Tax & Civil Law" : "வரி & சிவில் சட்டம்", 
      initials: "AK", 
      slug: "aseema-khaudhar" 
    },
    { 
      name: "Mohammad Muzammil", 
      role: language === "en" ? "Managing Partner & Criminal Lawyer" : "நிர்வாக பங்குதாரர் & குற்றவியல் வழக்கறிஞர்", 
      area: language === "en" ? "Criminal Trial Defence" : "குற்றவியல் வழக்கு விசாரணை தற்காப்பு", 
      initials: "MM", 
      slug: "mohammad-muzammil" 
    }
  ];

  const quickPracticeAreas = [
    { 
      title: language === "en" ? "Corporate & Commercial" : "கார்ப்பரேட் & வணிகம்", 
      slug: "corporate-law", 
      desc: language === "en" ? "Advisory, contracts, and business structuring." : "ஆலோசனை, ஒப்பந்தங்கள் மற்றும் வணிக கட்டமைப்பு." 
    },
    { 
      title: language === "en" ? "Civil & Property Matters" : "சிவில் & சொத்து விவகாரங்கள்", 
      slug: "property-law", 
      desc: language === "en" ? "Property disputes, title deeds, and partition." : "சொத்து தகராறுகள், உரிமைப் பத்திரங்கள் மற்றும் பாகப்பிரிவினை." 
    },
    { 
      title: language === "en" ? "Trial Defence & Litigation" : "வழக்கு விசாரணை & தற்காப்பு", 
      slug: "criminal-defense", 
      desc: language === "en" ? "Strong advocacy before Trial and High Courts." : "விசாரணை மற்றும் உயர் நீதிமன்றங்களில் வலுவான பிரதிநிதித்துவம்." 
    },
    { 
      title: language === "en" ? "Taxation & GST" : "வரிவிதிப்பு & ஜிஎஸ்டி", 
      slug: "tax-law", 
      desc: language === "en" ? "Advisory relating to GST, assessments, and appeals." : "ஜிஎஸ்டி, வரி மதிப்பீடுகள் மற்றும் மேல்முறையீடுகள்." 
    }
  ];

  const testimonials = [
    { 
      quote: language === "en" 
        ? "Their strategic support in our corporate restructuring saved our subsidiary network millions in compliance friction."
        : "எங்கள் கார்ப்பரேட் மறுசீரமைப்பில் அவர்களின் மூலோபாய ஆதரவு எங்கள் துணை நிறுவனங்களுக்கு இணக்கச் செலவில் லட்சக்கணக்கான ரூபாய்களைச் சேமித்தது.",
      author: language === "en" ? "Chairman" : "தலைவர்", 
      company: language === "en" ? "Logistics Conglomerate" : "லாஜிஸ்டிக்ஸ் நிறுவனம்" 
    },
    { 
      quote: language === "en" 
        ? "Facing economic offense allegations was stressful, but Muzammil secured immediate protection. The case was resolved in record time."
        : "பொருளாதார குற்றச்சாட்டுகளை எதிர்கொள்வது மன அழுத்தமாக இருந்தது, ஆனால் முஸம்மில் உடனடிப் பாதுகாப்பைப் பெற்றுத் தந்தார். வழக்கு மிகக் குறுகிய காலத்தில் தீர்க்கப்பட்டது.",
      author: language === "en" ? "Chief Executive Officer" : "தலைமை நிர்வாக அதிகாரி", 
      company: language === "en" ? "FinTech Enterprise" : "ஃபின்டெக் நிறுவனம்" 
    },
    { 
      quote: language === "en" 
        ? "We recovered temple trust estates that had been unlawfully encroached for 15 years. Their knowledge of temple law is unmatched."
        : "15 ஆண்டுகளாக சட்டவிரோதமாக ஆக்கிரமிக்கப்பட்டிருந்த கோவில் அறக்கட்டளை நிலங்களை மீட்டெடுத்தோம். அறநிலையத்துறை சட்டத்தில் அவர்களின் அறிவு இணையற்றது.",
      author: language === "en" ? "Hereditary Trustee" : "பரம்பரை அறங்காவலர்", 
      company: language === "en" ? "Religious Endowment Board" : "அறநிலையத்துறை வாரியம்" 
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section with LiquidEther Shader Backdrop */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-32 overflow-hidden bg-muted border-b border-border">
        
        {/* Interactive WebGL Shader Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <LiquidEther 
            colors={["#C8A24A", "#F8FAFC", "#E2E8F0"]}
            mouseForce={1.2}
            cursorSize={0.25}
            autoDemo={true}
            autoSpeed={0.8}
            autoIntensity={0.6}
            className="w-full h-full"
          />
        </div>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background z-10 pointer-events-none"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-foreground space-y-8">
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
            {t("hero.badge")}
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary leading-tight tracking-tight max-w-4xl mx-auto">
            {t("hero.title1")}<br />
            <span className="text-secondary bg-clip-text">{t("hero.title2")}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("hero.desc")}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/book-consultation">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded shadow-md hover:shadow-lg transition-all">
                {t("hero.btnIntake")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/practice-areas">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-border text-foreground hover:bg-muted rounded transition-all">
                {t("hero.btnExplore")}
              </Button>
            </Link>
          </div>

          {/* Quick Practice Area Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-16 text-left">
            {quickPracticeAreas.map((area, idx) => (
              <Link 
                key={idx}
                to={`/practice-areas/${area.slug}`} 
                className="bg-card border border-border hover:border-secondary p-4 rounded-lg shadow-sm transition-all group"
              >
                <h4 className="font-bold text-primary text-sm group-hover:text-secondary transition-colors">{area.title}</h4>
                <p className="text-[11px] text-muted-foreground mt-1">{area.desc}</p>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Achievements Section */}
      <section className="py-16 bg-card text-foreground border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <ShieldCheck className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">{t("stats.exp.val")}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{t("stats.exp.lbl")}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Scale className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">{t("stats.settle.val")}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{t("stats.settle.lbl")}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">{t("stats.clients.val")}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{t("stats.clients.lbl")}</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Award className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">{t("stats.credentials.val")}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{t("stats.credentials.lbl")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Practice Areas grid */}
      <section id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
            {t("home.practice.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{t("home.practice.title")}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed pb-12">
            {t("home.practice.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { 
                title: language === "en" ? "Corporate & Commercial Matters" : "கார்ப்பரேட் மற்றும் வணிக விவகாரங்கள்", 
                slug: "corporate-law", 
                desc: language === "en" ? "Advisory, contracts, agreements, business structuring, and compliance reviews." : "கார்ப்பரேட் ஆலோசனை, வணிக ஒப்பந்தங்கள், வணிக கட்டமைப்பு மற்றும் இணக்க ஆலோசனைகள்." 
              },
              { 
                title: language === "en" ? "Civil Disputes & Property Matters" : "சிவில் மற்றும் சொத்து விவகாரங்கள்", 
                slug: "property-law", 
                desc: language === "en" ? "Land possession disputes, title verifications, partition, and civil litigation." : "நில உரிமைத் தகராறுகள், பத்திர சரிபார்ப்புகள், பாகப்பிரிவினை மற்றும் சிவில் வழக்குகள்." 
              },
              { 
                title: language === "en" ? "HR & CE Cases" : "HR & CE வழக்குகள் (அறநிலையத்துறை)", 
                slug: "hr-ce", 
                desc: language === "en" ? "Temple properties, encroachment clearances, Section 78/79, and writ proceedings." : "கோவில் சொத்துக்கள், ஆக்கிரமிப்பு அகற்றுதல், பிரிவு 78/79 மற்றும் ரிட் வழக்குகள்." 
              },
              { 
                title: language === "en" ? "Trial Defence & Litigation" : "வழக்கு விசாரணை மற்றும் தற்காப்பு வாதம்", 
                slug: "criminal-defense", 
                desc: language === "en" ? "Strong advocacy before Trial Courts, District Courts, High Court, and regulatory tribunals." : "விசாரணை நீதிமன்றங்கள், மாவட்ட நீதிமன்றங்கள், உயர் நீதிமன்றம் ஆகியவற்றில் வலுவான தற்காப்பு வாதம்." 
              }
            ].map((area, idx) => (
              <div key={idx} className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-lg transition-all flex flex-col justify-between group">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-3 text-primary group-hover:text-secondary transition-colors">{area.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {area.desc}
                  </p>
                </div>
                <Link 
                  to={`/practice-areas/${area.slug}`}
                  className="text-secondary font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 mt-auto group/link"
                >
                  {language === "en" ? "Consult Details" : "விவரம் காண்க"} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <Link to="/practice-areas">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/95 font-semibold px-8 h-12">
                {t("home.practice.all")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Partners Spotlight */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
            {t("home.team.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{t("home.team.title")}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed pb-12">
            {t("home.team.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {spotlightPartners.map((partner, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group flex flex-col">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                  <div className="text-5xl font-bold text-muted-foreground/30 group-hover:text-secondary/20 transition-colors font-heading tracking-tighter">
                    {partner.initials}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-secondary text-[10px] font-bold uppercase tracking-widest mb-1">{partner.role}</p>
                    <h3 className="text-xl font-bold text-primary mb-1 font-heading group-hover:text-secondary transition-colors">{partner.name}</h3>
                    <p className="text-muted-foreground text-xs flex items-center gap-1.5 mb-6">
                      <Award className="h-4 w-4 text-secondary" /> {language === "en" ? "Specialty:" : "சட்டப்பிரிவு:"} {partner.area}
                    </p>
                  </div>
                  <Link to={`/attorneys/${partner.slug}`} className="block w-full">
                    <Button variant="outline" className="w-full h-10 text-primary border-border hover:bg-muted font-semibold text-xs">
                      {t("home.team.viewProfile")}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <Link to="/attorneys">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/95 font-semibold px-8 h-12">
                {t("home.team.all")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Victories Testimonial Grid */}
      <section className="py-24 bg-muted text-foreground border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-muted to-muted pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
              {t("home.testimonials.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">{t("home.testimonials.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              {language === "en" ? "Explore outcomes accomplished for our clients across various jurisdictions." : "பல்வேறு சட்ட வரம்புகளில் எங்கள் வாடிக்கையாளர்களுக்காக சாதிக்கப்பட்ட வழக்கு முடிவுகளை அறியவும்."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-border p-8 rounded-2xl relative flex flex-col justify-between shadow-sm">
                <div>
                  <div className="text-4xl font-serif text-secondary absolute top-6 left-6 opacity-30">“</div>
                  <p className="text-base leading-relaxed text-muted-foreground mb-6 relative z-10 pt-6">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-10 w-10 rounded-full bg-secondary/15 flex items-center justify-center font-bold text-secondary text-sm">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{t.author}</h4>
                    <p className="text-muted-foreground text-xs">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Outcomes Footer Note */}
          <div className="text-center pt-8 max-w-2xl mx-auto flex items-center gap-3 bg-card border border-border p-4 rounded-lg">
            <AlertCircle className="h-5 w-5 text-secondary shrink-0" />
            <p className="text-[10px] text-muted-foreground text-left leading-relaxed">
              <strong>{language === "en" ? "Advertising Notice:" : "விளம்பர அறிவிப்பு:"}</strong> {t("footer.disclaimerText")}
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
