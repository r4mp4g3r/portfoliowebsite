'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('light-theme', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed right-8 top-24 z-50 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? (
        <motion.svg
          key="sun"
          initial={{ scale: 0.5, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-6 h-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </motion.svg>
      ) : (
        <motion.svg
          key="moon"
          initial={{ scale: 0.5, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-6 h-6 text-blue-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </motion.svg>
      )}
    </motion.button>
  );
};

export default ThemeSwitcher; 