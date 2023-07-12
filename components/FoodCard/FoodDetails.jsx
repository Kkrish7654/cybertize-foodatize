import React from 'react'

const FoodDetails = ({item_name, item_description, isOpen, setIsOpen}) => {


  // click view details to open this page on homesceen
  const handleOnClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div style={{boxShadow:'0 9999px 0 999999px #0005'}} className={`fixed top-1/2 rounded-t-2xl w-full h-screen z-20 -m-5 bg-white ${isOpen ? 'block' : 'hidden'}`}>
      <div className='flex flex-col gap-2 p-4 w-[90%]'>
        <h4 className='text-lg font-semibold'>Chicken Chilli - Boneless</h4>
        <p>One plate Chicken Chilli Boneless with 12 pcs of chicken hot fried. Frshly brewed and Serverd</p>
      </div>

      <button className='absolute right-2 top-2'>
        <img src="./image/x-mark.png" alt="back" onClick={handleOnClick}/>
      </button>
    </div>
  )
}

export default FoodDetails 