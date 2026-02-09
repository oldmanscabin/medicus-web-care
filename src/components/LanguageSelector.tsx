"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import type { Language as LangType } from "@/lib/translations";

interface Language {
  code: LangType;
  name: string;
  nativeName: string;
  countryCode: string;
}

const languages: Language[] = [
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    countryCode: "de",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    countryCode: "gb",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    countryCode: "sa",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    countryCode: "fr",
  },
  {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    countryCode: "ru",
  },
  {
    code: "uk",
    name: "Ukrainian",
    nativeName: "Українська",
    countryCode: "ua",
  },
];

const FlagImg = ({ countryCode, size = 24, className = "" }: { countryCode: string; size?: number; className?: string }) => (
  <img
    src={`https://flagcdn.com/w80/${countryCode}.png`}
    srcSet={`https://flagcdn.com/w160/${countryCode}.png 2x`}
    width={size}
    height={Math.round(size * 0.75)}
    alt=""
    className={`inline-block object-cover rounded-sm ${className}`}
    style={{ aspectRatio: '4/3' }}
  />
);

const LanguageSelector = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [selected, setSelected] = useState<LangType>(language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("user-language");
    if (!savedLanguage) {
      // Wait for cookie consent before showing language dialog
      const checkCookieConsent = () => {
        const consent = localStorage.getItem("cookie-consent");
        if (consent) {
          setTimeout(() => setShowDialog(true), 500);
        } else {
          // Check again in 500ms
          setTimeout(checkCookieConsent, 500);
        }
      };
      // Start checking after a short delay
      setTimeout(checkCookieConsent, 500);
    }
  }, []);

  useEffect(() => {
    setSelected(language);
  }, [language]);

  const handleLanguageSelect = (languageCode: LangType) => {
    setSelected(languageCode);
    setLanguage(languageCode);
    localStorage.setItem("language-selected-at", new Date().toISOString());
    setShowDialog(false);
    setShowFloatingMenu(false);
  };

  const currentLang = languages.find(l => l.code === language);

  return (
    <>
      {/* Floating Language Button */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <AnimatePresence>
          {showFloatingMenu && (
            <>
              {/* Backdrop for floating menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[89]"
                onClick={() => setShowFloatingMenu(false)}
              />
              {/* Floating dropdown */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-56 z-[91]"
              >
                <div className="p-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left ${
                        language === lang.code
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      <FlagImg countryCode={lang.countryCode} size={24} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{lang.nativeName}</p>
                        <p className="text-[10px] text-gray-400">{lang.name}</p>
                      </div>
                      {language === lang.code && (
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Floating button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          onClick={() => setShowFloatingMenu(!showFloatingMenu)}
          className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
          title="Change language"
        >
          {currentLang ? (
            <FlagImg countryCode={currentLang.countryCode} size={24} />
          ) : (
            <Globe className="h-5 w-5 text-gray-600" />
          )}
        </motion.button>
      </div>

      {/* Initial Dialog (first visit only) */}
      <AnimatePresence>
        {showDialog && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150]"
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-xl h-fit max-h-[90vh] z-[151] bg-white rounded-2xl shadow-2xl overflow-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white px-6 py-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_60%)]"></div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="relative flex flex-col items-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Welcome! Willkommen! !مرحبا Bienvenue! Добро пожаловать! Ласкаво просимо!</h2>
                  <p className="text-white/90 text-sm mt-1">
                    Please select your preferred language
                  </p>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language, index) => (
                    <motion.button
                      key={language.code}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                      onClick={() => handleLanguageSelect(language.code)}
                      className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                        selected === language.code
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-gray-200 hover:border-primary/50 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Flag */}
                        <FlagImg countryCode={language.countryCode} size={32} />
                        
                        {/* Language Info */}
                        <div className="flex-1 text-left min-w-0">
                          <p className="text-base font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
                            {language.nativeName}
                          </p>
                          <p className="text-xs text-gray-500">{language.name}</p>
                        </div>

                        {/* Check Mark */}
                        {selected === language.code && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                          >
                            <Check className="h-4 w-4 text-white" />
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Continue Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-5"
                >
                  <Button
                    onClick={() => handleLanguageSelect(selected)}
                    className="w-full text-base font-semibold py-5 bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    {t("lang.continue")} / Continue
                  </Button>
                </motion.div>

                {/* Note */}
                <p className="text-xs text-gray-400 text-center mt-3">
                  {t("lang.note")}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageSelector;
