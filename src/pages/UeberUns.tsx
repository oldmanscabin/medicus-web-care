import { motion } from "framer-motion";
import { Heart, ShieldCheck, HandHeart, Award } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const values = [
  { icon: Heart, title: "Menschlichkeit", desc: "Jeder Patient wird mit Respekt und Wärme behandelt." },
  { icon: ShieldCheck, title: "Sicherheit", desc: "Höchste Sicherheitsstandards in jedem Fahrzeug." },
  { icon: HandHeart, title: "Fürsorge", desc: "Wir kümmern uns – nicht nur um den Transport, sondern um den Menschen." },
  { icon: Award, title: "Erfahrung", desc: "Langjährige Erfahrung im medizinischen Transportwesen." },
];

const UeberUns = () => {
  return (
    <main>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Über Medicus
          </motion.h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Mehr als nur Transport – eine Herzensangelegenheit.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Wer ist Medicus?</h2>
            <p className="text-senior-lg text-muted-foreground leading-relaxed mb-6">
              Medicus ist ein spezialisierter Krankentransportdienst, der sich auf den sicheren und
              komfortablen Transport von Patienten mit eingeschränkter Mobilität spezialisiert hat.
              Wir verstehen, dass jeder Patient einzigartig ist und individuelle Bedürfnisse hat.
            </p>
            <p className="text-senior-lg text-muted-foreground leading-relaxed mb-6">
              Unser erfahrenes Team aus geschulten Fahrern begleitet Sie mit Einfühlungsvermögen
              und Professionalität. Ob regelmäßige Dialysefahrten, Krankenhausbesuche oder
              Therapietermine – wir sorgen dafür, dass Sie sicher und pünktlich ankommen.
            </p>
            <p className="text-senior-lg text-muted-foreground leading-relaxed">
              Unsere Mission ist es, jedem Patienten das Gefühl zu geben, in guten Händen zu sein.
              Mit modernen, medizinisch ausgestatteten Fahrzeugen und einem Team, das sich wirklich
              kümmert, sind wir Ihr verlässlicher Partner im Krankentransport.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center font-serif">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-full hero-gradient flex items-center justify-center mx-auto mb-5">
                  <v.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-serif">{v.title}</h3>
                <p className="text-senior text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
};

export default UeberUns;
