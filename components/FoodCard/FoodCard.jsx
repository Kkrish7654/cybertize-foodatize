import Link from 'next/link';
import React from 'react'

const FoodCard = ({item_name, item_price, item_quantity, item_details}) => {
  return (
    <div className='flex items-stretch bg-white  rounded-xl shadow-lg shadow-[#ebebeb] overflow-auto'>
      <div className='p-2 w-[120px] h-[100px]'>
        <img className='w-full h-full object-contain' src="food-item.png" alt="food-item" />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <div>
          <h4 className='font-bold text-[18px] text-[#4D4D4D] truncate'>{item_name}</h4>
          <p className='text-sm font-bold text-[#2E2E2E]'>Rs.{item_price} / <span className='text-[#616161]'>{item_quantity} Pieces</span></p>
        </div>
        <div className='flex gap-4 items-center'>
          <button className='w-[105px] h-[30px] font-semibold bg-[#24FF00] text-[#3F3F3F] rounded-md'>Add to cart</button>
          <Link className='underline text-sm text-[#4E4E4E]' href="">View details</Link>
        </div>
      </div>
    </div>
  )
}

export default FoodCard;