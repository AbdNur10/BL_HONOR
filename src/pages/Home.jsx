import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // ✅ fixed import

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10" />
        <img
          src={logo}
          alt="Football stadium"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 container flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent mb-6"
        >
          B.L Honor Cup 2026
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-gray-200 mb-8 max-w-2xl"
        >
          Where young champions rise. Experience the thrill, passion, and glory of inter-school football.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          <Link
            to="/players"
            className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg shadow-green-500/30"
          >
            Explore Team
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;