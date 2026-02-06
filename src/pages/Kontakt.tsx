import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    transportType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns in Kürze bei Ihnen.",
    });
    setFormData({ name: "", phone: "", transportType: "", date: "", message: "" });
  };

  return (
    <main>
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Kontakt & Buchung
          </motion.h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Wir sind für Sie da – schnell, einfach und sicher.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Fahrt buchen</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-senior font-medium text-foreground mb-2">Name *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr vollständiger Name"
                    className="text-senior h-12"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-senior font-medium text-foreground mb-2">Telefon *</label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ihre Telefonnummer"
                    className="text-senior h-12"
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="block text-senior font-medium text-foreground mb-2">Art des Transports *</label>
                  <Select
                    value={formData.transportType}
                    onValueChange={(v) => setFormData({ ...formData, transportType: v })}
                    required
                  >
                    <SelectTrigger className="text-senior h-12">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dialyse">Dialysefahrt</SelectItem>
                      <SelectItem value="chemo">Chemotherapie</SelectItem>
                      <SelectItem value="strahlen">Strahlentherapie</SelectItem>
                      <SelectItem value="reha">Reha-Fahrt</SelectItem>
                      <SelectItem value="krankenhaus">Krankenhaustransport</SelectItem>
                      <SelectItem value="rollstuhl">Rollstuhltransport</SelectItem>
                      <SelectItem value="liegend">Liegendtransport</SelectItem>
                      <SelectItem value="privat">Privatfahrt</SelectItem>
                      <SelectItem value="sonstig">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-senior font-medium text-foreground mb-2">Gewünschtes Datum</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="text-senior h-12"
                  />
                </div>
                <div>
                  <label className="block text-senior font-medium text-foreground mb-2">Nachricht</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Weitere Informationen zu Ihrer Fahrt..."
                    className="text-senior min-h-[120px]"
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Anfrage senden
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Kontaktdaten</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Telefon", value: "0123 456 78", href: "tel:+4912345678" },
                  { icon: Mail, label: "E-Mail", value: "info@medicus-transport.de", href: "mailto:info@medicus-transport.de" },
                  { icon: MapPin, label: "Adresse", value: "Musterstraße 12, 12345 Berlin" },
                  { icon: Clock, label: "Öffnungszeiten", value: "Mo–Fr: 6:00–20:00 Uhr" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-primary-light">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-senior text-primary hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-senior text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card rounded-xl p-8 card-shadow border border-border">
                <h3 className="text-lg font-bold text-foreground mb-3 font-serif">
                  Wir sind für Sie da
                </h3>
                <p className="text-senior text-muted-foreground leading-relaxed">
                  Haben Sie Fragen oder möchten Sie eine Fahrt buchen? Rufen Sie uns an oder
                  nutzen Sie unser Kontaktformular. Wir melden uns schnellstmöglich bei Ihnen zurück.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kontakt;
