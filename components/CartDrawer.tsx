import React from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (cartId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, cart, onRemove, onCheckout }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-kalki-surface z-[70] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col border-l border-white/5 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="p-8 flex justify-between items-center border-b border-white/5 bg-kalki-void">
          <h2 className="font-serif text-2xl text-kalki-light">Acquisitions ({cart.length})</h2>
          <button onClick={onClose} className="text-kalki-dim hover:text-kalki-gold transition-colors">
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-kalki-void/50">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-kalki-dim/50 gap-6">
              <ShoppingBag size={64} strokeWidth={0.5} />
              <p className="font-light text-xl font-serif">The void is empty.</p>
              <button onClick={onClose} className="text-xs uppercase tracking-widest text-kalki-gold hover:text-kalki-light transition-colors">Resume Search</button>
            </div>
          ) : (
            <div className="space-y-8">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-6 animate-fade-in">
                  <div className="w-24 h-32 bg-kalki-surface rounded-sm overflow-hidden flex-shrink-0 border border-white/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg text-kalki-light">{item.name}</h3>
                        <span className="font-sans text-sm text-kalki-gold">${item.price}</span>
                      </div>
                      {item.selectedSize && (
                        <p className="text-[10px] text-kalki-dim uppercase tracking-wider mt-2">Config: {item.selectedSize}</p>
                      )}
                    </div>
                    <button 
                      onClick={() => onRemove(item.cartId)}
                      className="text-xs text-kalki-dim/60 hover:text-red-400 text-left w-fit transition-colors uppercase tracking-widest"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 bg-kalki-void border-t border-white/5">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl text-kalki-light">Total Value</span>
              <span className="font-sans text-xl text-kalki-gold font-light">${subtotal}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full py-5 bg-kalki-light text-kalki-void text-xs uppercase tracking-[0.2em] hover:bg-kalki-gold transition-colors duration-500 flex items-center justify-center gap-3"
            >
              Initialize Transfer <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};