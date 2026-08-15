// Unused import removed
import { Button } from "@/components/ui/button";
import { ShieldAlert, RefreshCw, Mail } from "lucide-react";

export default function ServerError() {
  return (
    <div className="py-24 bg-surface min-h-[85vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-6 bg-destructive/10 text-destructive rounded-full mb-8">
          <ShieldAlert className="h-16 w-16" />
        </div>
        <h1 className="text-8xl font-heading font-extrabold text-primary mb-4 tracking-tight">
          500
        </h1>
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Internal Court Adjournment
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Our servers encountered an unexpected issue while processing your request. Please try reloading the page, or contact our support team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Reload Page
          </Button>
          <a href="mailto:support@araththaai.com">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted h-12 px-6">
              <Mail className="mr-2 h-4 w-4" /> Email Support
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
