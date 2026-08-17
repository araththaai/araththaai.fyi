import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import React from "react";

// Existing Imports
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import AdminConsultations from "@/pages/AdminConsultations";
import SignIn from "@/pages/SignIn";

// New Page Imports
import PracticeAreas from "@/pages/PracticeAreas";
import PracticeAreaDetail from "@/pages/PracticeAreaDetail";
import Attorneys from "@/pages/Attorneys";
import AttorneyDetail from "@/pages/AttorneyDetail";
import CaseResults from "@/pages/CaseResults";
import BookConsultation from "@/pages/BookConsultation";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Disclaimer from "@/pages/Disclaimer";
import NotFound from "@/pages/NotFound";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { GoToTopButton } from "@/components/shared/GoToTopButton";
import { LanguageProvider } from "@/lib/LanguageContext";

// Layout wrapper for public pages that need Navbar and Footer
function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Helmet>
          <title>Araththaai – AKM Associates & Legal Consultants</title>
          <meta name="description" content="Premium, modern, secure, scalable, responsive, and production-ready Legal Consultancy Platform." />
          <link rel="icon" type="image/jpeg" href="/lgo.jpg" />
        </Helmet>
        <BrowserRouter>
        <ScrollToTop />
        <GoToTopButton />
        <Routes>
          {/* Public Pages Layout wrapper */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          
          {/* Practice Areas */}
          <Route path="/practice-areas" element={<PublicLayout><PracticeAreas /></PublicLayout>} />
          <Route path="/practice-areas/:slug" element={<PublicLayout><PracticeAreaDetail /></PublicLayout>} />
          
          {/* Backwards compatibility for old /services route */}
          <Route path="/services" element={<Navigate to="/practice-areas" replace />} />
          <Route path="/services/:slug" element={<PublicLayout><PracticeAreaDetail /></PublicLayout>} />
          
          {/* Attorneys */}
          <Route path="/attorneys" element={<PublicLayout><Attorneys /></PublicLayout>} />
          <Route path="/attorneys/:slug" element={<PublicLayout><AttorneyDetail /></PublicLayout>} />
          
          {/* Case Results */}
          <Route path="/case-results" element={<PublicLayout><CaseResults /></PublicLayout>} />
          
          {/* Consultation & Booking */}
          <Route path="/book-consultation" element={<PublicLayout><BookConsultation /></PublicLayout>} />
          {/* Backwards compatibility for old /book route */}
          <Route path="/book" element={<Navigate to="/book-consultation" replace />} />
          
          {/* Blog / Insights */}
          <Route path="/blog" element={<PublicLayout><Blog /></PublicLayout>} />
          <Route path="/blog/:slug" element={<PublicLayout><BlogDetail /></PublicLayout>} />
          {/* Alias for knowledge hub if referenced */}
          <Route path="/knowledge-hub" element={<Navigate to="/blog" replace />} />
          
          {/* Legal Compliance */}
          <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicy /></PublicLayout>} />
          <Route path="/terms-of-service" element={<PublicLayout><TermsOfService /></PublicLayout>} />
          <Route path="/disclaimer" element={<PublicLayout><Disclaimer /></PublicLayout>} />
          
          {/* Admin & Auth Routes (without standard Navbar/Footer) */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/consultations" element={<AdminConsultations />} />
          <Route path="/sign-in" element={<SignIn />} />
          
          {/* 404 Route */}
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
