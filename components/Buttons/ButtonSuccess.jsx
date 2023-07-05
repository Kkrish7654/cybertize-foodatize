import React from 'react'

const ButtonSuccess = ({text, customStyle}) => {
  return (
    <button className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] ${customStyle}`}>{text}</button>
  )
}

export default ButtonSuccess