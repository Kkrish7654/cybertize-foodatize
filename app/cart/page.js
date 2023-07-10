import FoodCart from "@/components/Cart/FoodCart"
import Footer from "@/components/Footer/Footer"
import FooterAddres from "@/components/Footer/FooterAddress"

const Index = () => {
  return (
    <div className='min-h-screen relative'>
        <FoodCart/>
        <FooterAddres/>
    </div>
  )
}

export default Index