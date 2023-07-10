import Link from 'next/link'
import React from 'react'

const ButtonSuccess = ({text, customStyle, link}) => {
  return (
    <button type="submit" className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] ${customStyle}`}>
      <Link href={link}>
        {text}
      </Link>
    </button>
  )
}

export default ButtonSuccess