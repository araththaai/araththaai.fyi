import { useState } from "react";
import { MessageSquare, Mail, Phone, Calendar } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AdminConsultationsPage() {
  const { language } = useLanguage();
  // Demonstration data for public requests received via /book and /contact
  const [requests] = useState([
    {
      id: "req-1",
      name: "Senthil Nathan",
      email: "senthil@example.com",
      phone: "+91 98765 43210",
      serviceType: "Corporate & Business Law",
      message: "Need legal advice regarding company registration and shareholder agreements.",
      date: "2026-07-25",
      status: "PENDING",
    },
    {
      id: "req-2",
      name: "Ananya Sharma",
      email: "ananya@example.com",
      phone: "+91 98123 45678",
      serviceType: "Property & Real Estate",
      message: "Property title verification and sale deed drafting request.",
      date: "2026-07-24",
      status: "CONFIRMED",
    },
    {
      id: "req-3",
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      phone: "+91 97654 32109",
      serviceType: "Civil & Intellectual Property",
      message: "Trademark infringement notice guidance.",
      date: "2026-07-23",
      status: "COMPLETED",
    },
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {language === "en" 
            ? "Consultation & Contact Requests" 
            : language === "ta" 
            ? "ஆலோசனை & தொடர்பு கோரிக்கைகள்" 
            : "परामर्श और संपर्क अनुरोध"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {language === "en" 
            ? "Review and manage consultation inquiries submitted by the public." 
            : language === "ta"
            ? "பொதுமக்கள் சமர்ப்பித்த ஆலோசனை கோரிக்கைகளை மதிப்பாய்வு செய்து நிர்வகிக்கவும்."
            : "जनता द्वारा प्रस्तुत परामर्श पूछताछ की समीक्षा और प्रबंधन करें।"}
        </p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />{" "}
            {language === "en" ? "Incoming Inquiries" : language === "ta" ? "வந்தடைந்த கோரிக்கைகள்" : "आने वाली पूछताछ"} ({requests.length})
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {requests.map((req) => (
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
                        ? (language === "en" ? "PENDING" : language === "ta" ? "நிலுவையில் உள்ளது" : "लंबित") 
                        : req.status === "CONFIRMED" 
                        ? (language === "en" ? "CONFIRMED" : language === "ta" ? "உறுதிப்படுத்தப்பட்டது" : "पुष्टि की गई") 
                        : (language === "en" ? "COMPLETED" : language === "ta" ? "நிறைவடைந்தது" : "पूरा हुआ")}
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
                      {language === "en" ? "Received:" : language === "ta" ? "பெறப்பட்டது:" : "प्राप्त हुआ:"} {req.date}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mt-2 bg-gray-50 p-3 rounded-md border border-gray-100">
                    "{req.message}"
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a href={`mailto:${req.email}`} className="px-4 py-2 text-xs font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                    {language === "en" ? "Reply Email" : language === "ta" ? "மின்னஞ்சல் மூலம் பதில்" : "ईमेल द्वारा उत्तर दें"}
                  </a>
                  <a href={`tel:${req.phone}`} className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors">
                    {language === "en" ? "Call Client" : language === "ta" ? "வாடிக்கையாளரை அழைக்க" : "क्लाइंट को कॉल करें"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
