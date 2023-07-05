import React from 'react'
import CartItem from './CartItem'
import AddButton from '../Buttons/AddButton'

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
        <h4 className='font-bold text-lg'>cart</h4>
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
        <AddButton title="+ Add more items"/>
      </div>
    </div>
  )
}

export default FoodCart