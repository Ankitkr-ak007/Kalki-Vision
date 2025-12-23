import React, { useEffect, useState } from 'react';
import { ShoppingBag, Menu, X, Eye } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
    isScrolled ? 'bg-kalki-void/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
  }`;

  const linkClass = "cursor-pointer text-kalki-dim hover:text-kalki-gold transition-colors duration-500 font-sans text-xs uppercase tracking-[0.2em]";

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="font-serif text-2xl text-kalki-light cursor-pointer tracking-wider flex items-center gap-2 group"
          onClick={() => onNavigate('home')}
        >
          <Eye size={24} className="text-kalki-gold opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
          <span>Kalki.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-16">
          <span onClick={() => onNavigate('products')} className={linkClass}>Artifacts</span>
          <span onClick={() => onNavigate('about')} className={linkClass}>Vision</span>
          <span onClick={() => onNavigate('journal')} className={linkClass}>Transmission</span>
          
          <button 
            onClick={onOpenCart}
            className="relative p-2 hover:bg-white/5 rounded-full transition-colors group"
          >
            <ShoppingBag size={18} className="text-kalki-dim group-hover:text-kalki-gold transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-kalki-gold text-kalki-void text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-6">
           <button 
            onClick={onOpenCart}
            className="relative p-2"
          >
            <ShoppingBag size={20} className="text-kalki-light" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-kalki-gold text-kalki-void text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-kalki-light">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-kalki-void border-b border-white/10 p-8 flex flex-col gap-8 animate-fade-in">
          <span onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }} className={linkClass}>Artifacts</span>
          <span onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className={linkClass}>Vision</span>
          <span onClick={() => { onNavigate('journal'); setMobileMenuOpen(false); }} className={linkClass}>Transmission</span>
        </div>
      )}
    </nav>
  );
};