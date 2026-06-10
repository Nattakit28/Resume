import React, { useState } from 'react';

const Home = ({ setActiveSection }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDiscoverWork = () => {
    setShowModal(true);
    setTimeout(() => {
      setActiveSection('projects');
      setShowModal(false);
    }, 600);
  };
  return (
    <section className="pt-32 pb-20 px-8 bg-marble bg-cream min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <p className="text-sm font-light tracking-widest uppercase text-dark/60 mb-6 animate-fade-in-down">
          My Portfolio
        </p>

        {/* Main Title */}
        <h1 className="text-7xl md:text-8xl font-serif font-bold text-dark mb-12 leading-tight animate-fade-in-up">
          Resume.
        </h1>

        {/* CTA Button */}
        <button
          onClick={handleDiscoverWork}
          className="px-8 py-3 border border-dark text-dark rounded-none font-light tracking-widest uppercase text-sm btn-minimal mb-24 animate-scale-in stagger-1 hover:bg-dark hover:text-cream transition"
        >
          Discover Work
        </button>

        {/* Modal Popup */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="animate-zoom-in">
              <div className="bg-cream border border-dark/20 rounded-lg p-12 text-center shadow-2xl">
                <div className="text-5xl mb-4">✨</div>
                <h2 className="text-2xl font-serif font-bold text-dark mb-4">Let's explore</h2>
                <p className="text-dark/60 font-light">Redirecting to projects...</p>
              </div>
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="flex gap-8 justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark/40 hover:text-dark transition text-lg animate-fade-in stagger-2 inline-block"
          >
            ◯
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
