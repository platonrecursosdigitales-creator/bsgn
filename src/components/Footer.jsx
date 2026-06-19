import React from 'react';
import './Footer.css';
import bsgnLogo from '../assets/bsgnlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={bsgnLogo} alt="BSGN Consulting Group" className="site-logo" />
          </div>
          <div className="footer-links">
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BSGN Consulting Group. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
