import React from 'react';
import { SKILLS } from '../constants';

function Skills() {
  return (
    <div className='mt-20'>
      <h1 className='text-white text-center mx-auto text-3xl'>Skills</h1>
      <span className='relative w-28 h-1 bg-white mt-2 mx-auto block before:absolute before:w-4 before:h-4 before:bg-white before:-top-2 before:rounded-full after:absolute after:w-4 after:h-4 after:right-0 after:bg-white after:-top-2 after:rounded-full'></span>
    <div className="flex flex-wrap justify-center items-center mt-20 gap-10 px-4">
      {
        SKILLS.map((skill, index) => (
          <div
            key={index}
            data-aos={index==0?"zoom-in-right":"" || index==1?"zoom-out":"" || index==2?"zoom-in-left":"" }
            className="flex flex-col items-center rounded-lg text-neutral-300 bg-black p-6 sm:p-8 w-full h-150 lg:w-[22rem] xl:w-[24rem] 2xl:w-[26rem]
              [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] shadow-md hover:scale-105"
          >
            <div className="flex flex-col space-y-4 text-center scale-100 max-h-75">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{skill.title}</h1>
              <img
                src={skill.image}
                alt={`${skill.title} logo`}
                className="w-24 h-24 object-contain mx-auto"
              />
              <h1 className="text-sm sm:text-base">
                Experience: <span className="text-neutral-300">{skill.experience}+ years of experience</span>
              </h1>
              <h1 className="text-sm sm:text-base">
                Techstack: <span className="text-neutral-300">{skill.technologies}</span>
              </h1>
              <h1 className="text-sm sm:text-base">
                <span className="text-neutral-300">{skill.description}</span>
              </h1>
              <h1 className="text-sm sm:text-base">
                Projects: <span className="text-neutral-300">{skill.project}</span>
              </h1>
            </div>
          </div>
        ))
      }
    </div>
    </div>
  );
}

export default Skills;
