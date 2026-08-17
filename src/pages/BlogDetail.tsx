import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Facebook, Twitter, Linkedin, Award } from "lucide-react";
import { blogPosts } from "./Blog";
import { useLanguage } from "@/lib/LanguageContext";

const detailedBlogContent: Record<string, {
  paragraphs: { en: string[]; ta: string[]; hi: string[] };
  faqs: { question: { en: string; ta: string; hi: string }; answer: { en: string; ta: string; hi: string } }[];
}> = {
  "understanding-pmla-investigations": {
    paragraphs: {
      en: [
        "The Prevention of Money Laundering Act (PMLA), 2002, stands as one of the most stringent regulatory frameworks in Indian jurisprudence. For corporate entities, executives, and individuals navigating PMLA investigations, understanding search, seizure, and summon processes is critical to protecting fundamental constitutional protections.",
        "A common misconception is that PMLA investigations share the same procedural limitations as regular criminal investigations under the Code of Criminal Procedure (CrPC). In truth, statements recorded under Section 50 of the PMLA before an Enforcement Directorate (ED) officer are admissible in court, unlike standard police statements. This underscores the vital importance of acquiring qualified legal counsel at the very first summon.",
        "Furthermore, the PMLA grants broad authority to officers to conduct surveys, searches of premises, and property attachments. An interim attachment order can freeze bank accounts and corporate assets for up to 180 days based on a 'reason to believe' that property constitutes 'proceeds of crime'. Challenging these attachments requires swift filings before the Appellate Tribunal.",
        "During search and seizure operations, individuals retain basic constitutional protections. You have the right to inspect the search warrant, read the grounds of search, inspect the search party for independent witnesses (panchas), and receive a signed search inventory list. Ensuring that your legal rights are protected during these procedures is crucial for long-term trial outcomes."
      ],
      ta: [
        "பணமோசடி தடுப்புச் சட்டம் (PMLA), 2002, இந்திய நீதித்துறையில் மிகவும் கடுமையான ஒழுங்குமுறை கட்டமைப்புகளில் ஒன்றாக உள்ளது. PMLA விசாரணைகளை எதிர்கொள்ளும் கார்ப்பரேட் நிறுவனங்கள், அதிகாரிகள் மற்றும் தனிநபர்கள், தங்கள் அடிப்படை அரசியலமைப்பு உரிமைகளைப் பாதுகாக்க தேடுதல், பறிமுதல் மற்றும் சம்மன் செயல்முறைகளைப் புரிந்துகொள்வது அவசியம்.",
        "ஒரு பொதுவான தவறான கருத்து என்னவென்றால், குற்றவியல் நடைமுறைச் சட்டத்தின் (CrPC) கீழ் உள்ள வழக்கமான குற்றப் புலனாய்வுகளைப் போன்ற அதே நடைமுறை வரம்புகளை PMLA விசாரணைகளும் பகிர்ந்து கொள்கின்றன என்பதுதான். உண்மையில், PMLA இன் பிரிவு 50 இன் கீழ் அமலாக்கத் துறை (ED) அதிகாரிக்கு முன்னால் பதிவு செய்யப்படும் வாக்குமூலங்கள் நீதிமன்றத்தில் ஏற்றுக்கொள்ளத்தக்கவை ஆகும். இது முதல் சம்மன் வந்தவுடனேயே தகுதியான சட்ட ஆலோசனையைப் பெறுவதன் முக்கியத்துவத்தை உணர்த்துகிறது.",
        "மேலும், PMLA சட்டம் அதிகாரிகளுக்கு ஆய்வுகள், வளாகங்களில் தேடுதல் மற்றும் சொத்துக்களை முடக்குவதற்கு பரந்த அதிகாரங்களை வழங்குகிறது. ஒரு தற்காலிக சொத்து முடக்க உத்தரவு, சொத்து 'குற்றத்தின் வருமானம்' என்று நம்புவதற்குப் போதுமான காரணம் இருந்தால், வங்கி கணக்குகள் மற்றும் கார்ப்பரேட் சொத்துக்களை 180 நாட்கள் வரை முடக்கலாம். இந்த முடக்கங்களை எதிர்த்து மேல்முறையீட்டு தீர்ப்பாயத்தின் முன் விரைவாக மனு தாக்கல் செய்ய வேண்டும்.",
        "தேடுதல் மற்றும் பறிமுதல் நடவடிக்கைகளின் போது, தனிநபர்கள் தங்களின் அடிப்படை அரசியலமைப்புப் பாதுகாப்புகளைத் தக்க வைத்துக் கொள்கிறார்கள். தேடுதல் வாரண்ட்டைச் சரிபார்க்கவும், தேடுதல் காரணங்களை வாசிக்கவும், தேடுதல் குழுவில் உள்ள சுயாதீன சாட்சிகளைச் சரிபார்க்கவும் மற்றும் கையெழுத்திடப்பட்ட தேடுதல் இருப்புப் பட்டியலைப் பெறவும் உங்களுக்கு உரிமை உண்டு."
      ],
      hi: [
        "धन शोधन निवारण अधिनियम (पीएमएलए), 2002, भारतीय कानून में सबसे कड़े विनियामक ढांचों में से एक है। पीएमएलए जांच का सामना करने वाली कॉर्पोरेट संस्थाओं, अधिकारियों और व्यक्तियों के लिए बुनियादी संवैधानिक अधिकारों की रक्षा के लिए तलाशी, जब्ती और समन प्रक्रियाओं को समझना महत्वपूर्ण है।",
        "एक आम गलतफहमी यह है कि पीएमएलए जांच और दंड प्रक्रिया संहिता (सीआरपीसी) के तहत सामान्य आपराधिक जांच की प्रक्रियात्मक सीमाएं समान हैं। वास्तव में, पीएमएलए की धारा 50 के तहत प्रवर्तन निदेशालय (ईडी) अधिकारी के समक्ष दर्ज बयान अदालत में स्वीकार्य हैं, जो सामान्य पुलिस बयानों के विपरीत है। यह पहले समन पर ही योग्य कानूनी सलाह प्राप्त करने के महत्व को रेखांकित करता है।",
        "इसके अलावा, पीएमएलए अधिकारियों को सर्वेक्षण करने, परिसरों की तलाशी लेने और संपत्ति कुर्क करने के व्यापक अधिकार देता है। एक अनंतिम कुर्की आदेश बैंक खातों और कॉर्पोरेट परिसंपत्तियों को 180 दिनों तक के लिए फ्रीज कर सकता है यदि यह मानने का 'कारण' है कि संपत्ति 'अपराध की कमाई' है। इन कुर्कियों को चुनौती देने के लिए अपीलीय न्यायाधिकरण के समक्ष त्वरित याचिकाएं दायर करने की आवश्यकता होती है।",
        "तलाशी और जब्ती कार्यों के दौरान, व्यक्ति अपने मूल संवैधानिक अधिकार बनाए रखते हैं। आपके पास तलाशी वारंट की जांच करने, तलाशी के आधारों को पढ़ने, स्वतंत्र गवाहों (पंचों) के लिए तलाशी दल की जांच करने और एक हस्ताक्षरित खोज सूची प्राप्त करने का अधिकार है।"
      ]
    },
    faqs: [
      {
        question: {
          en: "Are statements made during PMLA summons admissible in court?",
          ta: "PMLA சம்மனின் போது அளிக்கப்படும் வாக்குமூலங்கள் நீதிமன்றத்தில் ஏற்றுக்கொள்ளப்படுமா?",
          hi: "क्या पीएमएलए समन के दौरान दिए गए बयान अदालत में स्वीकार्य हैं?"
        },
        answer: {
          en: "Yes, under Section 50 of the PMLA, statements recorded by an ED officer are admissible in court, making early legal representation essential.",
          ta: "ஆம், PMLA இன் பிரிவு 50 இன் கீழ், ED அதிகாரியால் பதிவு செய்யப்படும் வாக்குமூலங்கள் நீதிமன்றத்தில் ஏற்றுக்கொள்ளத்தக்கவை, இதனால் ஆரம்பகட்ட சட்டப் பிரதிநிதித்துவம் அவசியமாகிறது.",
          hi: "हाँ, पीएमएलए की धारा 50 के तहत, ईडी अधिकारी द्वारा दर्ज किए गए बयान अदालत में स्वीकार्य हैं, जिससे प्रारंभिक कानूनी प्रतिनिधित्व आवश्यक हो जाता है।"
        }
      },
      {
        question: {
          en: "How long can a property remain attached under PMLA?",
          ta: "PMLA இன் கீழ் ஒரு சொத்து எவ்வளவு காலம் முடக்கப்பட்டிருக்கும்?",
          hi: "पीएमएलए के तहत संपत्ति कितने समय तक कुर्क रह सकती है?"
        },
        answer: {
          en: "A provisional attachment order remains in force for up to 180 days, during which it must be confirmed by the Adjudicating Authority.",
          ta: "ஒரு தற்காலிக சொத்து முடக்க உத்தரவு 180 நாட்கள் வரை நடைமுறையில் இருக்கும், அதற்குள் அது தீர்ப்பளிக்கும் அதிகார அமைப்பால் உறுதி செய்யப்பட வேண்டும்.",
          hi: "एक अनंतिम कुर्की आदेश 180 दिनों तक लागू रहता है, जिसके दौरान निर्णय लेने वाले प्राधिकारी द्वारा इसकी पुष्टि की जानी चाहिए।"
        }
      }
    ]
  },
  "gst-compliance-audits-2026": {
    paragraphs: {
      en: [
        "As tax enforcement authorities deploy sophisticated data reconciliation algorithms, Goods and Services Tax (GST) compliance audits have become a primary point of regulatory friction for medium to large enterprises. Corporate leaders must transition from reactive filing to proactive tax management.",
        "A primary driver of recent GST disputes relates to Input Tax Credit (ITC) reconciliations. Discrepancies between the buyer's purchases and the seller's filings (GSTR-2B reconciliations) often trigger automated demand notices. To safeguard operations, businesses must conduct periodic internal audits and establish bulletproof transaction trails.",
        "In the event of a formal GST audit notice, corporate managers should immediately isolate files regarding tax classifications, input credits, and interstate services contracts. Understanding the distinction between statutory audit inquiries and anti-evasion search warrants prevents administrative overreaches.",
        "Should a tax officer issue a demand order, companies have 3 months to file an appeal before the Commissioner (Appeals), subject to pre-deposit rules. Reviewing contract classifications and maintaining legal representations is essential to resolving these tax disputes."
      ],
      ta: [
        "வரி அமலாக்க அதிகாரிகள் மேம்பட்ட தரவு சமரச அல்காரிதம்களைப் பயன்படுத்துவதால், சரக்கு மற்றும் சேவை வரி (GST) இணக்கத் தணிக்கைகள் நடுத்தர முதல் பெரிய நிறுவனங்களுக்கு ஒரு முக்கிய ஒழுங்குமுறை சவாலாக மாறியுள்ளன. கார்ப்பரேட் தலைவர்கள் வெறும் வரி தாக்கல் செய்வதிலிருந்து முன்கூட்டியே வரி மேலாண்மை செய்வதற்கு மாற வேண்டும்.",
        "சமீபத்திய ஜிஎஸ்டி தகராறுகளுக்கு ஒரு முக்கிய காரணம் உள்ளீட்டு வரி வரவு (ITC) சமரசம் ஆகும். வாங்குபவரின் கொள்முதலுக்கும் விற்பனையாளரின் தாக்கல்களுக்கும் இடையே உள்ள முரண்பாடுகள் பெரும்பாலும் தானியங்கி தேவை அறிவிப்புகளைத் தூண்டுகின்றன. செயல்பாடுகளைப் பாதுகாக்க, வணிகங்கள் அவ்வப்போது உள் தணிக்கைகளை நடத்த வேண்டும்.",
        "முறையான ஜிஎஸ்டி தணிக்கை அறிவிப்பு வந்தால், கார்ப்பரேட் மேலாளர்கள் வரி வகைப்பாடுகள், உள்ளீட்டு வரவுகள் மற்றும் மாநிலங்களுக்கு இடையேயான சேவை ஒப்பந்தங்கள் தொடர்பான கோப்புகளை உடனடியாக தனியாகப் பிரிக்க வேண்டும். சட்டப்பூர்வ தணிக்கை விசாரணைகளுக்கும், வரி ஏய்ப்பு எதிர்ப்பு தேடுதல் வாரண்டுகளுக்கும் இடையே உள்ள வேறுபாட்டைப் புரிந்துகொள்வது நிர்வாக வரம்பு மீறல்களைத் தடுக்கிறது.",
        "வரி அதிகாரி தேவை உத்தரவை வழங்கினால், நிறுவனங்கள் மேல்முறையீடு செய்ய 3 மாதங்கள் அவகாசம் உள்ளது. ஒப்பந்த வகைப்பாடுகளை மறுஆய்வு செய்வதும் சட்ட பிரதிநிதித்துவத்தை பராமரிப்பதும் இந்த வரி தகராறுகளைத் தீர்க்க அவசியமாகும்."
      ],
      hi: [
        "जैसे-जैसे कर प्रवर्तन अधिकारी परिष्कृत डेटा मिलान एल्गोरिदम तैनात कर रहे हैं, वस्तु एवं सेवा कर (जीएसटी) अनुपालन ऑडिट मध्यम से बड़े उद्यमों के लिए नियामक घर्षण का एक प्राथमिक बिंदु बन गया है। कॉर्पोरेट नेताओं को प्रतिक्रियाशील फाइलिंग से सक्रिय कर प्रबंधन की ओर रुख करना चाहिए।",
        "हाल के जीएसटी विवादों का एक प्राथमिक कारण इनपुट टैक्स क्रेडिट (आईटीसी) मिलान से संबंधित है। खरीदार की खरीद और विक्रेता की फाइलिंग (जीएसटीआर-2बी मिलान) के बीच विसंगतियां अक्सर स्वचालित मांग नोटिस को ट्रिगर करती हैं। परिचालन को सुरक्षित रखने के लिए, व्यवसायों को समय-समय पर आंतरिक ऑडिट करना चाहिए और पुख्ता लेनदेन रिकॉर्ड स्थापित करना चाहिए।",
        "औपचारिक जीएसटी ऑडिट नोटिस के मामले में, कॉर्पोरेट प्रबंधकों को तुरंत कर वर्गीकरण, इनपुट क्रेडिट और अंतरराज्यीय सेवा अनुबंधों से संबंधित फाइलों को अलग कर लेना चाहिए। वैधानिक ऑडिट पूछताछ और चोरी-रोधी तलाशी वारंट के बीच के अंतर को समझना प्रशासनिक ज्यादतियों को रोकता है।",
        "यदि कोई कर अधिकारी मांग आदेश जारी करता है, तो कंपनियों के पास पूर्व-जमा नियमों के अधीन आयुक्त (अपील) के समक्ष अपील दायर करने के लिए 3 महीने का समय होता है। इन कर विवादों को हल करने के लिए अनुबंध वर्गीकरण की समीक्षा करना और कानूनी प्रतिनिधित्व बनाए रखना आवश्यक है।"
      ]
    },
    faqs: [
      {
        question: {
          en: "What triggers a GST audit?",
          ta: "ஜிஎஸ்டி தணிக்கையைத் தூண்டுவது எது?",
          hi: "जीएसटी ऑडिट किन कारणों से होता है?"
        },
        answer: {
          en: "Common triggers include discrepancies in Input Tax Credit (ITC) reconciliation, unusual profit margins, or systemic delays in filings.",
          ta: "உள்ளீட்டு வரி வரவு (ITC) சமரசத்தில் உள்ள முரண்பாடுகள், அசாதாரண லாப வரம்புகள் அல்லது வரி தாக்கல் செய்வதில் உள்ள முறையான தாமதங்கள் ஆகியவை பொதுவான காரணங்களாகும்.",
          hi: "सामान्य कारणों में इनपुट टैक्स क्रेडिट (आईटीसी) मिलान में विसंगतियां, असामान्य लाभ मार्जिन, या फाइलिंग में प्रणालीगत देरी शामिल हैं।"
        }
      },
      {
        question: {
          en: "Can a GST demand order be challenged immediately in the High Court?",
          ta: "ஜிஎஸ்டி தேவை உத்தரவை உடனடியாக உயர் நீதிமன்றத்தில் சவால் செய்ய முடியுமா?",
          hi: "क्या जीएसटी मांग आदेश को सीधे उच्च न्यायालय में चुनौती दी जा सकती है?"
        },
        answer: {
          en: "Typically, you must exhaust the statutory appeal route before the Commissioner Appeals and Tribunal. Writ petitions in High Courts are only entertained in cases of severe procedural violations or natural justice breaches.",
          ta: "பொதுவாக, நீங்கள் ஆணையர் (மேல்முறையீடு) மற்றும் தீர்ப்பாயத்தின் முன் சட்டப்பூர்வ மேல்முறையீட்டு வழியைப் பயன்படுத்த வேண்டும். நடைமுறை மீறல்கள் அல்லது இயற்கை நீதி மீறல் வழக்குகளில் மட்டுமே உயர் நீதிமன்றங்களில் ரிட் மனுக்கள் பரிசீலிக்கப்படும்.",
          hi: "आमतौर पर, आपको आयुक्त अपील और न्यायाधिकरण के समक्ष वैधानिक अपील मार्ग को पूरा करना होगा। उच्च न्यायालयों में रिट याचिकाएं केवल गंभीर प्रक्रियात्मक उल्लयंघनों या प्राकृतिक न्याय के उल्लंघन के मामलों में ही स्वीकार की जाती हैं।"
        }
      }
    ]
  },
  "trademark-infringement-digital-brand": {
    paragraphs: {
      en: [
        "In the digital marketplace, your brand's digital identity represents core corporate equity. The rise of algorithm-driven advertisements, domain squattings, and third-party lookalike search engine bidding has introduced complex trademark infringement challenges.",
        "Trademark infringement is not limited to matching product labels. Using a competitor's registered trademark as a hidden keyword tag, search ad bid trigger, or using deceptive variations in domain names constitutes passing-off. Brand owners must actively monitor these digital channels.",
        "When infringement is identified, sending a precise, legal Cease & Desist warning often yields rapid resolutions. Where infringement persists, filing for an interim injunction in High Court blocks copycats, preventing critical brand dilution and customer confusion.",
        "To maximize legal recourse, brands must ensure timely registrations and manage their IP portfolios through technology transfer and licensing agreements. Security in trademark ownership is the foundation of digital scaling."
      ],
      ta: [
        "டிஜிட்டல் சந்தையில், உங்கள் பிராண்டின் டிஜிட்டல் அடையாளம் முக்கிய கார்ப்பரேட் மதிப்பாகும். அல்காரிதம் அடிப்படையிலான விளம்பரங்கள், டொமைன் ஆக்கிரமிப்புகள் மற்றும் ஒத்த தேடுபொறி ஏலங்களின் அதிகரிப்பு ஆகியவை சிக்கலான வர்த்தக முத்திரை மீறல் சவால்களை அறிமுகப்படுத்தியுள்ளன.",
        "வர்த்தக முத்திரை மீறல் என்பது தயாரிப்பு லேபிள்களைப் பொருத்துவதுடன் மட்டும் நின்றுவிடுவதில்லை. ஒரு போட்டியாளரின் பதிவு செய்யப்பட்ட வர்த்தக முத்திரையை மறைக்கப்பட்ட முக்கிய வார்த்தையாகப் பயன்படுத்துவது அல்லது டொமைன் பெயர்களில் ஏமாற்று முகடுகளைப் பயன்படுத்துவது போலியாகப் பயன்படுத்துவதாகும்.",
        "மீறல் கண்டறியப்படும்போது, துல்லியமான சட்ட எச்சரிக்கையை (Cease & Desist) அனுப்புவது பெரும்பாலும் விரைவான தீர்வுகளைத் தருகிறது. மீறல் தொடர்ந்தால், உயர் நீதிமன்றத்தில் இடைக்கால தடையுத்தரவு கோரி மனு தாக்கல் செய்வது நகலெடுப்பவர்களைத் தடுக்கிறது.",
        "சட்டப்பூர்வ தீர்வுகளை அதிகரிக்க, பிராண்டுகள் சரியான நேரத்தில் பதிவுகளை உறுதி செய்ய வேண்டும் மற்றும் தொழில்நுட்ப பரிமாற்றம் மற்றும் உரிம ஒப்பந்தங்கள் மூலம் தங்கள் அறிவுசார் சொத்துக்களை நிர்வகிக்க வேண்டும்."
      ],
      hi: [
        "डिजिटल बाजार में, आपके ब्रांड की डिजिटल पहचान मुख्य कॉर्पोरेट परिसंपत्ति का प्रतिनिधित्व करती है। एल्गोरिदम-संचालित विज्ञापनों, डोमेन हथियाने और तीसरे पक्ष के समान सर्च इंजन बोली के उदय ने जटिल ट्रेडमार्क उल्लंघन की चुनौतियों को पेश किया है।",
        "ट्रेडमार्क उल्लंघन केवल उत्पाद लेबलों के मिलान तक सीमित नहीं है। किसी प्रतियोगी के पंजीकृत ट्रेडमार्क का उपयोग गुप्त कीवर्ड टैग, खोज विज्ञापन बोली ट्रिगर के रूप में करना, या डोमेन नामों में भ्रामक बदलावों का उपयोग करना पासिंग-ऑफ माना जाता है। ब्रांड स्वामियों को इन डिजिटल चैनलों की सक्रिय रूप से निगरानी करनी चाहिए।",
        "जब उल्लंघन की पहचान की जाती है, तो एक सटीक, कानूनी चेतावनी (सीज़ एंड डेसिस्ट) भेजने से अक्सर तेजी से समाधान मिलता है। जहां उल्लंघन जारी रहता है, उच्च न्यायालय में अंतरिम निषेधाज्ञा के लिए फाइल करने से नकलचियों पर रोक लगती है, जिससे ब्रांड की साख खराब होने और ग्राहकों में भ्रम से बचा जा सकता है।",
        "कानूनी समाधानों को अधिकतम करने के लिए, ब्रांडों को समय पर पंजीकरण सुनिश्चित करना चाहिए और प्रौद्योगिकी हस्तांतरण और लाइसेंसिंग समझौतों के माध्यम से अपने आईपी पोर्टफोलियो का प्रबंधन करना चाहिए।"
      ]
    },
    faqs: [
      {
        question: {
          en: "Is domain squatting considered trademark infringement?",
          ta: "டொமைன் ஆக்கிரமிப்பு வர்த்தக முத்திரை மீறலாகக் கருதப்படுமா?",
          hi: "क्या डोमेन हथियाने को ट्रेडमार्क उल्लंघन माना जाता है?"
        },
        answer: {
          en: "Yes, registering a domain name that matches or is deceptively similar to a registered trademark with bad faith intent constitutes passing-off and can be challenged legally.",
          ta: "ஆம். கெட்ட எண்ணத்துடன் பதிவுசெய்யப்பட்ட வர்த்தக முத்திரைக்கு ஒத்த அல்லது ஏமாற்றும் வகையில் டொமைன் பெயரைப் பதிவுசெய்வது சட்டப்படி சவால் செய்யப்படலாம்.",
          hi: "हाँ, दुर्भावनापूर्ण इरादे से पंजीकृत ट्रेडमार्क के समान या भ्रामक रूप से समान डोमेन नाम पंजीकृत करना पासिंग-ऑफ माना जाता है और इसे कानूनी रूप से चुनौती दी जा सकती है।"
        }
      },
      {
        question: {
          en: "What is the benefit of a Cease & Desist letter?",
          ta: "சட்ட எச்சரிக்கை கடிதத்தின் (Cease & Desist) நன்மை என்ன?",
          hi: "सीज़ एंड डेसिस्ट (चेतावनी पत्र) का क्या लाभ है?"
        },
        answer: {
          en: "It formally documents the infringer's awareness of your mark, which increases the likelihood of awarding punitive damages if the case proceeds to litigation.",
          ta: "இவை உங்கள் முத்திரையைப் பற்றிய மீறுபவரின் விழிப்புணர்வை முறையாகப் பதிவு செய்கிறது, இது வழக்கு விசாரணைக்குச் சென்றால் இழப்பீடு பெறுவதற்கான வாய்ப்பை அதிகரிக்கிறது.",
          hi: "यह औपचारिक रूप से उल्लंघनकर्ता की आपके मुद्रित चिह्न के प्रति जागरूकता का दस्तावेजीकरण करता है, जो मामला मुकदमेबाजी में जाने पर दंडात्मक हर्जाना मिलने की संभावना को बढ़ाता है।"
        }
      }
    ]
  },
  "rera-disputes-builder-delays": {
    paragraphs: {
      en: [
        "Real estate investments represent major financial decisions. Prior to the Real Estate (Regulation and Development) Act (RERA), homebuyers faced project delay vulnerabilities. Today, RERA establishes a strict statutory framework protecting buyers.",
        "A core protection under RERA is the buyer's right to withdraw from a project if the developer fails to deliver possession within the specified period. Upon withdrawal, buyers are entitled to a full refund of deposit amounts along with interest calculated at prescribed rates.",
        "If a buyer chooses to remain in the project, the developer is liable to pay monthly interest compensation for every month of possession delay. Developers are also prohibited from demanding more than 10% of property cost without executing a formal Sale Agreement.",
        "Filing a complaint before the RERA authority requires compiling building permits, payment receipts, and project delay proofs. RERA appellate tribunals ensure disputes are settled efficiently, providing vital protection for real estate investments."
      ],
      ta: [
        "ரியல் எஸ்டேட் முதலீடுகள் பெரிய நிதி முடிவுகளைக் குறிக்கின்றன. ரியல் எஸ்டேட் (ஒழுங்குமுறை மற்றும் மேம்பாடு) சட்டம் (RERA) வருவதற்கு முன்பு, வாங்குபவர்கள் திட்ட தாமதங்களால் பெரிதும் பாதிக்கப்பட்டனர். இன்று, RERA வாங்குபவர்களைப் பாதுகாக்கும் கடுமையான சட்டக் கட்டமைப்பை நிறுவுகிறது.",
        "RERA இன் கீழ் ஒரு முக்கிய பாதுகாப்பு என்னவென்றால், குறிப்பிட்ட காலத்திற்குள் சொத்தை ஒப்படைக்க டெவலப்பர் தவறினால், வாங்குபவருக்கு திட்டத்திலிருந்து விலகும் உரிமை உண்டு. விலகும்போது, வாங்குபவர்கள் வட்டியுடன் கூடிய முழுத் தொகையையும் திரும்பப் பெற தகுதியுடையவர்கள்.",
        "வாங்குபவர் திட்டத்தில் தொடர விரும்பினால், டெவலப்பர் தாமதமாகும் ஒவ்வொரு மாதத்திற்கும் மாதாந்திர வட்டி இழப்பீடு செலுத்த வேண்டும். முறையான விற்பனை ஒப்பந்தம் இல்லாமல் சொத்து விலையில் 10% க்கும் மேல் கோருவதற்கு டெவலப்பர்களுக்குத் தடை விதிக்கப்பட்டுள்ளது.",
        "RERA ஆணையத்தின் முன் புகார் தாக்கல் செய்ய கட்டிட அனுமதிகள், கட்டண ரசீதுகள் மற்றும் திட்ட தாமத சான்றுகளைத் தொகுக்க வேண்டும். RERA மேல்முறையீட்டு தீர்ப்பாயங்கள் தகராறுகள் திறமையாக தீர்க்கப்படுவதை உறுதி செய்கின்றன."
      ],
      hi: [
        "रियल एस्टेट निवेश बड़े वित्तीय निर्णयों का प्रतिनिधित्व करते हैं। रियल एस्टेट (नियमन और विकास) अधिनियम (रेरा) से पहले, गृह खरीदारों को परियोजना में देरी की समस्याओं का सामना करना पड़ता था। आज, रेरा खरीदारों की रक्षा करने वाला एक सख्त वैधानिक ढांचा स्थापित करता है।",
        "रेरा के तहत एक मुख्य सुरक्षा यह है कि यदि डेवलपर निर्दिष्ट अवधि के भीतर कब्जा देने में विफल रहता है तो खरीदार को परियोजना से पीछे हटने का अधिकार है। वापसी पर, खरीदार निर्धारित दरों पर गणना किए गए ब्याज के साथ जमा राशि की पूरी वापसी के हकदार हैं।",
        "यदि कोई खरीदार परियोजना में बने रहने का विकल्प चुनता है, तो डेवलपर कब्जे में देरी के हर महीने के लिए मासिक ब्याज मुआवजा देने के लिए उत्तरदायी है। विकासकर्ताओं को औपचारिक बिक्री समझौते के निष्पादन के बिना संपत्ति की लागत के 10% से अधिक की मांग करने से भी प्रतिबंधित किया गया है।",
        "रेरा प्राधिकरण के समक्ष शिकायत दर्ज करने के लिए भवन परमिट, भुगतान रसीदें और परियोजना में देरी के सबूतों को संकलित करने की आवश्यकता होती है। रेरा अपीलीय न्यायाधिकरण यह सुनिश्चित करते हैं कि विवादों का कुशलतापूर्वक निपटारा किया जाए।"
      ]
    },
    faqs: [
      {
        question: {
          en: "Can a builder modify project plans without buyer consent?",
          ta: "வாங்குபவரின் ஒப்புதல் இன்றி பில்டர் திட்ட வரைபடங்களை மாற்ற முடியுமா?",
          hi: "क्या कोई बिल्डर खरीदार की सहमति के बिना परियोजना योजनाओं में बदलाव कर सकता है?"
        },
        answer: {
          en: "No, under RERA, developers must obtain the written consent of at least two-thirds of allottees before making structural modifications to project plans.",
          ta: "இல்லை, RERA இன் கீழ், டெவலப்பர்கள் திட்ட வரைபடங்களில் கட்டமைப்பு மாற்றங்களைச் செய்வதற்கு முன் குறைந்தது மூன்றில் இரண்டு பங்கு வாங்குபவர்களின் எழுத்துப்பூர்வ ஒப்புதலைப் பெற வேண்டும்.",
          hi: "नहीं, रेरा के तहत, डेवलपर्स को परियोजना योजनाओं में संरचनात्मक संशोधन करने से पहले कम से कम दो-तिहाई आवंटियों की लिखित सहमति प्राप्त करनी होगी।"
        }
      },
      {
        question: {
          en: "How long does a RERA dispute hearing take?",
          ta: "RERA தகராறு விசாரணை எவ்வளவு காலம் எடுக்கும்?",
          hi: "रेरा विवाद की सुनवाई में कितना समय लगता है?"
        },
        answer: {
          en: "Statutorily, RERA complaints are intended to be resolved within 60 days, though administrative backlogs can extend this to 6-9 months.",
          ta: "சட்டப்படி, RERA புகார்கள் 60 நாட்களுக்குள் தீர்க்கப்பட வேண்டும், இருப்பினும் நிர்வாக தாமதங்களால் இது 6-9 மாதங்கள் வரை நீட்டிக்கப்படலாம்.",
          hi: "वैधानिक रूप से, रेरा शिकायतों को 60 दिनों के भीतर हल करने का इरादा है, हालांकि प्रशासनिक बैकलॉग इसे 6-9 महीने तक बढ़ा सकते हैं।"
        }
      }
    ]
  }
};

