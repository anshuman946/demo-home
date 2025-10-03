import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookieBanner from './components/CookieBanner';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const handleCookiePolicy = (e) => {
    e.preventDefault();
    setShowCookieBanner(true);
  };

  const handleAcceptCookies = () => {
    // Store cookie preferences
    localStorage.setItem('cookiePreferences', 'accepted');
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    // Store cookie preferences
    localStorage.setItem('cookiePreferences', 'rejected');
    setShowCookieBanner(false);
  };

  const handleCloseCookieBanner = () => {
    setShowCookieBanner(false);
  };

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
                <h4>Rechtliches</h4>
                <ul>
                  <li><Link to="/privacy-policy">Datenschutzerklärung</Link></li>
                  <li><Link to="/terms-of-service">AGB</Link></li>
                  <li><a href="#cookies" onClick={handleCookiePolicy}>Cookie-Richtlinie</a></li>
                </ul>
              </div>
              
              <div className="bk-footer-section">
                <h4>Kontakt & Support</h4>
                <div className="bk-footer-contact">
                  <p>📧 support@bewertungklar.de</p>
                  <p>📍 Berlin, Deutschland</p>
                </div>
              </div>
            </div>
            
            <div className="bk-footer-bottom">
              <div className="bk-footer-brand">© {new Date().getFullYear()} BewertungKlar (Pingbase, Inc.). Alle Rechte vorbehalten.</div>
              <div className="bk-footer-badges">
                <span className="bk-badge">🛡️ DSGVO-konform</span>
                <span className="bk-badge">🇩🇪 Made for Germany</span>
                <span className="bk-badge">⭐ Shopify Partner</span>
              </div>
            </div>
          </div>
        </footer>
        
        <CookieBanner
          isVisible={showCookieBanner}
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
          onClose={handleCloseCookieBanner}
        />
      </div>
    </Router>
  );
}

export default App;
