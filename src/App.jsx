import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalaxyBackground from './components/GalaxyBackground';

import './index.css';

function App() {
  return (
    <div className="App relative min-h-screen text-gray-200">
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}>
        <GalaxyBackground />
      </div>
      <Navbar />
      <main id="home" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}

export default App;
