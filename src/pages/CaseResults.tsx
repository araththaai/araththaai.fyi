import { useState } from "react";
import { AlertCircle, Scale, ShieldCheck, Landmark, Briefcase, BookOpen } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const caseOutcomes = [
  {
    title: {
      en: "₹450 Million Corporate Acquisition Contract Dispute",
      ta: "₹450 மில்லியன் கார்ப்பரேட் கையகப்படுத்தல் ஒப்பந்த தகராறு",
      hi: "₹450 मिलियन कॉर्पोरेट अधिग्रहण अनुबंध विवाद"
    },
    field: "Corporate Law",
    outcome: {
      en: "Favorable Settlement",
      ta: "சாதகமான தீர்வு",
      hi: "अनुकूल समझौता"
    },
    summary: {
      en: "Anonymized representation of a national logistics firm in a contract breach action regarding multi-state operations transfer. Secured out-of-court settlement protecting client assets and ensuring continuous operating permissions.",
      ta: "பல மாநில செயல்பாட்டு பரிமாற்றம் தொடர்பான ஒப்பந்த மீறல் வழக்கில் ஒரு தேசிய தளவாட நிறுவனத்தின் அநாமதேய பிரதிநிதித்துவம். வாடிக்கையாளர் சொத்துக்களைப் பாதுகாத்து மற்றும் தொடர்ச்சியான செயல்பாட்டு அனுமதிகளை உறுதி செய்யும் நீதிமன்றத்திற்கு வெளியே தீர்வு எட்டப்பட்டது.",
      hi: "बहु-राज्य संचालन हस्तांतरण के संबंध में एक राष्ट्रीय रसद फर्म के अनुबंध उल्लंघन मामले में प्रतिनिधित्व किया। क्लाइंट की संपत्तियों की रक्षा करते हुए और निरंतर परिचालन की अनुमति सुनिश्चित करते हुए अदालत के बाहर समझौता कराया।"
    },
    detail: {
      en: "Our corporate litigation team analyzed structural service levels, identifying critical counter-party defaults which forced the plaintiff to the negotiating table.",
      ta: "எங்கள் கார்ப்பரேட் வழக்கு குழு கட்டமைப்பு சேவை நிலைகளை பகுப்பாய்வு செய்து, முக்கிய ஒப்பந்த மீறல்களை அடையாளம் கண்டு எதிர்தரப்பை பேச்சுவார்த்தைக்கு வர கட்டாயப்படுத்தியது.",
      hi: "हमारी कॉर्पोरेट मुकदमेबाजी टीम ने संरचनात्मक सेवा स्तरों का विश्लेषण किया, जिससे विपक्षी की महत्वपूर्ण गलतियों का पता चला और वे बातचीत की मेज पर आने को मजबूर हुए।"
    },
    icon: Briefcase
  },
  {
    title: {
      en: "Commercial Development Title Dispute",
      ta: "வணிக மேம்பாட்டு சொத்து பத்திர தகராறு",
      hi: "वाणिज्यिक विकास भूमि शीर्षक विवाद"
    },
    field: "Property Law",
    outcome: {
      en: "Defense Verdict Secured",
      ta: "தற்காப்பு தீர்ப்பு பெறப்பட்டது",
      hi: "बचाव पक्ष के पक्ष में निर्णय"
    },
    summary: {
      en: "Defense of a commercial builder against ancestral claims on a prime 20-acre urban development. Achieved complete dismissal of injunction applications and title validations in trial court.",
      ta: "20 ஏக்கர் வணிக மேம்பாட்டு நிலத்தின் மீதான பரம்பரை உரிமைகோரல்களுக்கு எதிராக ஒரு வணிக கட்டுமான நிறுவனத்தின் தற்காப்பு வாதம். தடையுத்தரவு மனுக்கள் முழுமையாக தள்ளுபடி செய்யப்பட்டு விசாரணை நீதிமன்றத்தில் பத்திரங்கள் செல்லுபடியாக்கப்பட்டது.",
      hi: "एक वाणिज्यिक निर्माता का 20 एकड़ के शहरी विकास पर पैतृक दावों के खिलाफ बचाव किया। ट्रायल कोर्ट में निषेधाज्ञा आवेदनों और शीर्षक सत्यापन को पूरी तरह से खारिज कराने में सफलता हासिल की।"
    },
    detail: {
      en: "Obtained land revenue files dating back 45 years to prove uninterrupted title flow, establishing third-party purchase legitimacy.",
      ta: "45 ஆண்டுகள் பழமையான நில வருவாய் ஆவணங்களைப் பெற்று, தடையற்ற சொத்து உரிமை ஓட்டத்தை நிரூபித்து, வாங்குதலின் சட்டப்பூர்வ தன்மையை நிலைநாட்டினோம்.",
      hi: "शीर्षक के स्पष्ट स्वामित्व को साबित करने के लिए 45 वर्ष पुराने भूमि राजस्व दस्तावेजों को प्राप्त किया और तृतीय-पक्ष खरीद की वैधता स्थापित की।"
    },
    icon: Landmark
  },
  {
    title: {
      en: "Unlawful Taxation Order & Seizure Appeal",
      ta: "சட்டவிரோத வரிவிதிப்பு ஆணை மற்றும் சொத்து முடக்க மேல்முறையீடு",
      hi: "गैर-कानूनी कर निर्धारण आदेश और जब्ती अपील"
    },
    field: "Tax Law",
    outcome: {
      en: "Assessment Quashed",
      ta: "மதிப்பீடு ரத்து செய்யப்பட்டது",
      hi: "कर निर्धारण रद्द"
    },
    summary: {
      en: "Appellate challenge against arbitrary tax assessments and subsequent bank attachment orders issued by indirect tax officers. Achieved complete rollback of disputed tax demands.",
      ta: "மறைமுக வரி அதிகாரிகளால் வழங்கப்பட்ட தன்னிச்சையான வரி மதிப்பீடுகள் மற்றும் அதைத் தொடர்ந்த வங்கி கணக்கு முடக்க உத்தரவுகளுக்கு எதிரான மேல்முறையீடு. சர்ச்சைக்குரிய வரி கோரிக்கைகள் முழுமையாக திரும்பப் பெறப்பட்டன.",
      hi: "अप्रत्यक्ष कर अधिकारियों द्वारा जारी मनमाने कर आकलन और बैंक खातों को कुर्क करने के आदेश के खिलाफ अपीलीय चुनौती। विवादित कर मांगों को पूरी तरह से वापस कराया।"
    },
    detail: {
      en: "Argued before the appellate tribunal that administrative procedures violated natural justice guidelines, rendering the tax demand invalid.",
      ta: "நிர்வாக நடைமுறைகள் இயற்கை நீதி வழிகாட்டுதல்களை மீறியதால் வரி கோரிக்கை செல்லாது என்று மேல்முறையீட்டு தீர்ப்பாயத்தின் முன் வாதாடினோம்.",
      hi: "अपीलीय न्यायाधिकरण के समक्ष तर्क दिया कि प्रशासनिक प्रक्रियाएं प्राकृतिक न्याय के सिद्धांतों का उल्लंघन करती हैं, जिससे कर मांग अमान्य हो गई।"
    },
    icon: Scale
  },
  {
    title: {
      en: "Anticipatory Bail in Multi-Million Economic Offense Investigation",
      ta: "பல மில்லியன் பொருளாதார குற்ற விசாரணையில் முன்ஜாமீன்",
      hi: "आर्थिक अपराध जांच में अग्रिम जमानत"
    },
    field: "Criminal Defense",
    outcome: {
      en: "Anticipatory Bail Granted",
      ta: "முன்ஜாமீன் வழங்கப்பட்டது",
      hi: "अग्रिम जमानत मंजूर"
    },
    summary: {
      en: "Immediate defense representation for a startup Chief Financial Officer facing alleged irregularities in venture debt transactions. Secured complete police arrest immunity.",
      ta: "முக்கிய நிதித் தலைமை அதிகாரிக்கு எதிரான பொருளாதார குற்றச்சாட்டுகளில் உடனடி தற்காப்பு பிரதிநிதித்துவம். காவல்துறையினரால் கைது செய்யப்படுவதிலிருந்து முழுமையான முன்ஜாமீன் பெறப்பட்டது.",
      hi: "वेंचर डेट लेनदेन में कथित अनियमितताओं का सामना कर रहे एक स्टार्टअप मुख्य वित्तीय अधिकारी (CFO) का तत्काल बचाव प्रतिनिधित्व। पुलिस गिरफ्तारी से पूर्ण सुरक्षा सुनिश्चित की।"
    },
    detail: {
      en: "Established that the transaction was purely civil in nature, with no evidence of criminal intent or asset diversion.",
      ta: "இந்த பரிவர்த்தனை முற்றிலும் சிவில் தன்மை கொண்டது என்றும், குற்றவியல் நோக்கமோ அல்லது சொத்து திசைதிருப்பலோ இல்லை என்றும் நிறுவப்பட்டது.",
      hi: "यह स्थापित किया कि यह लेनदेन विशुद्ध रूप से नागरिक (सिविल) प्रकृति का था, जिसमें कोई आपराधिक इरादा या संपत्ति का हेरफेर नहीं था।"
    },
    icon: ShieldCheck
  },
  {
    title: {
      en: "Corporate Trademark Infringement Action",
      ta: "கார்ப்பரேட் வர்த்தக முத்திரை மீறல் வழக்கு",
      hi: "कॉर्पोरेट ट्रेडमार्क उल्लंघन कार्रवाई"
    },
    field: "Intellectual Property Rights",
    outcome: {
      en: "Permanent Injunction",
      ta: "நிரந்தர தடையுத்தரவு",
      hi: "स्थायी निषेधाज्ञा"
    },
    summary: {
      en: "Representing an e-commerce platform against competitors copying core logo marks and website layout configurations. Secured permanent injunction from High Court.",
      ta: "முக்கிய லோகோ மற்றும் வலைத்தள வடிவமைப்பை நகலெடுக்கும் போட்டியாளர்களுக்கு எதிராக மின்-வணிக தளம் ஒன்றின் சார்பாக வாதாடியது. சென்னை உயர் நீதிமன்றத்தில் இருந்து நிரந்தர தடையுத்தரவு பெறப்பட்டது.",
      hi: "मुख्य लोगो और वेबसाइट लेआउट की नकल करने वाले प्रतिस्पर्धियों के खिलाफ एक ई-कॉमर्स प्लेटफॉर्म का प्रतिनिधित्व किया। उच्च न्यायालय से स्थायी निषेधाज्ञा प्राप्त की।"
    },
    detail: {
      en: "Presented web cache metadata establishing our client's prior use and customer surveys indicating brand confusion.",
      ta: "எங்கள் வாடிக்கையாளரின் முன்னரே பயன்படுத்தியதை உறுதி செய்யும் வலைச் சேமிப்பு மெட்டாதரவு மற்றும் பிராண்ட் குழப்பத்தைக் காட்டும் நுகர்வோர் ஆய்வுகளை சமர்ப்பித்தோம்.",
      hi: "ब्रांड प्रतिष्ठा और डिजिटल परिसंपत्तियों की रक्षा के लिए कॉपीराइट कानूनों और पंजीकृत ट्रेडमार्क के स्वामित्व का उपयोग किया।"
    },
    icon: Landmark
  },
  {
    title: {
      en: "Administration Challenge Against Temple Takeover",
      ta: "கோயில் நிர்வாக பொறுப்பு ஏற்புக்கு எதிரான சவால் வழக்கு",
      hi: "मंदिर नियंत्रण के खिलाफ प्रशासनिक चुनौती"
    },
    field: "HR & CE / Temple Law",
    outcome: {
      en: "Takeover Suspended",
      ta: "பொறுப்பேற்பு நிறுத்திவைக்கப்பட்டது",
      hi: "अधिग्रहण निलंबित"
    },
    summary: {
      en: "Constitutional challenge challenging the sudden appointment of an administrative officer to oversee traditional family temple trusts.",
      ta: "பாரம்பரிய குடும்ப கோயில் அறக்கட்டளையை மேற்பார்வையிட ஒரு நிர்வாக அதிகாரியை நியமித்த அரசாணையை எதிர்த்த அரசியலமைப்புச் சவால் வழக்கு.",
      hi: "पारंपरिक पारिवारिक मंदिर ट्रस्टों की देखरेख के लिए एक प्रशासनिक अधिकारी की अचानक नियुक्ति को चुनौती देने वाली संवैधानिक याचिका।"
    },
    detail: {
      en: "Successfully argued that no prima facie evidence of mismanagement was recorded, violating statutory takeover limits.",
      ta: "தவறான நிர்வாகம் நடந்ததாக எந்தவொரு முதற்கட்ட ஆதாரமும் பதிவு செய்யப்படவில்லை என்றும், இதனால் அரசாணை சட்ட வரம்புகளை மீறுகிறது என்றும் வெற்றிகரமாக வாதாடினோம்.",
      hi: "सफलतापूर्वक तर्क दिया कि कुप्रबंधन का कोई प्रथम दृष्टया सबूत दर्ज नहीं किया गया था, जो कि वैधानिक नियंत्रण सीमाओं का उल्लंघन था।"
    },
    icon: BookOpen
  }
];

