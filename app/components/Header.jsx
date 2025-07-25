import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      {/* TODO: Fix padding top */}
      <div>
        <Image
            src={assets.profile_img_zahra}
            alt=''
            className='rounded-full w-32'
        />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
          Hi! I'm Fathimah Azzahra <Image src={assets.hand_icon} alt='' className='w-6' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
          junior project manager based in Jakarta.
      </h1>
      <p className='max-w-2xl mx-auto font-ovo'>
          I am a project manager from Jakarta, Indonesia with 2 years experience in global company including technical background as software developer handling clients such as Google and OCI.
      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a 
          href="#contact"
          className='font-outfit px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
            contact me 
          <Image
            src={assets.right_arrow_white}
            alt=''
            className='w-4'
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
            my resume 
          <Image
            src={assets.download_icon}
            alt=''
            className='w-4'
          />
        </a>
      </div>
    </div>
  )
}

export default Header
