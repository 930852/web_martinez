import { motion } from 'framer-motion';

const spectacles = [
  {
    id: 1,
    title: 'Close-Up Magic',
    subtitle: 'Intimate & Interactive',
    description: 'Experience magic up close. Every moment is scrutinized, yet impossible. Perfect for intimate gatherings, corporate lounges, and exclusive events.',
    icon: '🎭',
    features: ['1-on-1 Interactions', 'Customizable Routines', 'Audience Participation', 'Premium Experience'],
  },
  {
    id: 2,
    title: 'Stage Mentalism',
    subtitle: 'Mind-Bending Psychological Feats',
    description: 'Witness the impossible on stage. Psychological illusions that challenge perception, reveal hidden truths, and redefine what the mind can comprehend.',
    icon: '🧠',
    features: ['Large Audiences', 'Theatrical Production', 'Cutting-Edge Tech', 'Unforgettable Impact'],
  },
  {
    id: 3,
    title: 'Corporate Events',
    subtitle: 'Luxury Entertainment for Brands',
    description: 'Elevate your brand experience. Martines creates bespoke performances that captivate, inspire, and leave lasting impressions on your most valued clients.',
    icon: '✨',
    features: ['Tailored Performances', 'Brand Integration', 'VIP Experiences', 'Premium Production'],
  },
];

export const Spectacles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full py-24 bg-black border-t border-gray-900">
      <div className="content-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h2 className="font-serif text-h2 text-white font-black mb-2">
            The <span className="text-brand-red">Spectacles</span>
          </h2>
          <p className="text-gray-400 text-lg">Three distinct experiences. Each unforgettable.</p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {spectacles.map((spectacle) => (
            <motion.div
              key={spectacle.id}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full border border-gray-800 hover:border-brand-red transition-all duration-300 bg-gradient-to-b from-gray-950 to-black p-8 hover:shadow-red-glow">
                {/* Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {spectacle.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-h3 text-white mb-2 font-bold">
                  {spectacle.title}
                </h3>

                {/* Subtitle */}
                <p className="text-brand-red text-sm uppercase tracking-wider font-semibold mb-4">
                  {spectacle.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {spectacle.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {spectacle.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-start">
                      <span className="text-brand-red mr-3 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Bottom Accent */}
                <div className="border-t border-gray-800 pt-6">
                  <button className="text-brand-red font-bold text-sm uppercase tracking-wider hover:text-white transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Spectacles;
