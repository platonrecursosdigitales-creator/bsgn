import React from 'react';
import './Contact.css';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-subtitle">Ponte en contacto con nosotros</h3>
            <p className="contact-desc">
              Estamos listos para impulsar tu marca y llevar tu negocio al siguiente nivel. Escríbenos y un asesor se pondrá en contacto contigo.
            </p>
            
            <ul className="contact-details">
              <li>
                <Globe className="contact-icon" />
                <div>
                  <strong>México - USA</strong>
                  <span>Servicios disponibles a todo el mundo</span>
                </div>
              </li>
              <li>
                <Phone className="contact-icon" />
                <div>
                  <strong>Teléfono</strong>
                  <span><a href="tel:+529984408796">(+52) 998 440 87 96</a></span>
                </div>
              </li>
              <li>
                <Mail className="contact-icon" />
                <div>
                  <strong>Email</strong>
                  <span><a href="mailto:success@bsgn.com.mx">success@bsgn.com.mx</a></span>
                </div>
              </li>
              <li>
                <MapPin className="contact-icon" />
                <div>
                  <strong>Dirección</strong>
                  <span>Cancún, Quintana Roo</span>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="nombre" placeholder="Nombre completo" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="email" id="email" placeholder="E-mail" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="telefono" placeholder="Teléfono" required />
                </div>
              </div>
              <div className="form-group">
                <textarea id="mensaje" rows="5" placeholder="Tu mensaje..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
