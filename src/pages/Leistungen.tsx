import { motion } from "framer-motion";
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
  Car,
  Plane,
  MapPin,
  CalendarDays,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const categories: { heading: string; services: ServiceItem[] }[] = [
  {
    heading: "Medizinischer Transport",
    services: [
      { icon: HeartPulse, title: "Dialysefahrten", desc: "Regelmäßige Fahrten zur Dialysebehandlung – zuverlässig und pünktlich." },
      { icon: Pill, title: "Chemotherapie", desc: "Sicherer Transport zu Ihrer Chemotherapiebehandlung." },
      { icon: Radiation, title: "Strahlentherapie", desc: "Pünktliche Fahrten zu Bestrahlungsterminen." },
      { icon: Dumbbell, title: "Reha-Fahrten", desc: "Transport zu Rehabilitationseinrichtungen." },
      { icon: Activity, title: "Physiotherapie", desc: "Fahrten zu Physiotherapie-Praxen." },
      { icon: Activity, title: "Ergotherapie", desc: "Transport zu ergotherapeutischen Behandlungen." },
    ],
  },
  {
    heading: "Krankenhaustransport",
    services: [
      { icon: Building2, title: "Krankenhauseinweisungen", desc: "Wir bringen Sie sicher ins Krankenhaus." },
      { icon: Stethoscope, title: "Krankenhausentlassungen", desc: "Komfortabler Transport nach dem Klinikaufenthalt." },
    ],
  },
  {
    heading: "Spezialtransport",
    services: [
      { icon: Accessibility, title: "Rollstuhltransport", desc: "Barrierefreier Transport für Rollstuhlfahrer." },
      { icon: BedDouble, title: "Liegendtransport", desc: "Sicherer Transport auf der Trage." },
      { icon: Sun, title: "Tagespflege & Seniorenheime", desc: "Tägliche Fahrten zu Pflegeeinrichtungen." },
    ],
  },
  {
    heading: "Privatfahrten",
    services: [
      { icon: MapPin, title: "Arztbesuche", desc: "Fahrten zu niedergelassenen Ärzten und Fachärzten." },
      { icon: CalendarDays, title: "Alltägliche Fahrten", desc: "Unterstützung im Alltag durch bequemen Transport." },
      { icon: Plane, title: "Flughafentransfers", desc: "Komfortabler Transport zum und vom Flughafen." },
    ],
  },
];

const Leistungen = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Unsere Leistungen
          </motion.h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Umfassende Transportlösungen für alle medizinischen Bedürfnisse.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20">
        <div className="container space-y-20">
          {categories.map((cat, ci) => (
            <div key={cat.heading}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-serif"
              >
                {cat.heading}
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-lg p-7 card-shadow border border-border hover:card-hover-shadow transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                      <s.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{s.title}</h3>
                    <p className="text-senior text-muted-foreground">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default Leistungen;
