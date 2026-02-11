"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#");
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.home"), path: "#" },
    { label: t("nav.services"), path: "#leistungen" },
    { label: t("nav.about"), path: "#ueber-uns" },
    { label: t("nav.contact"), path: "#kontakt" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setActiveSection(path);
    
    // If we're not on the home page, navigate there first
    if (pathname !== "/") {
      router.push("/" + path);
      setMobileOpen(false);
      return;
    }
    
    if (path === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(path);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <a href="#" onClick={(e) => handleScroll(e, "#")} className="flex items-center gap-3 group">
            <img src={logo.src} alt="Medicus" className="h-20 w-auto transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className={`text-sm font-semibold tracking-widest transition-all duration-300 relative group ${
                  activeSection === item.path ? "text-primary" : "text-gray-700 hover:text-primary"
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+492289473203" 
              className="flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">0228 94732030</span>
            </a>
            <Button 
              asChild 
              size="lg" 
              className="text-sm font-semibold tracking-wide px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#kontakt" onClick={(e) => handleScroll(e, "#kontakt")}>{t("nav.bookNow")}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="container mx-auto px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className={`block py-4 px-4 text-sm font-semibold tracking-widest rounded-lg transition-all ${
                  activeSection === item.path 
                    ? "bg-primary text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a 
                href="tel:+492289473203" 
                className="flex items-center gap-3 py-3 px-4 text-primary font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>0228 94732030</span>
              </a>
              <Button 
                asChild 
                size="lg" 
                className="w-full text-sm font-semibold tracking-wide py-6 rounded-full"
              >
                <a href="#kontakt" onClick={(e) => handleScroll(e, "#kontakt")}>{t("nav.bookNow")}</a>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
