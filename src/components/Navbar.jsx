// src/components/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg'; // ✅ fixed import (no curly braces)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Managers', path: '/managers' },
    { name: 'Players', path: '/players' },
    { name: 'Jerseys', path: '/jerseys' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-green-800">
      <div className="container flex justify-between items-center py-4">
        {/* Logo + Brand */}
        <NavLink to="/" className="flex items-center gap-3 text-2xl font-bold text-green-500">
          <img 
            src={logo} 
            alt="Team Logo" 
            className="w-10 h-10 rounded-full object-cover border-2 border-green-500"
          />
          <span className="hidden sm:inline">ANIRUDDHA-17</span>
        </NavLink>
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 hover:text-green-400 ${
                  isActive ? 'text-green-500 border-b-2 border-green-500' : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 border-t border-green-800"
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${isActive ? 'text-green-500' : 'text-white'} hover:text-green-400`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;