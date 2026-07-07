import React from 'react';
import './Footer.css';
import bsgnLogo from '../assets/bsgnlogo.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content text-center">
          <img src={bsgnLogo} alt="BSGN Consulting Group" className="footer-logo" />
          <p className="footer-phrase">"We believe in global networks"</p>
          <div className="footer-contact-info">
            <p>success@bsgn.com.mx</p>
            <p>998 440 8796</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} BSGN Consulting Group. Todos los derechos reservados.</p>
          <a href="#" className="privacy-link">Aviso de Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
