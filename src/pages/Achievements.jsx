import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import achievementsData from '../data/achievements.json';
import AnimatedCounter from '../components/AnimatedCounter';

const Achievements = () => {
  const totalWins = achievementsData.filter((a) => a.position === 'Champion').length;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-4 text-green-500">Our Glory Timeline</h1>
      <div ref={ref} className="flex justify-center gap-8 mb-12">
        <div className="bg-gray-900 px-6 py-3 rounded-full text-center shadow-md">
          <p className="text-gray-400">Total Championships</p>
          <span className="text-3xl font-bold text-green-400">
            {isInView && <AnimatedCounter end={totalWins} duration={2} />}
          </span>
        </div>
      </div>

      <div className="relative border-l-4 border-green-500 ml-4 md:ml-12">
        {achievementsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1.5 shadow-lg"></div>
            <div className="bg-gray-900 p-5 rounded-lg shadow-md border border-gray-800 hover:border-green-500 transition">
              <h2 className="text-2xl font-bold text-green-400">{item.year}</h2>
              <p className="text-white text-lg">{item.tournament}</p>
              <p className={`text-md font-semibold ${item.position === 'Champion' ? 'text-green-500' : 'text-yellow-500'}`}>
                {item.position}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;