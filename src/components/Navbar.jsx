// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for glass effect intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Managers', path: '/managers' },
    { name: 'Players', path: '/players' },
    { name: 'Jerseys', path: '/jerseys' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, staggerChildren: 0.05 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-green-900/20'
          : 'bg-black/50 backdrop-blur-md'
      } border-b border-green-500/30`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo + Brand with hovering glow */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <img
                src={logo}
                alt="Team Logo"
                className="relative w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-500 shadow-lg shadow-green-500/30"
              />
            </div>
            <span className="hidden sm:inline text-xl md:text-2xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
              ANIRUDDHA-17
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 rounded-lg font-medium transition-all duration-200 
                  hover:bg-green-500/10 hover:text-green-400 group
                  ${isActive ? 'text-green-400 bg-green-500/10 shadow-lg shadow-green-900/20' : 'text-gray-200'}`
                }
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-all duration-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-5 bg-green-400 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-green-400 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-green-400 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-500/30 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4">
              <motion.div className="flex flex-col space-y-2">
                {links.map((link) => (
                  <motion.div key={link.path} variants={linkVariants}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-center font-medium transition-all duration-200
                        ${
                          isActive
                            ? 'bg-gradient-to-r from-green-600/30 to-green-500/20 text-green-400 shadow-md'
                            : 'text-gray-200 hover:bg-green-500/10 hover:text-green-300'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;