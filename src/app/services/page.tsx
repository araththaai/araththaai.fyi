import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Landmark, Scale, Users, Lightbulb, Briefcase, HandMetal } from "lucide-react";

export default function ServicesPage() {
  const practiceAreas = [
    {
      id: "civil-law",
      title: "Civil Law",
      description: "Comprehensive representation in civil disputes, property claims, and contract enforcements. We safeguard your rights in all civil matters through strategic litigation and alternative dispute resolution.",
      bullets: ["Property Disputes", "Breach of Contract", "Injunctions", "Debt Recovery"],
      icon: Scale
    },
    {
      id: "criminal-law",
      title: "Criminal Law",
      description: "Robust defense and strategic advocacy in criminal proceedings. Our experienced litigators provide aggressive representation to protect your liberties and rights at every stage of the legal process.",
      bullets: ["Bail Applications", "Trial Advocacy", "White-Collar Crimes", "Appeals & Revisions"],
      icon: Shield
    },
    {
      id: "tax-law",
      title: "Tax Law",
      description: "Strategic tax planning and litigation services for businesses and individuals. We navigate complex taxation frameworks to ensure compliance and resolve disputes with tax authorities efficiently.",
      bullets: ["Direct & Indirect Tax", "Tax Litigation", "Corporate Structuring", "GST Compliance"],
      icon: Landmark
    },
    {
      id: "hr-ce",
      title: "HR&CE",
      description: "Expert legal counsel dealing with the administration, regulation, and protection of Hindu religious institutions, endowments, and temple properties under the HR&CE Act.",
      bullets: ["Temple Administration", "Property Disputes", "Trusteeship Rights", "Writ Petitions"],
      icon: BookOpen
    },
    {
      id: "family-law",
      title: "Family Law",
      description: "Discreet and compassionate legal services for matrimonial disputes, custody battles, and family partitions. We handle sensitive family matters with utmost care and professionalism.",
      bullets: ["Divorce Proceedings", "Child Custody", "Alimony & Maintenance", "Family Partitions"],
      icon: Users
    },
    {
      id: "ipr",
      title: "IPR",
      description: "Protect your innovations and creative assets. We handle strategic IP registration, portfolio management, and enforcement against infringement to secure your competitive advantage.",
      bullets: ["Trademark Registration", "Patent Strategy", "Copyright Protection", "IP Litigation"],
      icon: Lightbulb
    },
    {
      id: "corporate-laws",
      title: "Corporate Laws",
      description: "Comprehensive legal counsel for businesses, from formation and governance to mergers, acquisitions, and compliance. We ensure your business operations align with regulatory frameworks.",
      bullets: ["Mergers & Acquisitions", "Corporate Governance", "Contract Drafting", "Regulatory Compliance"],
      icon: Briefcase
    },
    {
      id: "human-rights",
      title: "Human Rights",
      description: "Dedicated advocacy for the protection and enforcement of fundamental human rights. We represent victims of rights violations and fight against systemic injustices at all judicial levels.",
      bullets: ["Constitutional Writs", "Civil Liberties", "Public Interest Litigation", "Anti-Discrimination"],
      icon: HandMetal
    }
  ];

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Our Legal Services
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            Expertise That Matters
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            AKM Associates offers specialized expertise across key practice areas, providing comprehensive legal solutions tailored to the sophisticated needs of our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} id={area.id} className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow text-left group flex flex-col">
                <div className="mb-6 flex justify-start">
                  <div className="p-3 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-primary group-hover:text-secondary transition-colors">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {area.description}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6 border-t border-border/50 pt-4">
                    {area.bullets.map((bullet, i) => (
                      <li key={i} className="text-xs font-medium text-primary/80 flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-secondary shrink-0" /> {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact`} className="text-secondary font-medium hover:underline inline-flex items-center text-sm uppercase tracking-wider">
                    Consult Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
