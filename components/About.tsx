import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-kalki-surface relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kalki-void/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Block 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 mb-40">
          <div className="flex-1">
            <span className="text-kalki-gold text-xs uppercase tracking-[0.3em] mb-6 block">Origins</span>
            <h2 className="text-4xl md:text-6xl font-serif text-kalki-light mb-8 leading-tight">Ancient materials.<br/>Future minds.</h2>
            <p className="text-kalki-dim text-lg font-light leading-relaxed">
              Kalki Vision exists at the intersection of archaeology and futurism. We reject the sterile plastic of the early digital age. Instead, we encase advanced quantum processors in obsidian, basalt, and gold. Materials that hold memory. Materials that ground the user while the mind travels the network.
            </p>
          </div>
          <div className="flex-1 w-full h-[500px] relative rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Texture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-kalki-void/20"></div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-32">
          <div className="flex-1 w-full h-[500px] relative rounded-sm overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop" 
              alt="Minimalist space" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="flex-1">
            <span className="text-kalki-gold text-xs uppercase tracking-[0.3em] mb-6 block">Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-kalki-light mb-8 leading-tight">The Silence Protocol.</h2>
            <p className="text-kalki-dim text-lg font-light leading-relaxed">
              In an era of noise, we design for silence. Our "Protocol" ensures that technology remains dormant until summoned. No notifications, no red dots, no anxiety. Just pure, dormant potential waiting for your intent. This is technology that respects the sanctity of human consciousness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};