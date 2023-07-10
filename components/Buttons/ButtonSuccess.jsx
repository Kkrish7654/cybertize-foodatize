import Link from 'next/link'
import React from 'react'

const ButtonSuccess = ({text, customStyle, link}) => {
 
  return (
    <Link href={link} >

    <button className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] ${customStyle}`}>   
        {text}   
    </button>
    </Link>
  )
}

export default ButtonSuccess