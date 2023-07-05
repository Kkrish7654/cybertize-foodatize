import React from 'react'

const FoodDetails = ({item_name, item_description}) => {
  return (
    <div className='relative rounded-t-2xl h-screen'>
      <div>
        <h4>{item_name}</h4>
        <p>{item_description}</p>
      </div>

      <button className='absolute'>
        <img src="x-mark.png" alt="back" />
      </button>
    </div>
  )
}

export default FoodDetails