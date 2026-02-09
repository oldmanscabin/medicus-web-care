"use client";

import { motion } from "framer-motion";
import { Quote, Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

const testimonialNames = ["Maria S.", "Thomas K.", "Dr. Petra M.", "Hans W.", "Claudia R.", "Stefan B."];

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = testimonialNames.map((name, i) => ({
    text: t(`testimonials.t${i + 1}`),
    name,
    rating: 5,
  }));

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("testimonials.title")} <span className="text-primary">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Auto-scrolling Carousel */}
        <div className="relative mb-12">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1 * (testimonials.length * 384)], // 384 = card width (352px) + gap (32px)
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[352px] bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/20 mb-4" />

                {/* Text */}
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Name */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{t("testimonials.verified")}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Google Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => window.open("https://www.google.com/maps/place/Patients+transportation+service+in+bonn+Germany/@50.7433838,7.0098411,13z/data=!3m1!5s0x47bee1c225edf6d1:0xdcdb590cd0a96df5!4m10!1m2!2m1!1smedicus+bonn!3m6!1s0xa228ba44833b9e03:0xb53c373c21cba6e5!8m2!3d50.7375785!4d7.0702766!15sCgxtZWRpY3VzIGJvbm6SASJoYW5kaWNhcHBlZF90cmFuc3BvcnRhdGlvbl9zZXJ2aWNl4AEA!16s%2Fg%2F11kbnkqwl9?entry=ttu&g_ep=EgoyMDI2MDIwMy4wIKXMDSoASAFQAw%3D%3D", "_blank")}
            className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <Star className="h-5 w-5 mr-2 fill-yellow-400 text-yellow-400" />
            {t("testimonials.google")}
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
