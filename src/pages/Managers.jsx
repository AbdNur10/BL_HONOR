// src/pages/Managers.jsx
import { motion } from 'framer-motion';
import managersData from '../data/managers.json';

const Managers = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-green-500">
        Team Officials
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {managersData.map((manager) => (
          <motion.div
            key={manager.id}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 20px 30px -10px rgba(34,197,94,0.3)',
            }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-300"
          >
            <img
              src={manager.photo}
              alt={manager.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-white">{manager.name}</h2>
              <p className="text-green-400 mt-1 font-semibold">{manager.role}</p>
              
              {/* Facebook Link - plain text, no icon */}
              <div className="mt-4">
                {manager.facebook && manager.facebook.trim() !== "" ? (
                  <a
                    href={manager.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline transition duration-300 text-sm"
                  >
                    Facebook Profile
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">No Facebook Link</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Managers;