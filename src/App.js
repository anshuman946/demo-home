import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <div className="bk-root">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        
        <footer className="bk-footer">
          <div className="container">
            <div className="bk-footer-content">
              <div className="bk-footer-section">
                <h3>BewertungKlar</h3>
                <p>Die professionelle Bewertungsverwaltung für deutsche Shopify-Stores. Steigern Sie Vertrauen und Umsatz mit authentischen Kundenbewertungen.</p>
                <div className="bk-footer-social">
                  <a href="#twitter" aria-label="Twitter">🐦</a>
                  <a href="#linkedin" aria-label="LinkedIn">💼</a>
                  <a href="#facebook" aria-label="Facebook">📘</a>
                  <a href="#instagram" aria-label="Instagram">📷</a>
                </div>
              </div>
              
              <div className="bk-footer-section">
                <h4>Unternehmen</h4>
                <ul>
                  <li><a href="#about">Über uns</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#careers">Karriere</a></li>
                  <li><a href="#contact">Kontakt</a></li>
                </ul>
              </div>
              
              <div className="bk-footer-section">
                <h4>Rechtliches</h4>
                <ul>
                  <li><Link to="/privacy-policy">Datenschutzerklärung</Link></li>
                  <li><Link to="/terms-of-service">AGB</Link></li>
                  <li><a href="#impressum">Impressum</a></li>
                  <li><a href="#cookies">Cookie-Richtlinie</a></li>
                </ul>
              </div>
              
              <div className="bk-footer-section">
                <h4>Kontakt & Support</h4>
                <div className="bk-footer-contact">
                  <p>📧 support@bewertungklar.de</p>
                  <p>📞 +49 (0) 30 12345678</p>
                  <p>📍 Berlin, Deutschland</p>
                  <p>🕐 Mo-Fr: 9:00 - 18:00 Uhr</p>
                </div>
              </div>
            </div>
            
            <div className="bk-footer-bottom">
              <div className="bk-footer-brand">© {new Date().getFullYear()} BewertungKlar GmbH. Alle Rechte vorbehalten.</div>
              <div className="bk-footer-badges">
                <span className="bk-badge">🛡️ DSGVO-konform</span>
                <span className="bk-badge">🇩🇪 Made in Germany</span>
                <span className="bk-badge">⭐ Shopify Partner</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
