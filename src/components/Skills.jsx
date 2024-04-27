import React from 'react';
//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import {motion} from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//data
import skills from './SkillsDetails';


const Skills = () => {
  return (
    <section className='section' id='skills'>
      <div className='container mx-auto mb-5'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image*/}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 bg-[length:430px] lg:bg-skills lg:bg-bottom bg-no-repeat
            mix-blend-lighten mb-16 lg:mb-0'>
            <h2 className='h2 text-amber-500 mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
            I'm a versatile professional, proficient in a variety of trades and masterful in several.
            </h3>
            <a href='#work'>
              <button className='btn btn-sm'>See my works</button>
            </a>
            
          </motion.div>
            {/* skills */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1'>
            {/* skills list */}
            <div>
              {skills.map((skills, index) => {
                //destructure service
                const {name, description,} = skills;

                return (
                <div className='border-b border-white/20 h-[200px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary
                    font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='#work' className='btn w-9 h-9 mb-[42px] flex
                    justify-center items-center '>
                      <BsArrowUpRight/>
                    </a>
                  </div>
                </div>
              )})}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Skills;
