import React from 'react'
import { GrContact } from "react-icons/gr";

const OpenContact = ({onClick}) => {
  return (
    <div onClick={onClick} className='relative w-15 h-15 bg-blue-400 rounded-full flex justify-center items-center'>
        <GrContact className='text-white w-5 h-5 mx-auto my-auto'/>
    </div>
  );
}

export default OpenContact