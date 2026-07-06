import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/shared/LiquidEther";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-background">
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B497CF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={true}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.3 }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-6">
            Premier Legal Consultancy
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight mb-8">
            Authority. Clarity.<br />
            <span className="text-secondary">Uncompromising Results.</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            AKM Associates & Legal Consultants provides world-class legal representation for individuals, enterprises, and startups. We turn complex legal challenges into strategic advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-white rounded-md transition-all shadow-xl hover:shadow-2xl">
                Book Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-border text-foreground hover:bg-muted transition-all">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="px-4">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">20+</h3>
              <p className="text-sm text-gray-300 uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="px-4">
              <div className="flex justify-center mb-4">
                <Scale className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">98%</h3>
              <p className="text-sm text-gray-300 uppercase tracking-widest">Success Rate</p>
            </div>
            <div className="px-4">
              <div className="flex justify-center mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">5000+</h3>
              <p className="text-sm text-gray-300 uppercase tracking-widest">Clients Advised</p>
            </div>
            <div className="px-4">
              <div className="flex justify-center mb-4">
                <Award className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold font-heading mb-2">Top Tier</h3>
              <p className="text-sm text-gray-300 uppercase tracking-widest">Legal Recognition</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Legal Services Section */}
      <section id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Our Legal Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-16 text-lg">
            AKM Associates offers specialized expertise across key practice areas, providing comprehensive legal solutions tailored to the sophisticated needs of our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Civil Law */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Civil Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Comprehensive representation in civil disputes, property claims, and contract enforcements. We safeguard your rights in all civil matters through strategic litigation and alternative dispute resolution.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Property Disputes</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Breach of Contract</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Injunctions</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Debt Recovery</li>
              </ul>
            </div>
            
            {/* Criminal Law */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Criminal Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Robust defense and strategic advocacy in criminal proceedings. Our experienced litigators provide aggressive representation to protect your liberties and rights at every stage of the legal process.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Bail Applications</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Trial Advocacy</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> White-Collar Crimes</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Appeals & Revisions</li>
              </ul>
            </div>

            {/* Tax Law */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Tax Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Strategic tax planning and litigation services for businesses and individuals. We navigate complex taxation frameworks to ensure compliance and resolve disputes with tax authorities efficiently.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Direct & Indirect Tax</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Tax Litigation</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Corporate Structuring</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> GST Compliance</li>
              </ul>
            </div>

            {/* HR&CE */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">HR&CE</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Expert legal counsel dealing with the administration, regulation, and protection of Hindu religious institutions, endowments, and temple properties under the HR&CE Act.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Temple Administration</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Property Disputes</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Trusteeship Rights</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Writ Petitions</li>
              </ul>
            </div>

            {/* Family Law */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Family Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Discreet and compassionate legal services for matrimonial disputes, custody battles, and family partitions. We handle sensitive family matters with utmost care and professionalism.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Divorce Proceedings</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Child Custody</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Alimony & Maintenance</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Family Partitions</li>
              </ul>
            </div>

            {/* IPR */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">IPR</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Protect your innovations and creative assets. We handle strategic IP registration, portfolio management, and enforcement against infringement to secure your competitive advantage.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Trademark Registration</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Patent Strategy</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Copyright Protection</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> IP Litigation</li>
              </ul>
            </div>

            {/* Corporate Laws */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Corporate Laws</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Comprehensive legal counsel for businesses, from formation and governance to mergers, acquisitions, and compliance. We ensure your business operations align with regulatory frameworks.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Mergers & Acquisitions</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Corporate Governance</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Contract Drafting</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Regulatory Compliance</li>
              </ul>
            </div>

            {/* Human Rights */}
            <div className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Human Rights</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                Dedicated advocacy for the protection and enforcement of fundamental human rights. We represent victims of rights violations and fight against systemic injustices at all judicial levels.
              </p>
              <ul className="space-y-2 mb-2">
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Constitutional Writs</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Civil Liberties</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Public Interest Litigation</li>
                <li className="text-xs font-medium text-primary/80 flex items-center"><ArrowRight className="h-3 w-3 mr-2 text-secondary" /> Anti-Discrimination</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Why Partner With Us?</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                In a complex legal landscape, you need more than just legal advice. You need a strategic partner who understands your business, protects your assets, and fights for your rights with uncompromising dedication.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Unwavering Integrity</h4>
                    <p className="text-muted-foreground text-sm">We operate with the highest ethical standards, ensuring transparent communication and honest assessments at every stage.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Industry-Leading Expertise</h4>
                    <p className="text-muted-foreground text-sm">Our partners bring decades of specialized experience across corporate, civil, and criminal jurisdictions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 text-secondary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Client-Centric Approach</h4>
                    <p className="text-muted-foreground text-sm">Every strategy is bespoke. We tailor our legal architecture to fit your specific goals and risk tolerance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                  <Scale className="h-48 w-48 text-primary/20" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs">
                <p className="text-2xl font-bold text-primary font-heading">"Justice delayed is justice denied."</p>
                <p className="text-sm text-muted-foreground mt-2">— Our Founding Principle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Partners */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Leadership
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-16">Meet the Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Robert Kavanagh", role: "Managing Partner", area: "Corporate Law", initials: "RK" },
              { name: "Sarah Jenkins", role: "Senior Partner", area: "Civil Litigation", initials: "SJ" },
              { name: "David Chen", role: "Partner", area: "Intellectual Property", initials: "DC" }
            ].map((partner, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all group">
                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                  <div className="text-5xl font-bold text-gray-300 group-hover:text-primary/20 transition-colors font-heading tracking-tighter">
                    {partner.initials}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-1">{partner.role}</p>
                  <h3 className="text-xl font-bold text-primary mb-1">{partner.name}</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1.5 mb-4">
                    <Award className="h-4 w-4" /> {partner.area}
                  </p>
                  <Button variant="outline" className="w-full h-10 text-primary border-gray-200 hover:bg-gray-50">View Profile</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Client Success Stories</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here's what our clients have to say about our legal representation.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Their strategic approach to our corporate merger saved us millions in potential liabilities. Absolutely brilliant team.", author: "Michael T.", company: "TechStart Inc." },
              { quote: "When I was facing complex IP litigation, Robert and his team were my shield. We didn't just win; we set a precedent.", author: "Elena R.", company: "Innovate Labs" },
              { quote: "Professional, transparent, and incredibly effective. They turned a stressful property dispute into a swift victory.", author: "James W.", company: "Wellington Estates" }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl relative">
                <div className="text-4xl font-serif text-secondary absolute top-6 left-6 opacity-50">"</div>
                <p className="text-lg leading-relaxed mb-6 relative z-10 pt-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.author}</h4>
                    <p className="text-primary-foreground/70 text-sm">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
