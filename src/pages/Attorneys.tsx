import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Award, GraduationCap, MapPin } from "lucide-react";

export const attorneysList = [
  {
    slug: "aseema-khaudhar",
    name: "Aseema Khaudhar",
    role: "AKM Associate – Legal Consultant",
    practice: "District Court, High Court & Tribunal Advocacy",
    practiceSlug: "property-law",
    initials: "AK",
    bio: "Specializes in District Court matters, High Court appeals, tribunals, property audits, civil disputes, consumer concerns, and family matters.",
    education: "LL.B. (Hons) - Madras High Court Jurisdiction & Legal Studies",
    admissions: "Bar Council of Tamil Nadu (Karur & Chennai Offices)",
    whatsapp: "8610792622",
    instagram: "@ARATHTHAAI"
  },
  {
    slug: "ak-munusamy",
    name: "A. K. Munusamy",
    role: "Senior Managing Partner",
    practice: "Corporate Law & Governance",
    practiceSlug: "corporate-law",
    initials: "AKM",
    bio: "Over 25 years of extensive experience in high-stakes corporate disputes, corporate restructurings, and strategic litigation before various high courts.",
    education: "LL.B. (Hons) - Madras Law College",
    admissions: "Bar Council of Tamil Nadu (1998)"
  },
  {
    slug: "karthik-munusamy",
    name: "Karthik Munusamy",
    role: "Senior Litigating Partner",
    practice: "Criminal Defense & White-Collar",
    practiceSlug: "criminal-defense",
    initials: "KM",
    bio: "Specializes in white-collar economic crime, bail petitions, and defending constitutional civil liberties in trial and appellate jurisdictions.",
    education: "LL.M. (Criminal Jurisprudence) - National Law School, Bangalore",
    admissions: "Bar Council of Delhi (2008)"
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Senior Partner",
    practice: "Family & Matrimonial Law",
    practiceSlug: "family-law",
    initials: "SJ",
    bio: "Advises individuals on complex matrimonial separations, cross-border custody, and sensitive partition claims with extreme discretion.",
    education: "LL.B. - ILS Law College, Pune",
    admissions: "Bar Council of Maharashtra & Goa (2010)"
  },
  {
    slug: "david-chen",
    name: "David Chen",
    role: "Partner",
    practice: "Intellectual Property Rights",
    practiceSlug: "ipr",
    initials: "DC",
    bio: "Manages global IP filings, patent disputes, and brand protection strategies for tech firms, startups, and research institutions.",
    education: "M.S. in Intellectual Property - George Washington University Law",
    admissions: "Bar Council of Tamil Nadu (2012)"
  },
  {
    slug: "meera-raman",
    name: "Meera Raman",
    role: "Senior Associate",
    practice: "Property & Real Estate Law",
    practiceSlug: "property-law",
    initials: "MR",
    bio: "Exhaustive legal check of land histories, joint development contracts, patta transfers, and representing developers in RERA complaints.",
    education: "LL.B. - School of Excellence in Law, Chennai",
    admissions: "Bar Council of Tamil Nadu (2016)"
  }
];

export default function Attorneys() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");

  const roles = ["All", "Managing Partner", "Partner", "Associate"];

  const filteredAttorneys = attorneysList.filter((attorney) => {
    const matchesSearch = attorney.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          attorney.practice.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "All" || attorney.role.includes(selectedRole);
    return matchesSearch && matchesRole;
  });

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Our Professionals
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Meet Our Attorneys
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            A premier team of legal minds combining local jurisprudential authority with client-centric integrity.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 bg-card p-6 rounded-2xl border border-border shadow-sm">
          {/* Role filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  selectedRole === r
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-surface hover:bg-muted text-muted-foreground border border-border"
                }`}
              >
                {r}s
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search attorney name or practice..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Attorneys Grid */}
        {filteredAttorneys.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttorneys.map((attorney, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all group flex flex-col">
                {/* Visual Initials Avatar */}
                <div className="aspect-[4/3] bg-muted flex items-center justify-center group-hover:bg-primary/5 transition-colors relative overflow-hidden">
                  <div className="text-6xl font-extrabold text-muted-foreground/30 group-hover:text-secondary/20 transition-colors font-heading tracking-tighter">
                    {attorney.initials}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                    {attorney.role}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1 font-heading group-hover:text-secondary transition-colors">
                      {attorney.name}
                    </h3>
                    <p className="text-secondary text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <Award className="h-4 w-4 shrink-0" /> {attorney.practice}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {attorney.bio}
                    </p>
                  </div>

                  <div className="border-t border-border/60 pt-4 space-y-3 mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <GraduationCap className="h-4 w-4 text-secondary shrink-0" />
                      <span className="truncate">{attorney.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-4 w-4 text-secondary shrink-0" />
                      <span>{attorney.admissions}</span>
                    </div>

                    <Link to={`/attorneys/${attorney.slug}`} className="block pt-2">
                      <button className="w-full bg-primary hover:bg-primary/95 text-white py-2 rounded font-semibold text-sm transition-all flex items-center justify-center gap-1">
                        View Complete Profile <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground text-lg mb-4">No attorneys match your query.</p>
            <button 
              onClick={() => { setSearchTerm(""); setSelectedRole("All"); }}
              className="text-secondary hover:text-primary font-bold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
