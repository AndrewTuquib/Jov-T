import React from 'react';
//countup
import CountUp from 'react-countup';
//intersection observer hook
import { useInView } from 'react-intersection-observer';
//variant
import { fadeIn } from '../variants';
//motion
import {motion} from 'framer-motion'


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center
         lg:gap-x-20 lg:gap-y-0 h-full'>
          {/* img */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat min-h-[640px]
            mix-blend-lighten bg-top container'>

          </motion.div>
          {/* text */}
          <motion.div
             variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 mb-10'>
            <h2 className='h2 text-amber-500 font-semibold'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Visual Creative with over 10 years of experience.
            </h3>
            <p className='mb-6'>
              Andrew is an experienced designer with a strong foundation in web development. 
              Possessing a keen eye for dissecting complex problems, he excels in uncovering underlying issues and devising innovative solutions. 
              His adaptability shines in dynamic, fast-paced settings, a skill sharpened with his tenure contributing to pivotal projects alongside high-performing teams. 
              In addition to his problem-solving prowess, Andrew prides himself on his exceptional communication and collaboration skills.
            </p>
            {/* stats */}
            <div className='flex gap-10 lg:gap-12 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView && <CountUp start={2009} end={2016} duration={5} useGrouping={false}/>}
                </div>
                <div className='font-primary font-medium text-sm tracking-[2px]'>
                  BS Interior Design <br/>
                  <span className='text-xs font-light'>
                    Polytechnic University <br/>
                    of the Philippines
                  </span>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView && <CountUp start={0} end={30} duration={5}/>}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects<br/>
                  Completed<br/>
                </div>
                <div className='mt-2'>
                  <ul className="list-disc text-xs" >
                    <li>Interior Design</li>
                    <li>Architectural Design</li>
                    <li>Graphics Design</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView && <CountUp start={0} end={10} duration={5}/>}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of<br/>
                  Experience
                </div>
                <div className='mt-2'>
                  <ul className="list-disc text-xs" >
                    <li>Interior Designer</li>
                    <li>Graphics Designer</li>
                    <li>Executive Assistant</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <a href='#contact'>
                <button className='btn btn-lg'>
                  Contact me
                </button>
              </a>
              <a href='#work' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
      
};

export default About;
