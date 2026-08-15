import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Facebook, Twitter, Linkedin, Award } from "lucide-react";
import { blogPosts } from "./Blog";

const detailedBlogContent: Record<string, {
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
}> = {
  "understanding-pmla-investigations": {
    paragraphs: [
      "The Prevention of Money Laundering Act (PMLA), 2002, stands as one of the most stringent regulatory frameworks in Indian jurisprudence. For corporate entities, executives, and individuals navigating PMLA investigations, understanding search, seizure, and summon processes is critical to protecting fundamental constitutional protections.",
      "A common misconception is that PMLA investigations share the same procedural limitations as regular criminal investigations under the Code of Criminal Procedure (CrPC). In truth, statements recorded under Section 50 of the PMLA before an Enforcement Directorate (ED) officer are admissible in court, unlike standard police statements. This underscores the vital importance of acquiring qualified legal counsel at the very first summon.",
      "Furthermore, the PMLA grants broad authority to officers to conduct surveys, searches of premises, and property attachments. An interim attachment order can freeze bank accounts and corporate assets for up to 180 days based on a 'reason to believe' that property constitutes 'proceeds of crime'. Challenging these attachments requires swift filings before the Appellate Tribunal.",
      "During search and seizure operations, individuals retain basic constitutional protections. You have the right to inspect the search warrant, read the grounds of search, inspect the search party for independent witnesses (panchas), and receive a signed search inventory list. Ensuring that your legal rights are protected during these procedures is crucial for long-term trial outcomes."
    ],
    faqs: [
      { question: "Are statements made during PMLA summons admissible in court?", answer: "Yes, under Section 50 of the PMLA, statements recorded by an ED officer are admissible in court, making early legal representation essential." },
      { question: "How long can a property remain attached under PMLA?", answer: "A provisional attachment order remains in force for up to 180 days, during which it must be confirmed by the Adjudicating Authority." }
    ]
  },
  "gst-compliance-audits-2026": {
    paragraphs: [
      "As tax enforcement authorities deploy sophisticated data reconciliation algorithms, Goods and Services Tax (GST) compliance audits have become a primary point of regulatory friction for medium to large enterprises. Corporate leaders must transition from reactive filing to proactive tax management.",
      "A primary driver of recent GST disputes relates to Input Tax Credit (ITC) reconciliations. Discrepancies between the buyer's purchases and the seller's filings (GSTR-2B reconciliations) often trigger automated demand notices. To safeguard operations, businesses must conduct periodic internal audits and establish bulletproof transaction trails.",
      "In the event of a formal GST audit notice, corporate managers should immediately isolate files regarding tax classifications, input credits, and interstate services contracts. Understanding the distinction between statutory audit inquiries and anti-evasion search warrants prevents administrative overreaches.",
      "Should a tax officer issue a demand order, companies have 3 months to file an appeal before the Commissioner (Appeals), subject to pre-deposit rules. Reviewing contract classifications and maintaining legal representations is essential to resolving these tax disputes."
    ],
    faqs: [
      { question: "What triggers a GST audit?", answer: "Common triggers include discrepancies in Input Tax Credit (ITC) reconciliation, unusual profit margins, or systemic delays in filings." },
      { question: "Can a GST demand order be challenged immediately in the High Court?", answer: "Typically, you must exhaust the statutory appeal route before the Commissioner Appeals and Tribunal. Writ petitions in High Courts are only entertained in cases of severe procedural violations or natural justice breaches." }
    ]
  },
  "trademark-infringement-digital-brand": {
    paragraphs: [
      "In the digital marketplace, your brand's digital identity represents core corporate equity. The rise of algorithm-driven advertisements, domain squattings, and third-party lookalike search engine bidding has introduced complex trademark infringement challenges.",
      "Trademark infringement is not limited to matching product labels. Using a competitor's registered trademark as a hidden keyword tag, search ad bid trigger, or using deceptive variations in domain names constitutes passing-off. Brand owners must actively monitor these digital channels.",
      "When infringement is identified, sending a precise, legal Cease & Desist warning often yields rapid resolutions. Where infringement persists, filing for an interim injunction in High Court blocks copycats, preventing critical brand dilution and customer confusion.",
      "To maximize legal recourse, brands must ensure timely registrations and manage their IP portfolios through technology transfer and licensing agreements. Security in trademark ownership is the foundation of digital scaling."
    ],
    faqs: [
      { question: "Is domain squatting considered trademark infringement?", answer: "Yes. registering a domain name that matches or is deceptively similar to a registered trademark with bad faith intent constitutes passing-off and can be challenged legally." },
      { question: "What is the benefit of a Cease & Desist letter?", answer: "It formally documents the infringer's awareness of your mark, which increases the likelihood of awarding punitive damages if the case proceeds to litigation." }
    ]
  },
  "rera-disputes-builder-delays": {
    paragraphs: [
      "Real estate investments represent major financial decisions. Prior to the Real Estate (Regulation and Development) Act (RERA), homebuyers faced severe project delay vulnerabilities. Today, RERA establishes a strict statutory framework protecting buyers.",
      "A core protection under RERA is the buyer's right to withdraw from a project if the developer fails to deliver possession within the specified period. Upon withdrawal, buyers are entitled to a full refund of deposit amounts along with interest calculated at prescribed rates.",
      "If a buyer chooses to remain in the project, the developer is liable to pay monthly interest compensation for every month of possession delay. Developers are also prohibited from demanding more than 10% of property cost without executing a formal Sale Agreement.",
      "Filing a complaint before the RERA authority requires compiling building permits, payment receipts, and project delay proofs. RERA appellate tribunals ensure disputes are settled efficiently, providing vital protection for real estate investments."
    ],
    faqs: [
      { question: "Can a builder modify project plans without buyer consent?", answer: "No, under RERA, developers must obtain the written consent of at least two-thirds of allottees before making structural modifications to project plans." },
      { question: "How long does a RERA dispute hearing take?", answer: "Statutorily, RERA complaints are intended to be resolved within 60 days, though administrative backlogs can extend this to 6-9 months." }
    ]
  }
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = blogPosts.find((p) => p.slug === slug);
  const detail = slug ? detailedBlogContent[slug] : null;

  // Handle reading scroll bar progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post || !detail) {
    return <Navigate to="/blog" replace />;
  }

  // Inject structured JSON-LD FAQ Metadata for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": detail.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="py-24 bg-surface min-h-screen relative">
      
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-20 left-0 h-1 bg-secondary z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Knowledge Hub
        </Link>

        {/* Article Meta */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-6 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-secondary" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-secondary" /> {post.readTime}</span>
            <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-secondary" /> Drafted by: <strong>{post.author}</strong></span>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-6">
          {detail.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-muted-foreground leading-relaxed">{p}</p>
          ))}

          {/* Social Share Buttons */}
          <div className="border-t border-b border-border/80 py-4 my-8 flex items-center justify-between">
            <span className="text-sm font-semibold text-primary">Share Legal Insight:</span>
            <div className="flex gap-3">
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all text-muted-foreground">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all text-muted-foreground">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all text-muted-foreground">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* FAQs Accordion inside article */}
          <div className="bg-muted/40 p-6 rounded-xl border border-border/80">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {detail.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-bold text-sm text-primary">Q: {faq.question}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">A: {faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Read Next Banner */}
        <div className="bg-card text-foreground p-8 rounded-2xl shadow-sm mt-12 border border-border text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-2">Need Direct Case Guidance?</h3>
          <p className="text-xs text-muted-foreground mb-6 max-w-lg mx-auto">
            Schedule a private, privileged consultation with our senior partners regarding PMLA, GST audits, or corporate restructuring.
          </p>
          <Link to="/book-consultation">
            <button className="bg-primary text-primary-foreground hover:bg-primary/95 font-bold px-6 py-3 rounded text-sm transition-all">
              Schedule Private Consultation
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
