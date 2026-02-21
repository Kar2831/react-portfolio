import React from 'react';
import { TECH_STACK,PROJECTS } from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div     data-aos="zoom-out"
 className='flex justify-center items-center lg:h-auto bg-neutral-900 text-white lg:mx-10 my-10'>

    <Slider
        {...settings}
        className=' my-10 mx-10 text-center w-100 lg:w-[75%] lg:h-auto p-10'
    >
        {
            PROJECTS.map((project,index)=> (
                <div className='flex flex-col justify-center items-center space-y-10' key={index}>
                    <h1 className='text-xl lg:text-4xl'>{project.name}</h1>
                    <span className='relative w-48 h-1 bg-white block mx-auto before:absolute before:w-4 before:h-4 before:bg-white before:-top-2 before:rounded-full before:left-0 after:absolute after:w-4 after:h-4 after:bg-white after:rounded-full after:-top-2 after:right-0'></span>
                    <img className='w-100 h-50 mx-auto' src={project.image} alt="" />
                    <p className='text-sm lg:text-lg'>{project.description}</p>
                    <p className='flex justify-center items-center animate-bounce text-sm lg:text-xl'>Technologies used: 
                       {
                        project.technologies.map((techname,i)=> {
                            const tech = TECH_STACK.find(t => t.name === techname);
                            return tech ?
                            <img key={i} className={
                                tech.name === "Express"?"w-10 h-10 bg-white mx-3":"w-10 h-10 mx-3"
                            } src={tech.image} />:
                            null
                        })
                       }
                    </p>
                </div>
            ))
        }
    </Slider>
    </div>
  );
}

export default Projects;
