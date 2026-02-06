import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Startseite", path: "/" },
  { label: "Leistungen", path: "/leistungen" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Medicus Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-senior font-medium transition-colors hover:text-primary ${
                pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+4912345678" className="flex items-center gap-2 text-primary font-semibold text-senior">
            <Phone className="h-5 w-5" />
            0123 456 78
          </a>
          <Button asChild size="lg" className="text-base px-6">
            <Link to="/kontakt">Fahrt buchen</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-t border-border px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-senior-lg font-medium border-b border-border ${
                pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="lg" className="w-full text-lg mt-4">
            <Link to="/kontakt" onClick={() => setMobileOpen(false)}>Fahrt buchen</Link>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
