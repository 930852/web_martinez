import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Biography = () => {
  const ref = useScrollReveal();

  return (
    <section className="w-full py-24 bg-black border-t border-gray-900">
      <div className="content-container">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-serif text-h2 text-white font-black mb-2">
            The Man Behind the <span className="text-brand-red">Mystery</span>
          </h2>
          <div className="w-20 h-1 bg-brand-red"></div>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With over 15 years of mastery in psychological illusions and mentalism, Martines el Mago has captivated audiences across three continents. His work transcends traditional magic, delving into the depths of human perception and cognition.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Trained under legendary mentalists and performance artists, Martines combines rigorous psychological principles with theatrical brilliance. Each performance is meticulously crafted to challenge reality itself.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              His philosophy is simple: <span className="text-brand-red font-semibold">The impossible is merely the misunderstood possible.</span> Every illusion serves a purpose—to expand perception, provoke wonder, and fundamentally alter how audiences understand their own minds.
            </p>

            <div className="flex gap-4 items-start">
              <div className="w-1 h-16 bg-brand-red flex-shrink-0"></div>
              <div>
                <p className="text-brand-red font-bold uppercase tracking-wider mb-2">Specializations</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Psychological Mentalism</li>
                  <li>• Close-Up Illusions</li>
                  <li>• Stage Grand Illusions</li>
                  <li>• Corporate Immersion Experiences</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-black border-2 border-brand-red relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-24 h-24 text-brand-red mx-auto mb-4 opacity-30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <p className="text-gray-400 uppercase text-sm tracking-wider">Professional Photo</p>
                </div>
              </div>
              <div className="absolute inset-0 shadow-lg shadow-brand-red/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
