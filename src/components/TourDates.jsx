import { motion } from 'framer-motion';

const tourDates = [
  {
    id: 1,
    date: 'May 15, 2026',
    venue: 'Teatro de las Artes',
    city: 'Madrid, Spain',
    status: 'Sold Out',
    statusColor: 'text-gray-500',
  },
  {
    id: 2,
    date: 'June 3, 2026',
    venue: 'Palais Garnier',
    city: 'Paris, France',
    status: 'Get Tickets',
    statusColor: 'text-brand-red',
  },
  {
    id: 3,
    date: 'June 22, 2026',
    venue: 'London Palladium',
    city: 'London, UK',
    status: 'Get Tickets',
    statusColor: 'text-brand-red',
  },
  {
    id: 4,
    date: 'July 10, 2026',
    venue: 'Carnegie Hall',
    city: 'New York, USA',
    status: 'Coming Soon',
    statusColor: 'text-gray-400',
  },
  {
    id: 5,
    date: 'August 5, 2026',
    venue: 'Sydney Opera House',
    city: 'Sydney, Australia',
    status: 'Get Tickets',
    statusColor: 'text-brand-red',
  },
  {
    id: 6,
    date: 'September 18, 2026',
    venue: 'Marina Bay Sands',
    city: 'Singapore',
    status: 'Coming Soon',
    statusColor: 'text-gray-400',
  },
];

export const TourDates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
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
            Upcoming <span className="text-brand-red">Shows</span>
          </h2>
          <p className="text-gray-400 text-lg">Experience the mystery. Limited dates worldwide.</p>
        </motion.div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <motion.div
            className="border border-gray-800"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-6 bg-gray-950 p-6 border-b border-gray-800 font-sans">
              <div className="font-bold text-white uppercase text-sm tracking-wider">Date</div>
              <div className="font-bold text-white uppercase text-sm tracking-wider">Venue</div>
              <div className="font-bold text-white uppercase text-sm tracking-wider">Location</div>
              <div className="font-bold text-white uppercase text-sm tracking-wider">Status</div>
            </div>

            {/* Table Rows */}
            {tourDates.map((show, idx) => (
              <motion.div
                key={show.id}
                variants={itemVariants}
                className="grid grid-cols-4 gap-6 p-6 border-b border-gray-900 hover:bg-gray-950 transition-colors duration-200 group"
              >
                <div className="text-gray-300 group-hover:text-white transition-colors">{show.date}</div>
                <div className="text-white font-semibold group-hover:text-brand-red transition-colors">{show.venue}</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{show.city}</div>
                <div className="flex justify-between items-center">
                  <span className={`font-bold uppercase text-xs tracking-wider ${show.statusColor}`}>
                    {show.status}
                  </span>
                  {show.status === 'Get Tickets' && (
                    <button className="text-brand-red hover:text-white text-xl transition-colors">
                      →
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Card View */}
        <motion.div
          className="md:hidden space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tourDates.map((show) => (
            <motion.div
              key={show.id}
              variants={itemVariants}
              className="border border-gray-800 p-6 hover:border-brand-red transition-colors group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-white font-bold text-lg">{show.date}</p>
                  <p className="text-gray-400 text-sm">{show.city}</p>
                </div>
                <span className={`font-bold uppercase text-xs tracking-wider ${show.statusColor}`}>
                  {show.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{show.venue}</p>
              {show.status === 'Get Tickets' && (
                <button className="text-brand-red font-bold uppercase text-xs tracking-wider hover:text-white transition-colors">
                  Get Tickets →
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TourDates;
