import React from 'react'

const InputText = ({customStyle}) => {
  return (
    <>
      <input className={`w-full p-[10px] border-[1px] border-[#23AF00] ${customStyle} `}type="number" name='mobile-number'/>
    </>
  )
}

export default InputText