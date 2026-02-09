"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#kontakt");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Medizinischer Transport"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/70 via-primary/65 to-primary-dark/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20"
            >
              <Award className="h-4 w-4 text-yellow-400" />
              <span className="text-xs font-semibold tracking-wide">{t("hero.badge")}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] mb-4"
            >
              {t("hero.heading1")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
                {t("hero.heading2")}
              </span>
              <br />
              {t("hero.heading3")}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/95 leading-relaxed mb-6 lg:mb-8 max-w-3xl mx-auto px-4"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="text-sm font-semibold tracking-wide px-6 py-5 lg:px-8 lg:py-6 rounded-full bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 group w-full sm:w-auto"
              >
                <a href="#kontakt" onClick={handleScroll}>
                  <Calendar className="mr-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:rotate-12 transition-transform" />
                  {t("hero.bookRide")}
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                className="text-sm font-semibold tracking-wide px-6 py-5 lg:px-8 lg:py-6 rounded-full bg-white/20 text-white border-2 border-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 group shadow-2xl w-full sm:w-auto"
              >
                <a href="tel:+492289473203">
                  <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform" />
                  0228 94732030
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
