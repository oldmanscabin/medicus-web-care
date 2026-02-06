import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Medicus" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/80 text-senior leading-relaxed">
              Ihr zuverlässiger Partner für sicheren und komfortablen Krankentransport.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Schnellzugriff</h4>
            <ul className="space-y-3">
              {[
                { label: "Startseite", path: "/" },
                { label: "Leistungen", path: "/leistungen" },
                { label: "Über uns", path: "/ueber-uns" },
                { label: "Kontakt", path: "/kontakt" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-senior"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Leistungen</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-senior">
              <li>Dialysefahrten</li>
              <li>Strahlentherapie</li>
              <li>Chemotherapie</li>
              <li>Krankenhaustransport</li>
              <li>Privatfahrten</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-senior">0123 456 78</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-senior">info@medicus-transport.de</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-senior">Musterstraße 12, 12345 Berlin</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 shrink-0" />
                <span className="text-senior">Mo–Fr: 6:00–20:00 Uhr</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Medicus Krankentransport. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
