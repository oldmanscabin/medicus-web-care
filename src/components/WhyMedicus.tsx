import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Ambulance } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Geschulte & einfühlsame Fahrer",
    desc: "Unser Team ist speziell ausgebildet im Umgang mit Patienten und begleitet Sie mit Herz und Verstand.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherer Transport",
    desc: "Wir transportieren Patienten auf Tragen und im Rollstuhl sicher und komfortabel.",
  },
  {
    icon: Clock,
    title: "Pünktlich & zuverlässig",
    desc: "Wir sind immer rechtzeitig da – damit Sie keinen Termin verpassen.",
  },
  {
    icon: Ambulance,
    title: "Medizinisch ausgestattete Fahrzeuge",
    desc: "Unsere Fahrzeuge erfüllen höchste medizinische Standards für Ihren sicheren Transport.",
  },
];

const WhyMedicus = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum Medicus?
          </h2>
          <p className="text-senior-lg text-muted-foreground max-w-2xl mx-auto">
            Vertrauen, Sicherheit und Menschlichkeit – das macht uns aus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-xl hover:bg-primary-light transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center shrink-0">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{feature.title}</h3>
                <p className="text-senior text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMedicus;
