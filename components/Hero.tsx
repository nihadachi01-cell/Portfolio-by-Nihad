
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-950">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-burgundy/10 rounded-full blur-[150px] animate-pulse-soft"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-6 py-2 border border-burgundy/40 rounded-full mb-10 bg-burgundy/5 animate-fade-in opacity-0 [animation-delay:200ms]">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-burgundy">Functional • Modern • Reliable</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif font-bold text-gray-100 mb-8 leading-[1.1] animate-blur-in opacity-0">
          Portfolio by <br /><span className="text-burgundy italic">Nihad</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-light text-gray-400 mb-14 max-w-4xl mx-auto tracking-wide animate-slide-up opacity-0 [animation-delay:400ms] leading-relaxed">
          I design, code, and launch professional websites from start to finish. <br />
          <span className="text-gray-100 font-medium italic">Turning ideas into fully functional online projects in 1 week.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-slide-up opacity-0 [animation-delay:600ms]">
          <a 
            href="#portfolio" 
            onClick={scrollToPortfolio}
            className="btn-luxury px-12 py-5 bg-burgundy text-white rounded-sm font-bold tracking-[0.3em] uppercase hover:bg-burgundy-light shadow-2xl shadow-burgundy/20 group active:scale-95 block w-full sm:w-auto"
          >
            View My Work
            <svg className="inline-block ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#about" 
            onClick={scrollToAbout}
            className="btn-luxury px-12 py-5 border border-gray-700 text-gray-400 rounded-sm font-bold tracking-[0.3em] uppercase hover:bg-gray-100 hover:text-gray-950 active:scale-95 block w-full sm:w-auto"
          >
            My Approach
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20 text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
