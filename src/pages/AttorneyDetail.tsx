import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, GraduationCap, Scale, ShieldCheck, Calendar, BookOpen, Briefcase, Instagram, Phone } from "lucide-react";
import { attorneysList } from "./Attorneys";

// Expanded details maps for notable cases, bar publications etc.
const extendedAttorneyDetails: Record<string, {
  notableCases: string[];
  publications: string[];
  bioParagraphs: string[];
}> = {
  "aseema-khaudhar": {
    bioParagraphs: [
      "Advocate Aseema Khaudhar is an Associate and Legal Consultant at AKM Associates (Araththaai). She advises clients on a comprehensive suite of legal matters across Tamil Nadu, maintaining key offices in Karur and Chennai.",
      "Her practice covers trial and appellate advocacy, representing individuals and entities before District Courts, the Madras High Court, and regulatory tribunals. She has a deep focus on property titling audits, civil disputes, consumer protections, and family counseling.",
      "Aseema is highly dedicated to legal awareness, frequently conducting community consultation programs and sharing regulatory guidance online through the @ARATHTHAAI portal."
    ],
    notableCases: [
      "District Court Matters & Civil Disputes: Represented clients in partition actions, injunction suits, and contract violations.",
      "High Court & Tribunal Cases: Appealed administrative decisions and defended statutory rights.",
      "Consumer & Family Matters: Handled counseling, child visitation rights, and consumer tribunal compensations.",
      "Property Audits: Verified legal history and title ownership across Tamil Nadu."
    ],
    publications: [
      "‘Understanding Land Registration and Title Verifications in Tamil Nadu’ - Legal Awareness Series, 2023.",
      "‘Consumer Protection Act: A Guide for First-time Claimants’ - Advocate's Journal, 2024."
    ]
  },
  "ak-munusamy": {
    bioParagraphs: [
      "A. K. Munusamy is the founding partner of AKM Associates (Araththaai). With a legal career spanning over two and a half decades, he serves as lead counsel to major banking institutions, infrastructure builders, and retail chains.",
      "His practice centers on high-stakes litigation before the Madras High Court, administrative arbitration, and corporate structuring. He has represented boards of directors in complex shareholder deadlocks and regulatory actions under the Companies Act.",
      "In addition to his corporate work, A. K. Munusamy is an advisor to state boards and regularly participates in policy discussions regarding environmental compliance and industrial zoning regulations."
    ],
    notableCases: [
      "Successfully defended a national infrastructure developer in a ₹450M contract breach claim.",
      "Advised a multi-state retail group during a complex corporate restructuring involving 12 subsidiaries.",
      "Obtained a favorable judgment in the High Court regarding land classification permits for a smart city project."
    ],
    publications: [
      "‘Shareholder Disputes and NCLT Jurisdictions’ - Madras Law Journal, 2018.",
      "‘Evolving Environmental Compliance Standards for Heavy Industries’ - Chambers & Partners Legal Guide, 2022."
    ]
  },
  "karthik-munusamy": {
    bioParagraphs: [
      "Karthik Munusamy heads the White-Collar Defense & Criminal litigation team at Araththaai. He holds a Master's degree in Criminal Jurisprudence and specializes in defense work under the Prevention of Money Laundering Act (PMLA) and Prevention of Corruption Act.",
      "He has earned a reputation for strategic defense filings, securing anticipatory bails in highly publicized corporate investigations, and representing clients before specialized enforcement directorates.",
      "Karthik is a passionate defender of fundamental rights and frequently handles writ petitions in high courts contesting arbitrary state search and seizure orders."
    ],
    notableCases: [
      "Secured immediate bail for a financial controller accused of major bank consortium fraud.",
      "Quashed an arbitrary tax enforcement FIR in the High Court under Section 482 jurisdiction.",
      "Favorable defense verdict in an anti-corruption investigation involving state contract approvals."
    ],
    publications: [
      "‘PMLA Investigations and Constitutional Protections’ - National Law Review, 2020.",
      "‘Evidentiary Standards in Corporate Bribery Prosecutions’ - Indian Bar Association Journal, 2023."
    ]
  },
  "sarah-jenkins": {
    bioParagraphs: [
      "Sarah Jenkins leads the Matrimonial and Family Law practice at the firm. Over the last 15 years, she has advised high-net-worth clients, entrepreneurs, and public figures in sensitive family reorganizations, international custody disputes, and estate inheritance claims.",
      "She strongly advocates for strategic mediation, working to resolve sensitive custody and alimony disputes without protracted public courtroom battles. Where trial becomes necessary, she executes case strategies with extreme preparation and precision.",
      "Sarah is also a member of various women's rights advocates networks, contributing pro-bono counsel in child safety and protection cases."
    ],
    notableCases: [
      "Resolved a complex cross-border custody dispute involving jurisdictions in India and the UK.",
      "Represented a prominent family business owner in a strategic partition deed dividing ₹800M in assets.",
      "Successfully contested a major maintenance claim, securing an equitable settlement for the client."
    ],
    publications: [
      "‘Hague Convention and Cross-Border Child Abduction Laws in India’ - Family Law Quarterly, 2019.",
      "‘Valuing Business Assets in Matrimonial Partitions’ - Legal Era Magazine, 2021."
    ]
  },
  "david-chen": {
    bioParagraphs: [
      "David Chen manages the Intellectual Property portfolio at Araththaai. His expertise covers patent prosecution, global trademark filing strategies, and defending software copyright infringement suits.",
      "David works closely with tech startup founders, research hospitals, and media houses to lock in their proprietary assets. He draft licensing contracts and technology transfer agreements designed to scale globally.",
      "Prior to joining the firm, David practiced with a top-tier intellectual property boutique in Washington D.C., where he advised on international patent treaties."
    ],
    notableCases: [
      "Managed the global trademark filing strategy for a unicorn fintech enterprise across 18 countries.",
      "Obtained a preliminary injunction against an competitor replicating a proprietary SaaS source code.",
      "Negotiated a cross-licensing technology agreement for a medical equipment developer."
    ],
    publications: [
      "‘Patent Strategies for Software in Developing Markets’ - IP Watchdog, 2021.",
      "‘Enforcing Brand Marks in Digital Landscapes’ - Journal of IPR & Practice, 2023."
    ]
  },
  "meera-raman": {
    bioParagraphs: [
      "Meera Raman is a senior associate in the Property Law practice. She drafts Joint Development Agreements (JDA), reviews title histories, and conducts detailed real estate due diligence audits.",
      "She represents corporate real estate buyers and private individuals in title claims,Patta transfers, and boundary disputes. Meera has argued various matters before the RERA Appellate Tribunal.",
      "Meera regularly organizes workshops for first-time homebuyers, detailing legal rights and title diligence requirements."
    ],
    notableCases: [
      "Completed title due diligence reports for a 50-acre warehouse acquisition project near Chennai.",
      "Obtained a RERA compensation order for buyers in a delayed residential tower project.",
      "Favorable court settlement in a family property boundary partition dispute."
    ],
    publications: [
      "‘RERA Compliance and Builder Delays: A Study of Buyer Protections’ - Real Estate Law Review, 2022."
    ]
  },
  "arjun-sharma": {
    bioParagraphs: [
      "Arjun Sharma is an associate in the Taxation division. He advises clients on GST classifications, tax compliance audits, and drafts corporate responses to tax authorities.",
      "Arjun has represented clients in tax assessments before the ITAT and helps startups manage their direct tax structures during fundraising phases.",
      "His technical knowledge of GST guidelines helps clients mitigate potential double-taxation issues."
    ],
    notableCases: [
      "Assisted a logistics firm in reducing a tax demand by ₹8M through a technical classification appeal.",
      "Successfully draft an ITAT response resolving a complex transfer pricing audit inquiry."
    ],
    publications: [
      "‘GST Revisions and Small Business Compliance Audits’ - Taxman Journal, 2024."
    ]
  }
};

