import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-secondary/10 text-secondary rounded-full mb-4">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Legal Disclaimer & Advertising Notice
          </h1>
          <p className="text-muted-foreground text-sm">
            Compliance Statement
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed">
          <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
            <h3 className="text-lg font-bold text-primary mb-2 font-heading">Important Notice</h3>
            <p className="text-sm text-foreground/80">
              Under the rules of certain jurisdictions, including professional conduct regulations of bar councils, the contents of this website may be considered **Attorney Advertising**.
            </p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">1. Prior Results Do Not Guarantee Future Outcomes</h2>
          <p className="mb-6">
            Any case summaries, outcomes, verdicts, or testimonials featured on this website are provided for illustrative purposes only. They represent outcomes achieved in specific circumstances and do not constitute a representation or warranty that the same or similar results can be achieved in your legal matter. Each case is unique and depends upon its own specific facts, legislation, and jurisdiction.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">2. Non-Reliance</h2>
          <p className="mb-6">
            The legal information provided on this platform is of a general nature and should not be acted upon without consulting a licensed, qualified attorney in the appropriate jurisdiction. Araththaai (AKM Associates) explicitly disclaims all liability in respect to actions taken or not taken based on any contents of this site.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">3. External Links Disclaimer</h2>
          <p className="mb-6">
            This website may contain links to third-party resources. We are not responsible for the privacy practices, terms of service, or accuracy of information hosted on external websites.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">4. Professional Regulations</h2>
          <p className="mb-6">
            In compliance with the Bar Council rules, we do not solicit work or advertise through this site. The user, by navigating this website, acknowledges that they are seeking information of their own accord and that no solicitation has occurred.
          </p>
        </div>
      </div>
    </div>
  );
}
