import React from 'react';
import { CartItem } from '../types';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, onBack }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping for luxury
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-kalki-void pt-32 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-kalki-dim hover:text-kalki-gold transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-[0.2em]">Return to Cart</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Column: Form */}
          <div>
            <div className="flex items-center gap-3 mb-10 text-kalki-gold">
              <ShieldCheck size={18} strokeWidth={1} />
              <span className="text-[10px] uppercase tracking-[0.3em]">Encrypted Connection</span>
            </div>

            <h1 className="font-serif text-4xl text-kalki-light mb-12">Identity Verification</h1>

            <form className="space-y-10 opacity-50 grayscale pointer-events-none">
              {/* Contact */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-kalki-dim mb-6 border-b border-white/10 pb-2">Digital Contact</h2>
                <input 
                  type="email" 
                  placeholder="Neural Link ID" 
                  disabled
                  className="w-full p-4 bg-transparent border border-white/10 text-kalki-light focus:border-kalki-gold outline-none transition-colors mb-4 font-light"
                />
              </div>

              {/* Shipping */}
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-kalki-dim mb-6 border-b border-white/10 pb-2">Physical Coordinates</h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <input type="text" placeholder="Designation (First)" disabled className="w-full p-4 bg-transparent border border-white/10 text-kalki-light font-light" />
                    <input type="text" placeholder="Designation (Last)" disabled className="w-full p-4 bg-transparent border border-white/10 text-kalki-light font-light" />
                </div>
                <input type="text" placeholder="Sector Address" disabled className="w-full p-4 bg-transparent border border-white/10 text-kalki-light mb-6 font-light" />
                <div className="grid grid-cols-3 gap-6">
                    <input type="text" placeholder="Zone" disabled className="col-span-1 w-full p-4 bg-transparent border border-white/10 text-kalki-light font-light" />
                    <input type="text" placeholder="Region" disabled className="col-span-1 w-full p-4 bg-transparent border border-white/10 text-kalki-light font-light" />
                    <input type="text" placeholder="Code" disabled className="col-span-1 w-full p-4 bg-transparent border border-white/10 text-kalki-light font-light" />
                </div>
              </div>

              <button disabled className="w-full py-5 bg-kalki-surface text-kalki-dim text-xs uppercase tracking-[0.2em] border border-white/10">
                Awaiting Input...
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="bg-kalki-surface p-10 h-fit rounded-sm border border-white/5 shadow-2xl">
             <h2 className="font-serif text-2xl text-kalki-light mb-8">Manifest</h2>
             <div className="space-y-6 mb-10">
               {cart.map(item => (
                 <div key={item.cartId} className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-kalki-void rounded-sm overflow-hidden border border-white/10">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                   </div>
                   <div className="flex-1">
                     <h4 className="font-serif text-kalki-light">{item.name}</h4>
                     {item.selectedSize && <span className="text-[10px] text-kalki-dim uppercase tracking-wide">Config: {item.selectedSize}</span>}
                   </div>
                   <span className="text-sm font-sans text-kalki-gold">${item.price}</span>
                 </div>
               ))}
             </div>

             <div className="border-t border-white/10 pt-6 space-y-3">
               <div className="flex justify-between text-sm text-kalki-dim font-light">
                 <span>Artifact Value</span>
                 <span>${subtotal}</span>
               </div>
               <div className="flex justify-between text-sm text-kalki-dim font-light">
                 <span>Transport</span>
                 <span>Included</span>
               </div>
               <div className="flex justify-between text-xl font-serif text-kalki-light pt-6">
                 <span>Total Exchange</span>
                 <span className="text-kalki-gold">${total}</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};