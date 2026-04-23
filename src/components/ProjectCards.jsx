import React from 'react';

const ProjectCards = ({ title, description, image, tech }) => {
  return (
    <div className='bg-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 
    transition duration-300 cursor-pointer'>
      
      <img src={image} alt={title} className='w-full h-60 object-cover' />

      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-sm mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2'>
          {tech?.map((item, index) => (
            <span
              key={index}
              className='bg-blue-500/20 text-blue-200 px-2 py-1 rounded-md text-xs'
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectCards;