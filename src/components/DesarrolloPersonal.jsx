import React from 'react';
import { X, Mic, Handshake, Fingerprint, GraduationCap, TrendingUp, Rocket, Lightbulb, ShieldCheck, Target, Users, Crown, HeartHandshake } from 'lucide-react';
import './DesarrolloPersonal.css';

import bg1 from '../assets/dp_bg_1_1783197072815.png';
import bg2 from '../assets/dp_bg_2_1783197080378.png';
import bg3 from '../assets/dp_bg_3_1783197087316.png';
import bg4 from '../assets/dp_bg_4_1783197094035.png';
import bg5 from '../assets/dp_bg_5_1783197109910.png';
import bg6 from '../assets/dp_bg_6_1783197118024.png';
import bg7 from '../assets/dp_bg_7_1783197127501.png';
import bg8 from '../assets/dp_bg_8_1783197134562.png';
import bg9 from '../assets/dp_bg_9_1783197150579.png';
import bg10 from '../assets/dp_bg_10_1783197157651.png';
import bg11 from '../assets/dp_bg_11_1783197166147.png';
import bg12 from '../assets/dp_bg_12_1783197172249.png';

const items = [
  { id: 1, title: 'Habilidades y técnicas para hablar en público', icon: Mic, category: 'profesional', bg: bg1 },
  { id: 2, title: 'Persuasión y negociaciones exitosas', icon: Handshake, category: 'profesional', bg: bg2 },
  { id: 3, title: 'Personal branding', icon: Fingerprint, category: 'profesional', bg: bg3 },
  { id: 4, title: 'Vida adulta, de la escuela al mundo laboral', icon: GraduationCap, category: 'profesional', bg: bg4 },
  { id: 5, title: 'Estrategias de poder en los negocios', icon: TrendingUp, category: 'profesional', bg: bg5 },
  { id: 6, title: 'Startup', icon: Rocket, category: 'empresarial', bg: bg6 },
  { id: 7, title: 'Innovación: Hackea la matrix de los negocios', icon: Lightbulb, category: 'empresarial', bg: bg7 },
  { id: 8, title: 'Reputación empresarial', icon: ShieldCheck, category: 'empresarial', bg: bg8 },
  { id: 9, title: 'Planeación estratégica', icon: Target, category: 'empresarial', bg: bg9 },
  { id: 10, title: 'Construyendo un equipo para el éxito', icon: Users, category: 'empresarial', bg: bg10 },
  { id: 11, title: 'Liderazgo organizacional', icon: Crown, category: 'empresarial', bg: bg11 },
  { id: 12, title: 'CX - El lujo silencioso del servicio', icon: HeartHandshake, category: 'empresarial', bg: bg12 }
];

function DesarrolloPersonal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="dp-modal-overlay">
      <div className="dp-modal-content">
        <button className="dp-modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        {/* Desktop Orbital View */}
        <div className="dp-orbital-container dp-desktop-only">
          <svg className="dp-orbital-lines" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}>
            {items.map((item, index) => {
              const total = items.length;
              const angle = (index / total) * 360;
              const rad = ((angle - 90) * Math.PI) / 180;
              const radiusDesktopX = 480;
              const radiusDesktopY = 400;
              const x = Math.cos(rad) * radiusDesktopX;
              const y = Math.sin(rad) * radiusDesktopY;
              return (
                <line 
                  key={`line-${item.id}`} 
                  x1="50%" 
                  y1="50%" 
                  x2={`calc(50% + ${x}px)`} 
                  y2={`calc(50% + ${y}px)`} 
                  stroke="rgba(255, 255, 255, 0.15)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          <div className="dp-center-node glass-glow">
            <h2>Desarrollo<br/>Personal y<br/>Empresarial</h2>
          </div>

          {items.map((item, index) => {
            const total = items.length;
            const angle = (index / total) * 360;
            // Shift angle to start from top (-90 deg)
            const rad = ((angle - 90) * Math.PI) / 180;
            const radiusDesktopX = 480;
            const radiusDesktopY = 400;
            const x = Math.cos(rad) * radiusDesktopX;
            const y = Math.sin(rad) * radiusDesktopY;

            const Icon = item.icon;

            return (
              <div 
                key={item.id} 
                className={`dp-orbital-node glass-card cat-${item.category}`}
                style={{
                  '--tx': `${x}px`,
                  '--ty': `${y}px`,
                }}
              >
                <div className="dp-node-content">
                  <div className="dp-node-icon">
                    <Icon size={32} />
                  </div>
                  <p className="dp-node-title">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile List View */}
        <div className="dp-mobile-container dp-mobile-only">
          <h2 className="dp-mobile-maintitle">Desarrollo Personal y Empresarial</h2>
          
          <h3 className="dp-mobile-subtitle cat-profesional">Desarrollo Profesional</h3>
          <div className="dp-mobile-grid">
            {items.filter(i => i.category === 'profesional').map(item => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="dp-mobile-card cat-profesional glass-card">
                  <div className="dp-mobile-card-content">
                    <Icon size={24} />
                    <p>{item.title}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <h3 className="dp-mobile-subtitle cat-empresarial">Desarrollo Empresarial</h3>
          <div className="dp-mobile-grid">
            {items.filter(i => i.category === 'empresarial').map(item => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="dp-mobile-card cat-empresarial glass-card">
                  <div className="dp-mobile-card-content">
                    <Icon size={24} />
                    <p>{item.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default DesarrolloPersonal;