export default function CaseResults() {
  const { language } = useLanguage();
  const [selectedField, setSelectedField] = useState("All");

  const fields = [
    { key: "All", en: "All", ta: "அனைத்தும்", hi: "सभी" },
    { key: "Corporate Law", en: "Corporate Law", ta: "கார்ப்பரேட் சட்டம்", hi: "कॉर्पोरेट कानून" },
    { key: "Property Law", en: "Property Law", ta: "சொத்து சட்டம்", hi: "संपत्ति कानून" },
    { key: "Tax Law", en: "Tax Law", ta: "வரி சட்டம்", hi: "कर कानून" },
    { key: "Criminal Defense", en: "Criminal Defense", ta: "குற்றவியல் தற்காப்பு", hi: "आपराधिक बचाव" },
    { key: "Intellectual Property Rights", en: "Intellectual Property Rights", ta: "அறிவுசார் சொத்துரிமை", hi: "बौद्धिक संपदा अधिकार" },
    { key: "HR & CE / Temple Law", en: "HR & CE / Temple Law", ta: "அறநிலையத்துறை சட்டம்", hi: "देवस्थानम / मंदिर कानून" }
  ];

  const filteredCases = caseOutcomes.filter(
    (item) => selectedField === "All" || item.field === selectedField
  );

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {language === "ta" ? "முந்தைய வழக்கு முடிவுகள்" : language === "hi" ? "पिछला रिकॉर्ड" : "Track Record"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
            {language === "ta" ? "வழக்கு முடிவுகள் & வெற்றிகள்" : language === "hi" ? "मामलों के परिणाम और सफलताएं" : "Case Results & Victories"}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {language === "ta" ? "எங்கள் வாடிக்கையாளர்களுக்காக எட்டப்பட்ட சாதகமான வழக்கு முடிவுகள். தொழில்முறை நெறிமுறைகளின்படி, வாடிக்கையாளர் விவரங்கள் அநாமதேயமாக்கப்பட்டுள்ளன." : language === "hi" ? "हमारे मुवक्किलों के लिए हासिल किए गए कानूनी परिणामों की समीक्षा। पेशेवर मानकों के अनुपालन में, सभी विवरणों को अज्ञात रखा गया है।" : "A review of legal outcomes accomplished for our clients. In compliance with professional standards, all client details have been anonymized."}
          </p>
        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-12 flex gap-4 max-w-4xl mx-auto items-start text-foreground">
          <AlertCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
          <div className="text-sm text-primary">
            <h4 className="font-bold mb-1 font-heading">
              {language === "ta" ? "ஒழுங்குமுறை அறிவிப்பு & மறுப்புரை" : language === "hi" ? "नियामक सूचना और अस्वीकरण" : "Regulatory Notice & Disclaimer"}
            </h4>
            <p className="text-muted-foreground leading-relaxed text-xs">
              {language === "ta" ? "கீழே வழங்கப்பட்டுள்ள வழக்குகள் எங்கள் வழக்கறிஞர்களால் தீர்க்கப்பட்ட குறிப்பிட்ட சட்ட விவகாரங்களைப் பிரதிநிதித்துவப்படுத்துகின்றன. முந்தைய முடிவுகள் எதிர்காலத்தில் இதே போன்ற முடிவுகளுக்கு உத்தரவாதம் அளிக்காது." : language === "hi" ? "नीचे प्रस्तुत मामले हमारे भागीदारों द्वारा हल किए गए विशिष्ट कानूनी मामलों का प्रतिनिधित्व करते हैं। पिछले परिणाम भविष्य के परिणामों की गारंटी नहीं देते हैं।" : "The cases presented below represent specific legal matters resolved by our partners. Prior results do not guarantee a similar outcome. Outcome values and factual details are subject to variation depending on the specifics of each representation."}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 max-w-4xl mx-auto">
          {fields.map((f) => (
            <button
              key={f.key}
              onClick={() => setSelectedField(f.key)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                selectedField === f.key
                  ? "bg-primary text-primary-foreground shadow-md font-semibold"
                  : "bg-card hover:bg-muted text-muted-foreground border border-border"
              }`}
            >
              {language === "ta" ? f.ta : language === "hi" ? f.hi : f.en}
            </button>
          ))}
        </div>

        {/* Case Cards */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredCases.map((item, idx) => {
              const Icon = item.icon;
              const outcomeText = language === "ta" ? item.outcome.ta : language === "hi" ? item.outcome.hi : item.outcome.en;
              const titleText = language === "ta" ? item.title.ta : language === "hi" ? item.title.hi : item.title.en;
              const summaryText = language === "ta" ? item.summary.ta : language === "hi" ? item.summary.hi : item.summary.en;
              const detailText = language === "ta" ? item.detail.ta : language === "hi" ? item.detail.hi : item.detail.en;
              const fieldObj = fields.find((f) => f.key === item.field);
              const fieldText = fieldObj ? (language === "ta" ? fieldObj.ta : language === "hi" ? fieldObj.hi : fieldObj.en) : item.field;

              return (
                <div key={idx} className="bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/5 rounded-lg text-secondary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase tracking-wide">
                        {outcomeText}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      {fieldText}
                    </span>
                    <h3 className="text-xl font-bold text-primary font-heading mt-2 mb-4 leading-snug">
                      {titleText}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {summaryText}
                    </p>
                  </div>

                  <div className="bg-muted p-4 rounded-xl border border-border/40 mt-4 text-xs text-muted-foreground leading-relaxed">
                    <strong>{language === "ta" ? "வியூக சிறப்பம்சம்:" : language === "hi" ? "रणनीति मुख्य आकर्षण:" : "Strategy Highlight:"}</strong> {detailText}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-card border border-dashed border-border rounded-2xl max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg">
              {language === "ta" ? "இந்த சட்டப்பிரிவின் கீழ் வழக்குகள் எதுவும் பட்டியலிடப்படவில்லை." : language === "hi" ? "इस अभ्यास क्षेत्र के अंतर्गत कोई मामला सूचीबद्ध नहीं है।" : "No cases listed under this practice field."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
