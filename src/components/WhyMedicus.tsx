"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Ambulance, Award, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WhyMedicus = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      statKey: "why.patients.stat",
      titleKey: "why.patients.title",
      descKey: "why.patients.desc",
    },
    {
      icon: Clock,
      statKey: "why.available.stat",
      titleKey: "why.available.title",
      descKey: "why.available.desc",
    },
    {
      icon: ShieldCheck,
      statKey: "why.safety.stat",
      titleKey: "why.safety.title",
      descKey: "why.safety.desc",
    },
    {
      icon: Award,
      statKey: "why.experience.stat",
      titleKey: "why.experience.title",
      descKey: "why.experience.desc",
    },
  ];
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("why.title")} <span className="text-white/90">{t("why.titleHighlight")}</span>?
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto">
            {t("why.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-5 md:p-8 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-primary transition-colors duration-300" />
                </div>
              </div>

              {/* Stat */}
              <div className="mb-2 md:mb-3">
                <span className="text-3xl md:text-5xl font-bold text-white block">
                  {t(feature.statKey)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">
                {t(feature.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-white/70 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMedicus;
