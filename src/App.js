import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App bg-cream">
      <Navbar activeSection={activeSection} setActiveSection={handleNavClick} />
      <main>
        <div id="home">
          <Home setActiveSection={handleNavClick} />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="resume">
          <Resume />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
