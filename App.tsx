
import React from 'react';
import { Hero, Notice, About, Contact, LaunchingSoon, PetalBackground, Footer } from './components';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-brand-pink selection:text-white">
      {/* Decorative Background Elements */}
      <PetalBackground />
      
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-24 space-y-24 md:space-y-32">
        <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <Hero />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '400ms' }}>
          <Notice />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '600ms' }}>
          <About />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '800ms' }}>
          <LaunchingSoon />
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '1000ms' }}>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
