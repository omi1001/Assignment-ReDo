import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "Program Features", target: "#features" },
    { label: "Eligibility", target: "#eligibility" }
  ];
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-iim-navy font-bold text-xl uppercase tracking-tight">
            IIM <span className="text-iim-gold">Sirmaur</span>
          </span>
          <span className="text-[10px] font-semibold text-gray-400 tracking-wider uppercase">
            Online MBA in Data Science & AI
          </span>
        </div>
        {/* right side desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a 
              key={item.target} 
              href={item.target} 
              className="text-sm font-semibold text-iim-navy hover:text-iim-gold transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          {/* apply now button */}
          <a 
            href="#apply" 
            className="bg-iim-navy text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-iim-gold hover:text-white transition-all duration-300 flex items-center gap-1 shadow-sm"
          >
            Apply Now <ArrowRight size={14} />
          </a>
        </div>
        {/* Right Side: Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-iim-navy focus:outline-none flex items-center"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown Panel (Only appears when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 flex flex-col gap-4 animate-fade-in">
          {links.map((item) => (
            <a 
              key={item.target} 
              href={item.target} 
              onClick={() => setIsOpen(false)} 
              className="text-base font-bold text-iim-navy hover:text-iim-gold"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#apply" 
            onClick={() => setIsOpen(false)} 
            className="bg-iim-gold text-white py-3 rounded-xl font-bold text-center text-md shadow-md block hover:bg-iim-navy transition-colors"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;