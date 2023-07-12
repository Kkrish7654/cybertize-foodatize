'use client'

import React from 'react'
import FoodCard from '../FoodCard/FoodCard'
import SearchBox from '../SearchBox/SearchBox';
import Footer from '../Footer/Footer';
import FoodDetails from '../FoodCard/FoodDetails';
import { useState } from 'react';

const HomeScreen = () => {
    // show view details popup

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
      setIsOpen(!isOpen);
    }



  // dummy json data
  const itemData = [
    {item_name: 'Chicken Chilli - Boneless',
      item_price : 210,
      item_quantity:12,   
      item_details:'One plate Chicken Chilli Boneless with 12 pcs of chicken hot fried. Frshly brewed and Serverd' 
    },
    {item_name: 'Chicken Chilli - Boneless',
      item_price : 210,
      item_quantity:12,
      item_details:'One plate Chicken Chilli Boneless with 12 pcs of chicken hot fried. Frshly brewed and Serverd' 
    },
    {item_name: 'Chicken Chilli - Boneless',
      item_price : 210,
      item_quantity:12,
      item_details:'One plate Chicken Chilli Boneless with 12 pcs of chicken hot fried. Frshly brewed and Serverd' 
    },
    {
      item_name: 'Chicken Chilli - Boneless',
      item_price : 210,
      item_quantity:12,
      item_details:'One plate Chicken Chilli Boneless with 12 pcs of chicken hot fried. Frshly brewed and Serverd' 
    },
 
  ]
  //end//


  return (
    <>
    <div className={`h-auto relative overflow-hidden mb-32  ${isOpen ? 'bg-opacity-50' : ''}`}>
      <div className='p-[18px] py-2 flex flex-col gap-4 overflow-hidden'>
    
     {/* search box */}
      <SearchBox/>


      <div className='flex flex-col gap-2'>
        {/* render items here */}
      {
        itemData.map((item) => (
          <>
          <FoodCard onClick={handleOpen} item_name={item.item_name} item_price={item.item_price} item_quantity={item.item_quantity}/>
          <FoodDetails isOpen={isOpen} setIsOpen={setIsOpen}/>
          </>
          ))
      }
      </div>
    </div>
    <div>
    </div>
    {/* show this food details */}
    
    </div>
     </>
     
  )
}

export default HomeScreen;