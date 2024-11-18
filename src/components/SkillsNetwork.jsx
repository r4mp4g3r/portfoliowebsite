'use client';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';



const SkillsNetwork = () => {
  const skills = {
    core: {
      name: "Core Skills",
      items: ["AI/ML", "Computer Vision", "Full Stack", "System Design", "Database"],
      color: "#3B82F6"
    },
    languages: {
      name: "Languages",
      items: ["Python", "C++", "JavaScript", "C", "R", "MATLAB", "Bash"],
      color: "#10B981"
    },
    aiml: {
      name: "AI/ML Tools",
      items: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "YOLO"],
      color: "#F59E0B"
    },
    webdev: {
      name: "Web Development",
      items: ["React", "React Native", "Node.js", "HTML", "CSS", "MongoDB", "Express.js", "Next.js"],
      color: "#EC4899"
    }
  };

  const devopsTools = {
    name: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "GCP", "Figma", "Jira"],
    color: "#8B5CF6"
  };

  return (
    <section className="py-12 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Skills Network</h2>
          <p className="text-gray-400 text-center mb-12">
            My technical expertise across different domains
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
            {Object.entries(skills).map(([key, category]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-all"
              >
                <h3 
                  className="text-xl font-bold mb-4" 
                  style={{ color: category.color }}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700/50 cursor-pointer"
                      style={{ 
                        border: `1px solid ${category.color}`,
                        color: category.color,
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${Math.random() * 20}px)`
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: category.color,
                        color: 'white'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-all max-w-md mx-auto"
          >
            <h3 
              className="text-xl font-bold mb-4" 
              style={{ color: devopsTools.color }}
            >
              {devopsTools.name}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {devopsTools.items.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="px-3 py-1 text-sm rounded-full bg-gray-700/50 cursor-pointer"
                  style={{ 
                    border: `1px solid ${devopsTools.color}`,
                    color: devopsTools.color,
                    transformStyle: "preserve-3d",
                    transform: `translateZ(${Math.random() * 20}px)`
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: devopsTools.color,
                    color: 'white'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsNetwork; 