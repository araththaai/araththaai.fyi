"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 px-4 bg-surface">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">Client Portal</h1>
          <p className="text-muted-foreground text-sm">
            Sign in to access your case files and upcoming appointments.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full bg-card border border-border p-8 rounded-xl shadow-lg">
          {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
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
            />
          </div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12">
            Sign In
          </Button>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account? <Link href="/sign-up" className="text-secondary hover:underline font-semibold">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
