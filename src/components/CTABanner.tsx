"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="hero-gradient py-16 lg:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Wir sind für Sie da
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-xl mx-auto mb-10">
            Buchen Sie Ihre nächste Fahrt oder rufen Sie uns an – schnell, einfach und sicher.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-primary-foreground text-primary-dark hover:bg-primary-foreground/90 font-semibold"
            >
              <Link href="/kontakt">
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
              <a href="tel:+492289473203">
                <Phone className="mr-2 h-5 w-5" />
                0228 94732030
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
