import React from 'react'
import {nav} from 'framer-motion/client'

const Navbar=()=>{
  return(
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href='#' className='text-3xl font-bold text-white'>
                    Oshani<span className='text-amber-400'>Wickramathilaka</span>
                    
                </a>
            </div>
            <div className='hidden:md-flex space-x-10'>
                <a href="#home" className='relative text-white transition duration-300 hover:text-amber-400 group'>
                    <span>Home</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.6 bg-amber-800 transition-all 
                    duration-300 group-hover:w-full'></span>
                </a>
                <a href="#about" className='relative text-white transition duration-300 hover:text-amber-400 group'>
                    <span>About</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.6 bg-amber-800 transition-all 
                    duration-300 group-hover:w-full'></span>
                </a>
                <a href="#skills" className='relative text-white transition duration-300 hover:text-amber-400 group'>
                    <span>Skills</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.6 bg-amber-800 transition-all 
                    duration-300 group-hover:w-full'></span>
                </a>
                <a href="#projects" className='relative text-white transition duration-300 hover:text-amber-400 group'>
                    <span>Projects</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.6 bg-amber-800 transition-all 
                    duration-300 group-hover:w-full'></span>
                </a>
                <a href="#contact" className='relative text-white transition duration-300 hover:text-amber-400 group'>
                    <span>Contact</span>
                    <span className='absolute left-0 bottom-1 w-0 h-0.6 bg-amber-800 transition-all 
                    duration-300 group-hover:w-full'></span>
                </a>
            </div>
        </div>

    </nav>
  )
}

export default Navbar;