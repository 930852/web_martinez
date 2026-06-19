import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Shows', href: '#shows' },
    { name: 'Tour', href: '#tour' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black border-b border-gray-900' : 'bg-black/80'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-container py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="font-serif text-2xl font-black text-white hover:text-brand-red transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Martines
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-brand-red transition-colors uppercase text-sm font-semibold tracking-wider"
              whileHover={{ color: '#D90429' }}
            >
              {link.name}
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            className="cta-button text-sm py-2 px-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <motion.div
          className="md:hidden bg-black border-t border-gray-900 py-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="content-container space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-brand-red transition-colors uppercase text-sm font-semibold tracking-wider"
                onClick={() => setIsMobileOpen(false)}
                whileHover={{ x: 10 }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="cta-button block text-center text-sm py-3"
              onClick={() => setIsMobileOpen(false)}
              whileHover={{ scale: 1.02 }}
            >
              Book Now
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
