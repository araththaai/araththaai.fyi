import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const practiceAreas = [
    {
      title: "Corporate Law",
      description: "End-to-end legal support for businesses, from incorporation to compliance and M&A.",
      slug: "corporate-law"
    },
    {
      title: "Property Law",
      description: "Expert guidance on real estate transactions, property disputes, and documentation.",
      slug: "property-law"
    },
    {
      title: "Family Law",
      description: "Compassionate and discreet representation in matrimonial and family disputes.",
      slug: "family-law"
    },
    {
      title: "Taxation & GST",
      description: "Comprehensive advisory on income tax, GST compliance, and dispute resolution.",
      slug: "taxation"
    },
    {
      title: "Startup Compliance",
      description: "Legal frameworks, IP protection, and regulatory compliance tailored for startups.",
      slug: "startup-compliance"
    },
    {
      title: "Criminal Defense",
      description: "Vigorous representation in criminal proceedings with a focus on protecting your rights.",
      slug: "criminal-defense"
    }
  ];

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Practice Areas
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Expertise That Matters
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive legal solutions across a wide spectrum of practice areas, tailored to your unique circumstances and business objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-left group">
              <h3 className="text-2xl font-bold font-heading mb-4 text-primary group-hover:text-secondary transition-colors">{area.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 h-20">
                {area.description}
              </p>
              <Link href={`/services/${area.slug}`} className="text-secondary font-medium hover:underline inline-flex items-center text-sm uppercase tracking-wider">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
