'use client'

import AddButton from '@/components/Buttons/AddButton';
import AddressSelectCard from '@/components/address/AddressSelectCard'
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

const Index = () => {

  const [selectedCard, setSelectedCard] = useState(null);

  // dummy json data
  const [address, setAddress] = useState([
    {
      address:"Shayam Kunj", 
      landmark:'Opp. Verma Jewellers...',
      value:false
    },

    {
      address:"Gurgaon Sector 18, Opp BlueSquare, Metro Station Lane...", 
      landmark:'Opp. Verma Jewellers...',
      value:false
    },

    {
      address:"Ranchi 18, Opp Guruduwara, Metro Station Lane...", 
      landmark:'Opp. Verma Jewellers...',
      value:false
    },
  ]);

// set json value for selected to true
  const handleValueClick = (index) => {
    const updateAddress = address.map((add, i) => {
      if(i === index){
        return {...add, value:true};
      } else {
        return {...add, value:false};
      }
    });

    setAddress(updateAddress);
  }

  console.log(address);



  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-4'>
      <div><h4 className='font-bold'>Select Address</h4></div>
      <Link href="/checkout">
      <div className='flex flex-col gap-4'>
        {
          address.map((a,index) => (
            <AddressSelectCard
             key={index}
             onClick={()=>handleValueClick(index)}
             selected={a.value}
             address={a.address} 
             landmark={a.landmark}
             />  
          ))
        }
      </div>
      </Link>
      <AddButton title="+ Add new address"/>
    </div>
  )
}

export default Index