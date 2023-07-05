import React from 'react'
import FoodCard from '../FoodCard/FoodCard'
import SearchBox from '../SearchBox/SearchBox';
import Footer from '../Footer/Footer';

const HomeScreen = () => {
  
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
    {item_name: 'Chicken Chilli - Boneless',
      item_price : 210,
      item_quantity:12,
      item_details:'One plate Chicken Chilli Boneless with 12 pcs of chicken hot fried. Frshly brewed and Serverd' 
    },
  ]
  return (
    <>
    <div className='p-[18px] py-2 flex flex-col gap-4 relaive'>
      <SearchBox/>

      <div className='flex flex-col gap-2'>
      {
        itemData.map((item) => (
          <FoodCard item_name={item.item_name} item_price={item.item_price} item_quantity={item.item_quantity}/>
        ))
      }
      </div>
    </div>

    <div>
      
    </div>
     <Footer/>
     </>
     
  )
}

export default HomeScreen;