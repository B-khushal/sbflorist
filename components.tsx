
import React from 'react';

// --- Hero Section ---
export const Hero: React.FC = () => (
  <div className="text-center space-y-6">
    <div className="inline-block px-6 py-2 rounded-full bg-valentine-red text-white font-medium text-sm mb-4 animate-float shadow-lg shadow-red-100">
      Valentine's Day Pre-orders are Open! ❤️
    </div>
    <h1 className="font-serif text-5xl md:text-8xl text-valentine-red leading-tight">
      Love in <br />
      <span className="italic text-brand-pink font-normal">Full Bloom</span>
    </h1>
    <p className="text-stone-500 font-sans tracking-[0.4em] uppercase text-xs md:text-sm font-semibold">
      Spring Blossoms Florist • Hyderabad
    </p>
    <div className="max-w-2xl mx-auto mt-8">
      <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-serif italic">
        "Because some feelings are best expressed through the timeless beauty of a rose."
      </p>
      <p className="text-stone-500 text-sm mt-4">
        We are crafting the ultimate Valentine's collection. Our full website debuts soon, but our flowers are ready to tell your story today.
      </p>
    </div>
  </div>
);

// --- Construction Notice ---
export const Notice: React.FC = () => (
  <div className="max-w-3xl mx-auto">
    <div className="bg-white border-2 border-blush-pink rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-rose-100 relative overflow-hidden text-center">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blush-pink rounded-full opacity-30"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blush-pink rounded-full opacity-30"></div>
      
      <h3 className="font-serif text-3xl mb-8 text-valentine-red">Crafting Your Love Stories</h3>
      
      <div className="w-full bg-stone-50 rounded-full h-4 mb-8 relative border border-rose-100 p-0.5">
        <div 
          className="bg-gradient-to-r from-valentine-red via-valentine-crimson to-rose-400 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: '88%' }}
        />
      </div>
      
      <div className="flex justify-between items-center text-xs text-stone-400 font-bold uppercase tracking-widest mb-10">
        <span>Growing</span>
        <span className="text-valentine-red">88% Valentine Ready</span>
      </div>

      <p className="text-stone-600 italic font-serif">
        "Our floral designers are currently hand-picking the finest Red Naomi roses for your special someone."
      </p>
    </div>
  </div>
);

