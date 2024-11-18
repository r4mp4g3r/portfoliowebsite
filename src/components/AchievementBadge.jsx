'use client';
import { motion } from 'framer-motion';

const AchievementBadge = ({ achievement }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40" />
      <div className="relative bg-gray-800 p-4 rounded-lg">
        {/* Achievement content */}
      </div>
    </motion.div>
  );
}; 