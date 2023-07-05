import React from 'react'

const PayCard = ({title, text}) => {
  return (
    <div className='w-full p-4 flex items-center justify-between '>
      <div>
        <h4 className=''>{title}</h4>
        <p>{text}</p>
      </div>

      <div>
        <img src="back.png" alt="back" />
      </div>
    </div>
  )
}

export default PayCard