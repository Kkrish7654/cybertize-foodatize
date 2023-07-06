import Link from 'next/link'
import React from 'react'

const AddressSelectCard = ({address, landmark, selected, onClick}) => {
 
  const handleCardClick = () => {
    onClick()
  }

  console.log(selected);
  return (
    <div onClick={handleCardClick} className='w-full bg-white relative rounded-lg flex items-center justify-start gap-2 px-2 p-3'>
      <div className='w-[20%]'>
        <img className='w-full h-[50px]' src="home.png" alt="home-location" />
      </div>

      <div className='w-[80%]'>
        <h4 className='font-bold text-[#4D4D4D]'>{address}</h4>

        <p className='truncate text-[#4D4D4D]'>Landmark: <span>{landmark}</span></p>

      <div className="flex justify-start items-start gap-4 w-full mt-2 font-semibold">
        <Link className='text-xs underline underline-offset-1 text-[#414341]' href="">Edit address</Link>
        <Link className='text-xs underline underline-offset-1 text-[#FF0000]' href="">Delete address</Link>
      </div>
      </div>

      <div className={`absolute w-6 h-6 top-2 right-2 rounded-full z-20 ${selected ? 'bg-[#00C767]' : 'bg-slate-300'}`}></div>
    </div>
  )
}

export default AddressSelectCard