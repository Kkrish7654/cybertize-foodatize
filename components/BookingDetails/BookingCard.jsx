
const BookingCard = ({item_name, item_price, item_quantity}) => {

  return (
    <div className='w-full flex items-stretch bg-white relative rounded-xl shadow-lg shadow-[#ebebeb] overflow-auto'>
      <div className='p-2 w-[120px] h-[100px]'>
        <img className='w-full h-full object-contain' src="./image/food-item.png" alt="food-item" />
      </div>
      <div className='p-2 flex flex-col gap-2'>
        <div className='w-[90%]'>
          <h4 className='font-bold text-[18px] text-[#4D4D4D] truncate'>{item_name}</h4>
          <p className='text-sm font-bold text-[#2E2E2E]'>Rs.{item_price} / <span className='text-[#616161]'>{item_quantity} Pieces</span></p>
        </div>
      </div>
    </div>
  )
}

export default BookingCard;