import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex p-3 bg-secondary/10 text-secondary rounded-full mb-4">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Last Updated: August 15, 2026
          </p>
        </div>

        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed">
          <p className="lead text-lg text-foreground font-medium mb-6">
            At Araththaai (AKM Associates & Legal Consultants), we hold client confidentiality and data protection in the highest regard. This policy details how we collect, safeguard, and utilize information.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">1. Attorney-Client Privilege & Confidentiality</h2>
          <p className="mb-6">
            All correspondence, consultations, and document uploads submitted through this platform are subject to strict professional secrecy and attorney-client privilege rules under relevant bar regulations. We do not disclose any client case details unless authorized or compelled by law.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect information that you voluntarily provide to us when scheduling consultations or submitting inquiries:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Identity & Contact Info:</strong> Full name, telephone number, email address.</li>
            <li><strong>Case-Related Information:</strong> Brief descriptions of your legal matter, documents uploaded for review, and booking dates.</li>
            <li><strong>Technical Data:</strong> Anonymized usage data, browser specifications, and connection details to optimize system performance.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">3. How We Use Your Data</h2>
          <p className="mb-6">
            Your information is used solely to evaluate your case, process booking requests, communicate scheduling updates, and comply with conflict-of-interest checks required before legal representation begins. We never sell, rent, or trade client information to third parties.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We use enterprise-grade encryption and secure access controls to store your information. Uploaded documents are encrypted during transfer and storage. While we take every measure to protect your data, no electronic system can be guaranteed 100% secure.
          </p>

          <h2 className="text-2xl font-heading font-bold text-primary mt-8 mb-4">5. Contact Our Compliance Team</h2>
          <p className="mb-6">
            If you have questions about our privacy policies, or wish to request the deletion of your personal records from our intake system, please contact our compliance desk at <strong>compliance@araththaai.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
