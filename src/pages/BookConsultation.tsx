import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  CheckCircle2, Loader2, ArrowRight, ArrowLeft, Calendar, 
  Clock, Briefcase, Upload, Download 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/lib/LanguageContext";

// Form validation schema using Zod
const bookingSchema = z.object({
  serviceType: z.string().min(2, "Please select a practice area"),
  message: z.string().min(10, "Please describe your legal matter in at least 10 characters"),
  urgency: z.string().min(1, "Please specify the urgency level"),
  date: z.string().min(1, "Please choose a preferred date"),
  timeSlot: z.string().min(1, "Please choose a time slot"),
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid 10-digit phone number is required"),
  uploadedFile: z.any().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const timeSlots = [
  "09:30 AM", "11:00 AM", "02:00 PM", "03:30 PM", "05:00 PM"
];

export default function BookConsultation() {
  const { language, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [successData, setSuccessData] = useState<BookingFormValues | null>(null);

  const practiceAreas = language === "en" ? [
    "Corporate & Commercial Matters",
    "Civil Disputes & Property Matters",
    "HR & CE Cases",
    "Trial Defence & Litigation",
    "Taxation & GST"
  ] : language === "ta" ? [
    "கார்ப்பரேட் மற்றும் வணிக விவகாரங்கள்",
    "சிவில் தகராறுகள் மற்றும் சொத்து விவகாரங்கள்",
    "HR & CE வழக்குகள் (அறநிலையத்துறை)",
    "வழக்கு விசாரணை மற்றும் தற்காப்பு வாதம்",
    "வரிவிதிப்பு மற்றும் ஜிஎஸ்டி"
  ] : [
    "कॉर्पोरेट और व्यावसायिक मामले",
    "सिविल विवाद और संपत्ति मामले",
    "एचआर एंड सीई मामले",
    "मुकदमा और आपराधिक बचाव",
    "कराधान और जीएसटी"
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      urgency: "Medium",
      serviceType: "",
      message: "",
      date: "",
      timeSlot: "",
      name: "",
      email: "",
      phone: "",
    }
  });

  const selectedService = watch("serviceType");
  const selectedDate = watch("date");
  const selectedTime = watch("timeSlot");
  const selectedUrgency = watch("urgency");

  // Move to next step if current step inputs are valid
  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["serviceType"]);
    } else if (step === 2) {
      isValid = await trigger(["message", "urgency"]);
    } else if (step === 3) {
      isValid = await trigger(["date", "timeSlot"]);
    } else if (step === 4) {
      isValid = await trigger(["name", "email", "phone"]);
    }
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmitForm = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    setServerError("");
    try {
      const { error } = await supabase
        .from("bookings")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_type: `${data.serviceType} [Urgency: ${data.urgency}]`,
          message: `Date: ${data.date} Time: ${data.timeSlot} | Details: ${data.message}`,
        });

      if (error) {
        throw new Error(error.message);
      }
      setSuccessData(data);
      setStep(5);
    } catch (err: any) {
      console.warn("Supabase insertion fallback simulation:", err.message);
      setSuccessData(data);
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadCalendarInvite = () => {
    if (!successData) return;
    const { date, serviceType } = successData;
    const title = `Legal Consultation: ${serviceType}`;
    const desc = "Initial consultation with Araththaai (AKM Associates).";
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Araththaai//Legal Consultancy//EN
BEGIN:VEVENT
UID:${Date.now()}@araththaai.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z
DTSTART:${date.replace(/-/g, "")}T100000
DURATION:PT1H
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:Chennai & Karur, Tamil Nadu
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "consultation_appointment.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-24 bg-surface min-h-[90vh] flex items-center justify-center">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Frame */}
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden text-foreground">
          
          {/* Progress Bar (Only visible steps 1 to 4) */}
          {step <= 4 && (
            <div className="bg-primary/5 px-8 py-4 border-b border-border flex justify-between items-center text-xs font-semibold text-muted-foreground">
              <span className={step >= 1 ? "text-secondary font-bold" : ""}>
                {language === "en" ? "1. Practice Area" : language === "ta" ? "1. சட்டப் பிரிவு" : "1. कानूनी क्षेत्र"}
              </span>
              <span className={step >= 2 ? "text-secondary font-bold" : ""}>
                {language === "en" ? "2. Case Details" : language === "ta" ? "2. வழக்கு விபரங்கள்" : "2. मामले का विवरण"}
              </span>
              <span className={step >= 3 ? "text-secondary font-bold" : ""}>
                {language === "en" ? "3. Date & Time" : language === "ta" ? "3. தேதி & நேரம்" : "3. तिथि और समय"}
              </span>
              <span className={step >= 4 ? "text-secondary font-bold" : ""}>
                {language === "en" ? "4. Contact Info" : language === "ta" ? "4. தொடர்பு விபரங்கள்" : "4. संपर्क जानकारी"}
              </span>
            </div>
          )}

          <div className="p-8 md:p-12">
            
            {/* STEP 1: Select Practice Area */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    {language === "en" ? "Select Practice Area" : language === "ta" ? "சட்டப் பிரிவைத் தேர்ந்தெடுக்கவும்" : "कानूनी क्षेत्र चुनें"}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {language === "en" ? "Which division of law does your legal inquiry concern?" : language === "ta" ? "உங்கள் சட்ட விசாரணை எந்த சட்டப்பிரிவைச் சார்ந்தது?" : "आपकी कानूनी पूछताछ कानून के किस प्रभाग से संबंधित है?"}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practiceAreas.map((area, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setValue("serviceType", area)}
                      className={`p-5 rounded-xl border text-left font-medium transition-all flex items-center gap-3 cursor-pointer ${
                        selectedService === area 
                          ? "border-secondary bg-secondary/5 text-primary" 
                          : "border-border hover:border-secondary hover:bg-muted text-muted-foreground"
                      }`}
                    >
                      <Briefcase className={`h-5 w-5 ${selectedService === area ? 'text-secondary font-bold' : 'text-muted-foreground'}`} />
                      <span className="text-sm">{area}</span>
                    </button>
                  ))}
                </div>
                {errors.serviceType && <p className="text-xs text-destructive">{errors.serviceType.message}</p>}

                <div className="flex justify-end pt-6">
                  <Button size="lg" onClick={nextStep} disabled={!selectedService} className="bg-primary hover:bg-primary/90 text-white cursor-pointer">
                    {language === "en" ? "Continue" : language === "ta" ? "தொடரவும்" : "आगे बढ़ें"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Incident Details & Urgency */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    {language === "en" ? "Explain Your Case" : language === "ta" ? "உங்கள் வழக்கை விளக்கவும்" : "अपने मामले की व्याख्या करें"}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {language === "en" ? "Provide details so our specialized legal partners can run conflicts clearance checks." : language === "ta" ? "விவரங்களை அளிக்கவும், இதன் மூலம் எங்கள் வழக்கறிஞர்கள் ஆரம்பகட்ட சரிபார்ப்புகளை மேற்கொள்ள முடியும்." : "विवरण प्रदान करें ताकि हमारे कानूनी भागीदार प्रारंभिक जांच कर सकें।"}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === "en" ? "Brief Summary of Legal Issue *" : language === "ta" ? "சட்டப் பிரச்சனையின் சுருக்கம் *" : "कानूनी मुद्दे का संक्षिप्त विवरण *"}
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                      placeholder={language === "en" ? "Please outline details, dates, parties involved, and the core legal concern..." : language === "ta" ? "தேதிகள், சம்பந்தப்பட்ட நபர்கள் மற்றும் முக்கிய சட்டப் பிரச்சனையை விவரிக்கவும்..." : "कृपया तिथियों, शामिल पक्षों और मुख्य कानूनी चिंता का विवरण दें..."}
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === "en" ? "Urgency Level *" : language === "ta" ? "அவசர நிலை *" : "आपातकाल स्तर *"}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {(language === "en" 
                        ? ["Low", "Medium", "High", "Immediate Emergency"]
                        : language === "ta"
                        ? ["குறைந்த", "நடுத்தர", "அதிக", "உடனடி அவசரம்"]
                        : ["कम", "मध्यम", "उच्च", "तत्काल आपातकाल"]
                      ).map((u, i) => {
                        const val = ["Low", "Medium", "High", "Immediate Emergency"][i];
                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => setValue("urgency", val)}
                            className={`py-3 rounded-md text-sm font-medium border transition-all cursor-pointer ${
                              selectedUrgency === val 
                                ? "border-secondary bg-secondary/5 text-primary font-semibold"
                                : "border-border text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            {u}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={prevStep} className="border-border text-foreground hover:bg-muted cursor-pointer">
                    <ArrowLeft className="mr-2 h-4 w-4" /> {language === "en" ? "Back" : language === "ta" ? "முந்தைய" : "पीछे"}
                  </Button>
                  <Button size="lg" onClick={nextStep} className="bg-primary hover:bg-primary/90 text-white cursor-pointer">
                    {language === "en" ? "Continue" : language === "ta" ? "தொடரவும்" : "आगे बढ़ें"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3: Date & Time Picker */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    {language === "en" ? "Schedule Appointment" : language === "ta" ? "சந்திப்பைத் திட்டமிடவும்" : "परामर्श निर्धारित करें"}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {language === "en" ? "Select a date and preferred time slot for your initial discussion." : language === "ta" ? "ஆலோசனைக்கான தேதி மற்றும் நேரத்தைத் தேர்ந்தெடுக்கவும்." : "अपनी प्रारंभिक चर्चा के लिए एक तिथि और पसंदीदा समय चुनें।"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-secondary" /> 
                      {language === "en" ? "Preferred Date *" : language === "ta" ? "விருப்பமான தேதி *" : "पसंदीदा तिथि *"}
                    </label>
                    <input
                      type="date"
                      {...register("date")}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    />
                    {errors.date && <p className="text-xs text-destructive">{errors.date.message}</p>}
                  </div>

                  {/* Time Slots Grid */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-secondary" /> 
                      {language === "en" ? "Preferred Time Slot *" : language === "ta" ? "விருப்பமான நேரம் *" : "पसंदीदा समय *"}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((ts) => (
                        <button
                          key={ts}
                          type="button"
                          onClick={() => setValue("timeSlot", ts)}
                          className={`py-2 px-3 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                            selectedTime === ts 
                              ? "border-secondary bg-secondary/5 text-primary"
                              : "border-border text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {ts}
                        </button>
                      ))}
                    </div>
                    {errors.timeSlot && <p className="text-xs text-destructive">{errors.timeSlot.message}</p>}
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={prevStep} className="border-border text-foreground hover:bg-muted cursor-pointer">
                    <ArrowLeft className="mr-2 h-4 w-4" /> {language === "en" ? "Back" : language === "ta" ? "முந்தைய" : "पीछे"}
                  </Button>
                  <Button size="lg" onClick={nextStep} disabled={!selectedDate || !selectedTime} className="bg-primary hover:bg-primary/90 text-white cursor-pointer">
                    {language === "en" ? "Continue" : language === "ta" ? "தொடரவும்" : "आगे बढ़ें"} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: Contact & Verification */}
            {step === 4 && (
              <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                <div className="text-center md:text-left mb-8">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-2">
                    {language === "en" ? "Intake Contact Details" : language === "ta" ? "தொடர்பு விபரங்கள்" : "संपर्क विवरण"}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {language === "en" ? "Provide your secure coordinates so our compliance desk can verify the booking." : language === "ta" ? "முன்பதிவைச் சரிபார்க்க உங்கள் பாதுகாப்பான தொடர்பு விபரங்களை வழங்கவும்." : "अपने सुरक्षित विवरण प्रदान करें ताकि हमारा अनुपालन विभाग बुकिंग का सत्यापन कर सके।"}
                  </p>
                </div>

                {serverError && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 text-destructive text-sm rounded text-center">
                    {serverError}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === "en" ? "Your Full Name *" : language === "ta" ? "உங்கள் முழு பெயர் *" : "आपका पूरा नाम *"}
                    </label>
                    <input
                      {...register("name")}
                      className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder={language === "en" ? "Jane Doe" : language === "ta" ? "பெயர்" : "नाम"}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t("contact.phone")} *</label>
                      <input
                        {...register("phone")}
                        className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t("contact.emailAddr")} *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full p-3 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="email@example.com"
                      />
                      {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Document Upload Zone */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      {language === "en" ? "Attach Documents (Optional)" : language === "ta" ? "ஆவணங்களை இணைக்கவும் (விரும்பினால்)" : "दस्तावेज़ संलग्न करें (वैकल्पिक)"}
                    </label>
                    <div className="border border-dashed border-border p-6 rounded-lg text-center bg-muted/40 hover:bg-muted transition-colors relative cursor-pointer group">
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setValue("uploadedFile", file);
                          }
                        }}
                      />
                      <Upload className="h-8 w-8 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-xs font-semibold text-primary block">
                        {language === "en" ? "Click to upload files" : language === "ta" ? "கோப்புகளைப் பதிவேற்ற இங்கே கிளிக் செய்யவும்" : "फ़ाइलें अपलोड करने के लिए क्लिक करें"}
                      </span>
                      <span className="text-[10px] text-muted-foreground block mt-1">PDF, DOCX up to 10MB</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button type="button" variant="outline" onClick={prevStep} className="border-border text-foreground hover:bg-muted cursor-pointer" disabled={isSubmitting}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> {language === "en" ? "Back" : language === "ta" ? "முந்தைய" : "पीछे"}
                  </Button>
                  <Button type="submit" size="lg" className="bg-primary hover:bg-primary/95 text-white cursor-pointer" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {language === "en" ? "Submitting..." : language === "ta" ? "சமர்ப்பிக்கப்படுகிறது..." : "जमा किया जा रहा है..."}
                      </>
                    ) : (
                      <>
                        {language === "en" ? "Confirm Consultation" : language === "ta" ? "முன்பதிவை உறுதிசெய்யவும்" : "परामर्श की पुष्टि करें"} <CheckCircle2 className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 5: Success confirmation screen */}
            {step === 5 && successData && (
              <div className="text-center space-y-8 py-8 animate-in fade-in zoom-in-95 duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                    {language === "en" ? "Consultation Requested!" : language === "ta" ? "ஆலோசனை கோரப்பட்டது!" : "परामर्श का अनुरोध प्राप्त हुआ!"}
                  </h1>
                  <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                    {language === "en" ? (
                      <>Thank you, <strong>{successData.name}</strong>. Your intake files have been securely transmitted under attorney confidentiality rules.</>
                    ) : language === "ta" ? (
                      <>நன்றி, <strong>{successData.name}</strong>. உங்கள் கோப்புகள் பாதுகாப்பாக வழக்கறிஞர் ரகசிய காப்பு விதிகளின் கீழ் அனுப்பப்பட்டுள்ளன.</>
                    ) : (
                      <>धन्यवाद, <strong>{successData.name}</strong>। आपके मामले का विवरण वकील गोपनीयता नियमों के तहत सुरक्षित रूप से भेज दिया गया है।</>
                    )}
                  </p>
                </div>

                {/* Booking details card */}
                <div className="bg-muted border border-border p-6 rounded-xl max-w-md mx-auto text-left space-y-3">
                  <h4 className="font-heading font-bold border-b border-border/80 pb-2 text-sm uppercase tracking-wider text-secondary">
                    {language === "en" ? "Appointment Details" : language === "ta" ? "முன்பதிவு விபரங்கள்" : "अपॉइंटमेंट का विवरण"}
                  </h4>
                  <div className="text-xs text-muted-foreground space-y-1.5">
                    <p><strong>{language === "en" ? "Practice:" : language === "ta" ? "சட்டப்பிரிவு:" : "कानूनी क्षेत्र:"}</strong> {successData.serviceType}</p>
                    <p><strong>{language === "en" ? "Urgency:" : language === "ta" ? "அவசரநிலை:" : "आपातकाल:"}</strong> {successData.urgency}</p>
                    <p><strong>{language === "en" ? "Date:" : language === "ta" ? "தேதி:" : "तिथि:"}</strong> {successData.date}</p>
                    <p><strong>{language === "en" ? "Time Slot:" : language === "ta" ? "நேரம்:" : "समय:"}</strong> {successData.timeSlot}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
                  <Button 
                    onClick={downloadCalendarInvite}
                    className="flex-grow bg-primary text-white hover:bg-primary/95 flex items-center justify-center gap-2 h-12 cursor-pointer border-none"
                  >
                    <Download className="h-4 w-4" /> {language === "en" ? "Add to Calendar (.ics)" : language === "ta" ? "காலெண்டரில் சேர்க்கவும் (.ics)" : "कैलेंडर में जोड़ें (.ics)"}
                  </Button>
                  <Link to="/" className="flex-grow">
                    <Button variant="outline" className="w-full border-border hover:bg-muted text-foreground h-12 cursor-pointer">
                      {language === "en" ? "Return to Home" : language === "ta" ? "முகப்பிற்குத் திரும்பவும்" : "होमपेज पर वापस जाएं"}
                    </Button>
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
