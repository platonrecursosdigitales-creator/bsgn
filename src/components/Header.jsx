import React, { useState, useEffect } from 'react';
import './Header.css';
import { Menu, X, ChevronDown } from 'lucide-react';
import bsgnLogo from '../assets/bsgnlogo.png';

function Header({ onOpenTrayectoria }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [areasOpen, setAreasOpen] = useState(false);
  const [nosotrosOpen, setNosotrosOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass-card' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <a href="#">
            <img src={bsgnLogo} alt="BSGN Consulting Group" className="site-logo" />
          </a>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#areas" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>

            <li className="has-dropdown" onMouseEnter={() => setNosotrosOpen(true)} onMouseLeave={() => setNosotrosOpen(false)}>
              <a href="#nosotros" className="dropdown-toggle" onClick={(e) => { if(window.innerWidth <= 992) { e.preventDefault(); setNosotrosOpen(!nosotrosOpen); } }}>
                Nosotros <ChevronDown size={16} className={`dropdown-icon ${nosotrosOpen ? 'rotate' : ''}`} />
              </a>
              <ul className={`dropdown-menu ${nosotrosOpen ? 'show' : ''}`}>
                <li><a href="#filosofia" onClick={() => setMobileMenuOpen(false)}>Filosofía</a></li>
                <li><a href="#dyrcharaf" onClick={() => setMobileMenuOpen(false)}>Dyr Charaf</a></li>
                <li>
                  <a href="#trayectoria" onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (onOpenTrayectoria) onOpenTrayectoria();
                  }}>
                    Trayectoria
                  </a>
                </li>
                <li><a href="#filosofia" onClick={() => setMobileMenuOpen(false)}>Valores</a></li>
              </ul>
            </li>

            <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
          </ul>
          
          <div className="header-cta-mobile">
            <a 
              href="https://calendly.com/dyrcharaf/vida-negocios-imagen-y-exito-con-dyr-charaf-askdyr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Agenda consultoría
            </a>
          </div>
        </nav>

        <div className="header-actions">
          <a 
            href="https://calendly.com/dyrcharaf/vida-negocios-imagen-y-exito-con-dyr-charaf-askdyr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-sm desktop-only"
          >
            Agenda consultoría
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
