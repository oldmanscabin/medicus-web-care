import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Medizinischer Transport"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Medicus – Ihr freundlicher Krankentransportdienst
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-10">
            Transport medical sigur, confortabil și punctual pentru pacienți de toate vârstele.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-primary-foreground text-primary-dark hover:bg-primary-foreground/90 font-semibold"
            >
              <Link to="/kontakt">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Fahrt buchen
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
            >
              <a href="tel:+4912345678">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
