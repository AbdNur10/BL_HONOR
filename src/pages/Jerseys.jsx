import { motion } from 'framer-motion';
import jerseysData from '../data/jerseys.json';

const Jerseys = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-green-500">
        Legacy Jerseys by Season
      </h1>
      <div className="overflow-x-auto pb-6 scrollbar-custom">
        {/* Added justify-center to center cards, min-w-max allows scrolling when needed */}
        <div className="flex justify-center space-x-8 px-2 min-w-max">
          {jerseysData.map((season, idx) => (
            <motion.div
              key={season.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="w-80 bg-gray-900 rounded-xl p-6 text-center border border-gray-800 shadow-lg flex-shrink-0"
            >
              <div className="w-full h-48 flex items-center justify-center bg-gray-800 rounded-lg mb-4 p-4">
                <img
                  src={season.image}
                  alt={season.season}
                  className="max-h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-green-400">
                {season.season} Season
              </h2>
              <p className="text-gray-300 mt-2">{season.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Jerseys;