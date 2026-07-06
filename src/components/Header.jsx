import React, { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X, ChevronDown } from 'lucide-react';
import bsgnLogo from '../assets/bsgnlogo.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <a href="#">
            <img src={bsgnLogo} alt="BSGN Consulting Group" className="site-logo" />
          </a>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li>
              <a href="#areas" onClick={() => setMobileMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Servicios <ChevronDown size={16} />
              </a>
            </li>
            <li><a href="#webinar" onClick={() => setMobileMenuOpen(false)}>Webinar</a></li>
            <li><a href="#nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</a></li>
            <li><a href="#acerca-de" onClick={() => setMobileMenuOpen(false)}>Acerca de</a></li>
            <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
        </nav>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
