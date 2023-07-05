import React from 'react'

const Header = () => {
  return (
    <nav className='py-[16px] px-[18px] flex gap-2 items-end shadow-lg shadow-[#ebebeb] bg-white'>
      <div>
        <img className='w-[35px] h-[33px]' src="./delivery-man.png" alt="logo" />
      </div>
      <div className=''>
        <img src="./Foodatize.png" alt="logo-title" />
        <p className='text-[10px] tracking-tight'>by EP Group</p>
      </div>
    </nav>
  )
}

export default Header