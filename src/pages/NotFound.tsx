import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 bg-surface min-h-[85vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex p-6 bg-secondary/10 text-secondary rounded-full mb-8 animate-bounce">
          <Gavel className="h-16 w-16" />
        </div>
        <h1 className="text-8xl font-heading font-extrabold text-primary mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Jurisdiction Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          The legal route or case file you are looking for does not exist. It may have been moved, deleted, or the address entered is incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">
              <Home className="mr-2 h-4 w-4" /> Return Home
            </Button>
          </Link>
          <Link to="/practice-areas">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-muted h-12 px-6">
              View Practice Areas <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
