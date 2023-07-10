import React from 'react'
import CartItem from './CartItem'
import Link from 'next/link'

const FoodCart = () => {

  const cartItems = [
    {item_name: 'Chicken Chilli - Boneless',
    item_price : 210,
    item_quantity:12},

    {item_name: 'Chicken Chilli - Boneless',
    item_price : 210,
    item_quantity:12},
]

  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-4'>
      {/* cart title */}
      <div>
        <h4 className='font-bold text-lg'>Cart</h4>
      </div>

      {/* cart items */}
      <div className='flex flex-col gap-2'>
        {
          cartItems.map((item) => (
            <CartItem item_name={item.item_name} item_price={item.item_price} item_quantity={item.item_quantity}/>
          ))
        }
      </div>
      <div>
        <Link href="/home">
        <button className={`w-full h-[50px] text-[#666666] text-[16px] bg-white rounded-lg`}>
          + Add more items
        </button>
      </Link>
      </div>
    </div>
  )
}

export default FoodCart