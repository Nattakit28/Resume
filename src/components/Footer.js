import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-dark text-cream py-12 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-serif font-bold mb-4 text-cream">
              Portfolio
            </h3>
            <p className="text-cream/60 font-light">

            </p>
          </div>

          {/* Quick Links */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-light mb-4 text-cream">Navigate</h4>
            <ul className="space-y-2 text-cream/60 font-light">
              <li><a href="#home" className="link-hover hover:text-cream transition">Home</a></li>
              <li><a href="#about" className="link-hover hover:text-cream transition">About</a></li>
              <li><a href="#skills" className="link-hover hover:text-cream transition">Skills</a></li>
              <li><a href="#projects" className="link-hover hover:text-cream transition">Projects</a></li>
              <li><a href="#contact" className="link-hover hover:text-cream transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-light mb-4 text-cream">Follow</h4>
            <ul className="space-y-2 text-cream/60 font-light">
              <li><a href="https://github.com/Nattakit28" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-cream transition">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/nattakit-ploytrakul-500274385/" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-cream transition">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/khristal.nadth.kitti" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-cream transition">Facebook</a></li>
              <li><a href="https://www.instagram.com/02.10.05abcdefg/" target="_blank" rel="noopener noreferrer" className="link-hover hover:text-cream transition">Instagram</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="scroll-reveal">
            <h4 className="text-lg font-light mb-4 text-cream">Contact</h4>
            <ul className="space-y-2 text-cream/60 text-sm font-light">
              <li>📧 crystalza55@gmail.com</li>
              <li>📱 +66 064 689 5412</li>
              <li>📍 Chaing Mai, Thailand</li>
              <li>⏱️ Response: &lt; 24h</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            ⬆️ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
