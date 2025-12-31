
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  // Simple intersection observer logic for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    // Track sections or elements to animate
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="scroll-animate opacity-0">
          <About />
        </div>
        
        <div className="scroll-animate opacity-0">
          <Projects />
        </div>
        
        <div className="scroll-animate opacity-0">
          <Skills />
        </div>
        
        <div className="scroll-animate opacity-0">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
