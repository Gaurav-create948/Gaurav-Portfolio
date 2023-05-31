import React from 'react';
import { socialLinks } from '../../Constants';

const Content = () => {
  return (
    <div className='flex flex-col md:flex-row'>

      <div className='block md:hidden w-1/2 md:w-full mx-auto'>
        <img className='ml-auto w-[300px] h-fit' src={require('../../assets/images/coding.gif')} alt='coding' />
      </div>


      <div className='z-10 w-full sm:w-1/2 mx-auto md:mx-0 content text-center content-center py-0 md:py-[100px]'>
        <h1 className='text-[30px] sm:text-[50px] font-bold font-poppins justify-center'>Full Stack Developer</h1>
        <h2>Experienced with Modern softawre Development</h2>
        <p>Click on my Social Links below 👇</p>
        <div className='social-links my-5 sm:my-10'>
          {socialLinks.map(socialLink =>
            <a href={socialLink.href} target='_blank' className='text-center mx-2'>
              <i className={`${socialLink.link} text-3xl`}></i>
            </a>
          )}
        </div>
        <button className='w-1/2 bg-purple-500 text-white font-bold font-[poppins] py-2 px-4 rounded' type='click'>Contact</button>
      </div>


      <div className='w-full sm:w-1/2 content'>
        <img className='w-full md:w-1/2 absolute top-0 bottom-0 right-0' src={require('../../assets/images/Ellipse 1.png')} alt='ellipse' />
        <div className='h-screen hidden md:block'>
          <img className='ml-auto h-fit' src={require('../../assets/images/coding.gif')} alt='coding' />
        </div>
      </div>

    </div>
  )
}

export default Content;