import React from 'react'

const CloseContact = ({onClick}) => {
  return (
    <div onClick={onClick} className='w-42 h-15 rounded-lg bg-blue-400 text-white px-10 py-5 flex justify-center items-center'>
        <span>Close Chat</span>
    </div>
  )
}

export default CloseContact