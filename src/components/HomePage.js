import React from 'react';

function HomePage() {
  return (
    <>
      <header className="bk-hero">
        <div className="container">
          <div className="bk-hero-content">
            <h1 className="bk-title fade-in-up">BewertungKlar</h1>
            <p className="bk-subtitle fade-in-up stagger-1">
              Vertrauen schaffen. Bewertungen, die verkaufen.<br />
              Die professionelle Bewertungsverwaltung für Ihren Shopify-Store.
            </p>
            <div className="bk-cta-group fade-in-up stagger-2">
              <a href="#features" className="bk-cta primary">Jetzt starten</a>
            </div>
          </div>
        </div>
      </header>
      
      <main>
        {/* Features Section */}
        <section id="features" className="bk-features">
          <div className="container">
            <div className="bk-features-content">
              <h2 className="bk-section-title fade-in-up">Warum BewertungKlar wählen?</h2>
              <p className="bk-section-subtitle fade-in-up stagger-1">
                Steigern Sie Ihr Vertrauen und Ihren Umsatz mit unserer professionellen Bewertungslösung
              </p>
              <div className="bk-feature-grid">
                <div className="bk-feature-card fade-in-up stagger-1">
                  <div className="bk-feature-icon">🛡️</div>
                  <h3 className="bk-feature-title">DSGVO-konform</h3>
                  <p className="bk-feature-description">
                    Vollständig konform mit deutschen Datenschutzbestimmungen. Automatische Einwilligungsmanagement und sichere Datenspeicherung.
                  </p>
                </div>
                <div className="bk-feature-card fade-in-up stagger-2">
                  <div className="bk-feature-icon">🇩🇪</div>
                  <h3 className="bk-feature-title">Deutsche Lokalisierung</h3>
                  <p className="bk-feature-description">
                    Komplett auf Deutsch entwickelt - von der Benutzeroberfläche bis zu den automatischen E-Mails. Perfekt für den deutschen Markt.
                  </p>
                </div>
                <div className="bk-feature-card fade-in-up stagger-3">
                  <div className="bk-feature-icon">📧</div>
                  <h3 className="bk-feature-title">Intelligente Automation</h3>
                  <p className="bk-feature-description">
                    Automatische Bewertungsanfragen nach jedem Kauf mit personalisierten E-Mail-Vorlagen und optimalen Versandzeitpunkten.
                  </p>
                </div>
                <div className="bk-feature-card fade-in-up stagger-4">
                  <div className="bk-feature-icon">🔗</div>
                  <h3 className="bk-feature-title">Nahtlose Integration</h3>
                  <p className="bk-feature-description">
                    Ein-Klick-Installation in Ihren Shopify-Store. Keine technischen Kenntnisse erforderlich, funktioniert sofort.
                  </p>
                </div>
                <div className="bk-feature-card fade-in-up stagger-5">
                  <div className="bk-feature-icon">⭐</div>
                  <h3 className="bk-feature-title">Bewertungsmanagement</h3>
                  <p className="bk-feature-description">
                    Professionelle Verwaltung aller Kundenbewertungen mit Antwortfunktionen und detaillierten Analytics.
                  </p>
                </div>
                <div className="bk-feature-card fade-in-up stagger-6">
                  <div className="bk-feature-icon">📊</div>
                  <h3 className="bk-feature-title">Detaillierte Statistiken</h3>
                  <p className="bk-feature-description">
                    Umfassende Berichte über Bewertungsraten, Kundenzufriedenheit und Umsatzsteigerungen durch positive Reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bk-stats">
          <div className="container">
            <div className="bk-stats-content">
              <h2 className="bk-section-title fade-in-up">Steigern Sie Ihren Umsatz mit authentischen Bewertungen</h2>
              <div className="bk-stats-grid">
                <div className="bk-stat-card fade-in-up stagger-1">
                  <div className="bk-stat-number">+127%</div>
                  <div className="bk-stat-label">Conversion Rate</div>
                </div>
                <div className="bk-stat-card fade-in-up stagger-2">
                  <div className="bk-stat-number">95%</div>
                  <div className="bk-stat-label">Kundenzufriedenheit</div>
                </div>
                <div className="bk-stat-card fade-in-up stagger-3">
                  <div className="bk-stat-number">4.8★</div>
                  <div className="bk-stat-label">Durchschnittliche Bewertung</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bk-process">
          <div className="container">
            <h2 className="bk-section-title fade-in-up">So einfach funktioniert's</h2>
            <p className="bk-section-subtitle fade-in-up stagger-1">
              In nur 4 einfachen Schritten zu mehr Bewertungen und höherem Umsatz
            </p>
            <div className="bk-process-grid">
              <div className="bk-process-step fade-in-up stagger-1">
                <div className="bk-step-number">1</div>
                <h3 className="bk-step-title">App installieren</h3>
                <p className="bk-step-description">
                  Ein Klick im Shopify App Store - fertig! Keine komplizierte Einrichtung nötig.
                </p>
              </div>
              <div className="bk-process-step fade-in-up stagger-2">
                <div className="bk-step-number">2</div>
                <h3 className="bk-step-title">Automatisch konfigurieren</h3>
                <p className="bk-step-description">
                  BewertungKlar erkennt automatisch Ihre Produkte und Kunden. DSGVO-konforme Einstellungen sind voreingestellt.
                </p>
              </div>
              <div className="bk-process-step fade-in-up stagger-3">
                <div className="bk-step-number">3</div>
                <h3 className="bk-step-title">Bewertungen sammeln</h3>
                <p className="bk-step-description">
                  Automatische E-Mails werden nach jedem Kauf versendet. Ihre Kunden bewerten mit nur einem Klick.
                </p>
              </div>
              <div className="bk-process-step fade-in-up stagger-4">
                <div className="bk-step-number">4</div>
                <h3 className="bk-step-title">Umsatz steigern</h3>
                <p className="bk-step-description">
                  Mehr Bewertungen = mehr Vertrauen = mehr Verkäufe. Sehen Sie Ihren Umsatz wachsen!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bk-testimonials">
          <div className="container">
            <h2 className="bk-section-title fade-in-up">Das sagen unsere Kunden</h2>
            <p className="bk-section-subtitle fade-in-up stagger-1">
              Über 1.000 erfolgreiche deutsche Shopify-Händler vertrauen bereits auf BewertungKlar
            </p>
            <div className="bk-testimonial-grid">
              <div className="bk-testimonial-card fade-in-up stagger-1">
                <div className="bk-testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="bk-testimonial-text">
                  "BewertungKlar hat unsere Conversion-Rate um 40% gesteigert. Die automatischen E-Mails funktionieren perfekt und unsere Kunden lieben die einfache Bewertung."
                </p>
                <div className="bk-testimonial-author">
                  <strong>Sarah M.</strong> - Inhaberin, Modebutique Berlin
                </div>
              </div>
              <div className="bk-testimonial-card fade-in-up stagger-2">
                <div className="bk-testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="bk-testimonial-text">
                  "Endlich eine deutsche Lösung! DSGVO-konform und auf Deutsch - genau was wir gebraucht haben. Installation war super einfach."
                </p>
                <div className="bk-testimonial-author">
                  <strong>Michael K.</strong> - Geschäftsführer, TechStore München
                </div>
              </div>
              <div className="bk-testimonial-card fade-in-up stagger-3">
                <div className="bk-testimonial-stars">⭐⭐⭐⭐⭐</div>
                <p className="bk-testimonial-text">
                  "Seit wir BewertungKlar nutzen, haben wir 300% mehr Bewertungen. Der Support ist fantastisch und antwortet immer schnell auf Deutsch."
                </p>
                <div className="bk-testimonial-author">
                  <strong>Lisa W.</strong> - Marketing Managerin, SportShop Hamburg
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bk-cta-section">
          <div className="container">
            <div className="bk-cta-content">
              <h2 className="bk-cta-title fade-in-up">Bereit für mehr Bewertungen?</h2>
              <p className="bk-cta-description fade-in-up stagger-1">
                Schließen Sie sich über 1.000 erfolgreichen deutschen Shopify-Händlern an und steigern Sie Ihren Umsatz noch heute.
              </p>
              <div className="bk-cta-buttons fade-in-up stagger-2">
                <button className="bk-cta primary large">Jetzt kostenlos testen</button>
              </div>
              <div className="bk-cta-note fade-in-up stagger-3">
                <span>✓ 14 Tage kostenlos</span>
                <span>✓ Keine Kreditkarte nötig</span>
                <span>✓ DSGVO-konform</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;