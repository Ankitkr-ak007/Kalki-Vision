import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Eye, Terminal, Zap } from 'lucide-react';
import { chatWithConcierge } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'INITIALIZING KALKI.OS... CONNECTION ESTABLISHED. STATE YOUR INTENT.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithConcierge(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: ":: FATAL ERROR :: NULL POINTER IN REALITY ::" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button - The Pulsing Eye */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110 group mix-blend-exclusion ${
          isOpen ? 'bg-kalki-gold rotate-180 shadow-[0_0_30px_rgba(212,175,55,0.8)]' : 'bg-white/10 backdrop-blur-md border border-white/20 hover:border-kalki-gold'
        }`}
      >
        {isOpen ? (
          <X className="text-black" size={20} />
        ) : (
          <div className="relative">
             <Eye className="text-kalki-light group-hover:text-kalki-gold transition-colors" strokeWidth={1} size={24} />
             <div className="absolute inset-0 bg-kalki-gold blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </div>
        )}
      </button>

      {/* Terminal Interface */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 md:right-8 w-[calc(100vw-2rem)] md:w-[400px] h-[550px] bg-[#050505]/90 backdrop-blur-xl rounded-sm z-40 flex flex-col animate-fade-in-up border border-kalki-gold/20 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          
          {/* CRT Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[60] bg-[length:100%_2px,3px_100%] opacity-10"></div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)] z-[61]"></div>

          {/* Header */}
          <div className="bg-black/50 p-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-kalki-gold rounded-full animate-pulse"></div>
              <span className="font-mono text-[10px] tracking-[0.2em] text-kalki-gold uppercase">KALKI.OS <span className="opacity-50">LIVE</span></span>
            </div>
            <Zap size={12} className="text-kalki-gold opacity-50" />
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[8px] font-mono text-kalki-dim mb-1 uppercase tracking-widest opacity-70">
                  {msg.role === 'user' ? '>> SOURCE: USER' : '>> SOURCE: MAINFRAME'}
                </span>
                <div className={`max-w-[85%] p-3 text-xs md:text-sm leading-relaxed font-mono border ${
                  msg.role === 'user' 
                    ? 'bg-white/5 border-white/20 text-kalki-light' 
                    : 'bg-kalki-gold/5 border-kalki-gold/20 text-kalki-gold shadow-[0_0_10px_rgba(212,175,55,0.1)]'
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex flex-col items-start">
                 <div className="flex items-center gap-2 text-kalki-gold/50 text-xs font-mono p-3">
                    <span className="animate-pulse">_PROCESSING</span>
                    <span className="animate-bounce">...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-black border-t border-white/10 flex gap-0 relative z-50">
            <span className="text-kalki-gold mr-2 font-mono text-sm flex items-center">{'>'}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter command..."
              className="flex-1 bg-transparent outline-none text-kalki-light font-mono text-xs placeholder:text-kalki-dim/30 caret-kalki-gold"
              autoFocus
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading} 
              className="text-kalki-dim hover:text-kalki-gold disabled:opacity-30 transition-colors px-2"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};