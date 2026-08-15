import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-secondary/10 text-secondary rounded-full mb-4">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: August 15, 2026
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-lg text-foreground font-medium mb-6">
            Welcome to the Araththaai website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">1. No Attorney-Client Relationship</h2>
          <p className="mb-6">
            The information contained on this website is for informational purposes only and does not constitute formal legal advice. Accessing this site, using its booking systems, or transmitting inquiries via form/email does not create or establish an attorney-client relationship. Such a relationship is only formed when an explicit written engagement agreement is signed by both a partner of Araththaai (AKM Associates) and the client.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">2. Description of Consultations</h2>
          <p className="mb-6">
            Initial consultations requested via the online booking widget are scheduled at our discretion. We reserve the right to decline consultation requests based on potential conflicts of interest, availability, or suitability of the legal matter.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">3. User Content & Uploads</h2>
          <p className="mb-6">
            When submitting documents through our booking portal, you warrant that you have the right to transmit these files and that all information is accurate to the best of your knowledge. You agree not to upload files containing malware, viruses, or illegal material.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-6">
            All text, logos, custom graphics, and structure on this platform are owned by Araththaai. You may not copy, reproduce, or distribute any portion of the site without prior written consent.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">5. Modifications to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these terms at any time. Your continued use of the platform after updates are posted constitutes acceptance of the revised terms.
          </p>
        </div>
      </div>
    </div>
  );
}
