import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Die Fahrer von Medicus sind immer freundlich und pünktlich. Ich fühle mich bei jeder Fahrt sicher und gut aufgehoben.",
    name: "Maria S.",
    role: "Dialysepatientin",
  },
  {
    text: "Seit wir Medicus nutzen, müssen wir uns keine Sorgen mehr um den Transport meiner Mutter machen. Ein wundervoller Service!",
    name: "Thomas K.",
    role: "Angehöriger",
  },
  {
    text: "Professionell, einfühlsam und immer verlässlich. Medicus ist für uns die erste Wahl beim Krankentransport.",
    name: "Dr. Petra M.",
    role: "Klinikärztin",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was unsere Patienten sagen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-8 card-shadow border border-border relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-senior text-foreground leading-relaxed mb-6 italic">
                „{t.text}"
              </p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
