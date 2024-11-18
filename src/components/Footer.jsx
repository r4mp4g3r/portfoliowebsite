'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-blue-500">Pachigulla Ramtej</h3>
            <p className="text-gray-400">AI/ML Developer & Full Stack Engineer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/pachigulla-ramtej/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/r4mp4g3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:ram.pachi.tej@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              Email
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 