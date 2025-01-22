'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    date: "Dec 2024 - Current",
    company: "M-Labs Pte. Ltd",
    role: "Software Developer Intern",
    points: [
      "Developed and enhanced ARTIQ, an open-source control compiler for quantum physics experiments",
      "Improved NAC3 by adding new features to speed up Python compilation",
      "Documented the codebase for the ease of users and developers"
    ],
    tech: ["Rust", "Python", "Software Development", "Compiler Optimisation", "NixOS", "Git"]
  },
  {
    date: "Aug 2024 – Sept 2024",
    company: "Innova8s Pte. Ltd.",
    role: "Computer Vision Intern",
    points: [
      "Developed and trained deep-learning models for cattle monitoring and detection, enhancing detection accuracy by 15%",
      "Conceptualized and prototyped novel applications, such as Feed monitoring system",
      "Implemented age estimator and weight detection systems"
    ],
    tech: ["Computer Vision", "Deep Learning", "Python", "TensorFlow"]
  },
  {
    date: "Mar 2024 – Sept 2024",
    company: "Invisible Technologies",
    role: "AI Quality Analyst",
    points: [
      "Led data annotation team and improved accuracy by 25%",
      "Created comprehensive documentation for annotation labels, agent performance and procedural guidelines",
      "Managed quality assurance for AI training data",
      "Audited and directed daily operations, ensuring annotation work met stringent client requirements"
    ],
    tech: ["AI Training", "Quality Assurance", "Team Leadership"]
  },
  {
    date: "Jan 2024 – Feb 2024",
    company: "Invisible Technologies",
    role: "Advanced AI Data Trainer",
    points: [
      "Conducted full-scale conversational training for AI models",
      "Provided qualitative feedback to improve AI response accuracy",
      "Evaluated AI performance data and redirected output through response drafting",
      "Collaborated with engineers and ML professionals to analyze behavioral patterns"
    ],
    tech: ["AI Training", "Data Annotation", "Quality Analysis"]
  },
  {
    date: "May 2023 – Dec 2023",
    company: "Panasonic Research & Development Center Singapore",
    role: "Advanced AI Algorithm Developer Intern",
    points: [
      "Developed computer vision applications for object detection and image recognition",
      "Created interactive web interface for livestream monitoring",
      "Improved image recognition accuracy by 20% through model fine-tuning",
      "Deployed edge devices at client locations with 90% accuracy",
      "Communicated with clients to optimize solutions based on requirements"
    ],
    tech: ["Computer Vision", "Edge Computing", "TensorFlow", "Web Development"]
  }
];

const Timeline = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`flex items-center justify-center mb-8 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800/70 transition-all">
                        <span className="text-blue-500 font-semibold">{exp.date}</span>
                        <h3 className="text-xl font-bold mt-2">{exp.company}</h3>
                        <h4 className="text-lg text-gray-300 mb-4">{exp.role}</h4>
                        
                        {/* Points with more spacing */}
                        <ul className="space-y-3 mb-4">
                          {exp.points.map((point, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start text-gray-400"
                            >
                              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="cursor-pointer"
                      onClick={() => {
                        // Add popup with more details
                      }}
                    >
                      <div className="w-4 h-4 bg-blue-500 rounded-full" />
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 
