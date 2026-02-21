import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function GoToTop() {

    const[visible,setVisible] = useState(false)

    useEffect(()=> {
        const handleScroll = () => {
            if( window.scrollY > 30 ){
                setVisible(true)
            }else{
                setVisible(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return()=> {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])

    const ScrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }

  return (
    <div>
        {
            visible && <button className='fixed bottom-5 right-5 bg-gradient-to-r from-purple-900 via-violet-700 to-pink-900 p-2 rounded-full text-white' onClick={ScrollToTop}>
                <FaArrowUp/>
            </button>
        }
    </div>
  )
}

export default GoToTop