import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    date: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        eventType: '',
        date: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="contact" className="w-full py-24 bg-black border-t border-gray-900">
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
            Start the <span className="text-brand-red">Mystery</span>
          </h2>
          <p className="text-gray-400 text-lg">Reach out to book your experience or inquire about private events.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-brand-red font-bold uppercase text-sm tracking-wider mb-3">Email</h3>
                <a
                  href="mailto:booking@martinesmago.com"
                  className="text-white text-lg hover:text-brand-red transition-colors"
                >
                  booking@martinesmago.com
                </a>
              </div>

              <div>
                <h3 className="text-brand-red font-bold uppercase text-sm tracking-wider mb-3">Phone</h3>
                <a
                  href="tel:+34912345678"
                  className="text-white text-lg hover:text-brand-red transition-colors"
                >
                  +34 (91) 234-5678
                </a>
              </div>

              <div>
                <h3 className="text-brand-red font-bold uppercase text-sm tracking-wider mb-3">Social</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'Instagram', icon: '📱' },
                    { name: 'TikTok', icon: '🎬' },
                    { name: 'YouTube', icon: '▶️' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="text-2xl hover:text-brand-red transition-colors"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Available for bookings worldwide. Custom experiences tailored to your vision.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2 uppercase text-sm tracking-wider">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 text-white p-4 focus:border-brand-red focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2 uppercase text-sm tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 text-white p-4 focus:border-brand-red focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Event Type */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2 uppercase text-sm tracking-wider">
                Event Type
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 border border-gray-800 text-white p-4 focus:border-brand-red focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                <option value="close-up">Close-Up Magic</option>
                <option value="stage">Stage Mentalism</option>
                <option value="corporate">Corporate Event</option>
                <option value="private">Private Event</option>
                <option value="inquiry">General Inquiry</option>
              </select>
            </motion.div>

            {/* Date Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2 uppercase text-sm tracking-wider">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-gray-950 border border-gray-800 text-white p-4 focus:border-brand-red focus:outline-none transition-colors"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="block text-white font-semibold mb-2 uppercase text-sm tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-gray-950 border border-gray-800 text-white p-4 focus:border-brand-red focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your vision..."
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="cta-button w-full text-center"
              >
                {submitted ? '✓ Message Sent' : 'Send Inquiry'}
              </button>
              {submitted && (
                <p className="text-brand-red text-sm mt-2 text-center">
                  Thank you. We'll be in touch within 24 hours.
                </p>
              )}
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
