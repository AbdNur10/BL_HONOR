// src/pages/Players.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import playersData from '../data/players.json';

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter by jersey number (search term)
  const filteredPlayers = playersData.filter((player) =>
    player.jerseyNumber.toString().includes(searchTerm)
  );

  // Fix image path: remove '/public/' prefix if present
  const getImagePath = (path) => {
    if (!path) return '/placeholder.png';
    // If path starts with '/public/', remove that part
    return path.replace('/public/', '/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-8 text-green-500">Our Players</h1>
      
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Filter by Jersey Number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlayers.map((player, idx) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800"
          >
            <div className="relative">
              <img
                src={getImagePath(player.profileImage)}
                alt={player.name}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
              {/* Jersey Number Badge */}
              <div className="absolute top-3 right-3 bg-green-600 text-white font-bold px-3 py-1 rounded-full shadow-lg">
                #{player.jerseyNumber}
              </div>
              {/* Position Tag */}
              <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-green-400 font-semibold px-3 py-1 rounded-full text-sm">
                {player.position}
              </div>
            </div>
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-white">{player.name}</h2>
              <p className="text-green-400 mt-1">{}</p>
              {/* You could add more fields like height, weight, etc. if needed */}
            </div>
          </motion.div>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <p className="text-center text-gray-400 mt-10">No players found with jersey number "{searchTerm}".</p>
      )}
    </motion.div>
  );
};

export default Players;