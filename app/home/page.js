import React from 'react'
import HomeScreen from '@/components/HomeScreen/HomeScreen'
import Footer from '@/components/Footer/Footer'
import axios from 'axios'




const Index = ({data}) => {

console.log(data);
  return (
    <div className='min-h-screen relative '>
        <HomeScreen/>
        <Footer/>
    </div>
  )
}

export const GetServerSideProps = async () => {
  const response = await axios({
    method:"GET",
    url:"/foodDeliveryProject/public/api/product",
    body:{}
  })

  console.log(response);

  const data = await response.data.data
  console.log(data[1]);
  return {
    props:{data:[]}
  }
}

export default Index



