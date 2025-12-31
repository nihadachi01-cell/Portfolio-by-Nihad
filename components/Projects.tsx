
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 bg-gray-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 scroll-animate opacity-0">
          <span className="text-burgundy font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Elite Repositories</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-100 mb-8 leading-tight">Mastery in <span className="italic">Development</span></h2>
          <div className="w-24 h-[2px] bg-burgundy mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="group relative bg-gray-900 overflow-hidden border border-white/5 hover:border-burgundy/50 transition-all duration-700 shadow-2xl flex flex-col scroll-animate opacity-0"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Container with Luxury Filter - Clickable */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="aspect-[4/5] overflow-hidden relative block cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
              </a>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-[0.2em] px-3 py-1 bg-gray-800 text-gray-500 border border-white/5 font-bold group-hover:border-burgundy/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Clickable Title */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:text-burgundy transition-colors duration-300"
                >
                  <h3 className="text-xl font-serif font-bold text-gray-100 mb-4 transition-colors">
                    {project.title}
                  </h3>
                </a>
                
                <p className="text-gray-500 text-xs mb-8 line-clamp-3 leading-loose font-light">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury w-full py-4 text-center border border-burgundy/40 text-burgundy text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-burgundy hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    View Website
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Interactive Accent Bar */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-burgundy scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
