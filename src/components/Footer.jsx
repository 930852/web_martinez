import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-gray-900 py-12">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white font-bold mb-2">Martines</h3>
            <p className="text-gray-400 text-sm">Redefining the impossible.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                  Shows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                  Tour Dates
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              {[
                { symbol: 'f', label: 'Facebook' },
                { symbol: 'I', label: 'Instagram' },
                { symbol: 'X', label: 'Twitter' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-8 h-8 border border-gray-800 hover:border-brand-red text-gray-400 hover:text-brand-red flex items-center justify-center transition-colors text-sm font-bold"
                  title={social.label}
                >
                  {social.symbol}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-xs">
              <a href="#" className="hover:text-brand-red transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-900 my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
        >
          <p>&copy; {currentYear} Martines el Mago. All rights reserved.</p>
          <p>
            Crafted with precision for the discerning audience. — <span className="text-brand-red">The Experience</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
