'use client';

import { motion } from 'framer-motion';

const About = () => {
  const personalInfo = {
    introduction: `I'm a first-year Master's in Computer Science student at LiU, specializing in Artificial Intelligence. With a passion for developing AI solutions and building innovative applications, I've gained hands-on experience through internships at Panasonic R&D and M-Labs`,
    interests: [
      "Artificial Intelligence & Machine Learning",
      "Computer Vision & Image Processing",
      "Full Stack Development",
      "Open Source Development",
      "Research & Innovation"
    ],
    achievements: [
      "Led teams of 5+ developers in multiple projects",
      "Improved model accuracies by 15-25% in professional settings",
      "Contributed to open-source AI projects",
      "Participated in Hackathons"
    ],
    languages: {
      programming: [
        "Python", 
        "Rust",
        "C++", 
        "JavaScript", 
        "Java",
        "C",
        "R",
        "MATLAB",
        "HTML",
        "CSS",
        "Bash"
      ],
      human: ["English", "Telugu", "Hindi", "Basic Swedish", "Basic Malay"]
    }
  };

  return (
    <section id="about" className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-lg mb-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.introduction}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Areas of Interest
                </h3>
                <ul className="space-y-2">
                  {personalInfo.interests.map((interest, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {interest}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Key Achievements
                </h3>
                <ul className="space-y-2">
                  {personalInfo.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-lg mb-8"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500 text-center">
                Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* Programming Languages */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-300 flex items-center gap-2 justify-center">
                      <svg 
                        className="w-4 h-4 text-blue-400/70" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Programming
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                      {personalInfo.languages.programming.map((lang, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: index * 0.1 }}
                          className="px-3 py-1 text-sm bg-gray-700/30 text-gray-300 rounded-md hover:bg-gray-700/50 transition-all cursor-default"
                        >
                          {lang}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block absolute left-1/2 h-[80%] top-[10%] w-[1px] bg-gray-600/20" />

                {/* Human Languages */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg font-medium text-gray-300 flex items-center gap-2 justify-center">
                      <svg 
                        className="w-4 h-4 text-green-400/70" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                      Human
                    </h4>
                    {/* Professional Languages */}
                    <div className="space-y-3 mt-4">
                      <p className="text-sm text-gray-400">Professional</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {personalInfo.languages.human
                          .filter(lang => !lang.toLowerCase().includes('basic'))
                          .map((lang, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1 text-sm bg-green-500/10 text-green-400 rounded-md border border-green-500/20 hover:bg-green-500/20 transition-all cursor-default"
                            >
                              {lang}
                            </motion.span>
                          ))}
                      </div>
                    </div>
                    {/* Basic Languages */}
                    <div className="space-y-3 mt-4">
                      <p className="text-sm text-gray-400">Conversational</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {personalInfo.languages.human
                          .filter(lang => lang.toLowerCase().includes('basic'))
                          .map((lang, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05 }}
                              transition={{ delay: index * 0.1 }}
                              className="px-3 py-1 text-sm bg-gray-700/30 text-gray-400 rounded-md hover:bg-gray-700/40 transition-all cursor-default"
                            >
                              {lang.replace('Basic ', '')}
                            </motion.span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">Education</h3>
            <div className="space-y-4">
              {/* LiU*/}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold">Linköping University</h4>
                <p className="text-gray-400">Master's in Computer Science</p>
                <p className="text-gray-400">Aug 2025 – Current</p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Specialisation in Artificial Intelligence</li>
                  <li>Key Coursework: Advanced Machine Learning, Advanced C++, Text Mining</li>
                </ul>
              </motion.div>
              {/* NTU */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold">Nanyang Technological University</h4>
                <p className="text-gray-400">Bachelor of Computing (Honours), Computer Science</p>
                <p className="text-gray-400">Aug 2021 – Jun 2025</p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Specialisation in Artificial Intelligence</li>
                  <li>Key Coursework: AI, Machine Learning, Computer Vision</li>
                  <li>Online Certifications: Google in Project Management, Gen AI, LLMs and Responsible AI</li>
                </ul>
              </motion.div>

              {/* Linköping University */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg"
              >
                <h4 className="text-xl font-bold">Linköping University</h4>
                <p className="text-gray-400">Semester Exchange</p>
                <p className="text-gray-400">Jan 2024 – Jun 2024</p>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  <li>Natural Language Processing</li>
                  <li>Advanced Software Engineering</li>
                  <li>Quantum Computing</li>
                  <li>Fundamental Computer Graphics</li>
                  <li>Cybersecurity Law</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
