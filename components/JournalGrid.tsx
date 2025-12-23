import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { Article } from '../types';
import { ArrowRight } from 'lucide-react';

interface JournalGridProps {
  onArticleClick: (article: Article) => void;
}

export const JournalGrid: React.FC<JournalGridProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="py-32 max-w-7xl mx-auto px-8 border-t border-white/5">
       <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-kalki-light mb-6">Transmission</h2>
          <p className="text-kalki-dim font-light tracking-widest uppercase text-xs">Signals from the future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {JOURNAL_ARTICLES.map((article) => (
            <article 
              key={article.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => onArticleClick(article)}
            >
              <div className="overflow-hidden mb-8 rounded-sm aspect-[16/10] relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-kalki-void/30 group-hover:bg-transparent transition-colors"></div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-kalki-gold mb-3 block">{article.date}</span>
              <h3 className="text-2xl font-serif text-kalki-light mb-4 group-hover:text-kalki-gold transition-colors">{article.title}</h3>
              <p className="text-kalki-dim font-light line-clamp-3 leading-relaxed text-sm mb-6">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-kalki-light group-hover:text-kalki-gold transition-colors">
                Access File <ArrowRight size={12} />
              </div>
            </article>
          ))}
        </div>
    </section>
  );
};