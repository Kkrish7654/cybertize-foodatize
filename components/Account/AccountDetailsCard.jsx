import React from 'react'

const AccountDetailsCard = () => {
  return (
    <div className='flex items-center justify-between px-2 bg-white rounded-xl p-6'>
    <div>
      <p className='text-sm font-semibold text-[#616C71]'>Account Details</p>
      <p className='text-sm font-semibold text-[#00C1FF]'>Name, Email etc</p>
    </div>

    <div>
      <img src="./image/cutlery2.png" alt="icon" />
    </div>
  </div>
  )
}

export default AccountDetailsCard