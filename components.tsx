
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
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a 
          href="https://wa.me/919849589710" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center hover:bg-valentine-red hover:text-white transition-all shadow-sm border border-rose-50"
          title="WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
    <div className="mt-12 text-center text-[10px] text-stone-300 tracking-[0.5em] uppercase font-bold">
      Created for Lovers in Hyderabad
    </div>
  </footer>
);
