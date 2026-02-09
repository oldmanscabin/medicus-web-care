import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import LanguageSelector from "@/components/LanguageSelector";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medicus Dienstleistungen GmbH - Krankentransport Bonn",
  description: "Professioneller Krankentransport mit Herz - Sicher, komfortabel und zuverlässig. Siemensstr. 36, 53121 Bonn. Tel: 0228 94732030",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <TooltipProvider>
            <LanguageSelector />
            <Navbar />
            {children}
            <CookieBanner />
            <Footer />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