export default function AttorneyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const attorney = attorneysList.find((a) => a.slug === slug);
  const details = slug ? extendedAttorneyDetails[slug] : null;

  if (!attorney || !details) {
    return <Navigate to="/attorneys" replace />;
  }

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/attorneys" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Attorneys List
        </Link>

        {/* Profile Card */}
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Initials Avatar */}
            <div className="bg-muted p-12 lg:p-24 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border relative">
              <div className="text-8xl lg:text-9xl font-extrabold text-muted-foreground/30 font-heading tracking-tighter">
                {attorney.initials}
              </div>
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded">
                {attorney.role}
              </div>
            </div>

            {/* General Bio Data */}
            <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary font-heading mb-2">
                  {attorney.name}
                </h1>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Award className="h-4 w-4" /> {attorney.practice}
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  {details.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
              <div className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-secondary shrink-0" />
                    <span><strong>Education:</strong> {attorney.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Scale className="h-4 w-4 text-secondary shrink-0" />
                    <span><strong>Admissions:</strong> {attorney.admissions}</span>
                  </div>
                  {(attorney as any).whatsapp && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="h-4 w-4 text-secondary shrink-0" />
                      <span>
                        <strong>WhatsApp:</strong>{" "}
                        <a 
                          href={`https://wa.me/91${(attorney as any).whatsapp}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-secondary hover:underline font-semibold"
                        >
                          +91 {(attorney as any).whatsapp}
                        </a>
                      </span>
                    </div>
                  )}
                  {(attorney as any).instagram && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Instagram className="h-4 w-4 text-secondary shrink-0" />
                      <span>
                        <strong>Instagram:</strong>{" "}
                        <a 
                          href={`https://instagram.com/${((attorney as any).instagram).replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-secondary hover:underline font-semibold"
                        >
                          {(attorney as any).instagram}
                        </a>
                      </span>
                    </div>
                  )}
                </div>

                <Link to="/book-consultation">
                  <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-12 px-6">
                    <Calendar className="mr-2 h-4 w-4" /> Book Appointment
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notable Case Outcomes */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-heading font-bold text-primary">Representative Matters</h3>
            </div>
            <ul className="space-y-4">
              {details.notableCases.map((caseItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{caseItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-secondary" />
              <h3 className="text-xl font-heading font-bold text-primary">Publications & Articles</h3>
            </div>
            {details.publications && details.publications.length > 0 ? (
              <ul className="space-y-4">
                {details.publications.map((pub, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground italic">“{pub}”</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">No public publications recorded in compliance with bar guidelines.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
