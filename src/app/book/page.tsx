"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  serviceType: z.string().min(2, "Please select a service type"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function BookConsultationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setServerError("");
    
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit request.");
      }

      setIsSuccess(true);
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="py-24 min-h-[80vh] flex items-center justify-center bg-surface">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Request Submitted!
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Thank you for reaching out to Araththaai. Your consultation request has been successfully received. Our legal team will review your details and contact you within 24 hours to schedule your appointment.
          </p>
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-surface min-h-[90vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            Schedule a Meeting
          </span>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Book a Consultation
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fill out the form below with your details and specific legal requirements. We will match you with the right legal expert for your case.
          </p>
        </div>
        
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg max-w-2xl mx-auto">
          {serverError && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 text-destructive rounded-lg text-sm text-center">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name *</label>
                <input
                  {...register("name")}
                  className={`w-full p-3 border ${errors.name ? 'border-destructive' : 'border-input'} bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number *</label>
                <input
                  {...register("phone")}
                  className={`w-full p-3 border ${errors.phone ? 'border-destructive' : 'border-input'} bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email Address *</label>
              <input
                {...register("email")}
                type="email"
                className={`w-full p-3 border ${errors.email ? 'border-destructive' : 'border-input'} bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Legal Service Required *</label>
              <select
                {...register("serviceType")}
                className={`w-full p-3 border ${errors.serviceType ? 'border-destructive' : 'border-input'} bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                defaultValue=""
              >
                <option value="" disabled>Select a Practice Area</option>
                <option value="Corporate Law">Corporate Law & Compliance</option>
                <option value="Property Law">Property & Real Estate</option>
                <option value="Family Law">Family & Matrimonial Law</option>
                <option value="Taxation & GST">Taxation & GST</option>
                <option value="Startup Compliance">Startup Compliance</option>
                <option value="Criminal Defense">Criminal Defense</option>
                <option value="Other">Other Legal Matter</option>
              </select>
              {errors.serviceType && <p className="text-xs text-destructive">{errors.serviceType.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Brief Details of your Case (Optional)</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please provide some context so we can prepare for our consultation..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Your information is strictly confidential and protected by attorney-client privilege.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