// --- About Section ---
export const About: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-16 items-center">
    <div className="order-2 md:order-1 relative">
      <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-[12px] border-white">
         <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop" 
          alt="Valentine Roses" 
          className="object-cover w-full h-full opacity-95 transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-valentine-red/10 pointer-events-none"></div>
      </div>
      <div className="absolute -top-8 -left-8 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border border-rose-50 animate-float">
        <span className="text-3xl">🌹</span>
      </div>
    </div>
    
    <div className="order-1 md:order-2 space-y-8">
      <div className="space-y-4">
        <span className="text-soft-gold font-bold tracking-widest uppercase text-xs">Exclusives</span>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">The Valentine's <br/><span className="text-valentine-red italic">Edit</span></h2>
      </div>
      <p className="text-stone-600 leading-relaxed text-lg font-light">
        This season, Spring Blossoms Florist brings you the most romantic curation in Hyderabad. From classic long-stemmed roses to bespoke luxury boxes.
      </p>
      <div className="grid grid-cols-1 gap-4">
        {[
          { icon: '❤️', text: 'Heart-Shaped Luxury Box' },
          { icon: '♾️', text: 'Infinity Roses (Lasts 1 Year)' },
          { icon: '🍫', text: 'Flower & Chocolate Combos' },
          { icon: '🚕', text: 'Midnight Surprise Delivery' }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-rose-50 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium text-stone-700">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Contact Section ---
export const Contact: React.FC = () => (
  <div id="contact" className="bg-valentine-red/[0.03] rounded-[4rem] p-10 md:p-24 text-center space-y-16 border border-valentine-red/10 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-valentine-red to-transparent opacity-20"></div>
    
    <div className="space-y-4 relative z-10">
      <h2 className="font-serif text-4xl md:text-5xl text-valentine-red italic">Reserve Your Bouquet</h2>
      <p className="text-stone-500 max-w-xl mx-auto">Don't wait until the last minute. Ensure your love is delivered with perfection this Valentine's Day.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 relative z-10">
      <a href="tel:+919849589710" className="group p-10 bg-white rounded-3xl border border-stone-100 hover:border-valentine-red transition-all shadow-sm hover:shadow-xl">
        <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mx-auto mb-6 text-valentine-red group-hover:scale-110 transition-transform text-2xl">
          📞
        </div>
        <h4 className="font-serif text-xl text-stone-800 mb-2">Voice of Love</h4>
        <p className="text-stone-500 font-medium">+91 98495 89710</p>
      </a>

      <a href="mailto:2006sbf@gmail.com" className="group p-10 bg-white rounded-3xl border border-stone-100 hover:border-valentine-red transition-all shadow-sm hover:shadow-xl">
        <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mx-auto mb-6 text-valentine-red group-hover:scale-110 transition-transform text-2xl">
          💌
        </div>
        <h4 className="font-serif text-xl text-stone-800 mb-2">Send a Note</h4>
        <p className="text-stone-500 font-medium break-all">2006sbf@gmail.com</p>
      </a>

      <div className="group p-10 bg-white rounded-3xl border border-stone-100 hover:border-valentine-red transition-all shadow-sm hover:shadow-xl">
        <div className="w-16 h-16 bg-blush-pink rounded-full flex items-center justify-center mx-auto mb-6 text-valentine-red group-hover:scale-110 transition-transform text-2xl">
          📍
        </div>
        <h4 className="font-serif text-xl text-stone-800 mb-2">Visit Our Studio</h4>
        <p className="text-stone-400 text-xs leading-relaxed uppercase tracking-wider">
          Door No. 12-2-786/A & B, Najam Centre, Rethi Bowli, Gudimalkapur, Hyderabad
        </p>
      </div>
    </div>

    <div className="pt-8 relative z-10">
      <a 
        href="https://wa.me/919849589710?text=Hi! I would like to pre-order flowers for Valentine's Day." 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex bg-valentine-red hover:bg-valentine-crimson text-white font-bold px-12 py-5 rounded-full items-center gap-4 mx-auto transition-all transform hover:-translate-y-2 shadow-2xl shadow-red-200 group"
      >
        <span className="animate-heart-pulse">❤️</span>
        Pre-order on WhatsApp
        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </a>
    </div>
  </div>
);

// --- Launching Soon Component ---
export const LaunchingSoon: React.FC = () => (
  <div className="text-center space-y-8 py-12">
    <div className="flex justify-center gap-2 items-center opacity-30">
        <div className="w-12 h-px bg-valentine-red"></div>
        <span className="text-valentine-red">❦</span>
        <div className="w-12 h-px bg-valentine-red"></div>
    </div>
    <h3 className="font-serif text-4xl md:text-6xl text-stone-800 italic">
      Blooming Just in Time
    </h3>
    <p className="text-valentine-red tracking-[0.4em] uppercase text-xs md:text-sm font-bold">
      The Season of Romance • sbflorist.in
    </p>
  </div>
);

// --- Petal Background Effect ---
export const PetalBackground: React.FC = () => {
  const elements = Array.from({ length: 25 });
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
      {elements.map((_, i) => {
        const isHeart = i % 2 === 0;
        return (
          <div 
            key={i}
            className={`absolute flex items-center justify-center animate-petal-fall ${isHeart ? 'text-rose-200' : 'text-valentine-red'}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${12 + Math.random() * 10}s`,
              opacity: 0.1 + Math.random() * 0.4,
              fontSize: `${12 + Math.random() * 20}px`,
            }}
          >
            {isHeart ? '❤' : '🌸'}
          </div>
        );
      })}
    </div>
  );
};

// --- Footer ---
export const Footer: React.FC = () => (
  <footer className="relative z-10 border-t border-rose-100 py-16 px-4 bg-white">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-center md:text-left space-y-2">
        <h4 className="font-serif text-2xl text-valentine-red italic">Spring Blossoms Florist</h4>
        <p className="text-stone-400 text-sm tracking-wide">© 2026 sbflorist.in • The Language of Flowers.</p>
      </div>

      <div className="flex gap-4">
        <a 
          href="https://instagram.com/sbf_india" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center hover:bg-valentine-red hover:text-white transition-all shadow-sm border border-rose-50 group"
          title="Instagram"
        >
          <span className="font-bold text-xs">IG</span>
        </a>
        <a 
          href="https://wa.me/919849589710" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center hover:bg-valentine-red hover:text-white transition-all shadow-sm border border-rose-50"
          title="WhatsApp"
        >
           <span className="font-bold text-xs">WA</span>
        </a>
      </div>
    </div>
    <div className="mt-12 text-center text-[10px] text-stone-300 tracking-[0.5em] uppercase font-bold">
      Created for Lovers in Hyderabad
    </div>
  </footer>
);
