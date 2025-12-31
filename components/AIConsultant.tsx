
import React, { useState } from 'react';
import { gemini } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setAnswer(null);
    const result = await gemini.askAssistant(input);
    setAnswer(result || "I couldn't find an answer. Nihad is currently optimizing a backend service!");
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 border border-white/5 p-8 rounded-sm shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 blur-3xl group-hover:bg-burgundy/10 transition-colors"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-serif font-bold text-gray-100 mb-4 flex items-center">
          <span className="w-2 h-2 bg-burgundy rounded-full mr-3 animate-pulse"></span>
          AI Career Assistant
        </h3>
        <p className="text-xs text-gray-500 mb-6 uppercase tracking-widest">
          Inquire about stack, availability, or methodology.
        </p>

        <form onSubmit={handleAsk} className="space-y-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. What is Nihad's React proficiency?"
            className="w-full bg-gray-950 border border-white/10 px-4 py-3 text-sm text-gray-200 focus:outline-none focus:border-burgundy transition-colors placeholder:text-gray-700"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gray-700 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-burgundy transition-all disabled:opacity-50 active:scale-95"
          >
            {loading ? 'Consulting...' : 'Ask Assistant'}
          </button>
        </form>

        {answer && (
          <div className="mt-6 p-4 bg-gray-950/80 border border-burgundy/20 text-xs text-gray-400 animate-fade-in leading-relaxed">
            <span className="text-burgundy font-bold block mb-1 tracking-widest uppercase text-[9px]">Assistant Response:</span>
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIConsultant;
