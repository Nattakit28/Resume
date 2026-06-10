import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact', 'resume'];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const getItemLabel = (item) => {
    if (item === 'resume') return '📥 Download Resume';
    return item.charAt(0).toUpperCase() + item.slice(1);
  };

  return (
    <nav className="fixed top-0 w-full bg-cream z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-6 flex justify-between items-center">
        <div className="text-sm font-light tracking-widest uppercase text-dark">
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`uppercase text-xs font-light tracking-widest transition ${
                activeSection === item
                  ? 'text-dark border-b border-dark'
                  : 'text-dark/60 hover:text-dark'
              }`}
            >
              {getItemLabel(item)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-dark/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`uppercase text-left font-light tracking-widest text-xs py-1 transition ${
                  activeSection === item
                    ? 'text-dark pl-4 border-l-2 border-dark'
                    : 'text-dark/60'
                }`}
              >
                {getItemLabel(item)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
