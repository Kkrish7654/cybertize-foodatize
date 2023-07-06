import React from 'react'

const UserDetails = ({title, text}) => {
  return (
    <div className='flex items-center justify-between px-2 bg-white rounded-xl p-6'>
    <div>
      <p className='text-sm font-semibold text-[#616C71]'>{title}</p>
      <p className='text-sm font-semibold text-[#E9923E]'>{text}</p>
    </div>
  </div>
  )
}

export default UserDetails