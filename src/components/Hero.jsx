import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      </div>

      <motion.div
        className="content-container relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.h1
          className="font-serif text-h1 text-white mb-6 font-black"
          variants={itemVariants}
        >
          Martines el Mago
        </motion.h1>

        {/* Subtitle */}
        <motion.div className="red-accent mb-8" variants={itemVariants}></motion.div>

        <motion.h2
          className="font-serif text-4xl md:text-5xl text-white mb-8 font-light tracking-tight"
          variants={itemVariants}
        >
          Redefining the <span className="text-brand-red font-bold">Impossible</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          variants={itemVariants}
        >
          Step into a world where perception meets reality. Where every moment defies explanation. This is not a performance. This is an experience.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <a
            href="#contact"
            className="cta-button inline-block"
          >
            Book the Experience
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <svg
            className="w-6 h-6 text-brand-red"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
