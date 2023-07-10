'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const FoodCard = ({item_name, item_price, item_quantity, item_details}) => {

  const [isAdded, setIsAdded] = useState(false)
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 1) {
        setIsAdded(true);
      }
      return newCount;
    });
  };
  
  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount - 1;
      if (newCount === 0) {
        setIsAdded(false);
      }
      return newCount >= 0 ? newCount : 0;
    });
  };


  

  return (
    <div className='flex items-stretch bg-white  rounded-xl shadow-lg shadow-[#ebebeb] overflow-auto'>
      <div className='p-2 w-[120px] h-[100px]'>
        <img className='w-full h-full object-contain' src="./image/food-item.png" alt="food-item" />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <div>
          <h4 className='font-bold text-[18px] text-[#4D4D4D] truncate'>{item_name}</h4>
          <p className='text-sm font-bold text-[#2E2E2E]'>Rs.{item_price} / <span className='text-[#616161]'>{item_quantity} Pieces</span></p>
        </div>
        
        <div className='flex gap-4 items-center'>
        {
          !isAdded ? (
            <button onClick={increment} className='w-[105px] h-[30px] font-semibold bg-[#24FF00] text-[#3F3F3F] rounded-md'>Add to cart</button>
          ) :
          (
            <div className='flex items-center justify-center h-[30px] w-[105px] bg-[#24FF00]'>
            <button onClick={decrement} className='grow font-semibold'>-</button>
              <span className='grow bg-white text-center font-semibold'>{count}</span>
            <button onClick={increment} className='grow font-semibold'>+</button>
          </div>
          )
        }
          <Link className='underline text-sm text-[#4E4E4E]' href="">View details</Link>
        </div>
      </div>
    </div>
  )
}

export default FoodCard;