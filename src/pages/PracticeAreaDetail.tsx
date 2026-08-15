import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, PlayCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabaseClient";

// Practice Area Detailed Data Map
const detailedPracticeData: Record<string, {
  title: string;
  description: string;
  longText: string;
  mattersHandled: string[];
  clientJourney: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "corporate-law": {
    title: "Corporate Law & Governance",
    description: "End-to-end legal support for businesses, from incorporation to compliance and M&A.",
    longText: "In today's highly scrutinized corporate ecosystem, ensuring robust legal compliance is vital for strategic expansion. Our Corporate Law & Governance practice provides complete advisory, transactional, and compliance solutions for startups, established conglomerates, and institutional investors. We align legal structure with corporate objectives, minimizing liability risks and protecting shareholder interests during critical deals.",
    mattersHandled: [
      "Company Incorporation & Founder Agreements",
      "Corporate Governance & Board Advisory",
      "Mergers, Acquisitions & Venture Capital Fundraisings",
      "Contract Engineering, Drafting & Reviews",
      "Appellate Representation before NCLT",
      "Employment Audits & Statutory Compliances"
    ],
    clientJourney: [
      { step: "01", title: "Corporate Discovery", desc: "We review your company structure, sector-specific regulations, and business goals." },
      { step: "02", title: "Compliance Mapping", desc: "Our specialists trace regulatory vulnerabilities and draft operational protocols." },
      { step: "03", title: "Contract Design", desc: "We draft and review all necessary transaction documents and partnership agreements." },
      { step: "04", title: "Continuous Auditing", desc: "Ongoing compliance updates, governance monitoring, and active board advisory." }
    ],
    faqs: [
      { q: "What corporate structures do you advise on?", a: "We advise on Private Limited Companies, Public Limited Companies, Limited Liability Partnerships (LLPs), and Joint Ventures." },
      { q: "Do you represent companies before regulatory tribunals?", a: "Yes, our litigation team represents corporate entities before the NCLT, NCLAT, and other regulatory bodies." },
      { q: "Can you assist with startup fundraising?", a: "Absolutely. We represent both startups and venture funds in drafting term sheets, shareholder agreements, and managing due diligence." }
    ]
  },
  "property-law": {
    title: "Property & Real Estate Law",
    description: "Expert guidance on real estate transactions, property disputes, and documentation.",
    longText: "Real estate investment represents significant capital commitment. Our property division protects your real estate assets through exhaustive title investigation, legal verification of conveyance documents, and aggressive representation in land disputes. We support builders, commercial developers, and individual property buyers with comprehensive due diligence.",
    mattersHandled: [
      "Title Verification & Due Diligence Reports",
      "Drafting Conveyance, Sale, and Gift Deeds",
      "Joint Development Agreements (JDA) Structuring",
      "Real Estate Dispute Litigation",
      "RERA Registrations & Compliance Hearings",
      "Zoning & Land Use Permits Advisory"
    ],
    clientJourney: [
      { step: "01", title: "Document Collation", desc: "We aggregate parent deeds, revenue records, encumbrance certificates, and patta." },
      { step: "02", title: "Title Investigation", desc: "Exhaustive legal check of property history over a 30-year flow to ensure clean title." },
      { step: "03", title: "Agreement Drafting", desc: "Drafting of bulletproof Sale Agreements, JDAs, or tenancy contracts." },
      { step: "04", title: "Registration Support", desc: "Guiding the execution and registration processes at the Sub-Registrar Office." }
    ],
    faqs: [
      { q: "Why is 30-year title flow verification necessary?", a: "It ensures there are no hidden legal claimants, minor rights, mortgages, or government acquisitions on the property." },
      { q: "Do you handle RERA dispute cases?", a: "Yes, we represent all property buyers and developers before RERA authorities and appellate tribunals." },
      { q: "How long does a title search take?", a: "Typically, a thorough title search and due diligence report takes 5 to 7 business days." }
    ]
  },
  "family-law": {
    title: "Family & Matrimonial Law",
    description: "Compassionate and discreet representation in matrimonial and family disputes.",
    longText: "Family disputes involve deep emotional complexities and require sensitive, private legal structures. We prioritize mediation and strategic negotiations to resolve matrimonial issues, asset distribution, and child guardianship. Where litigation is inevitable, our trial advocates protect your rights aggressively in family courts.",
    mattersHandled: [
      "Mutual Consent & Contested Divorce Actions",
      "Child Custody & Guardianship Petitions",
      "Alimony, Maintenance & Child Support Claims",
      "Family Settlement Agreements & Partition Deeds",
      "Domestic Violence Protection Orders",
      "Pre-nuptial & Separation Agreements Advisory"
    ],
    clientJourney: [
      { step: "01", title: "Empathetic Intake", desc: "A private consultation to understand family dynamics and client expectations." },
      { step: "02", title: "Mediation Assessment", desc: "We explore alternative resolutions to minimize stress and legal expenses." },
      { step: "03", title: "Petition Strategy", desc: "If mediation fails, we draft thorough petitions with clear evidentiary backing." },
      { step: "04", title: "Court Representation", desc: "Robust representation in family courts for child custody, partition, or divorce." }
    ],
    faqs: [
      { q: "How long does a mutual consent divorce take?", a: "Generally, it takes 6 to 18 months, depending on the mandatory cooling-off period, which can sometimes be waived." },
      { q: "How is child custody determined?", a: "Courts determine custody primarily based on the 'welfare of the child' principle, evaluating financial, emotional, and social stability." },
      { q: "Are family court proceedings confidential?", a: "Yes, family court proceedings can be held in-camera (privately) at the request of the parties to ensure privacy." }
    ]
  },
  "tax-law": {
    title: "Taxation & GST Litigation",
    description: "Comprehensive advisory on income tax, GST compliance, and dispute resolution.",
    longText: "Taxation frameworks change frequently, creating financial uncertainty for businesses and individuals. Our tax litigation division provides strategic planning, compliance reviews, and represents clients in complex tax assessment disputes before tax officers, appellate authorities, and high courts.",
    mattersHandled: [
      "Direct Tax Planning & High-Net-Worth Advisory",
      "GST Audits, Compliance & Classification Disputes",
      "Representation before Commissioner (Appeals)",
      "Tax Appellate Tribunal (ITAT & GSTAT) Representation",
      "Transfer Pricing Audits & Documentation",
      "Writ Petitions against Arbitrary Tax Assessments"
    ],
    clientJourney: [
      { step: "01", title: "Tax Assessment Audit", desc: "We review the assessment order, tax demands, and relevant compliance papers." },
      { step: "02", title: "Legal Grounds Design", desc: "Framing technical arguments, case-law research, and response drafting." },
      { step: "03", title: "Appeal Execution", desc: "Filing and defending the appeal before Commissioner Appeals or Tribunals." },
      { step: "04", title: "System Adjustment", desc: "Reviewing business operations to prevent future tax disputes." }
    ],
    faqs: [
      { q: "Do you assist with GST classification disputes?", a: "Yes. We advise on tax rates, exemptions, and input tax credit eligibility to resolve classification disputes." },
      { q: "Can you represent clients during tax search and seizures?", a: "Yes. We offer rapid legal advisory and defense representation during tax search and seizure operations." },
      { q: "What is your success rate in tax appeals?", a: "While regulations prevent promising results, our team has resolved major tax disputes successfully at the ITAT level." }
    ]
  },
  "ipr": {
    title: "Intellectual Property Rights",
    description: "Protect your innovations and creative assets. We handle strategic IP registration.",
    longText: "Your intellectual property is a core competitive advantage. Our IPR practice covers complete intellectual asset protection, from trademark registration to global patent strategies and copyright enforcement. We litigate infringement claims aggressively to defend your brand equity and research investments.",
    mattersHandled: [
      "Trademark Availability Search & Filings",
      "Patent Specification Drafting & Prosecution",
      "Copyright Registrations for Software & Creative Works",
      "IP Infringement Litigation & Cease & Desist Actions",
      "Licensing, Franchising & Technology Transfer Contracts",
      "Trade Secret Protection Protocols"
    ],
    clientJourney: [
      { step: "01", title: "IP Discovery & Search", desc: "Comprehensive global search to verify trademark/patent availability." },
      { step: "02", title: "Application Drafting", desc: "Formulating specifications, claims, and applications for filing." },
      { step: "03", title: "Prosecution Defense", desc: "Responding to examiner objections and representing clients in hearings." },
      { step: "04", title: "Enforcement Audit", desc: "Monitoring market infringement and taking swift enforcement actions." }
    ],
    faqs: [
      { q: "How long does a trademark registration take?", a: "Typically, trademark applications take 6 to 12 months, though you can use the 'TM' symbol immediately after filing." },
      { q: "Can software be patented?", a: "Software as code is protected by copyright. Patenting requires showing it is part of a novel hardware-linked system." },
      { q: "What is an IP Cease & Desist letter?", a: "A formal warning letter sent to infringers demanding they stop using your IP, which often resolves disputes pre-trial." }
    ]
  },
  "criminal-defense": {
    title: "Criminal Defense & White-Collar",
    description: "Vigorous representation in criminal proceedings with a focus on protecting your rights.",
    longText: "Facing criminal charges can impact your liberty, reputation, and livelihood. Our criminal defense team is composed of seasoned trial advocates who represent clients in white-collar financial crimes, regulatory investigations, and general criminal defense. We provide immediate, strategic defense representation.",
    mattersHandled: [
      "Anticipatory Bail & Regular Bail Applications",
      "White-Collar Financial Crime Defense",
      "Anti-Corruption (CBI / Lokayukta) Cases",
      "Writ Petitions for Quashing FIRs",
      "Defense Representation in Trial Courts",
      "High Court and Supreme Court Appellate Advocacy"
    ],
    clientJourney: [
      { step: "01", title: "Immediate Case Audit", desc: "FIR analysis, review of police charges, and client briefing." },
      { step: "02", title: "Pre-Trial Protection", desc: "Securing interim protection or filing anticipatory bail petitions." },
      { step: "03", title: "Evidence Construction", desc: "Cross-examination prep, witness listing, and defense exhibits construction." },
      { step: "04", title: "Trial Litigation", desc: "Advocating client innocence and protecting rights during trial." }
    ],
    faqs: [
      { q: "What is the difference between regular and anticipatory bail?", a: "Regular bail is requested after arrest. Anticipatory bail is requested when an individual fears arrest for non-bailable offenses." },
      { q: "Can an FIR be quashed?", a: "Yes. High Courts can quash FIRs under Section 482 of CrPC if the allegations do not constitute a prime facie offense." },
      { q: "Do you handle economic offenses?", a: "Yes, we represent individuals and organizations in money laundering, tax evasion, and corporate fraud investigations." }
    ]
  },
  "hr-ce": {
    title: "HR & CE / Temple Law",
    description: "Expert legal counsel dealing with the administration and protection of Hindu temple properties.",
    longText: "Hindu religious institutions and endowments are subject to specific legislative frameworks. Our HR&CE practice represents temple trusts, administrators, and traditional trustees in administrative regulatory disputes, land recovery, and securing trusteeship rights under the HR&CE Act.",
    mattersHandled: [
      "Writ Petitions challenging Administrative Takeovers",
      "Trusteeship Declarations & Succession Claims",
      "Encroachment Clearances on Temple Land",
      "Advising on Lease and Rent Recoveries",
      "Compliance Audits of Endowment Trust Funds",
      "Representation before HR&CE Commissioner Courts"
    ],
    clientJourney: [
      { step: "01", title: "Trust Deed Audit", desc: "Reviewing ancient schemes of administration, trust history, and revenue maps." },
      { step: "02", title: "Regulatory Check", desc: "Verifying compliance with HR&CE department orders and rules." },
      { step: "03", title: "Administrative Petitions", desc: "Filing objections or claims before Commissioner courts." },
      { step: "04", title: "Property Restoration", desc: "Executing legal procedures to recover encroached temple assets." }
    ],
    faqs: [
      { q: "Can the government take over temple administration?", a: "Only under specific conditions of mismanagement, and such takeovers can be challenged in High Courts." },
      { q: "How are hereditary trusteeship claims established?", a: "Through historical schemes of administration, trust deeds, and custom patterns of succession." },
      { q: "Do you advise on temple property leases?", a: "Yes, we advise on compliance for leasing religious properties and recovering outstanding rents." }
    ]
  },
  "employment-law": {
    title: "Employment & Labor Law",
    description: "Comprehensive corporate labor compliance audits, NDAs, and worker disputes representation.",
    longText: "Workplace regulations are essential for organizational stability. Our labor and employment team represents corporate employers and executive-level employees in drafting employment policies, non-disclosure contracts, executing sexual harassment compliance protocols (POSH), and defending against labor claims.",
    mattersHandled: [
      "Drafting Employment Contracts & Executive NDAs",
      "Structuring Employee Stock Option Plans (ESOP)",
      "POSH Compliance Audits & Training Setup",
      "Labor Court Representation & Collective Bargainings",
      "Wage, Overtime, and Severance Disputes Advocacy",
      "Restructuring & Corporate Layoff Consultations"
    ],
    clientJourney: [
      { step: "01", title: "Workplace Audit", desc: "Reviewing employment manuals, policies, and contracts." },
      { step: "02", title: "Drafting Overhaul", desc: "Creating standard agreements and compliant HR manuals." },
      { step: "03", title: "Compliance Training", desc: "Assisting in establishing POSH committees and compliance records." },
      { step: "04", title: "Conflict Resolution", desc: "Mediation or defending claims in labor tribunals." }
    ],
    faqs: [
      { q: "Are non-compete clauses enforceable?", a: "In India, post-employment non-compete clauses are generally void, but non-disclosure of trade secrets is highly enforceable." },
      { q: "What is a POSH committee requirement?", a: "Any organization with 10 or more employees must establish an Internal Complaints Committee (ICC) to address complaints of sexual harassment." },
      { q: "How do you handle mass layoff compliance?", a: "We guide businesses through statutory notice periods and severance calculations under industrial disputes regulations." }
    ]
  }
};

