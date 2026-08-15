

import { ShieldCheck, Scale, HeartHandshake, Landmark } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            About The Firm
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            A Legacy of Legal Excellence
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Delivering authoritative counsel, high-stakes advocacy, and transparent representation since 1998.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Founding Vision</h2>
            <p>
              Araththaai (AKM Associates & Legal Consultants) was founded in Chennai with a single core mandate: to translate complex legal regulations into actionable advantages. What began as a dedicated property title audit boutique has expanded into a full-service consultancy firm representing corporations, startups, and families.
            </p>
            <p>
              Under the leadership of our Senior Managing Partner, A. K. Munusamy, we have built a team of seasoned litigators and corporate advisors who value confidentiality, deep technical preparation, and unwavering integrity.
            </p>
            <p>
              Whether structuring multi-million venture debt investments or defending private civil liberties, we ensure our clients receive the highest tier of legal representation.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-primary/5 border border-border overflow-hidden shadow-lg flex items-center justify-center relative">
              <Scale className="h-40 w-40 text-secondary/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <p className="text-xl font-bold text-primary font-heading leading-tight">“Justice delayed is justice denied.”</p>
              <p className="text-xs text-muted-foreground mt-2">— Our Founding Principle</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">Our Core Ethics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-4">
              <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">Privileged Secrecy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All client coordinates and case briefs are protected under strict attorney secrecy codes. Your data remains secure and confidential.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-4">
              <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-lg">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">Deep Preparation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not rely on templates. Our case strategies are engineered through exhaustive document flow checking and statutory precedents review.
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-4">
              <div className="inline-flex p-3 bg-purple-50 text-purple-600 rounded-lg">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">Pro Bono Advocacy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in equal rights. Our partners dedicate pro bono legal counsel to support civil liberties and public environmental resources protection.
              </p>
            </div>
          </div>
        </div>

        {/* Credentials & Memberships */}
        <div className="bg-card text-foreground p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex p-3 bg-secondary/15 rounded-lg text-secondary">
                <Landmark className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">Bar Accreditations</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our attorneys are active members in good standing of various national and state regulatory bar organizations.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div className="bg-muted border border-border p-5 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Bar Council of India</h4>
                <p className="text-xs">Statutory licensing and regulatory board for all advocates practicing within the Supreme Court and national high court systems.</p>
              </div>
              <div className="bg-muted border border-border p-5 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Madras High Court Bar Association</h4>
                <p className="text-xs">One of the oldest legal association pools in South Asia, representing senior advocacy members since the 19th century.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
