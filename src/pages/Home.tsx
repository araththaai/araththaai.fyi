import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Scale, Award, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/shared/LiquidEther";

export default function Home() {
  const spotlightPartners = [
    { name: "Aseema Khaudhar", role: "AKM Associate – Legal Consultant", area: "Civil & High Court Advocacy", initials: "AK", slug: "aseema-khaudhar" },
    { name: "A. K. Munusamy", role: "Senior Managing Partner", area: "Corporate Law", initials: "AKM", slug: "ak-munusamy" },
    { name: "Karthik Munusamy", role: "Senior Litigating Partner", area: "Criminal Defense", initials: "KM", slug: "karthik-munusamy" }
  ];

  const quickPracticeAreas = [
    { title: "Corporate Law", slug: "corporate-law", desc: "M&A, governance & compliance reviews." },
    { title: "Property Law", slug: "property-law", desc: "Title clearance & real estate contracts." },
    { title: "Family Law", slug: "family-law", desc: "Compassionate matrimonial representation." },
    { title: "Criminal Defense", slug: "criminal-defense", desc: "White-collar defense & regular bails." }
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
            Premier Legal Consultancy & Advocacy
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-primary leading-tight tracking-tight max-w-4xl mx-auto">
            Authority. Integrity.<br />
            <span className="text-secondary bg-clip-text">Uncompromising Results.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Araththaai (AKM Associates) represents corporations, startups, and families through complex jurisdictions. We deliver high-stakes courtroom victories and comprehensive compliance structures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/book-consultation">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded shadow-md hover:shadow-lg transition-all">
                Schedule Privileged Intake <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/practice-areas">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-border text-foreground hover:bg-muted rounded transition-all">
                Explore Practice Areas
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
              <h3 className="text-4xl font-bold font-heading text-primary">25+</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Years Active Experience</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Scale className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">98%</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Favorable Settlements</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">5,000+</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Corporate & Private Clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center mb-2">
                <Award className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold font-heading text-primary">Top Tier</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Legal Bar Credentials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Practice Areas grid */}
      <section id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
            Specialized Jurisdictions
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Practice Areas</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed pb-12">
            Our firm balances corporate governance advisory, land title audit investigations, and trial defense advocacy at premium standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { title: "Corporate Governance", slug: "corporate-law", desc: "M&A, contract engineering, and statutory board audits under the Companies Act." },
              { title: "Property & Titles", slug: "property-law", desc: "Land clearances, Joint Development Agreement drafting, and RERA claims litigation." },
              { title: "Family & Partition", slug: "family-law", desc: "Discrete divorce actions, custody disputes, and matrimonial wealth distribution." },
              { title: "Taxation & GST", slug: "tax-law", desc: "Appellate advocacy before ITAT, direct/indirect tax planning, and GST dispute resolutions." }
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
                  Consult Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <Link to="/practice-areas">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/95 font-semibold px-8 h-12">
                View All Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Partners Spotlight */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
            Firm Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Managing Partners</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed pb-12">
            Decades of combined legal excellence, court authority, and advisory accomplishments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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
                      <Award className="h-4 w-4 text-secondary" /> Specialty: {partner.area}
                    </p>
                  </div>
                  <Link to={`/attorneys/${partner.slug}`} className="block w-full">
                    <Button variant="outline" className="w-full h-10 text-primary border-border hover:bg-muted font-semibold text-xs">
                      View Complete Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12">
            <Link to="/attorneys">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/95 font-semibold px-8 h-12">
                Meet Entire Legal Team
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
              Track Record Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Client Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Explore outcomes accomplished for our clients across various jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Their strategic support in our corporate restructuring saved our subsidiary network millions in compliance friction.", author: "Chairman", company: "Logistics Conglomerate" },
              { quote: "Facing economic offense allegations was stressful, but Karthik secured immediate protection. The case was resolved in record time.", author: "Chief Executive Officer", company: "FinTech Enterprise" },
              { quote: "We recovered temple trust estates that had been unlawfully encroached for 15 years. Their knowledge of temple law is unmatched.", author: "Hereditary Trustee", company: "Religious Endowment Board" }
            ].map((t, i) => (
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
              <strong>Advertising Notice:</strong> Prior results achieved do not guarantee similar outcomes in subsequent legal matters. All client references are anonymized in accordance with professional bar guidelines.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
