import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/lib/LanguageContext";

export default function SignInPage() {
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || "Invalid email or password");
        setLoading(false);
      } else {
        window.location.href = "/admin";
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-surface text-foreground">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-bold text-primary mb-2">
            {language === "ta" ? "நிர்வாகி போர்டல்" : language === "hi" ? "प्रशासक पोर्टल" : "Admin Portal"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {language === "ta" ? "நிறுவனத்தின் ஆலோசனைகள், வழக்குகள் மற்றும் அமைப்புகளை நிர்வகிக்க உள்நுழையவும்." : language === "hi" ? "फर्म के परामर्श, मामलों और सेटिंग्स को प्रबंधित करने के लिए साइन इन करें।" : "Sign in to manage firm consultations, cases, and settings."}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full bg-card border border-border p-8 rounded-xl shadow-lg">
          {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}
          <div className="mb-4">
            <label className="block text-foreground font-medium mb-2 text-sm">
              {language === "ta" ? "மின்னஞ்சல்" : language === "hi" ? "ईमेल" : "Email"}
            </label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-foreground font-medium mb-2 text-sm">
              {language === "ta" ? "கடவுச்சொல்" : language === "hi" ? "पासवर्ड" : "Password"}
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required 
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 cursor-pointer border-none"
          >
            {loading 
              ? (language === "ta" ? "உள்நுழைகிறது..." : language === "hi" ? "साइन इन किया जा रहा है..." : "Signing in...") 
              : (language === "ta" ? "நிர்வாகியாக உள்நுழைக" : language === "hi" ? "एडमिन में साइन इन करें" : "Sign In to Admin")}
          </Button>
        </form>
      </div>
    </div>
  );
}
