'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  
  // Transform scroll progress to percentage
  useEffect(() => {
    return scrollYProgress.onChange(latest => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Circular progress indicator */}
      <motion.div
        style={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          zIndex: 60,
          translateY: '-50%'
        }}
        className="hidden md:block"
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="transform -rotate-90">
          <motion.circle
            cx="30"
            cy="30"
            r="26"
            stroke="var(--text-secondary)"
            strokeWidth="4"
            fill="none"
            className="opacity-20"
          />
          <motion.circle
            cx="30"
            cy="30"
            r="26"
            stroke="var(--primary-color)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="163.36"
            style={{
              strokeDashoffset: useTransform(
                scrollYProgress,
                [0, 1],
                [163.36, 0]
              ),
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-medium text-primary">
          {scrollPercentage}%
        </div>
      </motion.div>

      {/* Section indicators */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4 z-[60] hidden lg:block">
        {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((section, index) => (
          <motion.div
            key={section}
            className="flex items-center space-x-2 cursor-pointer group"
            style={{
              opacity: useTransform(
                scrollYProgress,
                [index * 0.2, index * 0.2 + 0.1, index * 0.2 + 0.2],
                [0.3, 1, 0.3]
              )
            }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-2 h-2 bg-primary rounded-full"
              style={{
                scale: useTransform(
                  scrollYProgress,
                  [index * 0.2, index * 0.2 + 0.1, index * 0.2 + 0.2],
                  [0.8, 1.2, 0.8]
                )
              }}
            />
            <span className="text-sm text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
              {section}
            </span>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ScrollProgress; 