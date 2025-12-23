import React from 'react';
import { Product } from '../types';
import { Scan, Cpu, Zap, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group relative cursor-none flex flex-col gap-6 perspective-1000"
      onClick={onClick}
    >
      {/* Card Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-kalki-surface rounded-sm z-10 border border-white/5 group-hover:border-kalki-gold/30 transition-all duration-700">
        
        {/* Image - Scales and Brightens on Hover */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-60 group-hover:opacity-90 grayscale group-hover:grayscale-0"
        />
        
        {/* Ambient Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-kalki-void via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

        {/* HUD Top - Always Visible but subtle */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-20">
          <span className="font-mono text-[9px] text-kalki-gold tracking-widest bg-kalki-void/50 backdrop-blur-sm px-2 py-1 rounded-sm border border-kalki-gold/20">
            NO. {product.id.split('-')[1].toUpperCase()}
          </span>
          <ArrowUpRight className="text-kalki-light w-4 h-4 transform translate-y-2 -translate-x-2 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
        </div>

        {/* Holographic Slide-Up Details - The Fix */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-30">
          {/* Glass Panel Background */}
          <div className="bg-kalki-void/90 backdrop-blur-md border-t border-kalki-gold/20 p-6 flex flex-col gap-4">
            
            {/* Decorative Scan Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-kalki-gold to-transparent opacity-50 mb-2"></div>

            <div className="space-y-3">
               <div className="flex items-center justify-between text-kalki-light/90">
                <div className="flex items-center gap-2">
                    <Cpu size={10} className="text-kalki-gold" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">Sync</span>
                </div>
                <span className="font-mono text-[9px] text-kalki-dim">100%</span>
              </div>
              <div className="flex items-center justify-between text-kalki-light/90">
                <div className="flex items-center gap-2">
                    <Zap size={10} className="text-kalki-gold" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">Charge</span>
                </div>
                 <span className="font-mono text-[9px] text-kalki-dim">Infinitum</span>
              </div>
            </div>
            
            <p className="font-serif italic text-kalki-dim text-xs leading-relaxed border-l border-kalki-dim/20 pl-3">
              "{product.tagline}"
            </p>

            <div className="pt-2 flex justify-between items-center">
                 <span className="text-[9px] uppercase tracking-[0.2em] text-kalki-gold">View Schematic</span>
                 <Scan size={14} className="text-kalki-gold animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Metadata below card */}
      <div className="flex justify-between items-baseline group-hover:opacity-100 opacity-70 transition-opacity duration-500 px-1">
        <div>
          <h3 className="text-xl font-serif text-kalki-light group-hover:text-kalki-gold transition-colors duration-500 tracking-tight">{product.name}</h3>
          <p className="text-[9px] text-kalki-dim font-mono mt-1 tracking-[0.25em] uppercase">
            {product.category}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-kalki-light font-light font-sans tracking-wide text-sm">${product.price}</span>
        </div>
      </div>
    </div>
  );
};