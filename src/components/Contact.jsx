import React from 'react';
import './Contact.css';
import { Mail, Phone, Clock } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            Agenda una sesión de consultoría o comunícate con nosotros para más información sobre cómo podemos impulsar tus objetivos.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3 className="contact-info-title">Ponte en contacto</h3>
            
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h4>Correo Electrónico</h4>
                <a href="mailto:success@bsgn.com.mx">success@bsgn.com.mx</a>
              </div>
            </div>

            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h4>Teléfono / WhatsApp</h4>
                <a href="tel:9984408796">998 440 8796</a>
              </div>
            </div>

            <div className="contact-item">
              <Clock className="contact-icon" />
              <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 a 19:00 hrs</p>
              </div>
            </div>

            <div className="contact-social">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaInstagram size={24} />
                  <span>Bsgnconsulting</span>
                </a>
                <a href="#" className="social-link">
                  <FaFacebook size={24} />
                  <span>BSGN Consulting Group</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-card">
            <h3 className="contact-info-title">Envíanos un mensaje</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre completo</label>
                <input type="text" id="name" placeholder="Tu nombre" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" placeholder="tu@correo.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono (opcional)</label>
                <input type="tel" id="phone" placeholder="Tu teléfono" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
