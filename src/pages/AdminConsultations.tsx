import { useState, useEffect } from "react";
import { MessageSquare, Mail, Phone, Calendar, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { supabase } from "@/lib/supabaseClient";

export default function AdminConsultationsPage() {
  const { language } = useLanguage();
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getConsultations() {
      try {
        const { data, error } = await supabase
          .from("ConsultationRequest")
          .select("*")
          .order("createdAt", { ascending: false });
        
        if (error) {
          console.error("Error fetching ConsultationRequests:", error);
        } else if (data) {
          setRequests(data);
        }
      } catch (err) {
        console.error("Supabase request exception:", err);
      } finally {
        setLoading(false);
      }
    }
    getConsultations();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {language === "ta" ? "ஆலோசனை & தொடர்பு கோரிக்கைகள்" : language === "hi" ? "परामर्श और संपर्क अनुरोध" : "Consultation & Contact Requests"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {language === "ta" ? "பொதுமக்கள் சமர்ப்பித்த ஆலோசனை கோரிக்கைகளை மதிப்பாய்வு செய்து நிர்வகிக்கவும்." : language === "hi" ? "जनता द्वारा प्रस्तुत परामर्श पूछताछ की समीक्षा और प्रबंधन करें।" : "Review and manage consultation inquiries submitted by the public."}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />{" "}
            {language === "ta" ? "வந்தடைந்த கோரிக்கைகள்" : language === "hi" ? "आने वाली पूछताछ" : "Incoming Inquiries"} ({requests.length})
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {requests.length === 0 ? (
            <div className="p-12 text-center text-muted-foreground text-sm font-semibold">
              {language === "ta" ? "கோரிக்கைகள் எதுவும் இல்லை." : language === "hi" ? "कोई अनुरोध नहीं मिला।" : "No requests found."}
            </div>
          ) : (
            requests.map((req) => (
              <div key={req.id} className="p-6 hover:bg-gray-50/80 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 text-foreground">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-bold text-gray-900 text-lg">{req.name}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {req.serviceType}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        req.status === "PENDING" ? "bg-amber-100 text-amber-800" :
                        req.status === "CONFIRMED" ? "bg-blue-100 text-blue-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {req.status === "PENDING" 
                          ? (language === "ta" ? "நிலுவையில் உள்ளது" : language === "hi" ? "लंबित" : "PENDING") 
                          : req.status === "CONFIRMED" 
                          ? (language === "ta" ? "உறுதிப்படுத்தப்பட்டது" : language === "hi" ? "पुष्टि की गई" : "CONFIRMED") 
                          : (language === "ta" ? "நிறைவடைந்தது" : language === "hi" ? "पूरा हुआ" : "COMPLETED")}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3.5 w-3.5" /> {req.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3.5 w-3.5" /> {req.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> 
                        {language === "ta" ? "பெறப்பட்டது:" : language === "hi" ? "प्राप्त हुआ:" : "Received:"} {req.createdAt ? new Date(req.createdAt).toLocaleDateString() : "N/A"}
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 mt-2 bg-gray-50 p-3 rounded-md border border-gray-100">
                      "{req.message}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <a href={`mailto:${req.email}`} className="px-4 py-2 text-xs font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                      {language === "ta" ? "மின்னஞ்சல் மூலம் பதில்" : language === "hi" ? "ईमेल द्वारा उत्तर दें" : "Reply Email"}
                    </a>
                    <a href={`tel:${req.phone}`} className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                      {language === "ta" ? "வாடிக்கையாளரை அழைக்க" : language === "hi" ? "क्लाइंट को कॉल करें" : "Call Client"}
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
