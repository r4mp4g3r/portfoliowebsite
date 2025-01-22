'use client';

import { motion } from 'framer-motion';

const experiences = [
{    company: "M-Labs Pte. Ltd,",
     role: "Software Developer Intern",
     duration: "Dec 2024 -  Current",
     points: [
        "Developed and enhanced ARTIQ, an open-source control compiler for quantum physics experiments",
        "Improved NAC3 by adding new features to speed up Python compilation",
        "Documented the codebase for the ease of users and developers"
    ]    
    },
    {
    company: "Innova8s Pte. Ltd.",
    role: "Computer Vision Intern",
    duration: "Aug 2024 – Sept 2024",
    points: [
        "Developed and trained deep-learning models for cattle monitoring and detection, enhancing detectionaccuracy by 15%",
        "Conceptualized and prototyped novel applications, such as Feed monitoring system, Age estimator and weight detection"
    ]
    },
    {
        company: "Invisible Technologies",
        role: "AI Quality Analyst",
        duration: "Mar 2024 – Sept 2024",
        points: [
          "Led data annotation team and improved accuracy by 25%",
          "Created comprehensive documentation for annotation guidelines",
          "Managed quality assurance for AI training data"
        ]
    },
    {
        company: "Invisible Technologies",
        role: "Advanced AI Data Trainer",
        duration: "Feb 2024 – June 2024",
        points: [
          "Evaluate AI performance data for accuracy and redirect output by drafting responses to improve models",
          "Conduct full-scale conversational training and provide qualitative feedback to improve AI response",
          "Managed quality assurance for AI training data",
          "Recognised as Top Annotator by team leads for high-quality work"
        ]
    },
    {
    company: "Panasonic Research & Development Center Singapore",
    role: "Advanced AI Algorithm Developer Intern",
    duration: "May 2023 – Dec 2023",
    points: [
      "Developed computer vision applications for object detection and image recognition",
      "Created interactive web interface for livestream monitoring",
      "Improved image recognition accuracy by 20% through model fine-tuning",
      "Deployed edge devices with 90% accuracy at client locations"
    ]
  },

];

const Experience = () => {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-xl font-bold text-blue-500">{exp.company}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg font-semibold">{exp.role}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
