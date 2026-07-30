import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import TRPCProvider from "@/lib/trpc/Provider";
import AuthProvider from "@/components/SessionProvider";
import React, { Suspense, lazy } from "react";
import "./App.css";

// Lazy loaded pages
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Book = lazy(() => import("@/pages/Book"));
const Contact = lazy(() => import("@/pages/Contact"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Admin = lazy(() => import("@/pages/Admin"));
const AdminConsultations = lazy(() => import("@/pages/AdminConsultations"));
const SignIn = lazy(() => import("@/pages/SignIn"));

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
      <AuthProvider>
        <TRPCProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
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
            </Suspense>
          </BrowserRouter>
        </TRPCProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;

