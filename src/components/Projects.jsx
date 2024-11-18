'use client';

import { motion } from 'framer-motion';

const projects = [
{
    title: "Sketch-based Animation with AI Colorization",
    description: "Final Year Project developing an AI-powered tool that transforms sketches and textual descriptions into colorized animations.",
    tech: ["Python", "TensorFlow", "GANs", "NLP", "PyTorch"],
    type: "AI/ML",
    status: "In Progress"
    } ,
 
 {
    title: "DataAuto",
    description: "An open-source tool for automating data analysis tasks, featuring automated EDA, visualization, ML model training, and report generation.",
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Plotly", "Streamlit"],
    type: "Data Science",
    link: "https://github.com/r4mp4g3r/dataauto",
    highlights: [
      "Automated data loading & preprocessing",
      "Interactive visualizations & dashboards",
      "ML model training & evaluation",
      "Task scheduling & automation",
      "Cloud service integrations"
    ]
  },
  ,
  {
    title: "Amend.id",
    description: "Full-stack web application with responsive design, user authentication, and database integration.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "Figma"],
    type: "Web Development",
    link: "https://home.amend.id",
    highlights: [
      "Built responsive UI from Figma designs",
      "Implemented RESTful APIs",
      "Optimized MongoDB queries"
    ]
  },
  {
    title: "OpenGL Traffic Flow Simulation",
    description: "3D traffic simulation with realistic physics and user controls.",
    tech: ["C++", "OpenGL", "GLFW", "GLM"],
    type: "Computer Graphics",
    highlights: [
      "Vehicle movement algorithms",
      "Traffic signal system",
      "Collision detection",
      "3D environment rendering"
    ]
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        rotateX: -5,
        translateZ: 20
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all hover:shadow-xl group transform-gpu perspective-1000"
    >
      <div className="flex flex-col h-full">
        <div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-blue-500">
              {project.link ? (
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  {project.title}
                  <svg 
                    className="w-4 h-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
              ) : (
                project.title
              )}
            </h3>
            <span className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400">
              {project.type}
            </span>
          </div>
          <p className="text-gray-300 mb-4">{project.description}</p>
        </div>
        
        {project.highlights && (
          <div className="mb-4">
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.status && (
            <span className="mt-4 inline-block px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-400">
              {project.status}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A selection of my academic and personal projects showcasing my expertise in AI/ML, 
            full-stack development, and computer graphics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 