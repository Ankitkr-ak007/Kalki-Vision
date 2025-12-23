import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [offset, setOffset] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Text Decryption Effect
  const [text, setText] = useState("F_t_re S__n.");
  const finalText = "Future Seen.";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%^&*";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(prev => 
        finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= finalText.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-kalki-void perspective-1000">
      {/* Parallax Background with 3D Tilt */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-200 ease-out will-change-transform"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop")',
          transform: `translateY(${offset * 0.5}px) scale(${1.1}) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`
        }}
      ></div>
      
      {/* Atmospheric Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-kalki-void via-transparent to-kalki-void z-0"></div>
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-kalki-void z-0 opacity-80"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up flex flex-col items-center">
        <div className="flex items-center gap-4 mb-8 opacity-70">
          <div className="h-px w-16 bg-kalki-gold/50"></div>
          <p className="text-kalki-gold text-[10px] md:text-xs tracking-[0.8em] uppercase font-mono">
            System Online v2.0.4
          </p>
          <div className="h-px w-16 bg-kalki-gold/50"></div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-serif text-kalki-light mb-8 leading-[0.85] tracking-tighter mix-blend-screen">
          {text}
        </h1>
        
        <p className="text-kalki-dim text-lg md:text-xl font-sans font-light mb-16 max-w-xl mx-auto leading-relaxed tracking-wide text-balance">
          Forging artifacts that bridge the <span className="text-kalki-light italic">sacred gap</span> between biological eye and digital soul.
        </p>
        
        <button 
          onClick={onExplore}
          className="group relative overflow-hidden bg-transparent px-14 py-5 transition-all duration-500"
        >
          <div className="absolute inset-0 border border-kalki-light/10 skew-x-12 transition-all duration-500 group-hover:border-kalki-gold/50 group-hover:skew-x-0 group-hover:bg-kalki-gold/5"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-kalki-gold transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          <div className="absolute bottom-0 right-0 w-1 h-full bg-kalki-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out delay-75"></div>
          
          <span className="relative text-xs uppercase tracking-[0.35em] text-kalki-light font-mono group-hover:text-kalki-gold transition-colors">
            Enter The Void
          </span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-pulse-slow text-kalki-dim/30">
        <span className="text-[9px] uppercase tracking-[0.4em] font-mono rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="h-24 w-px bg-gradient-to-b from-transparent via-kalki-gold to-transparent opacity-50"></div>
      </div>
    </section>
  );
};