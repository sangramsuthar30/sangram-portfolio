import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [element.id]: true }));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />
      <main>
        <Hero />
        <Skills isVisible={isVisible} />
        <Education isVisible={isVisible} />
        <Projects isVisible={isVisible} />
        <Contact isVisible={isVisible} />
      </main>
    </div>
  );
}

export default App;