import React from 'react'

const CallCard = () => {
  return (
    <div className='w-full flex items-center justify-between gap-2 bg-white rounded-xl p-4'>
      <div className='font-semibold'>
        <p className='text-[#515151]'>Have something to say?</p>
        <h2 className='text-[#2196F3] text-[18px]'>Call the Restaurant now</h2>
      </div>

      <div className='w-[60px] h-[60px]'>
        <img className='w-full h-full object-contain' src="./image/telephone.png" alt="telephone" />
      </div>
    </div>
  )
}

export default CallCard