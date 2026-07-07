import React from 'react';
import { X } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServiceModal.css';

function ServiceModal({ isOpen, onClose, serviceId }) {
  if (!isOpen || !serviceId) return null;

  const service = servicesData[serviceId];
  if (!service) return null;

  // Choose an accent color class based on the service ID
  // 1: light-blue, 2: orange, 3: magenta (or mix)
  const accentClass = serviceId === 1 ? 'accent-blue' : serviceId === 2 ? 'accent-orange' : 'accent-magenta';

  return (
    <div className="svc-modal-overlay">
      <div className="svc-modal-content">
        <button className="svc-modal-close" onClick={onClose}>
          <X size={32} />
        </button>

        {/* Intro text */}
        <div className="svc-intro">
          {service.quote && <p className="svc-quote">{service.quote}</p>}
          <p className="svc-short-desc">{service.shortDescription}</p>
          {service.targetAudience && <p className="svc-target-desc"><strong>Dirigido a:</strong> {service.targetAudience}</p>}
        </div>

        {/* Desktop Orbital View */}
        <div className="svc-orbital-container svc-desktop-only">
          <div className={`svc-center-node ${accentClass}`}>
            <h2>{service.title}</h2>
          </div>

          {service.includes.map((item, index) => {
            const total = service.includes.length;
            const angle = (index / total) * 360;
            // Shift angle to start from top (-90 deg)
            const rad = ((angle - 90) * Math.PI) / 180;
            // Adjust radius depending on how many items there are
            const radiusDesktop = total > 6 ? 400 : 300; 
            const x = Math.cos(rad) * radiusDesktop;
            const y = Math.sin(rad) * radiusDesktop;

            const Icon = item.icon || X;

            return (
              <div 
                key={index} 
                className={`svc-orbital-node ${accentClass}`}
                style={{
                  '--tx': `${x}px`,
                  '--ty': `${y}px`
                }}
              >
                <div className="svc-node-icon">
                  <Icon size={24} />
                </div>
                <p className="svc-node-title">{item.text}</p>
                
                {/* Subitems popup on hover */}
                {item.subItems && (
                  <div className="svc-node-tooltip">
                    <ul>
                      {item.subItems.map((sub, idx) => (
                        <li key={idx}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile List View */}
        <div className="svc-mobile-container svc-mobile-only">
          <h2 className="svc-mobile-maintitle">{service.title}</h2>
          
          <div className="svc-mobile-grid">
            {service.includes.map((item, index) => {
              const Icon = item.icon || X;
              return (
                <div key={index} className={`svc-mobile-card ${accentClass}`}>
                  <div className="svc-mobile-card-header">
                    <Icon size={24} />
                    <p>{item.text}</p>
                  </div>
                  {item.subItems && (
                    <ul className="svc-mobile-subitems">
                      {item.subItems.map((sub, idx) => (
                        <li key={idx}>- {sub}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="svc-footer">
          <button className={`svc-btn-cta ${accentClass}`} onClick={() => {
            window.location.href = '#contacto';
            onClose();
          }}>
            Solicitar Cotización
          </button>
        </div>

      </div>
    </div>
  );
}

export default ServiceModal;
