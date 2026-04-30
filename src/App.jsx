// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const Managers = React.lazy(() => import('./pages/Managers'));
const Players = React.lazy(() => import('./pages/Players'));
const Jerseys = React.lazy(() => import('./pages/Jerseys'));
const Achievements = React.lazy(() => import('./pages/Achievements'));
const Gallery = React.lazy(() => import('./pages/Gallery'));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSplash, navigate]);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="relative">
      <ParticlesBackground />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <React.Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/players" element={<Players />} />
            <Route path="/jerseys" element={<Jerseys />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </React.Suspense>
      </AnimatePresence>
    </div>
  );
}

export default App;