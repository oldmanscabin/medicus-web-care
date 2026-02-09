"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import WhyMedicus from "@/components/WhyMedicus";
import Testimonials from "@/components/Testimonials";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import {
  HeartPulse,
  Radiation,
  Pill,
  Building2,
  Stethoscope,
  Dumbbell,
  Activity,
  Accessibility,
  BedDouble,
  Sun,
  MapPin,
  CalendarDays,
  Heart,
  ShieldCheck,
  HandHeart,
  Award,
  Phone,
  Mail,
  Clock,
  Send,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceItem {
  icon: React.ElementType;
  titleKey: string;
  descKey: string;
}

export default function Home() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const serviceCategories: { headingKey: string; services: ServiceItem[] }[] = [
    {
      headingKey: "services.cat.medical",
      services: [
        { icon: HeartPulse, titleKey: "services.dialysis.title", descKey: "services.dialysis.desc" },
        { icon: Pill, titleKey: "services.chemo.title", descKey: "services.chemo.desc" },
        { icon: Radiation, titleKey: "services.radiation.title", descKey: "services.radiation.desc" },
        { icon: Dumbbell, titleKey: "services.reha.title", descKey: "services.reha.desc" },
        { icon: Activity, titleKey: "services.physio.title", descKey: "services.physio.desc" },
        { icon: Activity, titleKey: "services.ergo.title", descKey: "services.ergo.desc" },
      ],
    },
    {
      headingKey: "services.cat.hospital",
      services: [
        { icon: Building2, titleKey: "services.hospitalAdmission.title", descKey: "services.hospitalAdmission.desc" },
        { icon: Stethoscope, titleKey: "services.hospitalDischarge.title", descKey: "services.hospitalDischarge.desc" },
      ],
    },
    {
      headingKey: "services.cat.special",
      services: [
        { icon: Accessibility, titleKey: "services.wheelchair.title", descKey: "services.wheelchair.desc" },
        { icon: BedDouble, titleKey: "services.stretcher.title", descKey: "services.stretcher.desc" },
        { icon: Sun, titleKey: "services.daycare.title", descKey: "services.daycare.desc" },
      ],
    },
    {
      headingKey: "services.cat.private",
      services: [
        { icon: MapPin, titleKey: "services.doctor.title", descKey: "services.doctor.desc" },
        { icon: CalendarDays, titleKey: "services.daily.title", descKey: "services.daily.desc" },
      ],
    },
  ];

  const values = [
    { icon: Heart, titleKey: "about.humanity", descKey: "about.humanityDesc" },
    { icon: ShieldCheck, titleKey: "about.safety", descKey: "about.safetyDesc" },
    { icon: HandHeart, titleKey: "about.care", descKey: "about.careDesc" },
    { icon: Award, titleKey: "about.experience", descKey: "about.experienceDesc" },
  ];

  const timeSlots = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00"
  ];

  const services = [
    { id: "dialyse", icon: HeartPulse, nameKey: "booking.service1" },
    { id: "tagespflege", icon: Sun, nameKey: "booking.service2" },
    { id: "privat", icon: MapPin, nameKey: "booking.service3" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedService) {
      toast({
        title: t("booking.missingInfo"),
        description: t("booking.missingInfoDesc"),
        variant: "destructive",
      });
      return;
    }
    toast({
      title: t("booking.submitted"),
      description: t("booking.submittedDesc"),
    });
    // Reset form
    setFormData({ name: "", phone: "", message: "" });
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedService("");
  };

  return (
    <main>
      <HeroSection />

      {/* Leistungen Section */}
      <section id="leistungen" className="py-12 md:py-24 scroll-mt-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
              {t("services.title")} <span className="text-primary">{t("services.titleHighlight")}</span>
            </h2>
            <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>

          {/* Services Grid - Compact for Mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {serviceCategories.flatMap(cat => cat.services).map((service, i) => (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="group bg-white border-2 border-gray-100 rounded-lg md:rounded-xl p-3 md:p-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xs md:text-base font-bold text-gray-900 mb-1 md:mb-2 leading-tight">
                  {t(service.titleKey)}
                </h3>
                <p className="text-[10px] md:text-sm text-gray-600 leading-snug md:leading-relaxed">
                  {t(service.descKey)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Button
              size="lg"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              {t("services.cta")}
            </Button>
          </motion.div>
        </div>
      </section>

      <WhyMedicus />
      <Testimonials />

      {/* Über uns Section */}
      <section id="ueber-uns" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("about.title")} <span className="text-primary">{t("about.titleHighlight")}</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch mb-16 md:mb-20 max-w-6xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] lg:min-h-[600px]"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img 
                  src="/about.jpg" 
                  alt="Medicus Team" 
                  className="w-full h-full object-cover"
                />
                {/* Optional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("about.whoWeAre")}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t("about.whoWeAreText")}
                </p>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {t("about.mission")}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {t("about.missionText")}
                </p>
              </div>

              {/* Value Points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.titleKey}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <v.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">{t(v.titleKey)}</h4>
                      <p className="text-xs md:text-sm text-gray-600">{t(v.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-16 md:py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("booking.title")} <span className="text-primary">{t("booking.titleHighlight")}</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t("booking.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Booking Form - Left Side (3 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Select Service */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">1</span>
                    {t("booking.step1")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <motion.button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-5 rounded-xl border-2 transition-all duration-300 ${
                          selectedService === service.id
                            ? "border-primary bg-primary/10 shadow-lg"
                            : "border-gray-200 bg-white hover:border-primary/50"
                        }`}
                      >
                        <service.icon className={`h-8 w-8 mx-auto mb-3 ${
                          selectedService === service.id ? "text-primary" : "text-gray-600"
                        }`} />
                        <p className={`text-sm font-semibold text-center ${
                          selectedService === service.id ? "text-primary" : "text-gray-700"
                        }`}>
                          {t(service.nameKey)}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Date */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">2</span>
                    {t("booking.step2")}
                  </h3>
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary/50 transition-colors">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: new Date() }}
                      className="mx-auto"
                      classNames={{
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        month: "space-y-4",
                        caption: "flex justify-center pt-1 relative items-center",
                        caption_label: "text-base font-bold text-gray-900",
                        nav: "space-x-1 flex items-center",
                        nav_button: "h-8 w-8 bg-transparent hover:bg-primary/10 rounded-lg transition-colors inline-flex items-center justify-center",
                        nav_button_previous: "absolute left-1",
                        nav_button_next: "absolute right-1",
                        table: "w-full border-collapse space-y-1",
                        head_row: "flex",
                        head_cell: "text-gray-500 rounded-md w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-normal hover:bg-primary/10 rounded-lg transition-colors",
                        day_selected: "bg-primary text-white hover:bg-primary/90 hover:text-white focus:bg-primary focus:text-white",
                        day_today: "bg-gray-100 text-gray-900 font-bold",
                        day_disabled: "text-gray-300 opacity-50",
                      }}
                    />
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-center"
                      >
                        <p className="text-sm font-semibold text-primary">
                          {t("booking.selected")}: {format(selectedDate, "PPP")}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Step 3: Select Time */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">3</span>
                    {t("booking.step3")}
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    <AnimatePresence mode="popLayout">
                      {timeSlots.map((time, i) => (
                        <motion.button
                          key={time}
                          type="button"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ delay: i * 0.02 }}
                          onClick={() => setSelectedTime(time)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                            selectedTime === time
                              ? "bg-primary text-white shadow-lg"
                              : "bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/50"
                          }`}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Step 4: Contact Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">4</span>
                    {t("booking.step4")}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t("booking.name")} *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t("booking.namePlaceholder")}
                        className="h-12 text-base border-2 border-gray-200 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t("booking.phone")} *</label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t("booking.phonePlaceholder")}
                        className="h-12 text-base border-2 border-gray-200 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">{t("booking.notes")}</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={t("booking.notesPlaceholder")}
                        className="min-h-[100px] text-base border-2 border-gray-200 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" size="lg" className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
                    <CalendarCheck className="mr-2 h-5 w-5" />
                    {t("booking.submit")}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info - Right Side (2 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Summary Card */}
              <AnimatePresence>
                {(selectedService || selectedDate || selectedTime) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-lg"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-4">{t("booking.summary")}</h4>
                    <div className="space-y-3">
                      {selectedService && (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            {services.find(s => s.id === selectedService)?.icon && 
                              React.createElement(services.find(s => s.id === selectedService)!.icon, {
                                className: "h-5 w-5 text-primary"
                              })
                            }
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Service</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {t(services.find(s => s.id === selectedService)?.nameKey || "")}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedDate && (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <CalendarDays className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Datum</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {format(selectedDate, "PPP")}
                            </p>
                          </div>
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Uhrzeit</p>
                            <p className="text-sm font-semibold text-gray-900">{selectedTime}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{t("booking.callUs")}</p>
                      <a href="tel:+492289473203" className="text-primary hover:underline font-medium">
                        0228 94732030
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a href="mailto:info@medi-cus.eu" className="text-primary hover:underline font-medium text-sm">
                        info@medi-cus.eu
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{t("booking.hours")}</p>
                      <p className="text-sm text-gray-600">{t("booking.hoursValue")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white">
                <h4 className="font-bold text-lg mb-2">{t("booking.needHelp")}</h4>
                <p className="text-sm text-white/90 mb-4">
                  {t("booking.needHelpText")}
                </p>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full bg-white text-primary hover:bg-white/90"
                  onClick={() => window.location.href = "tel:+492289473203"}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {t("booking.callNow")}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 lg:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-xl mx-auto mb-10">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                {t("cta.book")}
              </Button>
              <Button
                size="lg"
                onClick={() => window.location.href = "tel:+492289473203"}
                className="text-lg px-8 py-6 bg-white/20 backdrop-blur-sm text-white border-2 border-white hover:bg-white/30 font-semibold shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                0228 94732030
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
