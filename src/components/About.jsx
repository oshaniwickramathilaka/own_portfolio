import React from 'react';
import { motion } from 'framer-motion';
import profile_picture from '../assets/profile_picture.jpeg';
const aboutInfo = [
  {
    title: "Experience",
    description: "Working on data-driven projects",
    icon: () => <span>📊</span>
  },
  {
    title: "Education",
    description: "Data Science Undergraduate",
    icon: () => <span>🎓</span>
  }
];

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-[#0f172a]'
        >
            <div className='container mx-auto px-6'>
                
                <h2 className='text-3xl font-bold text-center mb-4'>
                    About <span className='text-amber-400'>Me</span>
                </h2>

                <p className='text-white text-center max-w-2xl mx-auto mb-16'>
                    Do you like to know more about me?
                </p>

                {/* FLEX CONTAINER */}
                <div className='flex flex-col md:flex-row items-center gap-12'>

                    {/* LEFT - IMAGE */}
                    <div className='md:w-2/5 overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}  
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-100 h-120 object-cover object-top pl-15'
                            src={profile_picture}
                            alt="profile"
                        />
                    </div>

                    {/* RIGHT - CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}  
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }} 
                        className='md:w-3/5'
                    >
                        <div className='rounded-2xl p-4'>
                            <h3 className='text-2xl mb-6 font-semibold text-amber-400'>
                                My Story
                            </h3>

                            <p className='text-white mb-6'>
                                I am a passionate Data Science undergraduate with a strong curiosity for turning
                                data into meaningful insights. My journey into data science began with a simple question:
                                how can data be used to solve real-world problems and support better decision-making?
                            </p>

                            <p className='text-white mb-6'>
                                During my academic journey, I have developed a solid foundation in programming, statistics,
                                and data-driven thinking. I enjoy working with tools such as Python, SQL, and data visualization
                                libraries to explore datasets and communicate insights effectively.
                            </p>
                            {/*cards*/}
                            
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {
                                aboutInfo.map((data,index)=>(
                                    <div key={index} className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg 
                                         hover:shadow-amber-400/20 hover:-translate-y-2 transition-all duration-300'>
                                        <div className='text-amber-400 text-4xl mb-4'>
                                            <data.icon/>

                                        
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                            
                                        <p className='text-white'>{data.description}</p>

                                    </div>



                                ))
                            }
                           </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
};

export default About;