
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 scroll-animate opacity-0">
            <span className="text-burgundy font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Core Expertise</span>
            <h2 className="text-4xl font-serif font-bold text-gray-100 mb-6">Technical Arsenal</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              My technical proficiency spans across full-stack ecosystems, with a concentrated focus on high-fidelity frontend architectures and optimized data pipelines.
            </p>
            <div className="p-6 bg-gray-800/50 border-l-4 border-burgundy">
              <p className="text-gray-400 italic text-sm">
                "Quality is not an act, it is a habit. I manifest this through every line of code."
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-x-12 gap-y-10 scroll-animate opacity-0">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="relative group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-300 group-hover:text-burgundy transition-colors">{skill.name}</span>
                  <span className="text-[10px] text-burgundy font-mono tracking-widest">{skill.level}%</span>
                </div>
                <div className="h-[3px] w-full bg-gray-800 overflow-hidden">
                  <div 
                    className="h-full bg-burgundy transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-[9px] text-gray-600 uppercase tracking-tighter font-bold">{skill.category}</span>
                  <div className="w-1 h-1 bg-burgundy/30 rounded-full group-hover:scale-150 transition-transform"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
