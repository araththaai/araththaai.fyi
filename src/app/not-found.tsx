import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <Scale className="h-20 w-20 text-secondary mb-8 opacity-50" />
      <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6">
        Page Not Found
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
        The page you are looking for does not exist or has been moved. Please return to the homepage or contact us if you need assistance.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            Return Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
