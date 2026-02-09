"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Database, Eye, FileText, AlertCircle } from "lucide-react";

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Datenschutzerklärung
          </h1>

          {/* Introduction */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Shield className="h-6 w-6" />
              Einleitung
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Stand: 6. Februar 2026
            </p>
          </section>

          {/* Responsible Party */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Verantwortliche
            </h2>
            <div className="text-gray-700">
              <p className="font-bold text-lg text-gray-900 mb-2">Medicus Dienstleistungen GmbH</p>
              <p>Siemensstr. 36<br />
              53121 Bonn<br />
              Deutschland</p>
              <p className="mt-4">
                <span className="font-semibold">Telefon:</span> <a href="tel:+492289473203" className="text-primary hover:underline">0228 94732030</a><br />
                <span className="font-semibold">E-Mail:</span> <a href="mailto:info@medi-cus.eu" className="text-primary hover:underline">info@medi-cus.eu</a>
              </p>
            </div>
          </section>

          {/* Overview of Processing */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Database className="h-6 w-6" />
              Übersicht der Verarbeitungen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Arten der verarbeiteten Daten</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                  <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                  <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen)</li>
                  <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                  <li>Meta-, Kommunikations- und Verfahrensdaten (z.B. IP-Adressen, Zeitangaben, Identifikationsnummern)</li>
                  <li>Gesundheitsdaten (Art. 9 Abs. 1 DSGVO)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Kategorien betroffener Personen</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Patienten</li>
                  <li>Kommunikationspartner</li>
                  <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2">Zwecke der Verarbeitung</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Erbringung vertraglicher Leistungen und Kundenservice</li>
                  <li>Kontaktanfragen und Kommunikation</li>
                  <li>Sicherheitsmaßnahmen</li>
                  <li>Verwaltung und Beantwortung von Anfragen</li>
                  <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal Bases */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6" />
              Maßgebliche Rechtsgrundlagen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <span className="font-semibold">Maßgebliche Rechtsgrundlagen nach der DSGVO:</span> Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
              <li><span className="font-semibold">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</span> - Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</li>
              <li><span className="font-semibold">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</span> - Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.</li>
              <li><span className="font-semibold">Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)</span> - Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.</li>
              <li><span className="font-semibold">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</span> - Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich, sofern nicht die Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person überwiegen.</li>
            </ul>
          </section>

          {/* Security Measures */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Lock className="h-6 w-6" />
              Sicherheitsmaßnahmen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten.
            </p>
          </section>

          {/* Data Processing in Third Countries */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Übermittlung von personenbezogenen Daten
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
            </p>
          </section>

          {/* Service Provision */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Erbringung unserer satzungs- und geschäftsgemäßen Leistungen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir verarbeiten die Daten unserer Patienten, Kunden sowie Interessenten (einheitlich bezeichnet als "Patienten") entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem zugrundeliegenden Vertragsverhältnis.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Verarbeitete Datenarten:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                  <li>Zahlungsdaten (z.B. Bankverbindungen, Rechnungen)</li>
                  <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                  <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit)</li>
                  <li>Gesundheitsdaten für die Durchführung von Krankentransporten</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Betroffene Personen:</h3>
                <p className="text-gray-700">Patienten, Interessenten</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Zwecke der Verarbeitung:</h3>
                <p className="text-gray-700">Erbringung vertraglicher Leistungen und Kundenservice, Kontaktanfragen und Kommunikation, Büro- und Organisationsverfahren, Verwaltung und Beantwortung von Anfragen.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Rechtsgrundlagen:</h3>
                <p className="text-gray-700">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Einwilligung für Gesundheitsdaten (Art. 9 Abs. 2 lit. a) DSGVO).</p>
              </div>
            </div>
          </section>

          {/* Contact and Communication */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Kontakt- und Anfragenverwaltung
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Verarbeitete Datenarten:</h3>
                <p className="text-gray-700">Bestandsdaten, Kontaktdaten, Inhaltsdaten, Nutzungsdaten, Meta-/Kommunikationsdaten.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Betroffene Personen:</h3>
                <p className="text-gray-700">Kommunikationspartner.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Zwecke der Verarbeitung:</h3>
                <p className="text-gray-700">Kontaktanfragen und Kommunikation, Verwaltung und Beantwortung von Anfragen, Feedback.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Rechtsgrundlagen:</h3>
                <p className="text-gray-700">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO), Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).</p>
              </div>
            </div>
          </section>

          {/* Web Analytics */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Eye className="h-6 w-6" />
              Bereitstellung des Onlineangebotes und Webhosting
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Verarbeitete Datenarten:</h3>
                <p className="text-gray-700">Nutzungsdaten, Meta-/Kommunikationsdaten, Inhaltsdaten.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Betroffene Personen:</h3>
                <p className="text-gray-700">Nutzer.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Zwecke der Verarbeitung:</h3>
                <p className="text-gray-700">Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit, Informationstechnische Infrastruktur.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Rechtsgrundlagen:</h3>
                <p className="text-gray-700">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).</p>
              </div>
            </div>
          </section>

          {/* Rights of Data Subjects */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <AlertCircle className="h-6 w-6" />
              Rechte der betroffenen Personen
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 ml-2">
              <li><span className="font-semibold">Widerspruchsrecht:</span> Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen.</li>
              <li><span className="font-semibold">Widerrufsrecht bei Einwilligungen:</span> Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</li>
              <li><span className="font-semibold">Auskunftsrecht:</span> Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.</li>
              <li><span className="font-semibold">Recht auf Berichtigung:</span> Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.</li>
              <li><span className="font-semibold">Recht auf Löschung und Einschränkung der Verarbeitung:</span> Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.</li>
              <li><span className="font-semibold">Recht auf Datenübertragbarkeit:</span> Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.</li>
              <li><span className="font-semibold">Beschwerde bei Aufsichtsbehörde:</span> Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.</li>
            </ul>
          </section>

          {/* Data Deletion */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Löschung von Daten
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind). Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person erforderlich ist.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Änderung und Aktualisierung der Datenschutzerklärung
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.
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
