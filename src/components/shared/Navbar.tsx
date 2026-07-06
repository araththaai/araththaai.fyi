"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-12 w-12 flex-shrink-0 transition-transform group-hover:scale-110 overflow-hidden rounded-md">
                <CldImage 
                  src="araththaai_k0wo2e" 
                  alt="Araththaai Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-primary">Araththaai</span>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">AKM Associates & Legal</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Services</Link>
            <Link href="/knowledge-hub" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Knowledge Hub</Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-secondary transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="ghost" className="text-primary hover:text-secondary">Client Portal</Button>
            </Link>
            <Link href="/book">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Consultation</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary">Home</Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary">Services</Link>
            <Link href="/knowledge-hub" className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary">Knowledge Hub</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-foreground hover:text-secondary">Contact</Link>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Link href="/sign-in">
                <Button variant="outline" className="w-full justify-center">Client Portal</Button>
              </Link>
              <Link href="/book">
                <Button className="w-full justify-center bg-primary text-primary-foreground">Book Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
