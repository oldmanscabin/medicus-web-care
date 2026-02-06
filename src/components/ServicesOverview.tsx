import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Sun,
  Car,
  Stethoscope,
  Activity,
  Building2,
  Pill,
  Radiation,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

const mainServices = [
  {
    icon: HeartPulse,
    title: "Dialysefahrt / Krankenfahrt",
    desc: "Regelmäßige und zuverlässige Fahrten zu Ihrer Dialysebehandlung.",
  },
  {
    icon: Sun,
    title: "Tagespflege / Seniorenheim",
    desc: "Sicherer Transport zu Tagespflegeeinrichtungen und Seniorenheimen.",
  },
  {
    icon: Car,
    title: "Privatfahrt",
    desc: "Komfortabler Privattransport für Arztbesuche und alltägliche Fahrten.",
  },
];

const medicalServices = [
  { icon: HeartPulse, label: "Dialysefahrten" },
  { icon: Radiation, label: "Strahlentherapie" },
  { icon: Pill, label: "Chemotherapie" },
  { icon: Building2, label: "Krankenhauseinweisungen" },
  { icon: Stethoscope, label: "Krankenhausentlassungen" },
  { icon: Dumbbell, label: "Reha-Fahrten" },
  { icon: Activity, label: "Physiotherapie" },
  { icon: Activity, label: "Ergotherapie" },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-senior-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten umfassende Transportlösungen für alle medizinischen Bedürfnisse.
          </p>
        </motion.div>

        {/* Main service cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 card-shadow hover:card-hover-shadow transition-shadow duration-300 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-serif">{service.title}</h3>
              <p className="text-senior text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Medical services list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary-light rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 font-serif text-center">
            Medizinische Transportdienste
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {medicalServices.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="h-5 w-5 text-primary shrink-0" />
                <span className="text-senior text-foreground font-medium">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-primary font-semibold text-senior-lg hover:underline"
            >
              Alle Leistungen ansehen
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
