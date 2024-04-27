import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants';
import NewCard from './NewCard';
import NewContent from './NewContent';


const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10 ' >
          <motion.div 
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once:false, amount: 0.3}}
              className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 justify-end'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-amber-400 '>
                My Latest Work.
              </h2>
              <p className='max-w-sm mb-10'>
              Leveraging the depth of my experience in design, I've honed my expertise in front-end development, 
              where I excel in seamlessly blending design principles and methodologies with the latest advancements in technology.
              </p>
              {/* <a href='#work'>
                <button className='btn btn-sm'>View all projects</button>
              </a> */}
            </div>
            {/* card */}
              <NewCard
                key={NewContent[0].id}
                id={NewContent[0].id}
                pretitle={NewContent[0].pretitle}
                title={NewContent[0].title}
                link={NewContent[0].link}
                url={NewContent[0].imgUrl}
                tech={NewContent[0].tech}
              />
          </motion.div>  
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 justify-end  '>
            <NewCard
              key={NewContent[1].id}
              id={NewContent[1].id}
              pretitle={NewContent[1].pretitle}
              title={NewContent[1].title}
              link={NewContent[1].link}
              url={NewContent[1].imgUrl}
              tech={NewContent[1].tech}
            />
            <NewCard
              key={NewContent[2].id}
              id={NewContent[2].id}
              pretitle={NewContent[2].pretitle}
              title={NewContent[2].title}
              link={NewContent[2].link}
              url={NewContent[2].imgUrl}
              tech={NewContent[2].tech}
            />
          </motion.div>   
        </div>
      </div>
    </section>
  ) 
};

export default Work;
