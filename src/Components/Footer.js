import React from 'react'
import { socialLinks } from '../Constants';

const Footer = () => {
  return (
    <div className='bg-[#a041f8] h-full footer'>
      <div className='container mx-auto'>
        <div className='social-links text-center'>
          <h1 className='text-white font-[poppins] font-bold'>Follow Me</h1>
          {socialLinks.map(socialLink =>
            <a href={socialLink.href} target='_blank' className='text-center mx-2 text-white'>
              <i className={`${socialLink.link} text-3xl`}></i>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer;