'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ProjectPreview = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Project preview content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Detailed project view */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}; 