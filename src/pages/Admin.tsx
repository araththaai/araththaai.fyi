import { Users, Briefcase, DollarSign, Activity } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AdminOverview() {
  const { language } = useLanguage();

  const stats = [
    { 
      name: language === "en" 
        ? "Total Active Cases" 
        : language === "ta" 
        ? "மொத்த வழக்குகள்" 
        : "कुल सक्रिय मामले", 
      value: "24", 
      icon: Briefcase, 
      color: "text-blue-600", 
      bg: "bg-blue-100" 
    },
    { 
      name: language === "en" 
        ? "Total Clients" 
        : language === "ta" 
        ? "மொத்த வாடிக்கையாளர்கள்" 
        : "कुल ग्राहक", 
      value: "156", 
      icon: Users, 
      color: "text-amber-600", 
      bg: "bg-amber-100" 
    },
    { 
      name: language === "en" 
        ? "Monthly Revenue" 
        : language === "ta" 
        ? "மாதாந்திர வருவாய்" 
        : "मासिक राजस्व", 
      value: "₹4,50,000", 
      icon: DollarSign, 
      color: "text-green-600", 
      bg: "bg-green-100" 
    },
    { 
      name: language === "en" 
        ? "Pending Tasks" 
        : language === "ta" 
        ? "நிலுவையில் உள்ள பணிகள்" 
        : "लंबित कार्य", 
      value: "12", 
      icon: Activity, 
      color: "text-purple-600", 
      bg: "bg-purple-100" 
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          {language === "en" ? "Firm Overview" : language === "ta" ? "நிறுவனத்தின் சுருக்கம்" : "फर्म का अवलोकन"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {language === "en" 
            ? "High-level analytics and firm performance." 
            : language === "ta" 
            ? "உயர்மட்ட பகுப்பாய்வு மற்றும் நிறுவனத்தின் செயல்திறன்." 
            : "उच्च-स्तरीय विश्लेषण और फर्म का प्रदर्शन।"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {language === "en" ? "Recent Activity" : language === "ta" ? "சமீபத்திய செயல்பாடுகள்" : "हाल की गतिविधि"}
          </h2>
          <div className="space-y-4">
             <div className="border-l-2 border-primary pl-4 py-1">
               <p className="text-sm text-gray-900 font-medium">
                 {language === "en" ? "New Client Registration" : language === "ta" ? "புதிய வாடிக்கையாளர் பதிவு" : "नया ग्राहक पंजीकरण"}
               </p>
               <p className="text-xs text-gray-500">
                 {language === "en" 
                   ? "John Doe completed onboarding • 10 mins ago" 
                   : language === "ta" 
                   ? "ஜான் டோ உள்நுழைந்தார் • 10 நிமிடங்களுக்கு முன்பு" 
                   : "जॉन डो ने ऑनबोर्डिंग पूरी की • 10 मिनट पहले"}
               </p>
             </div>
             <div className="border-l-2 border-amber-500 pl-4 py-1">
               <p className="text-sm text-gray-900 font-medium">
                 {language === "en" ? "Invoice Paid" : language === "ta" ? "விலைப்பட்டியல் செலுத்தப்பட்டது" : "चालान भुगतान प्राप्त"}
               </p>
               <p className="text-xs text-gray-500">
                 {language === "en" 
                   ? "INV-2023-1001 for ₹5,500 • 1 hour ago" 
                   : language === "ta" 
                   ? "INV-2023-1001 ₹5,500 க்கான கட்டணம் • 1 மணிநேரத்திற்கு முன்பு" 
                   : "INV-2023-1001 ₹5,500 के लिए • 1 घंटे पहले"}
               </p>
             </div>
             <div className="border-l-2 border-blue-500 pl-4 py-1">
               <p className="text-sm text-gray-900 font-medium">
                 {language === "en" ? "Case Status Updated" : language === "ta" ? "வழக்கு நிலை புதுப்பிக்கப்பட்டது" : "मामले की स्थिति अद्यतन"}
               </p>
               <p className="text-xs text-gray-500">
                 {language === "en" 
                   ? "CAS-2023-001 moved to IN_PROGRESS by Aseema K. • 2 hours ago" 
                   : language === "ta" 
                   ? "CAS-2023-001 செயலில் உள்ள நிலைக்கு மாற்றப்பட்டது • 2 மணிநேரத்திற்கு முன்பு" 
                   : "CAS-2023-001 असीमा के. द्वारा इन_प्रोग्रेस में स्थानांतरित • 2 घंटे पहले"}
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
