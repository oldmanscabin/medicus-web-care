"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
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
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo.src} alt="Medicus" className="h-10 md:h-12 w-auto mb-4" />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 text-lg font-bold mb-4 md:mb-6">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("footer.home"), path: "#" },
                { label: t("footer.servicesLink"), path: "#leistungen" },
                { label: t("footer.aboutLink"), path: "#ueber-uns" },
                { label: t("footer.contactLink"), path: "#kontakt" },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleScroll(e, item.path)}
                    className="text-gray-600 hover:text-primary transition-colors text-sm md:text-base flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 text-lg font-bold mb-4 md:mb-6">{t("footer.ourServices")}</h4>
            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("footer.dialysis")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("footer.daycare")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("footer.private")}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{t("footer.hospital")}</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 text-lg font-bold mb-4 md:mb-6">{t("footer.contact")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{t("footer.phone")}</p>
                  <a href="tel:+492289473203" className="text-sm md:text-base text-gray-900 font-semibold hover:text-primary transition-colors">
                    0228 94732030
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{t("footer.email")}</p>
                  <a href="mailto:info@medi-cus.eu" className="text-sm md:text-base text-gray-900 font-semibold hover:text-primary transition-colors break-all">
                    info@medi-cus.eu
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{t("footer.address")}</p>
                  <p className="text-sm md:text-base text-gray-900 font-semibold leading-relaxed">Siemensstr. 36<br />53121 Bonn</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">{t("footer.hours")}</p>
                  <p className="text-sm md:text-base text-gray-900 font-semibold">{t("footer.hoursValue")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/datenschutz" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
              <Link href="/impressum" className="hover:text-primary transition-colors">{t("footer.imprint")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
