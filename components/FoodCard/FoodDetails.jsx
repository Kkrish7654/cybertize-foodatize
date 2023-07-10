import React from 'react'

const FoodDetails = ({item_name, item_description}) => {


  // click view details to open this page on homesceen

  return (
    <div className='absolute top-1/2 rounded-t-2xl w-full h-screen z-20 shadow-t-lg bg-white'>
      <div>
        <h4>{item_name}</h4>
        <p>{item_description}</p>
      </div>

      <button className='absolute'>
        <img src="./image/x-mark.png" alt="back" />
      </button>
    </div>
  )
}

export default FoodDetails