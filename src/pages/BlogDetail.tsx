import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Facebook, Twitter, Linkedin, Award } from "lucide-react";
import { blogPosts } from "./Blog";
import { useLanguage } from "@/lib/LanguageContext";

const detailedBlogContent: Record<string, {
  paragraphs: { en: string[]; ta: string[] };
  faqs: { question: { en: string; ta: string }; answer: { en: string; ta: string } }[];
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
      ]
    },
    faqs: [
      {
        question: {
          en: "Are statements made during PMLA summons admissible in court?",
          ta: "PMLA சம்மனின் போது அளிக்கப்படும் வாக்குமூலங்கள் நீதிமன்றத்தில் ஏற்றுக்கொள்ளப்படுமா?"
        },
        answer: {
          en: "Yes, under Section 50 of the PMLA, statements recorded by an ED officer are admissible in court, making early legal representation essential.",
          ta: "ஆம், PMLA இன் பிரிவு 50 இன் கீழ், ED அதிகாரியால் பதிவு செய்யப்படும் வாக்குமூலங்கள் நீதிமன்றத்தில் ஏற்றுக்கொள்ளத்தக்கவை, இதனால் ஆரம்பகட்ட சட்டப் பிரதிநிதித்துவம் அவசியமாகிறது."
        }
      },
      {
        question: {
          en: "How long can a property remain attached under PMLA?",
          ta: "PMLA இன் கீழ் ஒரு சொத்து எவ்வளவு காலம் முடக்கப்பட்டிருக்கும்?"
        },
        answer: {
          en: "A provisional attachment order remains in force for up to 180 days, during which it must be confirmed by the Adjudicating Authority.",
          ta: "ஒரு தற்காலிக சொத்து முடக்க உத்தரவு 180 நாட்கள் வரை நடைமுறையில் இருக்கும், அதற்குள் அது தீர்ப்பளிக்கும் அதிகார அமைப்பால் உறுதி செய்யப்பட வேண்டும்."
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
      ]
    },
    faqs: [
      {
        question: {
          en: "What triggers a GST audit?",
          ta: "ஜிஎஸ்டி தணிக்கையைத் தூண்டுவது எது?"
        },
        answer: {
          en: "Common triggers include discrepancies in Input Tax Credit (ITC) reconciliation, unusual profit margins, or systemic delays in filings.",
          ta: "உள்ளீட்டு வரி வரவு (ITC) சமரசத்தில் உள்ள முரண்பாடுகள், அசாதாரண லாப வரம்புகள் அல்லது வரி தாக்கல் செய்வதில் உள்ள முறையான தாமதங்கள் ஆகியவை பொதுவான காரணங்களாகும்."
        }
      },
      {
        question: {
          en: "Can a GST demand order be challenged immediately in the High Court?",
          ta: "ஜிஎஸ்டி தேவை உத்தரவை உடனடியாக உயர் நீதிமன்றத்தில் சவால் செய்ய முடியுமா?"
        },
        answer: {
          en: "Typically, you must exhaust the statutory appeal route before the Commissioner Appeals and Tribunal. Writ petitions in High Courts are only entertained in cases of severe procedural violations or natural justice breaches.",
          ta: "பொதுவாக, நீங்கள் ஆணையர் (மேல்முறையீடு) மற்றும் தீர்ப்பாயத்தின் முன் சட்டப்பூர்வ மேல்முறையீட்டு வழியைப் பயன்படுத்த வேண்டும். நடைமுறை மீறல்கள் அல்லது இயற்கை நீதி மீறல் வழக்குகளில் மட்டுமே உயர் நீதிமன்றங்களில் ரிட் மனுக்கள் பரிசீலிக்கப்படும்."
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
      ]
    },
    faqs: [
      {
        question: {
          en: "Is domain squatting considered trademark infringement?",
          ta: "டொமைன் ஆக்கிரமிப்பு வர்த்தக முத்திரை மீறலாகக் கருதப்படுமா?"
        },
        answer: {
          en: "Yes, registering a domain name that matches or is deceptively similar to a registered trademark with bad faith intent constitutes passing-off and can be challenged legally.",
          ta: "ஆம். கெட்ட எண்ணத்துடன் பதிவுசெய்யப்பட்ட வர்த்தக முத்திரைக்கு ஒத்த அல்லது ஏமாற்றும் வகையில் டொமைன் பெயரைப் பதிவுசெய்வது சட்டப்படி சவால் செய்யப்படலாம்."
        }
      },
      {
        question: {
          en: "What is the benefit of a Cease & Desist letter?",
          ta: "சட்ட எச்சரிக்கை கடிதத்தின் (Cease & Desist) நன்மை என்ன?"
        },
        answer: {
          en: "It formally documents the infringer's awareness of your mark, which increases the likelihood of awarding punitive damages if the case proceeds to litigation.",
          ta: "இவை உங்கள் முத்திரையைப் பற்றிய மீறுபவரின் விழிப்புணர்வை முறையாகப் பதிவு செய்கிறது, இது வழக்கு விசாரணைக்குச் சென்றால் இழப்பீடு பெறுவதற்கான வாய்ப்பை அதிகரிக்கிறது."
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
      ]
    },
    faqs: [
      {
        question: {
          en: "Can a builder modify project plans without buyer consent?",
          ta: "வாங்குபவரின் ஒப்புதல் இன்றி பில்டர் திட்ட வரைபடங்களை மாற்ற முடியுமா?"
        },
        answer: {
          en: "No, under RERA, developers must obtain the written consent of at least two-thirds of allottees before making structural modifications to project plans.",
          ta: "இல்லை, RERA இன் கீழ், டெவலப்பர்கள் திட்ட வரைபடங்களில் கட்டமைப்பு மாற்றங்களைச் செய்வதற்கு முன் குறைந்தது மூன்றில் இரண்டு பங்கு வாங்குபவர்களின் எழுத்துப்பூர்வ ஒப்புதலைப் பெற வேண்டும்."
        }
      },
      {
        question: {
          en: "How long does a RERA dispute hearing take?",
          ta: "RERA தகராறு விசாரணை எவ்வளவு காலம் எடுக்கும்?"
        },
        answer: {
          en: "Statutorily, RERA complaints are intended to be resolved within 60 days, though administrative backlogs can extend this to 6-9 months.",
          ta: "சட்டப்படி, RERA புகார்கள் 60 நாட்களுக்குள் தீர்க்கப்பட வேண்டும், இருப்பினும் நிர்வாக தாமதங்களால் இது 6-9 மாதங்கள் வரை நீட்டிக்கப்படலாம்."
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

  const categoryText = language === "en" ? post.category.en : post.category.ta;
  const titleText = language === "en" ? post.title.en : post.title.ta;
  const dateText = language === "en" ? post.date.en : post.date.ta;
  const readTimeText = language === "en" ? post.readTime.en : post.readTime.ta;
  const authorTitleText = language === "en" ? post.authorTitle.en : post.authorTitle.ta;
  const paragraphs = language === "en" ? detail.paragraphs.en : detail.paragraphs.ta;
  const faqs = detail.faqs;

  // Inject structured JSON-LD FAQ Metadata for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": language === "en" ? faq.question.en : faq.question.ta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": language === "en" ? faq.answer.en : faq.answer.ta
      }
    }))
  };

  return (
    <div className="py-24 bg-surface min-h-screen relative">
      
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
          <ArrowLeft className="mr-2 h-4 w-4" /> {language === "en" ? "Back to Knowledge Hub" : "கட்டுரைகள் பகுதிக்குத் திரும்பவும்"}
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
              {language === "en" ? "Drafted by:" : "எழுதியவர்:"} <strong>{post.author}</strong> ({authorTitleText})
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
              {language === "en" ? "Share Legal Insight:" : "பகிர்வதற்கு:"}
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
              {language === "en" ? "Frequently Asked Questions" : "அடிக்கடி கேட்கப்படும் கேள்விகள்"}
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const qText = language === "en" ? faq.question.en : faq.question.ta;
                const aText = language === "en" ? faq.answer.en : faq.answer.ta;
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
            {language === "en" ? "Need Direct Case Guidance?" : "உங்களுக்கு சட்ட ஆலோசனை தேவையா?"}
          </h3>
          <p className="text-xs text-muted-foreground mb-6 max-w-lg mx-auto">
            {language === "en"
              ? "Schedule a private, privileged consultation with our senior partners regarding PMLA, GST audits, or corporate restructuring."
              : "வழக்குகள், ஜிஎஸ்டி தணிக்கைகள் அல்லது கார்ப்பரேட் விவகாரங்கள் தொடர்பாக எங்கள் மூத்த வழக்கறிஞர்களுடன் ஒரு தனிப்பட்ட ஆலோசனையைத் திட்டமிடுங்கள்."}
          </p>
          <Link to="/book-consultation">
            <button className="bg-primary text-primary-foreground hover:bg-primary/95 font-bold px-6 py-3 rounded text-sm transition-all cursor-pointer">
              {language === "en" ? "Schedule Private Consultation" : "ஆலோசனை முன்பதிவு செய்ய"}
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
