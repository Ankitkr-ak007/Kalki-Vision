import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kalki-void text-kalki-dim border-t border-white/5 py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="text-left">
          <h2 className="font-serif text-3xl mb-4 text-kalki-light">Kalki Vision.</h2>
          <p className="text-kalki-dim/50 text-xs font-sans uppercase tracking-widest max-w-xs leading-loose">
            Merging the eternal with the imminent.<br/>Designed in the Void.
          </p>
        </div>
        
        <div className="flex gap-12 text-[10px] font-sans tracking-[0.2em] uppercase text-kalki-dim">
          <a href="#" className="hover:text-kalki-gold transition-colors">Network</a>
          <a href="#" className="hover:text-kalki-gold transition-colors">Manifesto</a>
          <a href="#" className="hover:text-kalki-gold transition-colors">Legal</a>
        </div>
        
        <div className="text-[10px] text-kalki-dim/30 font-light tracking-widest uppercase">
          © {new Date().getFullYear()} Kalki Vision Systems
        </div>
      </div>
    </footer>
  );
};