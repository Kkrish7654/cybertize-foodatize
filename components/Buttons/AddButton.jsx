import Link from 'next/link'
import React from 'react'

const AddButton = ({title}) => {
  return (
    <Link href="/address-page">
      <button className={`w-full h-[50px] text-[#666666] text-[16px] bg-white rounded-lg`}>
        {title}
      </button>
    </Link>
  )
}

export default AddButton