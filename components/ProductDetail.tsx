import React, { useState, MouseEvent } from 'react';
import { Product, ProductCategory } from '../types';
import { ArrowLeft, Hexagon } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size?: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const isWearable = product.category === ProductCategory.WEARABLE;
  
  // Lens Effect State
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });
  const [showLens, setShowLens] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setLensPos({ x, y });
  };

  return (
    <div className="min-h-screen bg-kalki-void pt-32 pb-12 px-6 animate-fade-in z-10 relative">
      <button 
        onClick={onBack}
        className="fixed top-28 left-8 z-50 flex items-center gap-3 text-kalki-dim hover:text-kalki-gold transition-colors group mix-blend-difference"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Return</span>
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Interactive Image Side - The Lens */}
        <div className="lg:col-span-7 relative">
            <div 
                className="aspect-[3/4] w-full overflow-hidden rounded-sm relative shadow-2xl shadow-kalki-surface border border-white/5 group cursor-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setShowLens(true)}
                onMouseLeave={() => setShowLens(false)}
            >
            <img 
                src={product.detailImage} 
                alt={product.name}
                className="w-full h-full object-cover opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-kalki-void/40 to-transparent pointer-events-none" />
            
            {/* The Liquid Lens */}
            <div 
                className={`absolute w-48 h-48 rounded-full border border-kalki-gold/30 pointer-events-none transition-opacity duration-300 mix-blend-hard-light ${showLens ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: `${lensPos.x}%`,
                    top: `${lensPos.y}%`,
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: `url(${product.detailImage})`,
                    backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
                    backgroundSize: '250%',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.2), inset 0 0 20px rgba(0,0,0,0.5)'
                }}
            />
            <div 
                 className={`absolute pointer-events-none transition-opacity duration-300 text-kalki-gold font-mono text-[9px] tracking-widest ${showLens ? 'opacity-100' : 'opacity-0'}`}
                 style={{ left: `${lensPos.x}%`, top: `${lensPos.y}%`, transform: 'translate(30px, 30px)' }}
            >
                ANALYZING...
            </div>
            </div>
        </div>

        {/* Details Side */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full py-8 relative">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -z-10 opacity-5 animate-spin-slow">
             <Hexagon size={300} strokeWidth={0.5} />
          </div>

          <div className="flex items-center gap-4 mb-8">
             <span className="w-2 h-2 bg-kalki-gold rounded-full animate-pulse"></span>
             <span className="text-kalki-gold text-[10px] uppercase tracking-[0.4em] font-mono">{product.category} CLASS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-kalki-light mb-6 leading-[0.9] tracking-tight">{product.name}</h1>
          <p className="text-3xl font-light text-kalki-dim mb-10 font-mono">${product.price} <span className="text-xs align-top opacity-50">UNIT COST</span></p>
          
          <div className="h-px w-full bg-gradient-to-r from-kalki-gold/50 to-transparent mb-10"></div>

          <p className="text-kalki-light/80 leading-loose font-light text-lg mb-12 tracking-wide">
            {product.description}
          </p>

          {isWearable && (
            <div className="mb-10 p-6 border border-white/5 bg-white/5 rounded-sm backdrop-blur-sm">
              <span className="block text-[9px] uppercase tracking-[0.3em] text-kalki-dim mb-4 font-mono">Somatic Fit</span>
              <div className="flex gap-4">
                {['S', 'M', 'L'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border transition-all font-mono text-xs relative overflow-hidden group ${
                      selectedSize === size 
                        ? 'border-kalki-gold text-kalki-void font-bold' 
                        : 'border-white/10 text-kalki-dim hover:border-kalki-light'
                    }`}
                  >
                    <span className={`absolute inset-0 bg-kalki-gold transition-transform duration-300 ${selectedSize === size ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}></span>
                    <span className="relative z-10">{size}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => onAddToCart(product, isWearable ? selectedSize : undefined)}
            className="w-full py-6 bg-kalki-light text-kalki-void text-xs uppercase tracking-[0.3em] hover:bg-kalki-gold transition-colors duration-500 mb-16 font-medium relative overflow-hidden group"
          >
             <span className="relative z-10 font-bold">Initiate Transfer</span>
             <div className="absolute inset-0 bg-kalki-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          </button>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-kalki-dim mb-6">Technical Specifications</h3>
            <ul className="grid grid-cols-1 gap-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-kalki-light/70 font-light text-sm group border-b border-white/5 pb-2">
                  <span className="w-1 h-1 rounded-full bg-kalki-gold group-hover:scale-150 transition-transform"></span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};