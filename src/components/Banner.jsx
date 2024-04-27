import React from 'react';
//images
import Image from '../assets/Avatar3.png'
//icons
import {FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'


const Banner = () => {
  return (
    <section className='min-h[85vh] lg:min-h-[88vh] flex items-center pt-12' id='home'>
      <div className='container mx-auto'>
       <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
              ANDREW <span> TUQUIB</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.3)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-6 text-[36px] lg:text-[50px] font-secondary
              font-semibold uppercase leading-[1]'>
              <span className='text-white'>I am a  </span>
              <TypeAnimation sequence={[
                'Developer', 2000,
                'Designer', 2000,
                'Creative', 2000,
                'Solutionist', 2000,
              ]}
              speed={50}
              className='text-amber-500  font-semibold'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='mb-8 max-w-lg mx-auto lg:mx-0 font-medium'>
               I'm a passionate creative. I thrive on solving design challenges, whether big or small, and I'm drawn to projects that enhance people's lives by making things easier.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href='#contact'><button className='btn btn-lg'>Contact me</button></a>
              <a href='#work' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* social */}
            <motion.div
              variants={fadeIn('up', 0.7)} 
              initial='hidden' whileInView={'show'} 
              viewport={{once: false, amount: 0.7}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/AndrewTuquib' target='_blank' className='btn-link'>
                <FaGithub/>
              </a>
              <a href='https://www.linkedin.com/in/joevie-andrew-tuquib/' target='_blank' className='btn-link'>
                <FaLinkedin/>
              </a>
              <a href='https://www.facebook.com/joevieandrew.tuquib/' target='_blank' className='btn-link'>
                <FaFacebookSquare/>
              </a>
            </motion.div>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.5)} 
            initial='hidden' whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[450px] justify-center'>
            <img src={Image} alt='avatar image'/>
          </motion.div>
       </div>
        
      </div>
    </section>
  )
  
};

export default Banner;