"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Impressum
          </h1>

          {/* Company Information */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Building2 className="h-6 w-6" />
              Angaben gemäß § 5 TMG
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-bold text-lg text-gray-900">Medicus Dienstleistungen GmbH</p>
                <p className="flex items-start gap-2 mt-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Siemensstr. 36<br />
                    53121 Bonn<br />
                    Deutschland
                  </span>
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Kontakt</h3>
                <p className="flex items-center gap-2 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>Telefon: <a href="tel:+492289473203" className="text-primary hover:underline">0228 94732030</a></span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>E-Mail: <a href="mailto:info@medi-cus.eu" className="text-primary hover:underline">info@medi-cus.eu</a></span>
                </p>
              </div>
            </div>
          </section>

          {/* Legal Representatives */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Vertretungsberechtigte Geschäftsführer
            </h2>
            <p className="text-gray-700">
              Die Geschäftsführung der Medicus Dienstleistungen GmbH
            </p>
          </section>

          {/* Register Entry */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Registereintrag
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Registergericht:</span> Amtsgericht Bonn</p>
              <p><span className="font-semibold">Registernummer:</span> HRB [Ihre Registernummer]</p>
            </div>
          </section>

          {/* VAT ID */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Umsatzsteuer-ID
            </h2>
            <p className="text-gray-700">
              <span className="font-semibold">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</span><br />
              DE [Ihre USt-IdNr.]
            </p>
          </section>

          {/* Responsible for Content */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-gray-700">
              Medicus Dienstleistungen GmbH<br />
              Siemensstr. 36<br />
              53121 Bonn
            </p>
          </section>

          {/* Regulatory Authority */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Aufsichtsbehörde
            </h2>
            <p className="text-gray-700">
              Zuständige Aufsichtsbehörde für Krankentransporte:<br />
              Gesundheitsamt Bonn
            </p>
          </section>

          {/* Professional Liability Insurance */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Berufshaftpflichtversicherung
            </h2>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Name und Sitz des Versicherers:</span><br />
              [Name Ihrer Versicherung]<br />
              [Adresse der Versicherung]</p>
              <p className="mt-4"><span className="font-semibold">Geltungsraum der Versicherung:</span><br />
              Deutschland</p>
            </div>
          </section>

          {/* EU Dispute Resolution */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              EU-Streitschlichtung
            </h2>
            <p className="text-gray-700 mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            </p>
            <a 
              href="https://ec.europa.eu/consumers/odr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <p className="text-gray-700 mt-4">
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          {/* Consumer Dispute Resolution */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="text-gray-700">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          {/* Liability for Content */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Haftung für Inhalte
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Liability for Links */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Haftung für Links
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Copyright */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Urheberrecht
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          {/* Source */}
          <div className="text-center text-sm text-gray-500 mt-8">
            <p>Quelle: Erstellt mit Unterstützung von eRecht24</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
