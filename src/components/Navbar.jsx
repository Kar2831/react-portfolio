  import React, { useState } from 'react'
  import { MdOutlineMenu } from "react-icons/md";
  import { IoCloseSharp } from "react-icons/io5";

  function Navbar() {
    const[toggleMenu,setToggleMenu] = useState(false)
    function handleToggleMenu(){
      setToggleMenu(!toggleMenu);
    }
    return (
      <>
    <div className='lg:hidden flex justify-between items-center lg:mx-10'>
      <div>
        <h1 className='lg:text-3xl font-serif font-bold bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent moving-gradient-text-mobile '>Karthikeyan M</h1>
      </div>
      <div className='text-3xl text-white'>
          {
            toggleMenu?<IoCloseSharp onClick={handleToggleMenu} />:<MdOutlineMenu onClick={handleToggleMenu} />
          }
        </div>
    </div>
          {
          toggleMenu && <div className='block lg:hidden p-10 mt-10 w-full h-auto gradient-bg-animated'>
          <ul className='flex flex-col justify-center items-center space-y-7 text-xl text-white link-hover-effect'>
            <li><a className='' href="#">Home</a></li>
            <li><a className='' href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Certifications</a></li>
            <li><a href="#">References</a></li>
          </ul>
        <div className='mt-7 flex justify-evenly'>
          <button className='menu-button'>Resume</button>
          <button className='menu-button'>Contact</button>
        </div>
        </div>
        }
      <nav className='hidden lg:block'>
        <div data-aos="fade-down" className='flex justify-between items-center'>
        <div>
          {/* Logo */}
          <h1 className='text-3xl font-serif font-bold bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent moving-gradient-text '>Karthikeyan M</h1>
        </div>

        <div>
          <ul className='flex space-x-10 text-xl text-white link-hover-effect'>
            <li><a className='' href="#">Home</a></li>
            <li><a className='' href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Certifications</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">References</a></li>
          </ul>
        </div>
        </div>

      </nav>
      </>
      
    );
  }

  export default Navbar