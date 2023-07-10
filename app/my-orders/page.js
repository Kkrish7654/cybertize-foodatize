'use client'

import ActiveOrderCard from '@/components/MyOrders/ActiveOrderCard'
import React, { useState } from 'react'

const Index = () => {

  const [orders, setOrders] = useState([
    {
      "id":1,
      "bookingID" : "#FDT199649303",
      "items":5,
      "amount":547,
      "completed":true,
    },
    {
      "id":2,
      "bookingID": "#FGK199649353",
      "items":2,
      "amount":449,
      "completed":false,
    },
    {
      "id":3,
      "bookngID" : "#FMT99964930",
      "items":1,
      "amount":129,
      "completed":true,
    },
    {
      "id":4,
      "bookingID" : "#COT199649303",
      "items":4,
      "amount":544,
      "completed":true,
    },
  ])

  return (
    <div className='p-[22px] py-[28px]'>

      <div className='flex flex-col gap-2'>
      <h4 className='font-bold'>Active Orders</h4>
        
        {
          orders.map((order, index) => (
            order.completed ? 
            null
            : (
            <div key={index}  className='flex flex-col gap-2'>
              <ActiveOrderCard
                customStyle="border-[1px] border-black"
                bookingID={order.bookingID}
                items={order.items}
                amount={order.amount}
                key={order.id}
              /> 
            </div>
            )
          ))
        }
      </div>

      <div className='mt-12 flex flex-col gap-2'>
      <h4 className='font-bold'>Completed Orders</h4>
      <div className='flex flex-col gap-4'>
        {
          orders.map((order, index) => (
            order.completed ? (
            
               <ActiveOrderCard
                  key={order.id}
                  bookingID={order.bookingID}
                  items={order.items}
                  amount={order.amount}
              /> 
            )    
            :
           null
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Index