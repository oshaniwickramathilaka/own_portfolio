import React from 'react'
import { motion } from 'framer-motion'
import profile_picture from '../assets/profile_picture.jpeg';

const Hero = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>
                
                {/* LEFT CONTENT */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        Hi, I'm <span className='text-amber-400'>Oshani Wickramathilaka</span>
                    </h1>

                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>
                        Aspiring Data Scientist | Data to Insights
                    </h2>

                    <p className='text-lg text-gray-300 mb-8'>
                        I am an undergraduate passionate about data analysis, machine learning, and building intelligent solutions to real-world problems.
                    </p>

                    <div className='flex space-x-4'>
                        <a href="#projects" className='px-6 py-3 bg-amber-400 rounded-lg font-medium hover:bg-amber-800 transition duration-300'>
                            View work
                        </a>
                        <a href="#contact" className='px-6 py-3 border border-amber-400 rounded-lg font-medium hover:bg-amber-800 transition duration-300'>
                            Contact me
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className='md:w-1/2 flex justify-center'>
                    
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-amber-400 blur-2xl opacity-30"></div>

                        {/* Floating Image */}
                        <motion.img
                            src={profile_picture}
                            alt="Profile"
                            className="w-64 h-64 md:w-80 md:h-80 object-cover object-top rounded-full border-4 border-amber-400 shadow-xl"
                            
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>

                </div>

            </div>
        </motion.div>
    )
}

export default Hero