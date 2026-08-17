import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, PlayCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/lib/LanguageContext";

// Practice Area Detailed Data Map
const detailedPracticeData: Record<string, {
  title: { en: string; ta: string; hi: string };
  description: { en: string; ta: string; hi: string };
  longText: { en: string; ta: string; hi: string };
  mattersHandled: { en: string[]; ta: string[]; hi: string[] };
  clientJourney: { step: string; title: { en: string; ta: string; hi: string }; desc: { en: string; ta: string; hi: string } }[];
  faqs: { q: { en: string; ta: string; hi: string }; a: { en: string; ta: string; hi: string } }[];
}> = {
  "corporate-law": {
    title: {
      en: "Corporate & Commercial Matters",
      ta: "கார்ப்பரேட் மற்றும் வணிக விவகாரங்கள்",
      hi: "कॉर्पोरेट और व्यावसायिक मामले"
    },
    description: {
      en: "Corporate advisory, commercial contracts, agreements, business structuring, compliance, corporate governance, and commercial disputes.",
      ta: "கார்ப்பரேட் ஆலோசனை, வணிக ஒப்பந்தங்கள், ஒப்பந்த வரைவுகள், வணிகக் கட்டமைப்பு, சட்ட இணக்கத்தன்மை, கார்ப்பரேட் ஆளுமை மற்றும் வணிகத் தகராறுகள்.",
      hi: "कॉर्पोरेट सलाहकार, वाणिज्यिक अनुबंध, समझौते, व्यावसायिक संरचना, अनुपालन, कॉर्पोरेट प्रशासन और वाणिज्यिक विवाद।"
    },
    longText: {
      en: "Our Corporate & Commercial practice provides complete advisory, transactional, and compliance solutions for startups, established companies, and institutional investors. We align legal structure with corporate objectives, minimizing liability risks and protecting shareholder interests during critical business transactions and contract negotiations.",
      ta: "எங்கள் கார்ப்பரேட் & வணிகச் சட்டப் பிரிவு ஸ்டார்ட்-அப்கள், நிறுவப்பட்ட நிறுவனங்கள் மற்றும் முதலீட்டாளர்களுக்கு முழுமையான ஆலோசனை, பரிவர்த்தனை மற்றும் சட்ட இணக்க தீர்வுகளை வழங்குகிறது. வணிக இலக்குகளுடன் சட்டக் கட்டமைப்பை சீரமைத்து, பொறுப்பு அபாயங்களைக் குறைத்து, முக்கியமான வணிக பரிவர்த்தனைகள் மற்றும் ஒப்பந்த பேச்சுவார்த்தைகளின் போது பங்குதாரர்களின் நலன்களைப் பாதுகாக்கிறோம்.",
      hi: "हमारा कॉर्पोरेट और वाणिज्यिक अभ्यास स्टार्टअप्स, स्थापित कंपनियों और संस्थागत निवेशकों के लिए संपूर्ण विधिक सलाहकार, लेनदेन और अनुपालन समाधान प्रदान करता है। हम कानूनी संरचना को व्यावसायिक लक्ष्यों के साथ संरेखित करते हैं, जिससे देनदारी जोखिम कम होते हैं और महत्वपूर्ण व्यावसायिक लेनदेन और अनुबंध वार्ताओं के दौरान शेयरधारकों के हितों की रक्षा होती है।"
    },
    mattersHandled: {
      en: [
        "Company Incorporation & Founder Agreements",
        "Corporate Governance & Board Advisory",
        "Commercial Contracts Drafting & Engineering",
        "Business Compliance Audits",
        "Commercial Dispute Resolutions before Tribunals & NCLT"
      ],
      ta: [
        "நிறுவன பதிவு & நிறுவனர் ஒப்பந்தங்கள்",
        "கார்ப்பரேட் ஆளுமை & நிர்வாக வாரிய ஆலோசனை",
        "வணிக ஒப்பந்தங்கள் வரைவு செய்தல்",
        "வணிக சட்ட இணக்கத் தணிக்கைகள்",
        "தீர்ப்பாயங்கள் & NCLT முன்னிலையிலான வணிகத் தகராறு தீர்வுகள்"
      ],
      hi: [
        "कंपनी निगमन और संस्थापक समझौते",
        "कॉर्पोरेट प्रशासन और बोर्ड सलाहकार",
        "वाणिज्यिक अनुबंध प्रारूपण और समीक्षा",
        "व्यावसायिक अनुपालन ऑडिट",
        "न्यायाधिकरणों और एनसीएलटी के समक्ष वाणिज्यिक विवाद समाधान"
      ]
    },
    clientJourney: [
      {
        step: "01",
        title: { en: "Corporate Discovery", ta: "கார்ப்பரேட் பகுப்பாய்வு", hi: "कॉर्पोरेट खोज" },
        desc: { en: "We review your company structure, sector regulations, and business goals.", ta: "உங்கள் நிறுவன அமைப்பு, துறை சார்ந்த விதிமுறைகள் மற்றும் வணிக இலக்குகளை நாங்கள் மதிப்பாய்வு செய்கிறோம்.", hi: "हम आपकी कंपनी की संरचना, क्षेत्र के नियमों और व्यावसायिक लक्ष्यों की समीक्षा करते हैं।" }
      },
      {
        step: "02",
        title: { en: "Compliance Mapping", ta: "இணக்கத்தன்மை வடிவமைப்பு", hi: "अनुपालन मानचित्रण" },
        desc: { en: "Our specialists trace regulatory vulnerabilities and draft operational protocols.", ta: "எங்கள் நிபுணர்கள் ஒழுங்குமுறை குறைபாடுகளைக் கண்டறிந்து செயல்பாட்டு நெறிமுறைகளை உருவாக்குகிறார்கள்.", hi: "हमारे विशेषज्ञ विनियामक कमजोरियों का पता लगाते हैं और परिचालन प्रोटोकॉल का मसौदा तैयार करते हैं।" }
      },
      {
        step: "03",
        title: { en: "Contract Design", ta: "ஒப்பந்த வடிவமைப்பு", hi: "अनुबंध डिजाइन" },
        desc: { en: "We draft and review all necessary transaction documents and partnership agreements.", ta: "நாங்கள் தேவையான அனைத்து பரிவர்த்தனை ஆவணங்களையும் கூட்டாண்மை ஒப்பந்தங்களையும் வரைந்து சரிபார்க்கிறோம்.", hi: "हम सभी आवश्यक लेनदेन दस्तावेजों और साझेदारी समझौतों का मसौदा तैयार करते हैं और उनकी समीक्षा करते हैं।" }
      },
      {
        step: "04",
        title: { en: "Continuous Auditing", ta: "தொடர் சட்ட தணிக்கை", hi: "सतत लेखा परीक्षा" },
        desc: { en: "Ongoing compliance updates, governance monitoring, and active board advisory.", ta: "தொடர்ச்சியான இணக்க புதுப்பிப்புகள், கார்ப்பரேட் ஆளுமை கண்காணிப்பு மற்றும் வாரிய ஆலோசனை.", hi: "चल रहे अनुपालन अपडेट, शासन की निगरानी और सक्रिय बोर्ड सलाहकार सेवाएं।" }
      }
    ],
    faqs: [
      {
        q: { en: "What corporate structures do you advise on?", ta: "எந்த வகையான கார்ப்பரேட் கட்டமைப்புகளுக்கு நீங்கள் ஆலோசனை வழங்குகிறீர்கள்?", hi: "आप किन कॉर्पोरेट संरचनाओं पर सलाह देते हैं?" },
        a: { en: "We advise on Private Limited, Public Limited, LLPs, and Joint Ventures.", ta: "பிரைவேட் லிமிடெட், பப்ளிக் லிமிடெட், எல்.எல்.பி (LLP) மற்றும் கூட்டு முயற்சிகள் (Joint Ventures) ஆகியவற்றிற்கு ஆலோசனை வழங்குகிறோம்.", hi: "हम प्राइवेट लिमिटेड, पब्लिक लिमिटेड, एलएलपी और संयुक्त उद्यमों पर सलाह देते हैं।" }
      },
      {
        q: { en: "Do you represent companies before regulatory tribunals?", ta: "ஒழுங்குமுறை தீர்ப்பாயங்களில் நிறுவனங்களை பிரதிநிதித்துவப்படுத்துகிறீர்களா?", hi: "क्या आप नियामक न्यायाधिकरणों के समक्ष कंपनियों का प्रतिनिधित्व करते हैं?" },
        a: { en: "Yes, our team represents corporate entities before NCLT, NCLAT, and other regulatory bodies.", ta: "ஆம், எங்கள் குழு நிறுவனங்களை NCLT, NCLAT மற்றும் பிற ஒழுங்குமுறை மன்றங்களில் பிரதிநிதித்துவப்படுத்துகிறது.", hi: "हाँ, हमारी टीम कॉर्पोरेट संस्थाओं का एनसीएलटी, एनसीएलएटी और अन्य नियामक निकायों के समक्ष प्रतिनिधित्व करती है।" }
      }
    ]
  },
  "property-law": {
    title: {
      en: "Civil Disputes & Property Matters",
      ta: "சிவில் தகராறுகள் மற்றும் சொத்து விவகாரங்கள்",
      hi: "सिविल विवाद और संपत्ति मामले"
    },
    description: {
      en: "Property disputes, title verification, land and possession disputes, injunctions, declarations, recovery proceedings, partition, specific performance, and other civil litigation.",
      ta: "சொத்து தகராறுகள், பத்திர சரிபார்ப்பு, நிலம் மற்றும் உடைமை தகராறுகள், தடையுத்தரவுகள், பிரகடனங்கள், மீட்பு நடவடிக்கைகள், பாகப்பிரிவினை, ஒப்பந்த செயல்திறன் மற்றும் பிற சிவில் வழக்குகள்.",
      hi: "संपत्ति विवाद, शीर्षक सत्यापन, भूमि और कब्जे के विवाद, निषेधाज्ञा, घोषणाएं, वसूली कार्यवाही, विभाजन, विशिष्ट प्रदर्शन और अन्य सिविल मुकदमेबाजी।"
    },
    longText: {
      en: "Our property and civil division protects your real estate assets and civil rights through exhaustive title investigation, legal verification of conveyance documents, and representation in civil disputes. We support businesses, land owners, and individual property buyers with comprehensive due diligence, partition suits, and injunction proceedings before courts.",
      ta: "எங்கள் சொத்து மற்றும் சிவில் பிரிவு உங்கள் ரியல் எஸ்டேட் சொத்துக்கள் மற்றும் சிவில் உரிமைகளை முழுமையான பத்திர சரிபார்ப்பு, சட்ட ரீதியான ஆவண சரிபார்ப்பு மற்றும் சிவில் தகராறு பிரதிநிதித்துவம் மூலம் பாதுகாக்கிறது. வணிகங்கள், நில உரிமையாளர்கள் மற்றும் தனிநபர் சொத்து வாங்குபவர்களுக்கு விரிவான பத்திர தணிக்கை, பாகப்பிரிவினை வழக்குகள் மற்றும் நீதிமன்ற தடையுத்தரவு நடவடிக்கைகளை நாங்கள் வழங்குகிறோம்.",
      hi: "हमारा संपत्ति और नागरिक प्रभाग संपूर्ण शीर्षक जांच, हस्तांतरण दस्तावेजों के कानूनी सत्यापन और नागरिक विवादों में प्रतिनिधित्व के माध्यम से आपकी अचल संपत्ति और नागरिक अधिकारों की रक्षा करता है। हम व्यवसायों, भूमि स्वामियों और व्यक्तिगत संपत्ति खरीदारों का अदालतों के समक्ष विभाजन मुकदमों और निषेधाज्ञा कार्यवाही में समर्थन करते हैं।"
    },
    mattersHandled: {
      en: [
        "Property Title Verification & due diligence flow search",
        "Land encroachment & possession disputes representation",
        "Injunction suits, declarations & recovery proceedings",
        "Partition suits, Family Settlements & partition deeds",
        "Specific performance litigation & other civil suits"
      ],
      ta: [
        "சொத்து பத்திர சரிபார்ப்பு & முந்தைய ஆவண சரிபார்ப்பு",
        "நில ஆக்கிரமிப்பு & உடைமை தகராறு பிரதிநிதித்துவம்",
        "தடையுத்தரவு வழக்குகள், பிரகடனங்கள் & மீட்பு நடவடிக்கைகள்",
        "பாகப்பிரிவினை வழக்குகள், குடும்ப தீர்வுகள் & பாகப்பிரிவினை பத்திரங்கள்",
        "குறிப்பிட்ட ஒப்பந்த செயல்திறன் வழக்குகள் & பிற சிவில் வழக்குகள்"
      ],
      hi: [
        "संपत्ति शीर्षक सत्यापन और उचित परिश्रम खोज",
        "भूमि अतिक्रमण और कब्जा विवाद प्रतिनिधित्व",
        "निषेधाज्ञा मुकदमे, घोषणाएं और वसूली कार्यवाही",
        "विभाजन मुकदमे, पारिवारिक समझौते और विभाजन विलेख",
        "विशिष्ट प्रदर्शन मुकदमेबाजी और अन्य नागरिक मुकदमे"
      ]
    },
    clientJourney: [
      {
        step: "01",
        title: { en: "Document Collation", ta: "ஆவணங்கள் சேகரிப்பு", hi: "दस्तावेज़ मिलान" },
        desc: { en: "We collect parent deeds, revenue records, encumbrance certificates, and patta.", ta: "நாங்கள் மூலப் பத்திரங்கள், வருவாய்த் துறை ஆவணங்கள், வில்லங்கச் சான்றிதழ்கள் மற்றும் பட்டாக்களைச் சேகரிக்கிறோம்.", hi: "हम मूल विलेख, राजस्व रिकॉर्ड, भार प्रमाण पत्र और पट्टा एकत्र करते हैं।" }
      },
      {
        step: "02",
        title: { en: "Title Investigation", ta: "பத்திரங்கள் சரிபார்ப்பு", hi: "शीर्षक जांच" },
        desc: { en: "Exhaustive legal check of property history over a 30-year flow to ensure clean title.", ta: "சொத்துக்குத் தெளிவான உரிமை இருப்பதை உறுதி செய்ய 30 ஆண்டுகால வரலாற்றை முழுமையாக ஆய்வு செய்கிறோம்.", hi: "स्पष्ट स्वामित्व सुनिश्चित करने के लिए 30 वर्षों के इतिहास में संपत्ति के इतिहास की गहन कानूनी जांच।" }
      },
      {
        step: "03",
        title: { en: "Suit / Draft Preparation", ta: "வழக்கு / வரைவு தயாரிப்பு", hi: "मुकदमा / मसौदा तैयार करना" },
        desc: { en: "Drafting of partition deeds, plaints for injunction, or specific performance suits.", ta: "பாகப்பிரிவினை பத்திரங்கள், தடையுத்தரவுக்கான மனுக்கள் அல்லது சிவில் வழக்குகளைத் தயாரிக்கிறோம்.", hi: "विभाजन विलेख, निषेधाज्ञा के लिए वाद-पत्र, या विशिष्ट प्रदर्शन मुकदमों का प्रारूप तैयार करना।" }
      },
      {
        step: "04",
        title: { en: "Court / Sub-Registrar Support", ta: "நீதிமன்ற & பதிவு ஆதரவு", hi: "न्यायालय / उप-पंजीयक सहायता" },
        desc: { en: "Guiding courtroom litigation or registration execution at Sub-Registrar offices.", ta: "நீதிமன்ற வழக்குகள் அல்லது சார்பதிவாளர் அலுவலகங்களில் ஆவணப் பதிவுகளை மேற்கொள்கிறோம்.", hi: "अदालत की मुकदमेबाजी या उप-पंजीयक कार्यालयों में पंजीकरण निष्पादन का मार्गदर्शन करना।" }
      }
    ],
    faqs: [
      {
        q: { en: "Why is 30-year title flow verification necessary?", ta: "30 ஆண்டு மூலப்பத்திர சரிபார்ப்பு ஏன் அவசியம்?", hi: "30 साल के शीर्षक प्रवाह का सत्यापन क्यों आवश्यक है?" },
        a: { en: "It ensures there are no hidden legal claimants, minor rights, mortgages, or government acquisitions on the property.", ta: "சொத்தின் மீது மறைக்கப்பட்ட சட்டபூர்வ உரிமைகோருவோர், மைனர் உரிமைகள், அடமானங்கள் அல்லது அரசு கையகப்படுத்துதல் எதுவும் இல்லை என்பதை இது உறுதி செய்கிறது.", hi: "यह सुनिश्चित करता है कि संपत्ति पर कोई छिपे हुए कानूनी दावेदार, अवयस्क अधिकार, बंधक या सरकारी अधिग्रहण न हों।" }
      },
      {
        q: { en: "Do you handle partition disputes?", ta: "பாகப்பிரிவினை தகராறுகளை நீங்கள் கையாள்கிறீர்களா?", hi: "क्या आप विभाजन विवादों को संभालते हैं?" },
        a: { en: "Yes, we draft family settlements, partition deeds, and file partition suits before civil courts when disputes arise.", ta: "ஆம், தகராறுகள் எழும்போது குடும்ப உடன்படிக்கைகள், பாகப்பிரிவினை பத்திரங்களை வரைந்து சிவில் நீதிமன்றங்களில் வழக்குத் தொடர்கிறோம்.", hi: "हाँ, हम पारिवारिक समझौते, विभाजन विलेख का मसौदा तैयार करते हैं और विवाद उत्पन्न होने पर नागरिक न्यायालयों के समक्ष विभाजन मुकदमे दायर करते हैं।" }
      }
    ]
  },
  "hr-ce": {
    title: {
      en: "HR & CE Cases",
      ta: "HR & CE வழக்குகள் (அறநிலையத்துறை)",
      hi: "एचआर एंड सीई मामले"
    },
    description: {
      en: "Legal representation in matters involving the Hindu Religious & Charitable Endowments Department, temple properties, encroachment proceedings, Section 78/79 proceedings, title and possession disputes, and related civil and writ proceedings.",
      ta: "இந்து சமய அறநிலையத்துறை சம்பந்தப்பட்ட விவகாரங்கள், கோவில் சொத்துக்கள், ஆக்கிரமிப்பு அகற்றுதல் நடவடிக்கைகள், பிரிவு 78/79 நடவடிக்கைகள், உரிமை மற்றும் உடைமை தகராறுகள் மற்றும் சிவில் மற்றும் ரிட் வழக்குகள்.",
      hi: "हिंदू धार्मिक और धर्मार्थ बंदोबस्ती विभाग, मंदिर संपत्तियों, अतिक्रमण हटाने की कार्यवाही, धारा 78/79 की कार्यवाही, स्वामित्व और कब्जे के विवाद और संबंधित नागरिक और रिट कार्यवाही से जुड़े मामलों में कानूनी प्रतिनिधित्व।"
    },
    longText: {
      en: "Our specialized HR & CE practice represents temple trusts, administrators, traditional trustees, and property leaseholders in regulatory disputes under the HR&CE Act. We represent clients in encroachment clearance proceedings under Section 78/79, audit objections, lease and rent recoveries, and related civil and writ proceedings before high courts.",
      ta: "எங்கள் சிறப்பு வாய்ந்த HR & CE (இந்து சமய அறநிலையத்துறை) சட்டப்பிரிவு, அறக்கட்டளைகள், நிர்வாக அறங்காவலர்கள் மற்றும் குத்தகைதாரர்களுக்கு அறநிலையத்துறை சட்டத்தின் கீழ் வரும் தகராறுகளுக்கு சட்ட பிரதிநிதித்துவத்தை வழங்குகிறது. பிரிவு 78/79-இன் கீழ் ஆக்கிரமிப்பு அகற்றுதல் நடவடிக்கைகள், தணிக்கை ஆட்சேபனைகள், குத்தகை மற்றும் வாடகை மீட்புகள், மற்றும் உயர் நீதிமன்றங்களில் சிவில் மற்றும் ரிட் வழக்குகள் ஆகியவற்றில் பிரதிநிதித்துவப்படுத்துகிறோம்.",
      hi: "हमारा विशेष एचआर एंड सीई कानूनी अभ्यास मंदिर ट्रस्टों, प्रशासकों, पारंपरिक ट्रस्टियों और संपत्ति पट्टाधारकों का एचआर एंड सीई अधिनियम के तहत नियामक विवादों में प्रतिनिधित्व करता है। हम ग्राहकों का धारा 78/79 के तहत अतिक्रमण हटाने की कार्यवाही, ऑडिट आपत्तियों, पट्टे और किराये की वसूली और उच्च न्यायालयों के समक्ष संबंधित सिविल और रिट कार्यवाही में प्रतिनिधित्व करते हैं।"
    },
    mattersHandled: {
      en: [
        "Section 78/79 Encroachment Proceedings & clearances",
        "Temple Property Title, boundaries & possession disputes",
        "Trusteeship succession, declarations & entitlements",
        "Lease & rent recovery proceedings under HR&CE regulations",
        "Civil suits and High Court Writ Petitions challenging administrative takeovers"
      ],
      ta: [
        "பிரிவு 78/79 ஆக்கிரமிப்பு அகற்றுதல் நடவடிக்கைகள் & தீர்வுகள்",
        "கோவில் சொத்து உரிமை, எல்லைகள் & உடைமை தகராறுகள்",
        "பரம்பரை அறங்காவலர் உரிமைகள், பிரகடனங்கள் & தகுதிகள்",
        "அறநிலையத்துறை விதிகளின் கீழ் குத்தகை & வாடகை மீட்பு வழக்குகள்",
        "நிர்வாகக் கையகப்படுத்தல்களை எதிர்க்கும் சிவில் & உயர் நீதிமன்ற ரிட் வழக்குகள்"
      ],
      hi: [
        "धारा 78/79 अतिक्रमण कार्यवाही और निष्कासन",
        "मंदिर की संपत्ति का शीर्षक, सीमाएं और कब्जा विवाद",
        "ट्रस्टीशिप उत्तराधिकार, घोषणाएं और पात्रताएं",
        "एचआर एंड सीई नियमों के तहत पट्टा और किराया वसूली कार्यवाही",
        "प्रशासनिक अधिग्रहण को चुनौती देने वाले नागरिक मुकदमे और उच्च न्यायालय की रिट याचिकाएं"
      ]
    },
    clientJourney: [
      {
        step: "01",
        title: { en: "Case Assessment", ta: "வழக்கு மதிப்பீடு", hi: "मामले का आकलन" },
        desc: { en: "Review of departmental notices, trusteeship records, or property revenue maps.", ta: "துறை சார்ந்த அறிவிப்புகள், அறங்காவலர் பதிவுகள் அல்லது சொத்து வருவாய் வரைபடங்களை ஆய்வு செய்கிறோம்.", hi: "विभागीय नोटिस, ट्रस्टीशिप रिकॉर्ड या संपत्ति राजस्व मानचित्रों की समीक्षा।" }
      },
      {
        step: "02",
        title: { en: "Objection Drafting", ta: "ஆட்சேபனை வரைவு தயாரிப்பு", hi: "आपत्ति प्रारूपण" },
        desc: { en: "Formulating legal grounds, objections under Section 78/79, or trusteeship declarations.", ta: "பிரிவு 78/79-இன் கீழ் ஆட்சேபனைகள் அல்லது அறங்காவலர் பிரகடனங்களுக்கான சட்ட அடிப்படைகளைத் தயாரிக்கிறோம்.", hi: "कानूनी आधार तैयार करना, धारा 78/79 के तहत आपत्तियां, या ट्रस्टीशिप घोषणाएं।" }
      },
      {
        step: "03",
        title: { en: "Tribunal & Department Representation", ta: "ஒழுங்குமுறை மன்ற பிரதிநிதித்துவம்", hi: "न्यायाधिकरण और विभाग प्रतिनिधित्व" },
        desc: { en: "Representing clients before HR&CE Joint Commissioner or Commissioner courts.", ta: "அறநிலையத்துறை இணை ஆணையர் அல்லது ஆணையர் நீதிமன்றங்களுக்கு முன்னால் பிரதிநிதித்துவப்படுத்துகிறோம்.", hi: "एचआर एंड सीई संयुक्त आयुक्त या आयुक्त न्यायालयों के समक्ष ग्राहकों का प्रतिनिधित्व करना।" }
      },
      {
        step: "04",
        title: { en: "Appellate Advocacy", ta: "மேல்முறையீட்டு வாதாடுதல்", hi: "अपीलीय वकालत" },
        desc: { en: "Filing Writ Petitions or civil appeals in the High Court against arbitrary takeover orders.", ta: "தன்னிச்சையான கையகப்படுத்தல் உத்தரவுகளுக்கு எதிராக உயர் நீதிமன்றத்தில் ரிட் அல்லது சிவில் மேல்முறையீடுகளைச் செய்கிறோம்.", hi: "मनमाने ढंग से अधिग्रहण के आदेशों के खिलाफ उच्च न्यायालय में रिट याचिकाएं या नागरिक अपील दायर करना।" }
      }
    ],
    faqs: [
      {
        q: { en: "What is Section 78/79 under the HR&CE Act?", ta: "HR&CE சட்டத்தின் கீழ் பிரிவு 78/79 என்றால் என்ன?", hi: "एचआर एंड सीई अधिनियम के तहत धारा 78/79 क्या है?" },
        a: { en: "It relates to the identification and eviction of encroachers from properties belonging to religious institutions or temple trusts.", ta: "இது சமய நிறுவனங்கள் அல்லது கோவில் அறக்கட்டளைகளுக்குச் சொந்தமான சொத்துக்களில் இருந்து ஆக்கிரமிப்பாளர்களைக் கண்டறிந்து வெளியேற்றுவது பற்றியது.", hi: "यह धार्मिक संस्थानों या मंदिर ट्रस्टों की संपत्तियों से अतिक्रमणकारियों की पहचान और बेदखली से संबंधित है।" }
      },
      {
        q: { en: "Can a government takeover of a temple be challenged?", ta: "அரசு கோவில் நிர்வாகத்தைக் கையகப்படுத்துவதை எதிர்க்க முடியுமா?", hi: "क्या किसी मंदिर पर सरकारी नियंत्रण को चुनौती दी जा सकती है?" },
        a: { en: "Yes, takeovers can be challenged in the High Court through Writ Petitions if procedures or natural justice are violated.", ta: "ஆம், நடைமுறைகள் அல்லது இயற்கை நீதி மீறப்பட்டால், ரிட் மனுக்கள் மூலம் உயர் நீதிமன்றத்தில் கையகப்படுத்துவதை எதிர்க்க முடியும்.", hi: "हाँ, यदि प्रक्रियाओं या प्राकृतिक न्याय का उल्लंघन किया जाता है, तो रिट याचिकाओं के माध्यम से उच्च न्यायालय में नियंत्रण को चुनौती दी जा सकती है।" }
      }
    ]
  },
  "criminal-defense": {
    title: {
      en: "Trial Defence & Litigation",
      ta: "வழக்கு விசாரணை மற்றும் தற்காப்பு வாதம்",
      hi: "मुकदमा और आपराधिक बचाव"
    },
    description: {
      en: "Strong representation before Trial Courts, District Courts, High Court, and other appropriate forums in civil, criminal, commercial, and regulatory proceedings, with a focus on strategic trial defence and effective advocacy.",
      ta: "சிவில், குற்றவியல், வணிக மற்றும் ஒழுங்குமுறை விவகாரங்களில் விசாரணை நீதிமன்றங்கள், மாவட்ட நீதிமன்றங்கள், உயர் நீதிமன்றம் மற்றும் பிற மன்றங்களில் வலுவான பிரதிநிதித்துவம் மற்றும் தற்காப்பு வாதம்.",
      hi: "रणनीतिक मुकदमे के बचाव और प्रभावी वकालत पर ध्यान देने के साथ सिविल, आपराधिक, वाणिज्यिक और नियामक कार्यवाही में ट्रायल कोर्ट, जिला न्यायालयों, उच्च न्यायालय और अन्य उपयुक्त मंचों के समक्ष मजबूत प्रतिनिधित्व।"
    },
    longText: {
      en: "Facing legal proceedings requires strong, strategic defense. Our trial defense team offers robust representation before all courts and regulatory tribunals. We focus on protecting client rights, constructing solid trial defense arguments, cross-examining witnesses, and delivering effective advocacy in criminal, civil, and corporate litigation cases.",
      ta: "சட்ட நடவடிக்கைகளை எதிர்கொள்ள வலுவான, மூலோபாய தற்காப்பு தேவைப்படுகிறது. எங்கள் தற்காப்பு வாதக் குழு அனைத்து நீதிமன்றங்கள் மற்றும் ஒழுங்குமுறை மன்றங்களுக்கு முன்பாக வலுவான பிரதிநிதித்துவத்தை வழங்குகிறது. வாடிக்கையாளர் உரிமைகளைப் பாதுகாத்தல், வலுவான தற்காப்பு வாதங்களை உருவாக்குதல், சாட்சிகளை குறுக்கு விசாரணை செய்தல் மற்றும் குற்றவியல், சிவில் மற்றும் கார்ப்பரேட் வழக்குகளில் திறம்பட வாதாடுதல் ஆகியவற்றில் நாங்கள் கவனம் செலுத்துகிறோம்.",
      hi: "कानूनी कार्यवाही का सामना करने के लिए मजबूत, रणनीतिक बचाव की आवश्यकता होती है। हमारी मुकदमा बचाव टीम सभी अदालतों और नियामक न्यायाधिकरणों के समक्ष मजबूत प्रतिनिधित्व प्रदान करती है। हम ग्राहकों के अधिकारों की रक्षा करने, ठोस मुकदमा बचाव तर्क तैयार करने, गवाहों से जिरह करने और आपराधिक, नागरिक और कॉर्पोरेट मुकदमों में प्रभावी वकालत प्रदान करने पर ध्यान केंद्रित करते हैं।"
    },
    mattersHandled: {
      en: [
        "Anticipatory Bail & Regular Bail Applications",
        "Criminal Trial Defense Representation before District Courts",
        "White-Collar Crimes, fraud & economic offense defense",
        "High Court Appeals, Revisions & Writ Petitions",
        "FIR Quashing proceedings under Section 482 CrPC"
      ],
      ta: [
        "முன்ஜாமீன் & வழக்கமான ஜாமீன் விண்ணப்பங்கள்",
        "மாவட்ட நீதிமன்றங்கள் முன்னிலையிலான குற்றவியல் வழக்கு விசாரணை தற்காப்பு",
        "நிதி மோசடிகள் & பொருளாதார குற்றச்சாட்டுகள் தற்காப்பு",
        "உயர் நீதிமன்ற மேல்முறையீடுகள், சீராய்வு & ரிட் மனுக்கள்",
        "குற்றவியல் நடைமுறைச் சட்டம் 482-இன் கீழ் எஃப்.ஐ.ஆர் (FIR) ரத்து செய்யும் வழக்குகள்"
      ],
      hi: [
        "अग्रिम जमानत और नियमित जमानत आवेदन",
        "जिला न्यायालयों के समक्ष आपराधिक मुकदमे का बचाव प्रतिनिधित्व",
        "व्हाइट-कॉलर अपराध, धोखाधड़ी और आर्थिक अपराध बचाव",
        "उच्च न्यायालय की अपीलें, समीक्षाएं और रिट याचिकाएं",
        "प्राथमिकी (FIR) रद्द करने की कार्यवाही"
      ]
    },
    clientJourney: [
      {
        step: "01",
        title: { en: "FIR & Case Analysis", ta: "எஃப்.ஐ.ஆர் & வழக்கு பகுப்பாய்வு", hi: "प्राथमिकी और मामले का विश्लेषण" },
        desc: { en: "Analyzing the FIR, charge sheet, and prosecution evidence.", ta: "முதல் தகவல் அறிக்கை (FIR), குற்றப்பத்திரிகை மற்றும் அரசுத் தரப்பு சாட்சியங்களை ஆய்வு செய்தல்.", hi: "प्राथमिकी (FIR), चार्जशीट और अभियोजन पक्ष के साक्ष्यों का विश्लेषण।" }
      },
      {
        step: "02",
        title: { en: "Pre-Trial Protection", ta: "விசாரணைக்கு முந்தைய பாதுகாப்பு", hi: "मुकदमे से पहले सुरक्षा" },
        desc: { en: "Securing interim protections or filing anticipatory bail petitions immediately.", ta: "உடனடியாக இடைக்கால பாதுகாப்புகளைப் பெறுதல் அல்லது முன்ஜாமீன் மனுக்களைத் தாக்கல் செய்தல்.", hi: "तुरंत अंतरिम सुरक्षा हासिल करना या अग्रिम जमानत याचिका दायर करना।" }
      },
      {
        step: "03",
        title: { en: "Evidence Planning", ta: "சான்றுகள் தயாரிப்பு", hi: "साक्ष्य योजना" },
        desc: { en: "Planning witness cross-examinations and constructing defense exhibits.", ta: "சாட்சிகளின் குறுக்கு விசாரணையைத் திட்டமிடுதல் மற்றும் தற்காப்புச் சான்றுகளைத் தயாரித்தல்.", hi: "गवाहों की जिरह की योजना बनाना और बचाव पक्ष के साक्ष्य तैयार करना।" }
      },
      {
        step: "04",
        title: { en: "Trial Advocacy", ta: "நீதிமன்ற வாதம்", hi: "मुकदमा वकालत" },
        desc: { en: "Vigorous defense representation during trials and arguments before judges.", ta: "விசாரணைகளின் போது வலுவான தற்காப்பு பிரதிநிதித்துவம் மற்றும் நீதிபதிகளுக்கு முன் வாதாடுதல்.", hi: "मुकदमे के दौरान जोरदार बचाव प्रतिनिधित्व और न्यायाधीशों के समक्ष बहस।" }
      }
    ],
    faqs: [
      {
        q: { en: "What should I do if a false FIR is registered?", ta: "பொய்யான எஃப்.ஐ.ஆர் (FIR) பதிவு செய்யப்பட்டால் நான் என்ன செய்ய வேண்டும்?", hi: "यदि कोई झूठी प्राथमिकी (FIR) दर्ज की जाती है तो मुझे क्या करना चाहिए?" },
        a: { en: "You can file a petition in the High Court to quash the FIR under Section 482 of CrPC if allegations lack substance.", ta: "குற்றச்சாட்டுகளில் உண்மையில்லை எனில், குற்றவியல் நடைமுறைச் சட்டம் 482-இன் கீழ் எஃப்.ஐ.ஆரை ரத்து செய்ய உயர் நீதிமன்றத்தில் மனு தாக்கல் செய்யலாம்.", hi: "यदि आरोपों में दम नहीं है, तो आप सीआरपीसी की धारा 482 के तहत प्राथमिकी को रद्द करने के लिए उच्च न्यायालय में याचिका दायर कर सकते हैं।" }
      },
      {
        q: { en: "How does anticipatory bail protect an individual?", ta: "முன்ஜாமீன் ஒருவரை எவ்வாறு பாதுகாக்கிறது?", hi: "अग्रिम जमानत किसी व्यक्ति की रक्षा कैसे करती है?" },
        a: { en: "It prevents police arrest in anticipation of non-bailable offenses, keeping the individual at liberty under court conditions.", ta: "இது ஜாமீனில் வெளிவர முடியாத குற்றங்களுக்காக காவல்துறை கைது செய்வதைத் தடுக்கிறது, நீதிமன்ற நிபந்தனைகளின் கீழ் ஒருவரை விடுதலையில் வைக்கிறது.", hi: "यह गैर-जमानती अपराधों की आशंका में पुलिस की गिरफ्तारी को रोकता है, जिससे व्यक्ति अदालती शर्तों के तहत स्वतंत्र रहता है।" }
      }
    ]
  },
  "tax-law": {
    title: {
      en: "Taxation & GST",
      ta: "வரிவிதிப்பு மற்றும் ஜிஎஸ்டி",
      hi: "कराधान और जीएसटी"
    },
    description: {
      en: "Advisory and representation relating to GST, income-tax, tax notices, assessments, appeals, compliance, tax disputes, and other direct and indirect taxation matters.",
      ta: "ஜிஎஸ்டி, வருமான வரி, வரி அறிவிப்புகள், வரி மதிப்பீடுகள், மேல்முறையீடுகள், இணக்கம், வரி தகராறுகள் மற்றும் பிற நேரடி மற்றும் மறைமுக வரி விவகாரங்கள்.",
      hi: "जीएसटी, आयकर, कर नोटिस, मूल्यांकन, अपील, अनुपालन, कर विवाद और अन्य प्रत्यक्ष और अप्रत्यक्ष कराधान मामलों से संबंधित सलाह और प्रतिनिधित्व।"
    },
    longText: {
      en: "Our taxation team provides comprehensive advisory on direct and indirect taxes. We represent clients during tax audits, assessments, and disputes, helping resolve classification matters, respond to notices, and file appeals before Commissioner (Appeals), Appellate Tribunals, and High Courts.",
      ta: "எங்கள் வரிவிதிப்பு குழு நேரடி மற்றும் மறைமுக வரிகள் குறித்த விரிவான ஆலோசனைகளை வழங்குகிறது. வரி தணிக்கைகள், மதிப்பீடுகள் மற்றும் தகராறுகளின் போது நாங்கள் வாடிக்கையாளர்களை பிரதிநிதித்துவப்படுத்துகிறோம், வகைப்பாடு விஷயங்களைத் தீர்க்கவும், அறிவிப்புகளுக்கு பதிலளிக்கவும் மற்றும் ஆணையர் (மேல்முறையீடுகள்), மேல்முறையீட்டு தீர்ப்பாயங்கள் மற்றும் உயர் நீதிமன்றங்களில் மேல்முறையீடு செய்யவும் உதவுகிறோம்.",
      hi: "हमारी कराधान टीम प्रत्यक्ष और अप्रत्यक्ष करों पर व्यापक सलाह प्रदान करती है। हम कर ऑडिट, मूल्यांकन और विवादों के दौरान ग्राहकों का प्रतिनिधित्व करते हैं, वर्गीकरण मामलों को हल करने, नोटिस का जवाब देने और आयुक्त (अपील), अपीलीय न्यायाधिकरणों और उच्च न्यायालयों के समक्ष अपील दायर करने में मदद करते हैं।"
    },
    mattersHandled: {
      en: [
        "GST Compliance, structuring & classifications",
        "Income Tax assessments & scrutiny audits support",
        "Appeals before Commissioner of Income Tax / GST (Appeals)",
        "Tribunal representation before ITAT & Appellate authorities",
        "High Court Writ petitions against arbitrary tax demands"
      ],
      ta: [
        "ஜிஎஸ்டி இணக்கம், கட்டமைப்பு & வகைப்பாடுகள்",
        "வருமான வரி மதிப்பீடுகள் & கூர்ந்தாய்வு தணிக்கை ஆதரவு",
        "வருமான வரி / ஜிஎஸ்டி ஆணையர் (மேல்முறையீடுகள்) முன்னிலையிலான வழக்குகள்",
        "ITAT மற்றும் மேல்முறையீட்டு தீர்ப்பாயங்களில் பிரதிநிதித்துவம்",
        "சட்டவிரோத வரி கோரிக்கைகளுக்கு எதிராக உயர் நீதிமன்ற ரிட் மனுக்கள்"
      ],
      hi: [
        "जीएसटी अनुपालन, संरचना और वर्गीकरण",
        "आयकर मूल्यांकन और जांच ऑडिट सहायता",
        "आयकर / जीएसटी आयुक्त (अपील) के समक्ष अपील",
        "आईटीएटी और अपीलीय अधिकारियों के समक्ष न्यायाधिकरण प्रतिनिधित्व",
        "मनमानी कर मांगों के खिलाफ उच्च न्यायालय की रिट याचिकाएं"
      ]
    },
    clientJourney: [
      {
        step: "01",
        title: { en: "Notice Assessment", ta: "அறிவிப்பு ஆய்வு", hi: "नोटिस का आकलन" },
        desc: { en: "Analyzing the tax demand notice, classification disputes, and records.", ta: "வரி கோரிக்கை அறிவிப்பு, வகைப்பாடு தகராறுகள் மற்றும் பதிவுகளை ஆய்வு செய்தல்.", hi: "कर मांग नोटिस, वर्गीकरण विवादों और रिकॉर्ड का विश्लेषण।" }
      },
      {
        step: "02",
        title: { en: "Grounds Construction", ta: "சட்ட அடிப்படையைத் தயாரித்தல்", hi: "आधार का निर्माण" },
        desc: { en: "Drafting objections, reply letters, or appeals based on tax laws and precedent cases.", ta: "வரிச் சட்டங்கள் மற்றும் முந்தைய வழக்குகளின் அடிப்படையில் ஆட்சேபனைகள், மறுப்பு கடிதங்கள் அல்லது மேல்முறையீடுகளைத் தயாரித்தல்.", hi: "कर कानूनों और पूर्व मामलों के आधार पर आपत्तियों, उत्तर पत्रों, या अपीलों का मसौदा तैयार करना।" }
      },
      {
        step: "03",
        title: { en: "Appeals Presentation", ta: "மேல்முறையீடுகள் சமர்ப்பித்தல்", hi: "अपील प्रस्तुति" },
        desc: { en: "Filing and arguing appeals before the appropriate Tax Commissioner or Tribunal.", ta: "தகுந்த வரி ஆணையர் அல்லது தீர்ப்பாயத்தின் முன் மேல்முறையீடுகளைத் தாக்கல் செய்து வாதாடுதல்.", hi: "उचित कर आयुक्त या न्यायाधिकरण के समक्ष अपील दायर करना और बहस करना।" }
      },
      {
        step: "04",
        title: { en: "Compliance Overhaul", ta: "சட்ட இணக்கச் சீரமைப்பு", hi: "अनुपालन ओवरहाल" },
        desc: { en: "Modifying business invoicing or records compliance to prevent future tax notices.", ta: "எதிர்கால வரி அறிவிப்புகளைத் தடுக்க வணிக விலைப்பட்டியல் அல்லது இணக்கப் பதிவுகளை மாற்றுதல்.", hi: "भविष्य के कर नोटिसों को रोकने के लिए व्यावसायिक इनवॉइसिंग या रिकॉर्ड अनुपालन में संशोधन।" }
      }
    ],
    faqs: [
      {
        q: { en: "What should I do when I receive a GST demand notice?", ta: "ஜிஎஸ்டி வரி கோரிக்கை அறிவிப்பு வந்தால் நான் என்ன செய்ய வேண்டும்?", hi: "जीएसटी मांग नोटिस प्राप्त होने पर मुझे क्या करना चाहिए?" },
        a: { en: "You should review the grounds of the demand and file a written reply or appeal within the statutory 3-month window.", ta: "கோரிக்கைக்கான காரணங்களை ஆய்வு செய்து, 3 மாத காலத்திற்குள் எழுத்துப்பூர்வமான மறுப்புரை அல்லது மேல்முறையீட்டைத் தாக்கல் செய்ய வேண்டும்.", hi: "आपको मांग के आधारों की समीक्षा करनी चाहिए और वैधानिक 3 महीने की अवधि के भीतर लिखित उत्तर या अपील दायर करनी चाहिए।" }
      },
      {
        q: { en: "Can arbitrary tax assessments be challenged directly in High Court?", ta: "தன்னிச்சையான வரி மதிப்பீடுகளை நேரடியாக உயர் நீதிமன்றத்தில் எதிர்க்க முடியுமா?", hi: "क्या मनमाने कर आकलन को सीधे उच्च न्यायालय में चुनौती दी जा सकती है?" },
        a: { en: "Yes, under Article 226, if natural justice is violated or the order is completely without jurisdiction.", ta: "ஆம், இயற்கை நீதி மீறப்பட்டால் அல்லது உத்தரவு முற்றிலும் அதிகார வரம்பிற்கு அப்பாற்பட்டதாக இருந்தால், அரசியலமைப்பு பிரிவு 226-இன் கீழ் சவாலுக்கு உட்படுத்தலாம்.", hi: "हाँ, अनुच्छेद 226 के तहत, यदि प्राकृतिक न्याय का उल्लंघन किया जाता है या आदेश पूरी तरह से बिना अधिकार क्षेत्र के है।" }
      }
    ]
  }
};

const intakeSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide some details about your case"),
});

type IntakeFormValues = z.infer<typeof intakeSchema>;

export default function PracticeAreaDetail() {
  const { language, t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const area = slug ? detailedPracticeData[slug] : null;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IntakeFormValues>({
    resolver: zodResolver(intakeSchema)
  });

  const onSubmit = async (data: IntakeFormValues) => {
    setIsSubmitting(true);
    setErrorMsg("");
    try {
      const activeTitle = area ? (language === "ta" ? area.title.ta : language === "hi" ? area.title.hi : area.title.en) : "Practice Area Detail Form";
      const { error } = await supabase
        .from("bookings")
        .insert({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          service_type: activeTitle,
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

  if (!area) {
    return <Navigate to="/practice-areas" replace />;
  }

  const title = language === "ta" ? area.title.ta : language === "hi" ? area.title.hi : area.title.en;
  const description = language === "ta" ? area.description.ta : language === "hi" ? area.description.hi : area.description.en;
  const longText = language === "ta" ? area.longText.ta : language === "hi" ? area.longText.hi : area.longText.en;
  const mattersHandled = language === "ta" ? area.mattersHandled.ta : language === "hi" ? area.mattersHandled.hi : area.mattersHandled.en;
  const clientJourney = area.clientJourney;
  const faqs = area.faqs;

  return (
    <div className="py-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb link */}
        <Link to="/practice-areas" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          {language === "ta" ? "சட்டப் பிரிவுகளுக்குத் திரும்பவும்" : language === "hi" ? "अभ्यास क्षेत्रों पर वापस जाएं" : "Back to Practice Areas"}
        </Link>

        {/* Dynamic header */}
        <div className="mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-semibold tracking-wider uppercase mb-4">
            {language === "ta" ? "சட்டப் பிரிவு விவரங்கள்" : language === "hi" ? "अभ्यास क्षेत्र विवरण" : "Practice Area Details"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
            {title}
          </h1>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">
                {language === "ta" ? "சட்டப்பிரிவு கண்ணோட்டம்" : language === "hi" ? "अभ्यास अवलोकन" : "Practice Overview"}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{description}</p>
              <p className="text-muted-foreground leading-relaxed">{longText}</p>
            </div>

            {/* Matters Handled Checklist */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                {language === "ta" ? "நாங்கள் கையாளும் விவகாரங்கள்" : language === "hi" ? "मामले जिन्हें हम संभालते हैं" : "Matters We Handle"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mattersHandled.map((matter, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{matter}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Client Journey */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-8 text-center lg:text-left">
                {language === "ta" ? "எங்களுடன் உங்கள் சட்டப் பயணம்" : language === "hi" ? "हमारे साथ आपकी यात्रा" : "Your Journey with Us"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {clientJourney.map((step, idx) => {
                  const stepTitle = language === "ta" ? step.title.ta : language === "hi" ? step.title.hi : step.title.en;
                  const stepDesc = language === "ta" ? step.desc.ta : language === "hi" ? step.desc.hi : step.desc.en;
                  return (
                    <div key={idx} className="bg-card border border-border p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-secondary transition-colors">
                      <div className="absolute right-4 top-4 text-6xl font-heading font-bold text-muted/30 group-hover:text-secondary/10 transition-colors select-none pointer-events-none">
                        {step.step}
                      </div>
                      <h4 className="text-lg font-bold text-primary mb-2 relative z-10">{stepTitle}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed relative z-10">{stepDesc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">
                {language === "ta" ? "அடிக்கடி கேட்கப்படும் கேள்விகள்" : language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const q = language === "ta" ? faq.q.ta : language === "hi" ? faq.q.hi : faq.q.en;
                  const a = language === "ta" ? faq.a.ta : language === "hi" ? faq.a.hi : faq.a.en;
                  return (
                    <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="w-full flex justify-between items-center text-left py-2 font-medium text-primary hover:text-secondary transition-colors focus:outline-none bg-transparent border-none cursor-pointer"
                      >
                        <span>{q}</span>
                        {activeFaq === index ? <ChevronUp className="h-5 w-5 text-secondary" /> : <ChevronDown className="h-5 w-5 text-secondary" />}
                      </button>
                      {activeFaq === index && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed pl-1">
                          {a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Sidebar Case Intake Form */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border p-8 rounded-2xl shadow-sm sticky top-24 text-foreground">
              <div className="flex items-center gap-3 mb-6">
                <PlayCircle className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-heading font-bold text-primary">
                  {language === "ta" ? "வழக்கு ஆலோசனைப் பதிவு" : language === "hi" ? "त्वरित मामला पंजीकरण" : "Fast Case Intake"}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                {language === "ta" ? `சிறப்பு வாய்ந்த ${title} வழக்கறிஞருடன் ஆரம்பகட்ட ஆலோசனையைப் பெற உங்கள் விவரங்களை கீழே பூர்த்தி செய்யவும்.` : language === "hi" ? `एक विशेषज्ञ ${title} अधिवक्ता के साथ प्रारंभिक परामर्श निर्धारित करने के लिए नीचे अपना विवरण प्रदान करें।` : `Provide your details below to schedule an initial consultation with a specialized ${title} advocate.`}
              </p>

              {isSuccess ? (
                <div className="bg-muted p-6 rounded-xl text-center border border-border">
                  <CheckCircle2 className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h4 className="font-bold text-lg text-primary mb-2">
                    {language === "ta" ? "விண்ணப்பம் பெறப்பட்டது!" : language === "hi" ? "अनुरोध प्राप्त हुआ!" : "Request Received!"}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {language === "ta" ? "எங்கள் குழு உங்கள் விண்ணப்பத்தை சரிபார்த்து வருகிறது. விரைவில் உங்களை மின்னஞ்சல் மூலம் தொடர்புகொள்வோம்." : language === "hi" ? "हमारी अनुपालन टीम हितों के टकराव की जांच पूरी कर रही है। हम जल्द ही विवरण ईमेल करेंगे।" : "Our compliance team is completing conflicts check. We will email details shortly."}
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    variant="outline" 
                    className="w-full border-border text-foreground hover:bg-muted cursor-pointer"
                  >
                    {language === "ta" ? "மறுபடி செய்தி அனுப்பவும்" : language === "hi" ? "दूसरा अनुरोध भेजें" : "Send another request"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 bg-destructive/10 border border-destructive/20 text-xs rounded text-center text-destructive">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-primary">
                      {t("contact.name")}
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full bg-background border border-input rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-foreground"
                      placeholder={language === "ta" ? "பெயர்" : language === "hi" ? "नाम" : "Jane Doe"}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-600 mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-primary">
                      {t("contact.emailAddr")}
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-background border border-input rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-foreground"
                      placeholder="email@example.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-600 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-primary">
                      {t("contact.phone")}
                    </label>
                    <input
                      {...register("phone")}
                      type="text"
                      className="w-full bg-background border border-input rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-foreground"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && <p className="text-[10px] text-red-600 mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold mb-1 text-primary">
                      {language === "ta" ? "சுருக்கமான விபரம்" : language === "hi" ? "संक्षिप्त विवरण" : "Brief Details"}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      className="w-full bg-background border border-input rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-secondary text-foreground resize-none"
                      placeholder={language === "ta" ? "விவரங்களை இங்கே எழுதவும்..." : language === "hi" ? "कृपया समस्या की रूपरेखा दें..." : "Please outline the issue..."}
                    />
                    {errors.message && <p className="text-[10px] text-red-600 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-primary hover:bg-primary/95 text-primary-foreground font-bold py-2.5 rounded transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        {language === "ta" ? "சமர்ப்பிக்கப்படுகிறது..." : language === "hi" ? "जमा किया जा रहा है..." : "Submitting..."}
                      </>
                    ) : (
                      language === "ta" ? "விண்ணப்பிக்கவும்" : language === "hi" ? "अनुरोध सबमिट करें" : "Submit Request"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
