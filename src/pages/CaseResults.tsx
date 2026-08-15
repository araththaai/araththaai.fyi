import { useState } from "react";
import { AlertCircle, Scale, ShieldCheck, Landmark, Briefcase, BookOpen } from "lucide-react";

const caseOutcomes = [
  {
    title: "₹450 Million Corporate Acquisition Contract Dispute",
    field: "Corporate Law",
    outcome: "Favorable Settlement Achieved",
    summary: "Anonymized representation of a national logistics firm in a contract breach action regarding multi-state operations transfer. Secured out-of-court settlement protecting client assets and ensuring continuous operating permissions.",
    detail: "Our corporate litigation team analyzed structural service levels, identifying critical counter-party defaults which forced the plaintiff to the negotiating table.",
    icon: Briefcase
  },
  {
    title: "Commercial Development Title Dispute",
    field: "Property Law",
    outcome: "Defense Verdict & Title Clearances Secured",
    summary: "Defense of a commercial builder against ancestral claims on a prime 20-acre urban development. Achieved complete dismissal of injunction applications and title validations in trial court.",
    detail: "Obtained land revenue files dating back 45 years to prove uninterrupted title flow, establishing third-party purchase legitimacy.",
    icon: Landmark
  },
  {
    title: "Unlawful Taxation Order & Seizure Appeal",
    field: "Tax Law",
    outcome: "Order Set Aside & Assessment Quashed",
    summary: "Appellate challenge against arbitrary tax assessments and subsequent bank attachment orders issued by indirect tax officers. Achieved complete rollback of disputed tax demands.",
    detail: "Argued before the appellate tribunal that administrative procedures violated natural justice guidelines, rendering the tax demand invalid.",
    icon: Scale
  },
  {
    title: "Anticipatory Bail in Multi-Million Economic Offense Investigation",
    field: "Criminal Defense",
    outcome: "Anticipatory Bail Granted",
    summary: "Immediate defense representation for a startup Chief Financial Officer facing alleged irregularities in venture debt transactions. Secured complete immunity from police arrest.",
    detail: "Established that the transaction was purely civil in nature, with no evidence of criminal intent or asset diversion.",
    icon: ShieldCheck
  },
  {
    title: "Corporate Trademark Infringement & Passing-Off Action",
    field: "Intellectual Property Rights",
    outcome: "Permanent Injunction & Damages Awarded",
    summary: "Representing an e-commerce platform against competitors copying core logo marks and website layout configurations. Secured permanent injunction from High Court.",
    detail: "Presented web cache metadata establishing our client's prior use and customer surveys indicating severe brand confusion.",
    icon: Landmark
  },
  {
    title: "Administration Challenge Against Temple Takeover",
    field: "HR & CE / Temple Law",
    outcome: "Government Order Suspended",
    summary: "Constitutional challenge challenging the sudden appointment of an administrative officer to oversee traditional family temple trusts.",
    detail: "Successfully argued that no prima facie evidence of mismanagement was recorded, violating statutory takeover limits.",
    icon: BookOpen
  }
];

export default function CaseResults() {
  const [selectedField, setSelectedField] = useState("All");

  const fields = ["All", "Corporate Law", "Property Law", "Tax Law", "Criminal Defense", "Intellectual Property Rights", "HR & CE / Temple Law"];

  const filteredCases = caseOutcomes.filter(
    (item) => selectedField === "All" || item.field === selectedField
  );

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Track Record
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            Case Results & Victories
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            A review of legal outcomes accomplished for our clients. In compliance with professional standards, all client details have been anonymized.
          </p>
        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-12 flex gap-4 max-w-4xl mx-auto items-start">
          <AlertCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
          <div className="text-sm text-primary">
            <h4 className="font-bold mb-1 font-heading">Regulatory Notice & Disclaimer</h4>
            <p className="text-muted-foreground leading-relaxed">
              The cases presented below represent specific legal matters resolved by our partners. Prior results do not guarantee a similar outcome. Outcome values and factual details are subject to variation depending on the specifics of each representation.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 max-w-4xl mx-auto">
          {fields.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedField(f)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedField === f
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card hover:bg-muted text-muted-foreground border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Cards */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredCases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/5 rounded-lg text-secondary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wide">
                        {item.outcome}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      {item.field}
                    </span>
                    <h3 className="text-xl font-bold text-primary font-heading mt-2 mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-xl border border-border/40 mt-4 text-xs text-muted-foreground leading-relaxed">
                    <strong>Strategy Highlight:</strong> {item.detail}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg">No cases listed under this practice field.</p>
          </div>
        )}

      </div>
    </div>
  );
}
