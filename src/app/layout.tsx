import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

import TRPCProvider from "@/lib/trpc/Provider";
import AuthProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "Araththaai – AKM Associates & Legal Consultants",
  description: "Premium, modern, secure, scalable, responsive, and production-ready Legal Consultancy Platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground pt-20">
        <AuthProvider>
          <TRPCProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </TRPCProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
