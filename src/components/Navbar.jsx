import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <img src="/logo.png" alt="Nitesh Tech Logo" className="h-8 md:h-10 object-contain rounded-lg" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative
                ${activeSection === link.name.toLowerCase() ? 'text-accent' : 'text-slate-300'}`}
            >
              {link.name}
              {activeSection === link.name.toLowerCase() && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-nav flex flex-col items-center py-6 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-accent
                  ${activeSection === link.name.toLowerCase() ? 'text-accent' : 'text-slate-300'}`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
