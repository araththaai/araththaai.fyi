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
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-border text-foreground hover:bg-muted transition-all">
                Explore Practice Areas
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
      
      {/* Practice Areas Preview (Placeholder for next phase) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Expertise That Matters</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Comprehensive legal solutions tailored to your unique circumstances and business objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* These would map to individual practice areas */}
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-left">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Corporate Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                End-to-end legal support for businesses, from incorporation to compliance and M&A.
              </p>
              <Link href="/services/corporate-law" className="text-secondary font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-left">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Property Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Expert guidance on real estate transactions, property disputes, and documentation.
              </p>
              <Link href="/services/property-law" className="text-secondary font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-left">
              <h3 className="text-xl font-bold font-heading mb-3 text-primary">Family Law</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Compassionate and discreet representation in matrimonial and family disputes.
              </p>
              <Link href="/services/family-law" className="text-secondary font-medium hover:underline inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
