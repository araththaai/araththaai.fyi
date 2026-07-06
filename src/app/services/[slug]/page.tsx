import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
// In a real scenario, this would query the DB. Since we haven't seeded the DB yet,
// we provide a fallback for the core services mentioned on the homepage.
const practiceAreasData: Record<string, { title: string; description: string; longDescription: string }> = {
  "corporate-law": {
    title: "Corporate Law",
    description: "End-to-end legal support for businesses, from incorporation to compliance and M&A.",
    longDescription: "Our Corporate Law practice provides comprehensive advisory and transactional support. We assist with company formation, corporate governance, mergers and acquisitions (M&A), joint ventures, and regulatory compliance. Our team ensures that your business operations align perfectly with current legislative requirements, minimizing risk while maximizing operational efficiency."
  },
  "property-law": {
    title: "Property Law",
    description: "Expert guidance on real estate transactions, property disputes, and documentation.",
    longDescription: "Navigating the complexities of real estate transactions requires meticulous attention to detail. We offer expert guidance on property acquisitions, leasing, title due diligence, zoning laws, and dispute resolution. Whether you are a commercial developer or an individual buyer, our robust legal frameworks protect your investments."
  },
  "family-law": {
    title: "Family Law",
    description: "Compassionate and discreet representation in matrimonial and family disputes.",
    longDescription: "We understand the sensitive nature of family legal matters. Our dedicated family law practitioners provide compassionate, discreet, and highly effective representation in divorce proceedings, child custody battles, alimony negotiations, and estate inheritance disputes."
  },
  "taxation": {
    title: "Taxation & GST",
    description: "Comprehensive advisory on income tax, GST compliance, and dispute resolution.",
    longDescription: "Our taxation experts assist businesses and high-net-worth individuals in navigating complex tax regimes. We provide strategic planning for direct and indirect taxes, represent clients before tax tribunals, and ensure seamless GST compliance."
  },
  "startup-compliance": {
    title: "Startup Compliance",
    description: "Legal frameworks, IP protection, and regulatory compliance tailored for startups.",
    longDescription: "Startups require agile yet robust legal foundations. We assist founders with co-founder agreements, ESOP structuring, fundraising documentation (Term Sheets, SHAs), and crucial Intellectual Property (IP) protection to secure their innovations."
  },
  "criminal-defense": {
    title: "Criminal Defense",
    description: "Vigorous representation in criminal proceedings with a focus on protecting your rights.",
    longDescription: "Our criminal defense team is composed of seasoned litigators capable of handling complex white-collar crimes, economic offenses, and standard criminal proceedings. We offer vigorous representation focused on protecting your fundamental rights at every stage of the justice system."
  }
};

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object (Next.js 15 requirement)
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const area = practiceAreasData[slug];

  if (!area) {
    notFound();
  }

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Practice Areas
        </Link>
        
        <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-6">
          Practice Area
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-8 leading-tight">
          {area.title}
        </h1>
        
        <div className="prose prose-lg prose-headings:font-heading prose-headings:text-primary text-muted-foreground max-w-none mb-12">
          <p className="lead text-xl text-foreground font-medium mb-8">
            {area.description}
          </p>
          <p className="leading-relaxed">
            {area.longDescription}
          </p>
        </div>
        
        <div className="bg-card border border-border p-8 rounded-2xl shadow-sm text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-4">Need Legal Counsel in {area.title}?</h3>
          <p className="text-muted-foreground mb-8">Schedule a private consultation with our specialized legal team.</p>
          <Link href="/book">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
