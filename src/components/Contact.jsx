import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact'
      className='py-20 bg-[#1a1a1a]'
    >
      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center mb-4'>
          Get in <span className='text-amber-400'>Contact</span>
        </h2>

        <p className='text-white text-center max-w-2xl mx-auto mb-12'>
          Let's connect together
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

          {/* FORM */}
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='block text-white mb-2'>
                Your Name
              </label>
              <input
                id='name'
                type='text'
                className='w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-white mb-2'>
                Email Address
              </label>
              <input
                id='email'
                type='email'
                className='w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-white mb-2'>
                Your Message
              </label>
              <textarea
                id='message'
                className='w-full h-40 bg-white/10 border border-white/20 rounded-lg px-4 py-3 outline-none'
              />
            </div>

            <button
              type='submit'
              className='w-full px-6 py-3 bg-amber-800 rounded-lg font-medium hover:bg-transparent transition duration-300'
            >
              Send
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className='space-y-9'>

            <div className='flex items-start gap-4'>
              <FaMapMarkerAlt className='text-white text-2xl' />
              <div>
                <h3 className='text-lg font-semibold text-white'>Location</h3>
                <p className='text-gray-300'>Kurunegala, Sri Lanka</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaEnvelope className='text-white text-2xl' />
              <div>
                <h3 className='text-lg font-semibold text-white'>Email</h3>
                <p className='text-gray-300'>rashiprebhaoshani@gmail.com</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <FaPhone className='text-white text-2xl' />
              <div>
                <h3 className='text-lg font-semibold text-white'>Phone</h3>
                <p className='text-gray-300'>+94 768616074</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className='pt-4'>
              <h3 className='text-lg font-semibold text-white mb-4'>Follow Me</h3>

              <div className='flex space-x-4'>
                <a href='https://github.com/oshaniwickramathilaka' className='w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-amber-500 hover:bg-amber-600 hover:text-white transition'>
                  <FaGithub />
                </a>

                <a href='https://www.linkedin.com/in/oshani-wickramathilake' className='w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-amber-500 hover:bg-amber-600 hover:text-white transition'>
                  <FaLinkedin />
                </a>

                <a href='https://www.instagram.com/oshi_0713' className='w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-amber-500 hover:bg-amber-600 hover:text-white transition'>
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;