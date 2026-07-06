import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import ConversionBand from './components/ConversionBand';
import About from './components/About';
import StrategicAreas from './components/StrategicAreas';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <ConversionBand />
        <About />
        <StrategicAreas />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
