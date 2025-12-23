import React from 'react';
import { Article } from '../types';
import { ArrowLeft } from 'lucide-react';

interface JournalDetailProps {
  article: Article;
  onBack: () => void;
}

export const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-kalki-void animate-fade-in">
      <div className="h-[60vh] w-full relative overflow-hidden">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover fixed top-0 left-0 h-[60vh] -z-10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-kalki-void/30 via-kalki-void/60 to-kalki-void" />
        
        <div className="absolute top-32 left-8 z-10">
             <button 
              onClick={onBack}
              className="flex items-center gap-3 text-kalki-light hover:text-kalki-gold transition-colors group glass-panel px-6 py-3 rounded-full"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs uppercase tracking-[0.2em]">Abort</span>
            </button>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-8 relative z-10 -mt-32 mb-20">
        <div className="bg-kalki-void/80 backdrop-blur-xl p-10 md:p-20 border border-white/5 shadow-2xl rounded-sm">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-kalki-gold block mb-6">{article.date}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-kalki-light leading-tight">{article.title}</h1>
          </div>
          
          <div className="prose prose-invert prose-lg mx-auto font-serif text-kalki-dim leading-loose">
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-kalki-gold first-letter:mr-4 first-letter:float-left">
              {article.content}
            </p>
            <p>
              (Encrypted transmission end. The remainder of this file is restricted to Level 5 adepts. Please connect your Drishti interface to continue download.)
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex justify-center">
            <span className="font-sans text-xs uppercase tracking-[0.4em] text-kalki-dim">Kalki Vision Systems</span>
          </div>
        </div>
      </article>
    </div>
  );
};