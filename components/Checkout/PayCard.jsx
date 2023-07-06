import React from 'react'

const PayCard = ({title, text}) => {
  return (
    <div className='w-full p-4 flex items-center justify-between bg-white rounded-xl'>
      <div>
        <h4 className='text-[#000000] font-bold text-[18px]'>{title}</h4>
        <p className='text-sm'>{text}</p>
      </div>

      <div>
        <img src="back.png" alt="back" />
      </div>
    </div>
  )
}

export default PayCard