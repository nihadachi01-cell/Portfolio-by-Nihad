import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-gray-900 relative border-y border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-burgundy/5 -skew-x-12 transform translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group scroll-animate opacity-0">
            <div className="absolute -top-6 -left-6 w-full h-full border border-burgundy/30 transition-all duration-700 group-hover:top-0 group-hover:left-0"></div>
            <div className="relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="Web Development Workspace" 
                className="relative z-10 w-full h-[650px] object-cover grayscale brightness-90 contrast-110 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-burgundy p-10 z-20 shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <span className="block text-3xl font-serif font-bold text-white mb-1">7 Day</span>
              <span className="block text-[10px] uppercase tracking-[0.4em] text-white/90 font-bold whitespace-nowrap">Rapid Launch</span>
            </div>
          </div>

          <div className="scroll-animate opacity-0">
            <span className="text-burgundy font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Professional Profile</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-100 mb-10 leading-[1.2]">Design, Code, and <br /><span className="italic text-burgundy">Launch Excellence</span></h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              I design, code, and launch modern websites from start to finish. I specialize in creating professional, clean, and responsive websites, handling everything from visual design to writing efficient code and publishing the website online so it is fully ready for use.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              I focus on building websites that are fast, well-structured, and easy to navigate, ensuring a smooth experience on all devices. Every client project is completed efficiently, with a delivery time of one week, from the first design concept to the final published website.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gray-800 border-l-2 border-burgundy/40 hover:border-burgundy transition-colors group">
                <h4 className="text-gray-100 font-bold mb-2 tracking-[0.3em] uppercase text-[10px]">Complete Solutions</h4>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">Design, development, and deployment — handled with precision.</p>
              </div>
              <div className="p-6 bg-gray-800 border-l-2 border-burgundy/40 hover:border-burgundy transition-colors group">
                <h4 className="text-gray-100 font-bold mb-2 tracking-[0.3em] uppercase text-[10px]">Quality Code</h4>
                <p className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">Clean, efficient, and responsive coding for any screen.</p>
              </div>
            </div>

            <a 
              href="#contact" 
              className="btn-luxury inline-flex items-center text-burgundy font-bold tracking-[0.3em] uppercase text-xs hover:text-gray-100 transition-all group py-2"
            >
              Start Your One-Week Project
              <span className="ml-6 w-16 h-px bg-burgundy group-hover:bg-gray-100 group-hover:w-24 transition-all duration-700"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;