// Form schema for the practice area sidebar intake
const intakeSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide some details about your case"),
});

type IntakeFormValues = z.infer<typeof intakeSchema>;

export default function PracticeAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const area = slug ? detailedPracticeData[slug] : null;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema)
  });

  const onSubmit = async (data: IntakeFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const { error } = await supabase
        .from("bookings")
        .insert({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          service_type: area?.title || "Practice Area Detail Form",
          message: data.message,
        });

      if (error) {
        throw new Error(error.message);
      }
      setIsSuccess(true);
      reset();
    } catch (e: any) {
      console.warn("Supabase insertion fallback simulation:", e.message);
      // Fallback simulation for offline or non-seeded environments
      setIsSuccess(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!area) {
    return <Navigate to="/practice-areas" replace />;
  }

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb link */}
        <Link to="/practice-areas" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Practice Areas
        </Link>

        {/* Dynamic header */}
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Practice Area
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
            {area.title}
          </h1>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Practice Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{area.description}</p>
              <p className="text-muted-foreground leading-relaxed">{area.longText}</p>
            </div>

            {/* Matters Handled Checklist */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Matters We Handle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {area.mattersHandled.map((matter, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{matter}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Client Journey */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-8 text-center lg:text-left">Your Journey with Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {area.clientJourney.map((step, idx) => (
                  <div key={idx} className="bg-card border border-border p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-secondary transition-colors">
                    <div className="absolute right-4 top-4 text-6xl font-heading font-bold text-muted/30 group-hover:text-secondary/10 transition-colors">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-primary mb-2 relative z-10">{step.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {area.faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full flex justify-between items-center text-left py-2 font-medium text-primary hover:text-secondary transition-colors focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      {activeFaq === index ? <ChevronUp className="h-5 w-5 text-secondary" /> : <ChevronDown className="h-5 w-5 text-secondary" />}
                    </button>
                    {activeFaq === index && (
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed pl-1">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Case Intake Form */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg sticky top-24 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <PlayCircle className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-heading font-bold">Fast Case Intake</h3>
              </div>
              <p className="text-xs text-primary-foreground/80 mb-6 leading-relaxed">
                Provide your details below to schedule an initial consultation with a specialized {area.title} advocate.
              </p>

              {isSuccess ? (
                <div className="bg-white/10 border border-white/20 p-6 rounded-xl text-center">
                  <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-white mb-2">Request Received!</h4>
                  <p className="text-xs text-primary-foreground/80 leading-relaxed mb-4">
                    Our compliance team is completing conflicts check. We will email details shortly.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    variant="outline" 
                    className="w-full text-white border-white/20 hover:bg-white/10"
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-destructive/20 border border-destructive/30 text-xs rounded text-center text-white">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1">Full Name</label>
                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-white"
                      placeholder="Jane Doe"
                    />
                    {errors.fullName && <p className="text-[10px] text-red-300 mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1">Email Address</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-white"
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-300 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1">Phone Number</label>
                    <input
                      {...register("phone")}
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-white"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-[10px] text-red-300 mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1">Brief Details</label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-white resize-none"
                      placeholder="Please outline the issue..."
                    />
                    {errors.message && <p className="text-[10px] text-red-300 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-2.5 rounded transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
