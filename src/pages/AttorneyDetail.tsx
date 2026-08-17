import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, GraduationCap, Scale, Calendar, BookOpen, Briefcase, Phone, ShieldCheck } from "lucide-react";
import { attorneysList } from "./Attorneys";
import { useLanguage } from "@/lib/LanguageContext";

// Expanded details maps for notable cases, publications, etc.
const extendedAttorneyDetails: Record<string, {
  notableCases: { en: string[]; ta: string[]; hi: string[] };
  publications: { en: string[]; ta: string[]; hi: string[] };
  bioParagraphs: { en: string[]; ta: string[]; hi: string[] };
}> = {
  "aseema-khaudhar": {
    bioParagraphs: {
      en: [
        "Advocate Aseema Khaudhar is the Founder and Senior Partner at AKM Associates (Araththaai). She advises clients on a comprehensive suite of legal matters across Tamil Nadu, maintaining key offices in Karur and Chennai.",
        "Her practice covers trial and appellate advocacy, representing individuals, institutions, and corporations before District Courts, the Madras High Court, and regulatory tribunals. She has a deep focus on property titling audits, civil disputes, consumer protections, and family counseling.",
        "Aseema is highly dedicated to legal awareness, frequently conducting community consultation programs and sharing regulatory guidance online through the @ARATHTHAAI portal."
      ],
      ta: [
        "வழக்கறிஞர் அசீமா கௌதர் AKM அசோசியேட்ஸ் (அறத்தாய்) நிறுவனத்தின் நிறுவனர் மற்றும் மூத்த பங்குதாரர் ஆவார். கரூர் மற்றும் சென்னையில் கிளை அலுவலகங்களைக் கொண்டு, தமிழகம் முழுவதும் வாடிக்கையாளர்களுக்கு சட்ட ஆலோசனைகளை வழங்கி வருகிறார்.",
        "அவரது சட்டப் பணி விசாரணை மற்றும் மேல்முறையீட்டு வாதங்களை உள்ளடக்கியது. மாவட்ட நீதிமன்றங்கள், சென்னை உயர் நீதிமன்றம் மற்றும் ஒழுங்குமுறை மன்றங்களில் தனிநபர்கள், அமைப்புகள் மற்றும் கார்ப்பரேட் நிறுவனங்களைப் பிரதிநிதித்துவப்படுத்துகிறார். சொத்து பத்திர தணிக்கை, சிவில் தகராறுகள், நுகர்வோர் பாதுகாப்பு மற்றும் குடும்ப நல விவகாரங்களில் அவர் தீவிர கவனம் செலுத்துகிறார்.",
        "சட்ட விழிப்புணர்வில் மிகுந்த ஈடுபாடு கொண்ட அசீமா, அடிக்கடி சமூக சட்ட முகாம்களை நடத்துவதுடன், @ARATHTHAAI தளம் மூலமாக இணையத்தில் சட்ட வழிகாட்டுதல்களையும் பகிர்ந்து வருகிறார்."
      ],
      hi: [
        "अधिवक्ता असीमा कौधर एकेएम एसोसिएट्स (अरथाई) की संस्थापक और वरिष्ठ भागीदार हैं। वह करूर और चेन्नई में कार्यालयों के साथ पूरे तमिलनाडु में कानूनी मामलों में परामर्श प्रदान करती हैं।",
        "उनकी कार्यप्रणाली में ट्रायल और अपील दोनों वकालत शामिल हैं। वह जिला अदालतों, मद्रास उच्च न्यायालय और नियामक न्यायाधिकरणों के समक्ष प्रतिनिधित्व करती हैं। वह संपत्ति शीर्षक ऑडिट, नागरिक विवादों, उपभोक्ता संरक्षण और पारिवारिक परामर्श पर ध्यान केंद्रित करती हैं।",
        "असीमा कानूनी जागरूकता के प्रति समर्पित हैं, समय-समय पर सामुदायिक परामर्श कार्यक्रम आयोजित करती हैं और @ARATHTHAAI पोर्टल के माध्यम से ऑनलाइन विधिक मार्गदर्शन साझा करती हैं।"
      ]
    },
    notableCases: {
      en: [
        "District Court Matters & Civil Disputes: Represented clients in partition actions, injunction suits, and contract violations.",
        "High Court & Tribunal Cases: Appealed administrative decisions and defended statutory rights.",
        "Property Audits: Verified legal history and title ownership across Tamil Nadu."
      ],
      ta: [
        "மாவட்ட நீதிமன்ற விவகாரங்கள் & சிவில் தகராறுகள்: பாகப்பிரிவினை வழக்குகள், தடையுத்தரவு வழக்குகள் மற்றும் ஒப்பந்த மீறல்களில் வாடிக்கையாளர்களைப் பிரதிநிதித்துவப்படுத்தினார்.",
        "உயர் நீதிமன்றம் & தீர்ப்பாய வழக்குகள்: தன்னிச்சையான நிர்வாக முடிவுகளை எதிர்த்து மேல்முறையீடு செய்து சட்ட உரிமைகளைப் பாதுகாத்தார்.",
        "சொத்து தணிக்கை: தமிழகம் முழுவதும் சொத்துக்களின் உரிமை வரலாறுகள் மற்றும் ஆவணங்களைச் சரிபார்த்துள்ளார்."
      ],
      hi: [
        "जिला न्यायालय मामले और नागरिक विवाद: विभाजन कार्रवाई, निषेधाज्ञा मुकदमों और अनुबंध के उल्लंघन में ग्राहकों का प्रतिनिधित्व किया।",
        "उच्च न्यायालय और न्यायाधिकरण मामले: प्रशासनिक निर्णयों के खिलाफ अपील की और वैधानिक अधिकारों का बचाव किया।",
        "संपत्ति ऑडिट: तमिलनाडु में संपत्ति के कानूनी इतिहास और स्वामित्व की पुष्टि की।"
      ]
    },
    publications: {
      en: [
        "‘Understanding Land Registration and Title Verifications in Tamil Nadu’ - Legal Awareness Series, 2023.",
        "‘Consumer Protection Act: A Guide for First-time Claimants’ - Advocate's Journal, 2024."
      ],
      ta: [
        "‘தமிழ்நாட்டில் நிலப் பதிவு மற்றும் பத்திர சரிபார்ப்புகளைப் புரிந்துகொள்ளுதல்’ - சட்ட விழிப்புணர்வுத் தொடர், 2023.",
        "‘நுகர்வோர் பாதுகாப்புச் சட்டம்: முதல்முறை விண்ணப்பிப்பவர்களுக்கான வழிகாட்டி’ - வழக்கறிஞர் இதழ், 2024."
      ],
      hi: [
        "‘तमिलनाडु में भूमि पंजीकरण और शीर्षक सत्यापन को समझना’ - कानूनी जागरूकता श्रृंखला, 2023।",
        "‘उपभोक्ता संरक्षण अधिनियम: पहली बार दावा करने वालों के लिए एक मार्गदर्शिका’ - एडवोकेट्स जर्नल, 2024।"
      ]
    }
  },
  "mohammad-muzammil": {
    bioParagraphs: {
      en: [
        "Mohammad Muzammil is the Managing Partner of AKM Associates and heads the Criminal Defence and litigation division. He provides strong, strategic representation before Trial Courts, District Courts, High Court, and other forums in civil, criminal, commercial, and regulatory proceedings.",
        "He has earned a reputation for strategic defense filings, securing bails and anticipatory bails in complex financial and economic investigations, and representing clients before specialized enforcement directorates.",
        "Muzammil is a passionate defender of constitutional liberties, frequently contesting arbitrary searches, seizures, and regulatory overreaches."
      ],
      ta: [
        "முகமது முஸம்மில் AKM அசோசியேட்ஸ் நிறுவனத்தின் நிர்வாக பங்குதாரர் மற்றும் குற்றவியல் தற்காப்புப் பிரிவின் தலைவர் ஆவார். சிவில், குற்றவியல், வணிக மற்றும் ஒழுங்குமுறை விவகாரங்களில் விசாரணை நீதிமன்றங்கள், மாவட்ட நீதிமன்றங்கள் மற்றும் உயர் நீதிமன்றங்களில் வலுவான பிரதிநிதித்துவத்தை வழங்குகிறார்.",
        "பொருளாதார மற்றும் நிதிசார் குற்றச்சாட்டுகளின் விசாரணைகளில் ஜாமீன் மற்றும் முன்ஜாமீன்களைப் பெறுவதிலும், சிறப்பு அமலாக்க அமைப்புகளின் முன் ஆஜராகி வாடிக்கையாளர்களைப் பாதுகாப்பதிலும் அவர் சிறந்த நற்பெயரைப் பெற்றுள்ளார்.",
        "அரசியலமைப்பு உரிமைகளைப் பாதுகாப்பதில் ஆர்வம் கொண்ட முஸம்மில், தன்னிச்சையான தேடுதல், சொத்து முடக்கம் மற்றும் அதிகார வரம்பு மீறல்களை எதிர்த்து நீதிமன்றங்களில் தொடர்ந்து வாதாடுகிறார்."
      ],
      hi: [
        "मोहम्मद मुज़म्मिल एकेएम एसोसिएट्स के प्रबंध भागीदार हैं और आपराधिक बचाव और मुकदमेबाजी प्रभाग का नेतृत्व करते हैं। वह सिविल, आपराधिक, वाणिज्यिक और नियामक कार्यवाही में मुकदमे अदालतों, जिला अदालतों, उच्च न्यायालयों में प्रतिनिधित्व प्रदान करते हैं।",
        "उन्होंने जटिल वित्तीय और आर्थिक जांच में जमानत और अग्रिम जमानत हासिल करने और प्रवर्तन निदेशालयों के समक्ष मुवक्किलों का प्रतिनिधित्व करने में ख्याति अर्जित की है।",
        "मुज़म्मिल संवैधानिक स्वतंत्रता के प्रबल रक्षक हैं, वह मनमाने ढंग से की जाने वाली खोजबीन, जब्ती और विनियामक अतिक्रमणों का अदालतों में विरोध करते हैं।"
      ]
    },
    notableCases: {
      en: [
        "Trial Court Representation: Secured favorable verdicts in complex criminal and corporate trial proceedings.",
        "Anticipatory Bail & Bails: Successfully defended individuals facing high-stakes financial investigations.",
        "Constitutional Writs: Contested arbitrary enforcement actions in the High Court."
      ],
      ta: [
        "நீதிமன்ற விசாரணை பிரதிநிதித்துவம்: சிக்கலான குற்றவியல் மற்றும் கார்ப்பரேட் வழக்கு விசாரணைகளில் சாதகமான தீர்ப்புகளைப் பெற்றுள்ளார்.",
        "முன்ஜாமீன் & ஜாமீன்கள்: கடுமையான நிதி விசாரணைப் பிரிவுகளை எதிர்கொள்ளும் நபர்களுக்கு வெற்றிகரமாக முன்ஜாமீன் பெற்றுத் தந்துள்ளார்.",
        "அரசியலமைப்பு ரிட் மனுக்கள்: தன்னிச்சையான அமலாக்க நடவடிக்கைகளை சென்னை உயர் நீதிமன்றத்தில் எதிர்த்துப் போட்டியிட்டு உரிமைகளை நிலைநாட்டினார்."
      ],
      hi: [
        "ट्रायल कोर्ट प्रतिनिधित्व: जटिल आपराधिक और कॉर्पोरेट मुकदमों में अनुकूल फैसले हासिल किए।",
        "अग्रिम जमानत और जमानत: उच्च जोखिम वाली वित्तीय जांच का सामना कर रहे व्यक्तियों का सफलतापूर्वक बचाव किया।",
        "संवैधानिक रिट: उच्च न्यायालय में मनमानी प्रवर्तन कार्रवाइयों का विरोध किया।"
      ]
    },
    publications: {
      en: [
        "‘PMLA Investigations and Constitutional Protections’ - National Law Review, 2020.",
        "‘Evidentiary Standards in Corporate Financial Trials’ - Indian Bar Association Journal, 2023."
      ],
      ta: [
        "‘PMLA விசாரணைகளும் அரசியலமைப்புப் பாதுகாப்புகளும்’ - தேசிய சட்ட இதழ், 2020.",
        "‘கார்ப்பரேட் நிதிசார் வழக்குகளில் சான்றாதாரங்களின் தரநிலைகள்’ - இந்திய வழக்கறிஞர் சங்க இதழ், 2023."
      ],
      hi: [
        "‘पीएमएलए जांच और संवैधानिक सुरक्षा’ - नेशनल लॉ रिव्यू, 2020।",
        "‘कॉर्पोरेट वित्तीय मुकदमों में साक्ष्य के मानक’ - इंडियन बार एसोसिएशन जर्नल, 2023।"
      ]
    }
  }
};

