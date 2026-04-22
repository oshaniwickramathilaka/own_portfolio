import React from 'react';
import { motion } from 'framer-motion';

// ✅ DEFINE DATA
const skillsData = [
  {
    title: "Python",
    description: "Used for data analysis, machine learning, and automation.",
    icon: () => <span>🐍</span>
  },
  {
    title: "SQL",
    description: "Experienced in querying databases and managing structured data.",
    icon: () => <span>🗄️</span>
  },
  {
    title: "Data Visualization",
    description: "Creating meaningful insights using charts and dashboards.",
    icon: () => <span>📊</span>
  }
];

const Skills = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }} 
            id='skills'
            className='py-20 bg-[#1a1a1a]'
        >
            <div className='container mx-auto px-6'>
                
                <h2 className='text-3xl font-bold text-center mb-4'>
                    My <span className='text-amber-400'>Skills</span>
                </h2>

                <p className='text-white text-center max-w-2xl mx-auto mb-16'>
                    Powered by these technologies
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    
                    {skillsData.map((skill, index) => (
                        <div 
                            key={index} 
                            className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 
                            hover:-translate-y-2 transition duration-300 cursor-pointer'
                        >
                            <div className='flex items-center mb-4'>
                                <skill.icon className='w-12 h-12 text-amber-400 mr-6'/>
                                <h3 className='text-xl font-semibold text-white'>
                                    {skill.title}
                                </h3>
                            </div>
                            <p className='text-gray-300 text-sm leading-relaxed'>
                               {skill.description}
                              </p>
                            </div>
                        
                    ))}

                </div>
            </div>
        </motion.div>
    );
};

export default Skills;