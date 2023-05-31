import React from 'react'
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='about my-20'>
      <motion.h1 animate={{ textAlign: 'center' }} className='text-4xl mb-11'>About Me</motion.h1>

      <div className='container mx-auto my-auto'>

        <div className='my-image my-14'>
          <motion.img animate={{ width: '200px' }} className='w-40 block mx-auto my-auto' src={require('../assets/images/my-profile.png')} alt="dev-image" />
        </div>

        <div className='about-me text-justify font-[poppins] mx-auto px-10 py-10 border border-solid border-[#ddd] rounded-xl' style={{boxShadow:'rgb(221, 221, 221) 0px 0px 27px 1px'}}>
          <p>
            Hello, I'm Gaurav Kumar, an experienced full-stack developer with a passion for building innovative web applications.
            With a strong foundation in HTML5, CSS3, and JavaScript, I create responsive and interactive user interfaces.
            My expertise extends to modern frameworks like React.js for front-end development, and Node.js and Express.js for back-end development,
            allowing me to build scalable and efficient web applications.
            <p className='hidden sm:inline'>
            I have a deep love for learning and staying up-to-date with the latest technologies. Currently,
            I'm exploring the realms of DevOps and cloud computing, as well as diving into the fascinating world of open-source projects. Embracing a growth mindset,
            I continuously seek opportunities to expand my skillset and tackle new challenges.
            </p>

          </p>
          <br />
          <p>
            Join me on this exciting journey as we harness the power of technology to build a better tomorrow. Let's connect and explore how we can bring your ideas to life!"
          </p>
        <div className='text-center text-white bg-blue-900 w-52 mx-auto px-5 py-5'>
          <a className='font-bold antialiased' href='https://drive.google.com/file/d/1Zqrd93u-uQt0q5vqNh1vQq-Mjmuh43j7/view?usp=drive_link' download="Resume.pdf" target='_blank'>
            Download Resume
          </a>
        </div>
      </div>
        </div>


    </div>
  )
}

export default About;