export default function BlogDetail() {
  const { language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const post = blogPosts.find((p) => p.slug === slug);
  const detail = slug ? detailedBlogContent[slug] : null;

  // Handle reading scroll bar progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post || !detail) {
    return <Navigate to="/blog" replace />;
  }

  const categoryText = language === "ta" ? post.category.ta : language === "hi" ? post.category.hi : post.category.en;
  const titleText = language === "ta" ? post.title.ta : language === "hi" ? post.title.hi : post.title.en;
  const dateText = language === "ta" ? post.date.ta : language === "hi" ? post.date.hi : post.date.en;
  const readTimeText = language === "ta" ? post.readTime.ta : language === "hi" ? post.readTime.hi : post.readTime.en;
  const authorTitleText = language === "ta" ? post.authorTitle.ta : language === "hi" ? post.authorTitle.hi : post.authorTitle.en;
  const paragraphs = language === "ta" ? detail.paragraphs.ta : language === "hi" ? detail.paragraphs.hi : detail.paragraphs.en;
  const faqs = detail.faqs;

  // Inject structured JSON-LD FAQ Metadata for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": language === "ta" ? faq.question.ta : language === "hi" ? faq.question.hi : faq.question.en,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": language === "ta" ? faq.answer.ta : language === "hi" ? faq.answer.hi : faq.answer.en
      }
    }))
  };

  return (
    <div className="py-24 bg-surface min-h-screen relative text-foreground">
      
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-20 left-0 h-1 bg-secondary z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          {language === "ta" ? "கட்டுரைகள் பகுதிக்குத் திரும்பவும்" : language === "hi" ? "ज्ञान केंद्र पर वापस जाएं" : "Back to Knowledge Hub"}
        </Link>

        {/* Article Meta */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
            {categoryText}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mt-6 mb-6 leading-tight">
            {titleText}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-secondary" /> {dateText}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-secondary" /> {readTimeText}</span>
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-secondary" /> 
              {language === "ta" ? "எழுதியவர்:" : language === "hi" ? "लेखक:" : "Drafted by:"} <strong>{post.author}</strong> ({authorTitleText})
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-slate max-w-none text-muted-foreground leading-relaxed space-y-6">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-muted-foreground leading-relaxed">{p}</p>
          ))}

          {/* Social Share Buttons */}
          <div className="border-t border-b border-border/80 py-4 my-8 flex items-center justify-between">
            <span className="text-sm font-semibold text-primary">
              {language === "ta" ? "பகிர்வதற்கு:" : language === "hi" ? "कानूनी अंतर्दृष्टि साझा करें:" : "Share Legal Insight:"}
            </span>
            <div className="flex gap-3">
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all text-muted-foreground cursor-pointer">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all text-muted-foreground cursor-pointer">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-full transition-all text-muted-foreground cursor-pointer">
                <Linkedin className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* FAQs Accordion inside article */}
          <div className="bg-muted/40 p-6 rounded-xl border border-border/80">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              {language === "ta" ? "அடிக்கடி கேட்கப்படும் கேள்விகள்" : language === "hi" ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const qText = language === "ta" ? faq.question.ta : language === "hi" ? faq.question.hi : faq.question.en;
                const aText = language === "ta" ? faq.answer.ta : language === "hi" ? faq.answer.hi : faq.answer.en;
                return (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-sm text-primary">Q: {qText}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">A: {aText}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Read Next Banner */}
        <div className="bg-card text-foreground p-8 rounded-2xl shadow-sm mt-12 border border-border text-center">
          <h3 className="text-2xl font-heading font-bold text-primary mb-2">
            {language === "ta" ? "உங்களுக்கு சட்ட ஆலோசனை தேவையா?" : language === "hi" ? "क्या आपको प्रत्यक्ष मामले में मार्गदर्शन चाहिए?" : "Need Direct Case Guidance?"}
          </h3>
          <p className="text-xs text-muted-foreground mb-6 max-w-lg mx-auto">
            {language === "ta" ? "வழக்குகள், ஜிஎஸ்டி தணிக்கைகள் அல்லது கார்ப்பரேட் விவகாரங்கள் தொடர்பாக எங்கள் மூத்த வழக்கறிஞர்களுடன் ஒரு தனிப்பட்ட ஆலோசனையைத் திட்டமிடுங்கள்." : language === "hi" ? "पीएमएलए, जीएसटी ऑडिट या कॉर्पोरेट पुनर्गठन के संबंध में हमारे वरिष्ठ भागीदारों के साथ एक निजी परामर्श निर्धारित करें।" : "Schedule a private, privileged consultation with our senior partners regarding PMLA, GST audits, or corporate restructuring."}
          </p>
          <Link to="/book-consultation">
            <button className="bg-primary text-primary-foreground hover:bg-primary/95 font-bold px-6 py-3 rounded text-sm transition-all cursor-pointer">
              {language === "ta" ? "ஆலோசனை முன்பதிவு செய்ய" : language === "hi" ? "निजी परामर्श निर्धारित करें" : "Schedule Private Consultation"}
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
