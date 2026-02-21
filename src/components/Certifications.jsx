import React, { useState } from 'react'
import { ACHIEVEMENTS } from '../constants'
import { RiCloseLargeLine } from "react-icons/ri";


function Certifications() {
    const[isVisible, setIsVisible] = useState(false)
    const[isFileOpen, setIsFileOpen] = useState('')
    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }
  return (
    <>
    <div>
        <h1 className='text-white text-center text-4xl'>Certifications</h1>
      <span className='relative bg-white w-60 h-1 mx-auto mt-3 block before:absolute before:w-4 before:h-4 before:bg-white before:-top-2 before:rounded-full before:bottom-[50%] after:absolute after:w-4 after:h-4 after:bg-white after:-top-2 after:right-0 after:rounded-full'></span>
    </div>
    <div className='w-auto gap-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-10 mx-auto'>
        {
            ACHIEVEMENTS.map((ach,index)=> (
                <div
                data-aos="flip-left"
                data-aos-duration={(index % 3) * 400 + 100}
                className='w-auto h-auto bg-white max-w-xl p-10 bg-template text-white scale-100 hover:transition-all hover:duration-300 hover:scale-105' key={index}>
                    <div className='flex flex-col justify-center items-center space-y-10'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1>Event:</h1>
                            <h1>{ach.event}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1>Project:</h1>
                            <h1>{ach.project}</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img className='hover:opacity-55 hover:transition-all hover:duration-300 hover:-translate-y-5' onClick={()=> {
                               handleVisibility()
                               setIsFileOpen(ach.cert_path) 
                            }} src={ach.cert_path} alt="" />
                        </div>
                        <div>
                            <h1>Description</h1>
                            <h1>{ach.description}</h1>
                        </div>

                    </div>
                </div>
            ))
        }
        <div>
            {
                isVisible && 
            <div className='fixed inset-0 z-40 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-30'>
            <div className='w-auto h-auto bg-white z-50 fixed top-16 left-80 rounded-3xl p-5'> 
                    <div className='mx-auto'>
                        <img className='w-200 h-125' src={isFileOpen} alt="" />
                        <div className='absolute top-3 right-2'>
                            <RiCloseLargeLine onClick={handleVisibility} />
                        </div>
                    </div>
            </div>
            </div>
            }
        </div>
    </div>
    </>
  )
}

export default Certifications