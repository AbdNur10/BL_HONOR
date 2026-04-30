// src/components/SplashScreen.jsx
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpeg'; // ✅ import logo from src/assets

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        {/* Logo Image */}
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-green-500 shadow-2xl">
          <img
            src={logo}
            alt="Team Logo"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl font-bold mt-6 text-white tracking-wide">
          Champions Arena
        </h1>
        <p className="text-green-400 mt-2 text-lg">
          School Football Tournament 2026
        </p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;