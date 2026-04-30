import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from '../data/gallery.json';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container py-12"
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-green-500">Moments Gallery</h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {galleryData.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-md"
            onClick={() => setSelectedImage(photo.url)}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-auto rounded-lg transition duration-300 hover:brightness-75"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;