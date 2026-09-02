import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HistoryButton = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTriggerTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      alert("Navigating to History Page..."); 
      setIsTransitioning(false); 
    }, 800);
  };

  return (
    <div className="relative inline-block">
      {/* Sleek Compact Action Button */}
      <motion.button
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.96 }}
        onClick={handleTriggerTransition}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 rounded-xl font-medium text-sm transition-colors shadow-md group"
      >
        {/* Spinning / Pulsing clock icon on hover */}
        <motion.div
          variants={{
            hover: { rotate: -15, scale: 1.1 }
          }}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300 }}
          className="text-indigo-400"
        >
          <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
            <path d="M12 7v5l4 2"/>
          </svg>
        </motion.div>
        
        <span>History</span>

        {/* Small indicator arrow */}
        <svg xmlns="http://w3.org" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </motion.button>

      {/* Screen Sweep Transition Overlay (Triggered only on click) */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ fixed: true, x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-indigo-600 z-50 flex items-center justify-center text-white text-xl font-semibold shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <svg xmlns="http://w3.org" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin [animation-duration:2.5s]">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
                <path d="M12 7v5l4 2"/>
              </svg>
              <span>Opening History...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HistoryButton;
