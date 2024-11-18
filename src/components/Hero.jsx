'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center animated-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-4 items-center justify-items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left max-w-lg"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m Ram
            </h1>
            <TypeAnimation
              sequence={[
                'AI/ML Developer',
                1000,
                'Full Stack Developer',
                1000,
                'Computer Vision Engineer',
                1000,
              ]}
              wrapper="h2"
              className="text-2xl md:text-3xl text-gray-400"
              repeat={Infinity}
            />
            <p className="mt-4 text-lg text-gray-400">
              Computer Science Student at NTU, Singapore
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-block"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/r4mp4g3r"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-full font-medium inline-block"
              >
                View GitHub
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-[280px] h-[280px] cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500">
                <Image
                  src="/images/profile.jpg"
                  alt="Ramtej Pachigulla"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 