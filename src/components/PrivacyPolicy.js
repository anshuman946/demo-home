import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="bk-legal-page">
      <div className="bk-legal-header">
        <Link to="/" className="bk-back-link">← Zurück zur Startseite</Link>
        <h1>Datenschutzerklärung</h1>
        <p className="bk-legal-date">Stand: {new Date().toLocaleDateString('de-DE')}</p>
      </div>

      <div className="bk-legal-content">
        <section>
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie unsere Website besuchen oder unsere BewertungKlar-App nutzen. Personenbezogene Daten 
            sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2>2. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website und der BewertungKlar-App ist:
          </p>
          <div className="bk-contact-info">
            <p>
              <strong>BewertungKlar (Pingbase, Inc.)</strong><br />
              2136 Ford Parkway<br />
              St Paul, MN, USA, 55116<br />
              Managing Director: Kishan Vasani<br />
              Register Court: Delaware, USA
            </p>
            <p>
              <strong>E-Mail:</strong> kishan@pingbase.ai
            </p>
          </div>
        </section>

        <section>
          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Cookies</h3>
          <p>
            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät 
            speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
          </p>
          
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
        </section>

        <section>
          <h2>4. BewertungKlar Shopify App</h2>
          <h3>Datenverarbeitung in der App</h3>
          <p>
            Wenn Sie unsere BewertungKlar-App in Ihrem Shopify-Store installieren, verarbeiten wir folgende Daten:
          </p>
          <ul>
            <li>Bestelldaten (Bestellnummer, Datum, Produkte)</li>
            <li>Kundendaten (Name, E-Mail-Adresse)</li>
            <li>Produktdaten (Name, Beschreibung, Bilder)</li>
            <li>Bewertungsdaten (Sterne, Text, Datum)</li>
          </ul>
          
          <h3>Zweck der Datenverarbeitung</h3>
          <p>
            Die Verarbeitung erfolgt ausschließlich zum Zweck der Bereitstellung unserer Bewertungsdienstleistungen:
          </p>
          <ul>
            <li>Versendung von Bewertungsanfragen</li>
            <li>Verwaltung und Anzeige von Kundenbewertungen</li>
            <li>Bereitstellung von Statistiken und Analysen</li>
            <li>Technischer Support und Kundenservice</li>
          </ul>
        </section>

        <section>
          <h2>5. Rechtsgrundlage</h2>
          <p>
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von:
          </p>
          <ul>
            <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)</li>
            <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, soweit eingeholt)</li>
          </ul>
        </section>

        <section>
          <h2>6. Datensicherheit</h2>
          <p>
            Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen 
            zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder Zugriff unberechtigter Personen 
            zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung 
            fortlaufend verbessert.
          </p>
        </section>

        <section>
          <h2>7. Ihre Rechte</h2>
          <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
          </ul>
        </section>

        <section>
          <h2>8. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
          </p>
          <div className="bk-contact-info">
            <p>
              <strong>Datenschutzbeauftragter</strong><br />
              BewertungKlar (Pingbase, Inc.)<br />
              E-Mail: support@bewertungklar.de
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

