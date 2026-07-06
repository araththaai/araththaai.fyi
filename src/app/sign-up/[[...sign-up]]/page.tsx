"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      // Typically we would call a custom tRPC or API route to register the user
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      
      // If registration is successful, sign them in
      const signInRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInRes?.error) {
        setError("Error signing in after registration");
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 px-4 bg-surface">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">Create an Account</h1>
          <p className="text-muted-foreground text-sm">
            Register for the Client Portal to manage your legal consultations.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full bg-card border border-border p-8 rounded-xl shadow-lg">
          {error && <div className="text-destructive text-sm mb-4 text-center bg-destructive/10 p-2 rounded">{error}</div>}
          <div className="mb-4">
            <label className="block text-foreground font-medium mb-2 text-sm">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-foreground font-medium mb-2 text-sm">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-foreground font-medium mb-2 text-sm">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required 
              minLength={6}
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12">
            {loading ? "Registering..." : "Sign Up"}
          </Button>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account? <Link href="/sign-in" className="text-secondary hover:underline font-semibold">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