export default function AttorneyDetail() {
  const { language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const attorney = attorneysList.find((a) => a.slug === slug);
  const details = slug ? extendedAttorneyDetails[slug] : null;

  if (!attorney || !details) {
    return <Navigate to="/attorneys" replace />;
  }

  const roleName = language === "en" ? attorney.role.en : language === "ta" ? attorney.role.ta : attorney.role.hi;
  const practiceName = language === "en" ? attorney.practice.en : language === "ta" ? attorney.practice.ta : attorney.practice.hi;
  const educationName = language === "en" ? attorney.education.en : language === "ta" ? attorney.education.ta : attorney.education.hi;
  const admissionsName = language === "en" ? attorney.admissions.en : language === "ta" ? attorney.admissions.ta : attorney.admissions.hi;
  const bioParagraphs = language === "en" ? details.bioParagraphs.en : language === "ta" ? details.bioParagraphs.ta : details.bioParagraphs.hi;
  const notableCases = language === "en" ? details.notableCases.en : language === "ta" ? details.notableCases.ta : details.notableCases.hi;
  const publications = language === "en" ? details.publications.en : language === "ta" ? details.publications.ta : details.publications.hi;

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/attorneys" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          {language === "en" 
            ? "Back to Attorneys List" 
            : language === "ta" 
            ? "வழக்கறிஞர்கள் பட்டியலுக்குத் திரும்பவும்" 
            : "वकीलों की सूची पर वापस जाएं"}
        </Link>

        {/* Profile Card */}
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Initials Avatar */}
            <div className="bg-muted p-12 lg:p-24 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border relative select-none">
              <div className="text-8xl lg:text-9xl font-extrabold text-muted-foreground/30 font-heading tracking-tighter">
                {attorney.initials}
              </div>
              <div className="absolute top-6 left-6 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded">
                {roleName}
              </div>
            </div>

            {/* General Bio Data */}
            <div className="p-8 lg:p-12 lg:col-span-2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary font-heading mb-2">
                  {attorney.name}
                </h1>
                <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <Award className="h-4 w-4 shrink-0" /> {practiceName}
                </p>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  {bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-secondary shrink-0" />
                    <span><strong>{language === "en" ? "Education:" : language === "ta" ? "கல்வி:" : "शिक्षा:"}</strong> {educationName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Scale className="h-4 w-4 text-secondary shrink-0" />
                    <span><strong>{language === "en" ? "Admissions:" : language === "ta" ? "அங்கீகாரம்:" : "स्वीकृति:"}</strong> {admissionsName}</span>
                  </div>
                  {attorney.whatsapp && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Phone className="h-4 w-4 text-secondary shrink-0" />
                      <span>
                        <strong>WhatsApp:</strong>{" "}
                        <a 
                          href={`https://wa.me/91${attorney.whatsapp}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-secondary hover:underline font-semibold"
                        >
                          +91 {attorney.whatsapp}
                        </a>
                      </span>
                    </div>
                  )}
                </div>

                <Link to="/book-consultation">
                  <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-12 px-6">
                    <Calendar className="mr-2 h-4 w-4" /> 
                    {language === "en" 
                      ? "Book Appointment" 
                      : language === "ta" 
                      ? "முன்பதிவு செய்ய" 
                      : "अपॉइंटमेंट बुक करें"}
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Detailed Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notable Case Outcomes */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-secondary shrink-0" />
              <h3 className="text-xl font-heading font-bold text-primary">
                {language === "en" ? "Representative Matters" : language === "ta" ? "வழக்கு பிரதிநிதித்துவம்" : "प्रतिनिधि मामले"}
              </h3>
            </div>
            <ul className="space-y-4">
              {notableCases.map((caseItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{caseItem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Publications */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-secondary shrink-0" />
              <h3 className="text-xl font-heading font-bold text-primary">
                {language === "en" ? "Publications & Articles" : language === "ta" ? "கட்டுரைகள் & வெளியீடுகள்" : "प्रकाशन और लेख"}
              </h3>
            </div>
            {publications && publications.length > 0 ? (
              <ul className="space-y-4">
                {publications.map((pub, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground italic">“{pub}”</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                {language === "en" 
                  ? "No public publications recorded in compliance with bar guidelines." 
                  : language === "ta"
                  ? "விளம்பர வழிகாட்டுதல்களின்படி எந்த பொது வெளியீடுகளும் பதிவு செய்யப்படவில்லை."
                  : "बार दिशानिर्देशों के अनुपालन में कोई सार्वजनिक प्रकाशन दर्ज नहीं है।"}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
