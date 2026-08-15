import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, ShieldCheck, Scale, Users, Landmark, Lightbulb, Briefcase, BookOpen, HandMetal } from "lucide-react";

export const practiceAreasList = [
  {
    slug: "corporate-law",
    title: "Corporate Law & Governance",
    category: "Corporate",
    description: "Full-spectrum corporate legal support, advisory, compliance audits, and M&A transactions. We guide boardrooms and startups through high-stakes regulatory landscapes.",
    bullets: ["Mergers & Acquisitions", "Corporate Governance", "Contract Engineering", "Regulatory Audits"],
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    slug: "property-law",
    title: "Property & Real Estate",
    category: "Property",
    description: "Meticulous documentation, title verifications, leasing contracts, and land acquisition dispute representation. We protect high-value real estate assets.",
    bullets: ["Title Clearance & Verification", "Leasing & Conveyance", "Joint Venture Structuring", "Land Acquisition Disputes"],
    icon: Landmark,
    color: "bg-amber-500/10 text-amber-600"
  },
  {
    slug: "family-law",
    title: "Family & Matrimonial Law",
    category: "Individual",
    description: "Compassionate, highly discrete, and professional legal representation in matrimonial actions, alimony disputes, and family wealth partitions.",
    bullets: ["Divorce Actions", "Child Custody & Guardianship", "Alimony & Child Support", "Partition & Partition Deeds"],
    icon: Users,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    slug: "tax-law",
    title: "Taxation & GST Litigation",
    category: "Corporate",
    description: "Advanced advisory on direct and indirect taxation, compliance auditing, and representing clients in tax disputes before appellate authorities and tribunals.",
    bullets: ["Corporate Tax Restructuring", "GST Compliance Audits", "Appellate Appeals", "Cross-Border Tax Advisory"],
    icon: Scale,
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    slug: "ipr",
    title: "Intellectual Property Rights",
    category: "Corporate",
    description: "Defending innovative assets. We cover trademark registration, patent strategy, design copyright protection, and litigation against IP infringement.",
    bullets: ["Trademark Filing & Prosecution", "Patent Search & Drafts", "Copyright Enforcement", "IP Portfolio Licensing"],
    icon: Lightbulb,
    color: "bg-rose-500/10 text-rose-600"
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense & White-Collar",
    category: "Litigation",
    description: "Aggressive and strategic defense in economic offenses, white-collar financial crimes, bail applications, and representations in trials and appeals.",
    bullets: ["White-Collar Crime Defense", "Bail & Anticipatory Bail", "Trial Representation", "High Court Appeals"],
    icon: ShieldCheck,
    color: "bg-indigo-500/10 text-indigo-600"
  },
  {
    slug: "hr-ce",
    title: "HR & CE / Temple Law",
    category: "Litigation",
    description: "Specialized representation in administration, regulatory compliance, and protecting religious properties and endowments under the HR&CE Act.",
    bullets: ["Temple Endowments Management", "Trusteeship Entitlements", "Writ Petitions", "Audit & Rent Recovery"],
    icon: BookOpen,
    color: "bg-cyan-500/10 text-cyan-600"
  },
  {
    slug: "employment-law",
    title: "Employment & Labor Law",
    category: "Corporate",
    description: "Drafting employment agreements, executing corporate compliance audits, resolving labor disputes, and protecting company and employee rights.",
    bullets: ["Non-Compete & NDA Drafting", "Labor Dispute Representation", "POSH Policy Compliance", "Severance Structuring"],
    icon: HandMetal,
    color: "bg-teal-500/10 text-teal-600"
  }
];

export default function PracticeAreas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Corporate", "Individual", "Property", "Litigation"];

  const filteredAreas = practiceAreasList.filter((area) => {
    const matchesSearch = area.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          area.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || area.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Practice Areas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Fields of Legal Expertise
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            AKM Associates delivers authoritative representation across a vast legal spectrum. Filter our practice areas below to find the specialized legal team for your needs.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-surface hover:bg-muted text-muted-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search legal issues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Practice Areas Grid */}
        {filteredAreas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="bg-card p-8 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all text-left flex flex-col group h-full">
                  <div className="mb-6 flex justify-between items-center">
                    <div className={`p-3 rounded-lg ${area.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {area.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading mb-4 text-primary group-hover:text-secondary transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {area.description}
                  </p>

                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6 border-t border-border/50 pt-4">
                      {area.bullets.map((bullet, i) => (
                        <li key={i} className="text-xs text-primary/80 flex items-center">
                          <ArrowRight className="h-3 w-3 mr-2 text-secondary shrink-0" /> {bullet}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={`/practice-areas/${area.slug}`} 
                      className="text-secondary font-bold hover:text-primary transition-colors inline-flex items-center text-sm uppercase tracking-wider group/link"
                    >
                      Explore Details 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground text-lg mb-4">No practice areas match your filters.</p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="text-secondary hover:text-primary font-bold transition-colors"
            >
              Clear filters and search
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
