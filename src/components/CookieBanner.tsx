"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Shield, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const { t } = useLanguage();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(savedPreferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const cookieCategories = [
    {
      id: "necessary",
      titleKey: "cookie.necessary",
      descKey: "cookie.necessaryDesc",
      required: true,
      items: [
        "Session-Cookies",
        "Cookie-Consent",
        "Security-Cookies",
      ],
    },
    {
      id: "preferences",
      titleKey: "cookie.preferences",
      descKey: "cookie.preferencesDesc",
      required: false,
      items: [
        "Language Settings",
        "User Preferences",
        "Layout Settings",
      ],
    },
    {
      id: "statistics",
      titleKey: "cookie.statistics",
      descKey: "cookie.statisticsDesc",
      required: false,
      items: [
        "Google Analytics",
        "Visitor Count",
        "Page Views",
      ],
    },
    {
      id: "marketing",
      titleKey: "cookie.marketing",
      descKey: "cookie.marketingDesc",
      required: false,
      items: [
        "Facebook Pixel",
        "Google Ads",
        "Retargeting-Cookies",
      ],
    },
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-2 border-gray-200 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-6 lg:py-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Icon & Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {t("cookie.title")}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {t("cookie.text")}{" "}
                      <Link href="/datenschutz" className="text-primary hover:underline font-medium">
                        {t("cookie.learnMore")}
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
                  <Button
                    onClick={() => setShowSettings(true)}
                    variant="outline"
                    className="text-sm font-semibold px-6 py-5 border-2 border-gray-300 hover:bg-gray-50 w-full sm:w-auto"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    {t("cookie.settings")}
                  </Button>
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="text-sm font-semibold px-6 py-5 border-2 border-gray-300 hover:bg-gray-50 w-full sm:w-auto"
                  >
                    {t("cookie.reject")}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="text-sm font-semibold px-6 py-5 bg-primary hover:bg-primary-dark w-full sm:w-auto"
                  >
                    {t("cookie.acceptAll")}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[101]"
              onClick={() => setShowSettings(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-4 lg:inset-auto lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-full lg:max-w-3xl z-[102] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 relative">
                <button
                  onClick={() => setShowSettings(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">{t("cookie.settingsTitle")}</h2>
                    <p className="text-sm text-white/90 mt-1">
                      {t("cookie.settingsSubtitle")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="max-h-[60vh] overflow-y-auto p-6">
                <div className="space-y-4">
                  {cookieCategories.map((category) => (
                    <div
                      key={category.id}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden"
                    >
                      {/* Category Header */}
                      <div className="bg-gray-50 p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <button
                              onClick={() => toggleCategory(category.id)}
                              className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                              {expandedCategory === category.id ? (
                                <ChevronUp className="h-5 w-5" />
                              ) : (
                                <ChevronDown className="h-5 w-5" />
                              )}
                            </button>
                            <h3 className="font-bold text-gray-900">{t(category.titleKey)}</h3>
                            {category.required && (
                              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-semibold">
                                {t("cookie.alwaysActive")}
                              </span>
                            )}
                          </div>
                          {!category.required && (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences[category.id as keyof CookiePreferences]}
                                onChange={(e) =>
                                  setPreferences({
                                    ...preferences,
                                    [category.id]: e.target.checked,
                                  })
                                }
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          )}
                        </div>
                      </div>

                      {/* Category Details */}
                      <AnimatePresence>
                        {expandedCategory === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 border-t border-gray-200 bg-white">
                              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                {t(category.descKey)}
                              </p>
                              <div className="space-y-2">
                                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                                  {t("cookie.examples")}:
                                </p>
                                <ul className="space-y-1">
                                  {category.items.map((item, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Hinweis:</strong> {t("cookie.notice")}{" "}
                    <Link href="/datenschutz" className="text-primary hover:underline font-semibold">
                      Datenschutzerklärung
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleRejectAll}
                    variant="outline"
                    className="flex-1 text-sm font-semibold py-5 border-2"
                  >
                    {t("cookie.rejectAll")}
                  </Button>
                  <Button
                    onClick={handleSavePreferences}
                    className="flex-1 text-sm font-semibold py-5 bg-gray-700 hover:bg-gray-800"
                  >
                    {t("cookie.saveSelection")}
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="flex-1 text-sm font-semibold py-5 bg-primary hover:bg-primary-dark"
                  >
                    {t("cookie.acceptAll")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieBanner;
