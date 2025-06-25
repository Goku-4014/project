import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const RotateWords = ({ text = "I am", words = [], duration = 2500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  // Find the longest word to set container width
  const longestWord = useMemo(() => {
    return words.reduce((a, b) => (a.length > b.length ? a : b), "");
  }, [words]);

  const wordVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="inline-flex items-baseline gap-2">
      <span className="text-gray-300">{text}</span>
      <div
        className="relative overflow-hidden"
        style={{ minWidth: `${longestWord.length}ch`, display: 'inline-block' }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={words[currentIndex]}
            className="absolute left-0 top-0"
            variants={wordVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};
