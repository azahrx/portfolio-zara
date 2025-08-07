import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>
        My portfolio
      </h4>
      <h2 className='text-center text-5xl font-ovo'>
        My latest work
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Welcome to my project portfolio! Explore a collection of projects showcasing my expertise in both software development and project management.
      </p>

      {/* Scrollable project cards */}
      <div className='overflow-x-auto scroll-smooth no-scrollbar py-5'>
        <div className='flex gap-6'>
          {workData.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.bgImage})` }}
              className='bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group flex-shrink-0 
              min-w-[320px] max-w-[320px] min-h-[360px] max-h-[440px] aspect-[4/3]'
            >
              {/* Project Info Box */}
              <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-6 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>

                {/* Optional send icon with optional link */}
                {project.showSendIcon && project.link ? (
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'
                  >
                    <Image src={assets.send_icon} alt='Send icon' className='w-5' />
                  </a>
                ) : project.showSendIcon ? (
                  <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                    <Image src={assets.send_icon} alt='Send icon' className='w-5' />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <a
        href=''
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500'
      >
        Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </a> */}
    </div>
  )
}

export default Work
