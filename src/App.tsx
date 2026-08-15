import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import React from "react";

// Static imports for single-file bundling
import Home from "@/pages/Home";
import About from "@/pages/About";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Admin from "@/pages/Admin";
import AdminConsultations from "@/pages/AdminConsultations";
import SignIn from "@/pages/SignIn";

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

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
      <Helmet>
        <title>Araththaai – AKM Associates & Legal Consultants</title>
        <meta name="description" content="Premium, modern, secure, scalable, responsive, and production-ready Legal Consultancy Platform." />
      </Helmet>
      <BrowserRouter>
        <Routes>
          {/* Routes with Navbar & Footer */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
          <Route path="/book" element={<PublicLayout><Book /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/services" element={<PublicLayout><Services /></PublicLayout>} />
          <Route path="/services/:slug" element={<PublicLayout><ServiceDetail /></PublicLayout>} />
          
          {/* Admin & Auth Routes (without standard Navbar/Footer) */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/consultations" element={<AdminConsultations />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
