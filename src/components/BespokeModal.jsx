import React from 'react';
import { X, Headphones, PenTool, Gem, Plane } from 'lucide-react';
import './BespokeModal.css';

import bespokeLogo from '../assets/bespoke.jpeg';

function BespokeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="bespoke-modal-overlay">
      <div className="bespoke-modal-content">
        <button className="bespoke-modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        <div className="bespoke-grid">
          {/* Card 1: Manifiesto */}
          <div className="bespoke-card card-cream">
            <p className="bespoke-manifiesto-text">
              Diseñamos experiencias de viaje que se transforman en memorias que perduran.
            </p>
            <div className="bespoke-gold-line"></div>
          </div>

          {/* Card 2: Destino Paris */}
          <div className="bespoke-card card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600)' }}>
            <div className="bespoke-card-bottom">
              <p className="bespoke-location">Paris, France</p>
              <p className="bespoke-subtitle">Curated beyond the obvious</p>
            </div>
          </div>

          {/* Card 3: Concierge */}
          <div className="bespoke-card card-dark">
            <p className="bespoke-quote-text">
              Luxury is not where you go,<br/>
              it's how it's crafted
            </p>
            <div className="bespoke-gold-line"></div>
          </div>

          {/* Card 4: Proceso */}
          <div className="bespoke-card card-cream card-center">
            <div className="bespoke-icon-circle">
              <Plane size={32} className="bespoke-gold-icon" />
            </div>
            <p className="bespoke-slogan-text">
              Your travel concierge<br/>
              <em>from vision to memory</em>
            </p>
            <div className="bespoke-gold-line-small"></div>
          </div>

          {/* Card 5: Logo */}
          <div className="bespoke-card card-cream card-center">
            <img src={bespokeLogo} alt="Bespoke Travel Atelier" className="bespoke-main-logo" />
            <h2 className="bespoke-brand-name">BESPOKE</h2>
            <p className="bespoke-brand-desc">TRAVEL ATELIER & CONCIERGE</p>
            <p className="bespoke-brand-tagline">DEVOTED WORLD CRAFTERS</p>
          </div>

          {/* Card 6: Interior */}
          <div className="bespoke-card card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600)' }}>
            <div className="bespoke-card-bottom bespoke-card-bottom-light">
              <p className="bespoke-interior-text">Viajar es un arte.<br/>Nosotros lo trabajamos como un atelier.</p>
              <div className="bespoke-gold-line-small"></div>
            </div>
          </div>

          {/* Card 7: Proceso Icons */}
          <div className="bespoke-card card-cream card-center">
            <h3 className="bespoke-process-title">Our Bespoke Process</h3>
            <div className="bespoke-process-icons">
              <div className="process-step">
                <Headphones size={28} className="bespoke-gold-icon" />
                <span>Listen</span>
              </div>
              <div className="process-step">
                <PenTool size={28} className="bespoke-gold-icon" />
                <span>Design</span>
              </div>
              <div className="process-step">
                <Gem size={28} className="bespoke-gold-icon" />
                <span>Curate</span>
              </div>
              <div className="process-step">
                <Plane size={28} className="bespoke-gold-icon" />
                <span>Deliver</span>
              </div>
            </div>
            <div className="bespoke-gold-line-small"></div>
          </div>

          {/* Card 8: Destino Lake Como */}
          <div className="bespoke-card card-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552560880-2482c9f80df5?auto=format&fit=crop&q=80&w=600)' }}>
            <div className="bespoke-card-bottom">
              <p className="bespoke-location">Lake Como, Italy</p>
              <p className="bespoke-subtitle">Tailored beyond expectations</p>
            </div>
          </div>

          {/* Card 9: CTA */}
          <div className="bespoke-card card-cream card-center">
            <h3 className="bespoke-cta-title">Ready to design<br/>your next journey?</h3>
            <div className="bespoke-gold-line"></div>
            <a href="#" className="bespoke-cta-btn">Start your journey</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BespokeModal;
