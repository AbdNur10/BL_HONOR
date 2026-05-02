import { motion } from 'framer-motion';
import jerseysData from '../data/jerseys.json';

const Jerseys = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  // Helper to get the hover text based on season
  const getHoverBadge = (season) => {
    if (season === '2024') return { text: '🏆 Champion', emoji: '🏆' };
    if (season === '2023') return { text: '🥈 Runners Up', emoji: '🥈' };
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
            Legacy Jerseys
          </h1>
          <p className="text-gray-400 mt-3 text-lg">by Season • Collector's Edition</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {jerseysData.map((season, idx) => {
            const hoverBadge = getHoverBadge(season.season);
            return (
              <motion.div
                key={season.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 shadow-xl hover:shadow-green-500/20"
              >
                {/* Seasonal badge (always visible) */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-green-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {season.season}
                  </div>
                </div>

                {/* Hover-only achievement badge */}
                {hoverBadge && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                    <div className="text-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <div className="text-5xl mb-2">{hoverBadge.emoji}</div>
                      <p className="text-green-400 font-bold text-xl tracking-wider">{hoverBadge.text}</p>
                    </div>
                  </div>
                )}

                {/* Image container */}
                <div className="relative overflow-hidden h-56 bg-gray-800/50 flex items-center justify-center p-6">
                  <motion.img
                    src={season.image}
                    alt={`${season.season} jersey`}
                    className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ rotate: 2 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h2 className="text-2xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                    {season.season}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {season.description}
                  </p>
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-green-500/40 group-hover:bg-green-400 transition-all duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-16 text-gray-500 text-sm">
          * Each jersey represents a historic season – available in limited collector's edition.
        </div>
      </div>
    </motion.div>
  );
};

export default Jerseys;