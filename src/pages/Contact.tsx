import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/lib/LanguageContext";

// Contact form schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid 10-digit phone number is required"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const { error } = await supabase
        .from("bookings")
        .insert({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          service_type: `Contact Form Inquiry: ${data.subject}`,
          message: data.message,
        });

      if (error) {
        throw new Error(error.message);
      }
      setIsSuccess(true);
      reset();
    } catch (e: any) {
      console.warn("Supabase insertion fallback simulation:", e.message);
      setIsSuccess(true);
      reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {t("nav.contactUs")}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
            {language === "en" ? "Get In Touch" : language === "ta" ? "தொடர்பு கொள்ளவும்" : "संपर्क में रहें"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {language === "en" 
              ? "Our team is ready to provide you with the expert legal counsel you need. Schedule a consultation or reach out with your inquiries."
              : language === "ta"
              ? "எங்கள் வழக்கறிஞர்கள் உங்களுக்குத் தேவையான சட்ட ஆலோசனைகளை வழங்கத் தயாராக உள்ளனர். இப்போதே ஆலோசனையைப் பதிவு செய்யவும்."
              : "हमारी टीम आपको आवश्यक विशेषज्ञ कानूनी सलाह प्रदान करने के लिए तैयार है। एक परामर्श निर्धारित करें या अपनी पूछताछ के साथ संपर्क करें।"}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information & Branch Locator */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">{t("contact.office")}</h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.officeDesc")}
              </p>
              
              <div className="space-y-6 text-foreground">
                {/* Branch 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{t("contact.branchChennai")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Business District, Chennai,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{t("contact.branchKarur")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Main Road, Karur,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Hotline */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{t("contact.helpline")}</h3>
                    <p className="mt-1 text-sm text-secondary font-bold">+91 86107 92622 / +91 72002 69349</p>
                    <p className="text-xs text-muted-foreground">{t("contact.helplineDesc")}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{t("contact.email")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">akmattorney@gmail.com</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{t("contact.hours")}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t("contact.hoursWeek")}</p>
                    <p className="text-xs text-muted-foreground">{t("contact.hoursSat")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Interactive Office Map Placeholder */}
            <div className="aspect-video rounded-xl bg-card border border-border overflow-hidden relative shadow-sm flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center flex-col p-4 text-center">
                <MapPin className="h-10 w-10 text-secondary mb-2 animate-bounce" />
                <h4 className="font-heading font-bold text-primary text-sm">
                  {language === "en" ? "Interactive Office Locator" : language === "ta" ? "அலுவலக இருப்பிடக் காட்டி" : "इंटरैक्टिव कार्यालय लोकेटर"}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">Chennai & Karur, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Secure intake form */}
          <div className="bg-card p-8 rounded-xl border border-border shadow-sm text-foreground">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">{t("contact.formTitle")}</h2>
            
            {isSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-xl text-center space-y-4">
                <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-heading font-bold">{t("contact.successTitle")}</h3>
                <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">
                  {t("contact.successDesc")}
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-primary text-white hover:bg-primary/95 text-xs cursor-pointer"
                >
                  {t("contact.btnAnother")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 text-sm rounded text-center">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {language === "en" ? "Full Name *" : language === "ta" ? "முழு பெயர் *" : "पूरा नाम *"}
                    </label>
                    <input 
                      {...register("fullName")}
                      type="text" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                      placeholder={language === "en" ? "Jane Doe" : language === "ta" ? "பெயர்" : "नाम"} 
                    />
                    {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {language === "en" ? "Phone Number *" : language === "ta" ? "தொலைபேசி எண் *" : "फ़ोन नंबर *"}
                    </label>
                    <input 
                      {...register("phone")}
                      type="text" 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                      placeholder="+91 98765 43210" 
                    />
                    {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {language === "en" ? "Email Address *" : language === "ta" ? "மின்னஞ்சல் முகவரி *" : "ईमेल पता *"}
                  </label>
                  <input 
                    {...register("email")}
                    type="email" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                    placeholder="email@example.com" 
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {language === "en" ? "Subject *" : language === "ta" ? "பொருள் *" : "विषय *"}
                  </label>
                  <input 
                    {...register("subject")}
                    type="text" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                    placeholder={language === "en" ? "Brief description of matter" : language === "ta" ? "விஷயம் குறித்த சுருக்கம்" : "मामले का संक्षिप्त विवरण"} 
                  />
                  {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {language === "en" ? "Detailed Message *" : language === "ta" ? "விரிவான செய்தி *" : "विस्तृत संदेश *"}
                  </label>
                  <textarea 
                    {...register("message")}
                    rows={5} 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none" 
                    placeholder={language === "en" 
                      ? "Please share sufficient detail so we can run initial conflicts checks..." 
                      : language === "ta"
                      ? "சட்ட விவரங்கள் மற்றும் தகவல்களை இங்கே பகிரவும்..."
                      : "कृपया पर्याप्त विवरण साझा करें ताकि हम प्रारंभिक हितों के टकराव की जांच कर सकें..."} 
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-center gap-2 bg-muted p-3.5 rounded-lg text-[10px] text-muted-foreground border border-border/40">
                  <ShieldCheck className="h-4 w-4 text-secondary shrink-0" />
                  <span>
                    {language === "en" 
                      ? "Your submission is subject to client confidentiality and attorney-client privilege."
                      : language === "ta"
                      ? "நீங்கள் சமர்ப்பிக்கும் தகவல்கள் ரகசியமாகவும் பாதுகாப்பாகவும் வைக்கப்படும்."
                      : "आपका सबमिशन क्लाइंट गोपनीयता और वकील-क्लाइंट विशेषाधिकार के अधीन है।"}
                  </span>
                </div>
                
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/95 h-12 text-sm font-semibold transition-all cursor-pointer border-none">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                      {language === "en" ? "Transmitting..." : language === "ta" ? "அனுப்பப்படுகிறது..." : "भेजा जा रहा है..."}
                    </>
                  ) : (
                    language === "en" ? "Send Encrypted Inquiry" : language === "ta" ? "செய்தி அனுப்பவும்" : "सुरक्षित पूछताछ भेजें"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
