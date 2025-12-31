
import React, { useState } from 'react';
import AIConsultant from './AIConsultant';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // Simulate real backend processing with a delay for "quality feel"
    setTimeout(() => {
      if (formData.email.includes('error')) {
        setError('Connection timed out. Please try again.');
        setLoading(false);
      } else {
        console.log("Transmission received:", formData);
        setIsSent(true);
        setLoading(false);
        setFormData({ name: '', email: '', message: '' });
      }
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Subtle Background Textures */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-burgundy/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="scroll-animate opacity-0">
            <span className="text-burgundy font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Direct Consultation</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-100 mb-10 leading-tight">Elevate Your <br /><span className="italic text-burgundy">Vision</span></h2>
            
            <p className="text-gray-500 text-lg mb-16 leading-relaxed font-light max-w-lg">
              Currently accepting select high-profile collaborations. I focus on projects that require uncompromising technical precision and aesthetic excellence.
            </p>

            <div className="space-y-12 mb-16">
              <div className="flex items-center group cursor-default">
                <div className="w-16 h-16 bg-burgundy/5 flex items-center justify-center text-burgundy mr-8 border border-burgundy/20 transition-all duration-500 group-hover:bg-burgundy group-hover:text-white transform group-hover:rotate-[360deg]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-bold mb-1 uppercase tracking-[0.3em] text-[10px]">Primary Channel</h4>
                  <a href="mailto:nihadachi01@gmail.com" className="text-gray-100 hover:text-burgundy transition-colors text-lg font-serif">nihadachi01@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center group cursor-default">
                <div className="w-16 h-16 bg-burgundy/5 flex items-center justify-center text-burgundy mr-8 border border-burgundy/20 transition-all duration-500 group-hover:bg-burgundy group-hover:text-white transform group-hover:rotate-[360deg]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m0 12c-1.657 0-3-1.343-3-3s1.343-3 3-3m0 0V3m0 18v-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-400 font-bold mb-1 uppercase tracking-[0.3em] text-[10px]">Global Presence</h4>
                  <div className="flex space-x-10 mt-3">
                    <a href="https://github.com/nihad-achi" target="_blank" className="text-gray-100 hover:text-burgundy transition-all text-xs uppercase tracking-widest font-bold border-b border-transparent hover:border-burgundy">GitHub</a>
                    <a href="#" className="text-gray-100 hover:text-burgundy transition-all text-xs uppercase tracking-widest font-bold border-b border-transparent hover:border-burgundy">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <AIConsultant />
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-12 border border-white/5 relative overflow-hidden shadow-2xl scroll-animate opacity-0">
            {/* High-Fidelity Success Message */}
            <div className={`absolute inset-0 bg-gray-950 z-20 flex flex-col items-center justify-center p-12 text-center transition-all duration-1000 cubic-bezier(0.77, 0, 0.175, 1) ${isSent ? 'translate-y-0' : 'translate-y-full'}`}>
              <div className="w-24 h-24 bg-burgundy/10 border border-burgundy/50 rounded-full flex items-center justify-center text-burgundy mb-10 animate-pulse">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-4xl font-serif font-bold text-gray-100 mb-6 tracking-tighter">Inquiry Received</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">Thank you, Nihad will review your request within 24 hours.</p>
              <button onClick={() => setIsSent(false)} className="btn-luxury mt-12 text-burgundy font-bold tracking-[0.4em] uppercase text-[10px] hover:text-white hover:bg-burgundy px-8 py-3 transition-all border border-burgundy/30">New Message</button>
            </div>

            <h3 className="text-2xl font-serif font-bold text-gray-100 mb-12 flex items-center gap-4">
              Submit Briefing <span className="flex-grow h-px bg-white/5"></span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="group space-y-3">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-600 group-focus-within:text-burgundy transition-colors">Client Identification</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-800 py-4 text-gray-200 focus:outline-none focus:border-burgundy transition-all duration-700 placeholder:text-gray-800 placeholder:italic"
                  placeholder="Full Name or Enterprise Name"
                />
              </div>
              <div className="group space-y-3">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-600 group-focus-within:text-burgundy transition-colors">Secure Return Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-800 py-4 text-gray-200 focus:outline-none focus:border-burgundy transition-all duration-700 placeholder:text-gray-800 placeholder:italic"
                  placeholder="name@enterprise.com"
                />
              </div>
              <div className="group space-y-3">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-600 group-focus-within:text-burgundy transition-colors">Requirement Overview</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-950/30 border border-gray-800 p-6 text-gray-200 focus:outline-none focus:border-burgundy transition-all duration-700 resize-none placeholder:text-gray-800 placeholder:italic text-sm leading-relaxed"
                  placeholder="Please outline the scope and objectives of your vision..."
                />
              </div>

              {error && <p className="text-burgundy text-[10px] uppercase tracking-widest font-bold animate-fade-in">{error}</p>}

              <button 
                type="submit" 
                disabled={loading}
                className="btn-luxury w-full py-6 bg-burgundy text-white font-bold tracking-[0.5em] uppercase hover:bg-burgundy-light transition-all shadow-2xl shadow-burgundy/30 active:scale-[0.98] disabled:opacity-50 overflow-hidden"
              >
                {loading ? 'Transmitting Data...' : 'Confirm Transmission'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
