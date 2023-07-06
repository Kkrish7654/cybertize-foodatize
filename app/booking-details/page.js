'use client'

import BookingCard from '@/components/BookingDetails/BookingCard';
import CartItem from '@/components/Cart/CartItem';
import BillDetails from '@/components/Checkout/BillDetails';
import PayCard from '@/components/Checkout/PayCard';
import React, { useState } from 'react'

const Index = () => {

  // dummy json data
  const [orders, setOrders] = useState([
    {
      item_name: 'Chicken Chilli - Boneless',
      item_price: 210,
      item_quantity: 12
    },
    {
      item_name: 'Paneer Tikka Masala',
      item_price: 180,
      item_quantity: 1
    }
  ]);
  
  //end//


  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-4'>
      <div>
        <h1 className='text-[25px] font-bold'>Booking Details</h1>
        <p className='text-black font-bold'>Booking ID: {}</p>
      </div>

      <div>
        <h5 className='text-[#666666] font-semibold mb-2'>Items in this order</h5>

        <div className='flex flex-col gap-4'>
          {
            orders.map((order) => (

              <BookingCard 
                item_name={order.item_name}
                item_price={order.item_price}
                item_quantity={order.item_quantity}
              />
            ))
          }
        </div>

        {/* Bill details */}
        <div className='mt-8'>
          <h5 className='text-[#666666] font-semibold mb-2'>Bill Details</h5>
          <BillDetails/>
        </div>

        <div className='mt-8'>
         <h5 className='text-[#666666] font-semibold mb-2'>Payment Method Used</h5>
          <PayCard title="Pay on Delivery" text="Cash / PhonePe / Gpay / UPI"/>
        </div>
      </div>
    </div>
  )
}

export default Index