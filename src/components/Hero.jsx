import React from 'react'
import profile from '../assets/kevinRushProfile.png';
import {HERO_CONTENT} from '../constants/index.js';
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

function Hero() {
  return (
    <div className='mt-10 lg:m-10 flex flex-col h-auto justify-center lg:flex-row lg:justify-between lg:items-center space-x-5'>
        <div data-aos="fade-left" className='lg:w-1/2 w-full'>
            <img src={profile} className='lg:w-[75%] lg:h-[75%] md:w-[50%] md:h-[50%] mx-auto object-contain' alt="Profile Picture" />
        </div>
        <div data-aos="fade-right" className='mt-10 leading-10 lg:text-xl text-white lg:w-1/2 flex flex-col justify-start items-start space-y-5'>
            <p className='text-[1.3rem] lg:text-start sm:text-center w-full lg:text-4xl bg-gradient-to-r from-purple-500 via-violet-500 to-pink-600 bg-clip-text text-transparent animate-pulse'>ASPIRING FULLSTACK DEVELOPER</p>
            <p>{HERO_CONTENT}</p>
            <div className='flex flex-col space-y-10 mx-auto lg:flex-row space-x-20'>
                <a download href="./public/Karthikeyan_M_Resume.pdf">
                <button className='menu-button scale-100 hover:scale-110 hover:transition-all hover:duration-300'>Resume</button>
                </a>
                <a href="https://www.linkedin.com/in/karthikeyan-m-0a3a062a0/" target='_blank'>
                <button className='flex space-x-2 justify-center items-center border-1 border-white px-10 py-4 menu-button-linkedin scale-100 hover:scale-110 hover:transition-all hover:duration-300'>
                    <ImLinkedin />
                    <span>LinkedIn</span>
                </button>
                </a>
                <a href="">
                <button className='flex space-x-2 justify-center items-center border-1 border-white px-10 py-4 menu-button-github scale-100 hover:scale-110 hover:transition-all hover:duration-300'>
                    <FaGithub />
                    <span>Github</span>
                </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero