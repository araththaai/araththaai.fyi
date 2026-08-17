import { ShieldCheck, Scale, HeartHandshake, Landmark } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {language === "en" ? "About The Firm" : "நிறுவனம் பற்றி"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {language === "en" ? "A Legacy of Legal Excellence" : "சட்ட நிபுணத்துவத்தின் பாரம்பரியம்"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {language === "en"
              ? "Delivering authoritative counsel, high-stakes advocacy, and transparent representation since 1998."
              : "நம்பகமான சட்ட ஆலோசனை, மூலோபாய வாதாடுதல் மற்றும் நேர்மையான பிரதிநிதித்துவத்தை வழங்கி வருகிறோம்."}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              {language === "en" ? "Our Founding Vision" : "எங்கள் நிறுவன நோக்கம்"}
            </h2>
            {language === "en" ? (
              <>
                <p>
                  Araththaai (AKM Associates & Legal Consultants) was founded with a single core mandate: to translate complex legal regulations into actionable advantages. What began as a dedicated property title audit boutique has expanded into a full-service advocacy and consultancy firm representing corporations, startups, and families.
                </p>
                <p>
                  Under the leadership of our Founder, Aseema Khaudhar, and Managing Partner, Mohammad Muzammil, we have built a team of seasoned litigators and corporate advisors who value confidentiality, deep technical preparation, and unwavering integrity.
                </p>
                <p>
                  Whether structuring corporate agreements or defending client liberties in court, we ensure our clients receive the highest tier of legal representation.
                </p>
              </>
            ) : (
              <>
                <p>
                  அறத்தாய் (AKM அசோசியேட்ஸ் & சட்ட ஆலோசகர்கள்) ஒரு முக்கியமான நோக்கத்துடன் நிறுவப்பட்டது: சிக்கலான சட்ட ஒழுங்குமுறைகளை எளிய மற்றும் சாதகமான தீர்வுகளாக மாற்றுவது. ஒரு பிரத்யேக சொத்துப் பத்திர தணிக்கை மையமாகத் தொடங்கப்பட்டு, இன்று நிறுவனங்கள், ஸ்டார்ட்-அப்கள் மற்றும் குடும்பங்களைப் பிரதிநிதித்துவப்படுத்தும் முழுமையான சட்ட ஆலோசனை மற்றும் வாதாடும் நிறுவனமாக விரிவடைந்துள்ளது.
                </p>
                <p>
                  எங்கள் நிறுவனத்தின் நிறுவனர் அசீமா கௌதர் மற்றும் நிர்வாகப் பங்குதாரர் முகமது முஸம்மில் ஆகியோரின் தலைமையில், ரகசியத்தன்மை, ஆழமான சட்டத் தயாரிப்பு மற்றும் நேர்மையை மதிக்கும் அனுபவம் வாய்ந்த வழக்கறிஞர்கள் மற்றும் கார்ப்பரேட் ஆலோசகர்களின் குழுவை நாங்கள் உருவாக்கியுள்ளோம்.
                </p>
                <p>
                  கார்ப்பரேட் ஒப்பந்தங்களை வடிவமைப்பது அல்லது நீதிமன்றத்தில் வாடிக்கையாளரின் உரிமைகளைப் பாதுகாப்பது என எதிலும், எங்கள் வாடிக்கையாளர்கள் மிக உயர்ந்த அளவிலான சட்டப் பிரதிநிதித்துவத்தைப் பெறுவதை நாங்கள் உறுதி செய்கிறோம்.
                </p>
              </>
            )}
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl bg-primary/5 border border-border overflow-hidden shadow-lg flex items-center justify-center relative">
              <Scale className="h-40 w-40 text-secondary/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-border max-w-xs">
              <p className="text-xl font-bold text-primary font-heading leading-tight">
                {language === "en" ? "“Justice delayed is justice denied.”" : "“தாமதிக்கப்பட்ட நீதி, மறுக்கப்பட்ட நீதிக்குச் சமம்.”"}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                — {language === "en" ? "Our Founding Principle" : "எங்கள் நிறுவன கொள்கை"}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            {language === "en" ? "Our Core Ethics" : "எங்கள் முக்கிய நெறிமுறைகள்"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-4">
              <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-lg">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">
                {language === "en" ? "Privileged Secrecy" : "ரகசியத்தன்மை"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "All client coordinates and case briefs are protected under strict attorney secrecy codes. Your data remains secure and confidential."
                  : "அனைத்து வாடிக்கையாளர் விவரங்களும் வழக்கு விபரங்களும் கடுமையான தொழில்முறை ரகசிய விதிகளின் கீழ் பாதுகாக்கப்படுகின்றன. உங்கள் தரவுகள் பாதுகாப்பாக வைக்கப்படும்."}
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-4">
              <div className="inline-flex p-3 bg-amber-50 text-amber-600 rounded-lg">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">
                {language === "en" ? "Deep Preparation" : "ஆழமான தயாரிப்பு"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We do not rely on templates. Our case strategies are engineered through exhaustive document flow checking and statutory precedents review."
                  : "நாங்கள் வெறும் வார்ப்புருக்களை நம்புவதில்லை. எங்கள் வழக்கு உத்திகள் ஆவணங்களின் ஆழமான ஆய்வு மற்றும் சட்ட முன்னுதாரணங்களின் மறுஆய்வு மூலம் வடிவமைக்கப்படுகின்றன."}
              </p>
            </div>

            <div className="bg-card border border-border p-8 rounded-xl shadow-sm space-y-4">
              <div className="inline-flex p-3 bg-purple-50 text-purple-600 rounded-lg">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-primary font-heading">
                {language === "en" ? "Pro Bono Advocacy" : "இலவச சட்ட உதவி"}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "We believe in equal rights. Our partners dedicate pro bono legal counsel to support civil liberties and public environmental resources protection."
                  : "சம உரிமைகளில் நாங்கள் நம்பிக்கை கொண்டுள்ளோம். சிவில் உரிமைகள் மற்றும் பொது சுற்றுச்சூழல் வளங்களைப் பாதுகாப்பதற்காக எங்கள் வழக்கறிஞர்கள் இலவச சட்ட உதவிகளை வழங்குகின்றனர்."}
              </p>
            </div>
          </div>
        </div>

        {/* Credentials & Memberships */}
        <div className="bg-card text-foreground p-8 md:p-12 rounded-2xl shadow-sm border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex p-3 bg-secondary/15 rounded-lg text-secondary">
                <Landmark className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary">
                {language === "en" ? "Bar Accreditations" : "வழக்கறிஞர் மன்ற அங்கீகாரங்கள்"}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === "en"
                  ? "Our attorneys are active members in good standing of various national and state regulatory bar organizations."
                  : "எங்கள் வழக்கறிஞர்கள் பல்வேறு தேசிய மற்றும் மாநில ஒழுங்குமுறை வழக்கறிஞர் சங்கங்களில் செயலில் உள்ள உறுப்பினர்களாக உள்ளனர்."}
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div className="bg-muted border border-border p-5 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Bar Council of India</h4>
                <p className="text-xs">
                  {language === "en"
                    ? "Statutory licensing and regulatory board for all advocates practicing within the Supreme Court and national high court systems."
                    : "உச்ச நீதிமன்றம் மற்றும் தேசிய உயர் நீதிமன்றங்களில் வாதாடும் அனைத்து வழக்கறிஞர்களுக்கான சட்டப்பூர்வ உரிமம் மற்றும் ஒழுங்குமுறை வாரியம்."}
                </p>
              </div>
              <div className="bg-muted border border-border p-5 rounded-lg">
                <h4 className="font-bold text-primary mb-2">Madras High Court Bar Association</h4>
                <p className="text-xs">
                  {language === "en"
                    ? "One of the oldest legal association pools in South Asia, representing senior advocacy members since the 19th century."
                    : "தெற்காசியாவின் பழமையான சட்ட சங்கங்களில் ஒன்று, 19 ஆம் நூற்றாண்டிலிருந்து மூத்த வழக்கறிஞர் உறுப்பினர்களைப் பிரதிநிதித்துவப்படுத்துகிறது."}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
