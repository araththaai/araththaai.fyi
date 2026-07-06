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
    </div>
  );
}
