'use client';
import { motion } from 'framer-motion';

const SectionTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{
        duration: 1.2,
        type: "spring",
        bounce: 0.4,
        stiffness: 70
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionTransition; 