'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    name: "AI/Machine Learning",
    level: 90,
    color: "#3B82F6", // blue
    tools: "TensorFlow, PyTorch, Scikit-learn"
  },
  {
    name: "Computer Vision",
    level: 85,
    color: "#10B981", // green
    tools: "OpenCV, YOLO, Image Processing"
  },
  {
    name: "Full Stack Development",
    level: 80,
    color: "#F59E0B", // yellow
    tools: "React, Node.js, MongoDB, Express"
  },
  {
    name: "Python Programming",
    level: 90,
    color: "#8B5CF6", // purple
    tools: "NumPy, Pandas, Matplotlib"
  },
  {
    name: "System Design",
    level: 75,
    color: "#EC4899", // pink
    tools: "Docker, AWS, Microservices"
  },
  {
    name: "Web Technologies",
    level: 85,
    color: "#F59E0B",
    tools: "HTML, CSS, React, React Native, Node.js"
  },
  {
    name: "Scientific Computing",
    level: 80,
    color: "#8B5CF6",
    tools: "MATLAB, R, Numerical Analysis"
  }
];

const SkillBar = ({ skill, inView }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ backgroundColor: skill.color }}
          className="h-full rounded-full"
        />
      </div>
      <p className="text-sm text-gray-400 mt-1">{skill.tools}</p>
    </div>
  );
};

const SkillBars = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Technical Proficiency</h2>
          <p className="text-gray-400 text-center mb-12">
            My expertise levels across different technologies
          </p>
          <div className="bg-gray-800/50 p-8 rounded-lg">
            {skills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                skill={skill} 
                inView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillBars; 