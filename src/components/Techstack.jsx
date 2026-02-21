import React from 'react';
import { TECH_STACK } from '../constants';

function Techstack() {
  return (
    <div data-aos="flip-up" className="text-white lg:mx-10 mt-10 inset-0 -z-10 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <hr className='my-10'/>
      <h1 className="text-center text-3xl animate-bounce">Techstack known</h1>
      <div className="marquee-container mt-10">
        <div className="marquee">
          {/* Duplicate the items for seamless loop */}
          {[...TECH_STACK,...TECH_STACK].map((tech, index) => (
            <div className={tech.name === "Express"?"bg-white opacity-100":""} key={index}>
              <img src={tech.image} alt={tech.name} className="lg:h-12 lg:w-12 h-10 w-10 lg:mx-8 mx-4" />
            </div>
          ))}
        </div>
        <hr className='my-10' />
      </div>
    </div>
  );
}

export default Techstack;
