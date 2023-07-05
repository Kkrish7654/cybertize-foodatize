import React from 'react'
import ButtonSuccess from '../Buttons/ButtonSuccess'

const AddAddress = () => {
  return (
    <div className='p-[18px] py-[28px] flex flex-col gap-4'>
    <h4 className='font-bold'>Add new address</h4>
   
    <form className="w-full max-w-lg ">
    <div className="flex -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block tracking-wide text-[#848484] text-xs font-bold mb-2" for="longitude">
        Longitude
      </label>
      <input className="appearance-none block w-full bg-white rouded-md p-2" id="longitude" type="text"/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block tracking-wide text-[#848484] text-xs font-bold mb-2" for="latitude">
        Latitude
      </label>
      <input className="appearance-none block w-full bg-white rounded-md p-2" id="latitude" type="text" />
    </div>
  </div>

  <div>
    <label className="block tracking-wide text-[#848484] text-xs font-bold mb-2" for="full-address">
        Ennter full address
    </label>
    <input className="appearance-none block w-full mb-4 bg-white rouded-md p-2 py-5" id="full-address" type="text"/>
  
  </div>

  <div>
    <label className="block tracking-wide text-[#848484] text-xs font-bold mb-2" for="pincode">
        Pincode
    </label>
    <input className="appearance-none block w-full mb-4 bg-white rouded-md p-2" id="pincode" type="number"/>
  
  </div>

  <div>
    <label className="block tracking-wide text-[#848484] text-xs font-bold mb-2" for="person-name">
      Recieving Person’s Name
    </label>
    <input className="appearance-none block w-full mb-4 bg-white rouded-md p-2" id="person-name" type="number"/>
  </div>

  <div>
    <label className="block tracking-wide text-[#848484] text-xs font-bold mb-2" for="person-mobile">
      Recieving Person’s Mobile Number
    </label>
    <input className="appearance-none block w-full mb-4 bg-white rouded-md p-2" id="person-mobile" type="number"/>
  </div>

    <ButtonSuccess text="Save address" customStyle="h-[50px]"/>
  </form>
  </div>
  )
}

export default AddAddress