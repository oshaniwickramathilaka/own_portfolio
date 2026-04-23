import React from 'react';
import { motion } from 'framer-motion';
import ProjectCards from './ProjectCards';

// import images

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and Tailwind.",
    
    tech: ["React", "Tailwind", "Framer Motion"]
  },
  {
    title: "Note App",
    description: "A note-taking app with authentication.",
    
    tech: ["React", "Firebase"]
  }
];

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='projects'
      className='py-20 bg-[#0f172a]'
    >
      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center mb-4'>
          My <span className='text-amber-400'>Projects</span>
        </h2>

        <p className='text-white text-center max-w-2xl mx-auto mb-16'>
          Collection of my own projects
        </p>

        {/* ✅ cards inside grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {projects.map((project, index) => (
            <ProjectCards key={index} {...project} />
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;