import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, GraduationCap, Scale, Calendar, BookOpen, Briefcase, Instagram, Phone, ShieldCheck } from "lucide-react";
import { attorneysList } from "./Attorneys";
import { useLanguage } from "@/lib/LanguageContext";

// Expanded details maps for notable cases, publications, etc.
const extendedAttorneyDetails: Record<string, {
  notableCases: { en: string[]; ta: string[] };
  publications: { en: string[]; ta: string[] };
  bioParagraphs: { en: string[]; ta: string[] };
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

  const roleName = language === "en" ? attorney.role.en : attorney.role.ta;
  const practiceName = language === "en" ? attorney.practice.en : attorney.practice.ta;
  const educationName = language === "en" ? attorney.education.en : attorney.education.ta;
  const admissionsName = language === "en" ? attorney.admissions.en : attorney.admissions.ta;
  const bioParagraphs = language === "en" ? details.bioParagraphs.en : details.bioParagraphs.ta;
  const notableCases = language === "en" ? details.notableCases.en : details.notableCases.ta;
  const publications = language === "en" ? details.publications.en : details.publications.ta;

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/attorneys" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> {language === "en" ? "Back to Attorneys List" : "வழக்கறிஞர்கள் பட்டியலுக்குத் திரும்பவும்"}
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
                    <span><strong>{language === "en" ? "Education:" : "கல்வி:"}</strong> {educationName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Scale className="h-4 w-4 text-secondary shrink-0" />
                    <span><strong>{language === "en" ? "Admissions:" : "அங்கீகாரம்:"}</strong> {admissionsName}</span>
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
                  {attorney.instagram && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Instagram className="h-4 w-4 text-secondary shrink-0" />
                      <span>
                        <strong>Instagram:</strong>{" "}
                        <a 
                          href={`https://instagram.com/${attorney.instagram.replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-secondary hover:underline font-semibold"
                        >
                          {attorney.instagram}
                        </a>
                      </span>
                    </div>
                  )}
                </div>

                <Link to="/book-consultation">
                  <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-12 px-6">
                    <Calendar className="mr-2 h-4 w-4" /> {language === "en" ? "Book Appointment" : "முன்பதிவு செய்ய"}
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
                {language === "en" ? "Representative Matters" : "வழக்கு பிரதிநிதித்துவம்"}
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
                {language === "en" ? "Publications & Articles" : "கட்டுரைகள் & வெளியீடுகள்"}
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
                  : "விளம்பர வழிகாட்டுதல்களின்படி எந்த பொது வெளியீடுகளும் பதிவு செய்யப்படவில்லை."}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
