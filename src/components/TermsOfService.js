import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="bk-legal-page">
      <div className="bk-legal-header">
        <Link to="/" className="bk-back-link">← Zurück zur Startseite</Link>
        <h1>Allgemeine Geschäftsbedingungen</h1>
        <p className="bk-legal-date">Stand: {new Date().toLocaleDateString('de-DE')}</p>
      </div>

      <div className="bk-legal-content">
        <section>
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der BewertungKlar GmbH 
            (nachfolgend "Anbieter") und ihren Kunden (nachfolgend "Nutzer") über die Nutzung der BewertungKlar 
            Shopify-App und der damit verbundenen Dienstleistungen.
          </p>
        </section>

        <section>
          <h2>2. Vertragspartner</h2>
          <div className="bk-contact-info">
            <p>
              <strong>BewertungKlar GmbH</strong><br />
              Musterstraße 123<br />
              12345 Berlin<br />
              Deutschland
            </p>
            <p>
              <strong>Geschäftsführer:</strong> Max Mustermann<br />
              <strong>Registergericht:</strong> Amtsgericht Berlin<br />
              <strong>Handelsregisternummer:</strong> HRB 123456<br />
              <strong>USt-IdNr.:</strong> DE123456789
            </p>
          </div>
        </section>

        <section>
          <h2>3. Leistungsbeschreibung</h2>
          <p>
            BewertungKlar ist eine Software-as-a-Service (SaaS) Lösung für Shopify-Händler zur Verwaltung und 
            Automatisierung von Kundenbewertungen. Die Dienstleistung umfasst:
          </p>
          <ul>
            <li>Automatische Versendung von Bewertungsanfragen</li>
            <li>Verwaltung und Moderation von Kundenbewertungen</li>
            <li>Darstellung von Bewertungen im Online-Shop</li>
            <li>Bereitstellung von Statistiken und Analysen</li>
            <li>Technischen Support und Wartung</li>
          </ul>
        </section>

        <section>
          <h2>4. Vertragsschluss und Laufzeit</h2>
          <h3>4.1 Vertragsschluss</h3>
          <p>
            Der Vertrag kommt durch die Installation der BewertungKlar-App über den Shopify App Store und 
            die Auswahl eines Abonnement-Plans zustande. Die Darstellung der App im Shopify App Store 
            stellt kein bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.
          </p>
          
          <h3>4.2 Laufzeit</h3>
          <p>
            Der Vertrag wird auf unbestimmte Zeit geschlossen. Die Abrechnung erfolgt monatlich im Voraus 
            entsprechend dem gewählten Tarif. Der Vertrag verlängert sich automatisch um jeweils einen 
            Monat, sofern er nicht gekündigt wird.
          </p>
        </section>

        <section>
          <h2>5. Preise und Zahlungsbedingungen</h2>
          <h3>5.1 Preise</h3>
          <p>
            Es gelten die zum Zeitpunkt des Vertragsschlusses auf der Website und im Shopify App Store 
            angegebenen Preise. Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
          </p>
          
          <h3>5.2 Zahlung</h3>
          <p>
            Die Abrechnung erfolgt über Shopify. Der Nutzer ermächtigt Shopify, die monatlichen 
            Abonnementgebühren von seinem hinterlegten Zahlungsmittel einzuziehen.
          </p>
          
          <h3>5.3 Zahlungsverzug</h3>
          <p>
            Bei Zahlungsverzug kann der Anbieter den Zugang zur App sperren und nach Mahnung 
            den Vertrag außerordentlich kündigen.
          </p>
        </section>

        <section>
          <h2>6. Pflichten des Nutzers</h2>
          <p>Der Nutzer verpflichtet sich:</p>
          <ul>
            <li>Die App nur für rechtmäßige Zwecke zu nutzen</li>
            <li>Keine falschen oder irreführenden Bewertungen zu generieren</li>
            <li>Die geltenden Datenschutzbestimmungen einzuhalten</li>
            <li>Seine Zugangsdaten vertraulich zu behandeln</li>
            <li>Den Anbieter über Änderungen seiner Kontaktdaten zu informieren</li>
            <li>Keine Reverse-Engineering-Maßnahmen durchzuführen</li>
          </ul>
        </section>

        <section>
          <h2>7. Verfügbarkeit und Support</h2>
          <h3>7.1 Verfügbarkeit</h3>
          <p>
            Der Anbieter strebt eine Verfügbarkeit der App von 99% an. Wartungsarbeiten können 
            zu temporären Einschränkungen führen und werden nach Möglichkeit außerhalb der 
            Geschäftszeiten durchgeführt.
          </p>
          
          <h3>7.2 Support</h3>
          <p>
            Support wird per E-Mail an support@bewertungklar.de angeboten. Die Reaktionszeiten 
            variieren je nach gewähltem Tarif:
          </p>
          <ul>
            <li>Starter: Innerhalb von 48 Stunden</li>
            <li>Professional: Innerhalb von 24 Stunden</li>
            <li>Enterprise: Innerhalb von 4 Stunden</li>
          </ul>
        </section>

        <section>
          <h2>8. Kündigung</h2>
          <h3>8.1 Ordentliche Kündigung</h3>
          <p>
            Beide Vertragsparteien können den Vertrag jederzeit mit einer Frist von 30 Tagen 
            zum Monatsende kündigen. Die Kündigung erfolgt durch Deinstallation der App über 
            den Shopify-Admin-Bereich.
          </p>
          
          <h3>8.2 Außerordentliche Kündigung</h3>
          <p>
            Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. 
            Ein wichtiger Grund liegt insbesondere vor bei:
          </p>
          <ul>
            <li>Verstoß gegen diese AGB</li>
            <li>Zahlungsverzug trotz Mahnung</li>
            <li>Missbrauch der App</li>
          </ul>
        </section>

        <section>
          <h2>9. Haftung</h2>
          <h3>9.1 Haftungsbeschränkung</h3>
          <p>
            Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers 
            oder der Gesundheit sowie für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen 
            Pflichtverletzung beruhen.
          </p>
          
          <h3>9.2 Weitere Haftung</h3>
          <p>
            Im Übrigen ist die Haftung des Anbieters auf die Verletzung wesentlicher Vertragspflichten 
            beschränkt. In diesem Fall ist die Haftung auf den typischen, vorhersehbaren Schaden begrenzt.
          </p>
        </section>

        <section>
          <h2>10. Datenschutz</h2>
          <p>
            Der Anbieter verarbeitet personenbezogene Daten entsprechend der Datenschutz-Grundverordnung 
            (DSGVO) und dem Bundesdatenschutzgesetz (BDSG). Weitere Informationen finden Sie in unserer 
            <Link to="/privacy-policy">Datenschutzerklärung</Link>.
          </p>
        </section>

        <section>
          <h2>11. Schlussbestimmungen</h2>
          <h3>11.1 Änderungen der AGB</h3>
          <p>
            Der Anbieter behält sich vor, diese AGB zu ändern. Änderungen werden dem Nutzer per 
            E-Mail mitgeteilt. Sie gelten als genehmigt, wenn der Nutzer nicht innerhalb von 
            30 Tagen nach Zugang der Mitteilung widerspricht.
          </p>
          
          <h3>11.2 Anwendbares Recht</h3>
          <p>
            Auf diese AGB und alle Rechtsbeziehungen zwischen dem Anbieter und dem Nutzer findet 
            ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts Anwendung.
          </p>
          
          <h3>11.3 Gerichtsstand</h3>
          <p>
            Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis ist Berlin, 
            sofern der Nutzer Kaufmann, juristische Person des öffentlichen Rechts oder 
            öffentlich-rechtliches Sondervermögen ist.
          </p>
        </section>

        <section>
          <h2>12. Kontakt</h2>
          <p>
            Bei Fragen zu diesen AGB wenden Sie sich bitte an:
          </p>
          <div className="bk-contact-info">
            <p>
              <strong>BewertungKlar GmbH</strong><br />
              E-Mail: legal@bewertungklar.de<br />
              Telefon: +49 (0) 30 12345678
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsOfService;
