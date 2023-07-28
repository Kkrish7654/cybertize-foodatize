
import React from "react";
import HomeScreen from "@/components/HomeScreen/HomeScreen";
import Footer from "@/components/Footer/Footer";
import axios from "axios";

async function getData() {
  try {
    const response = await axios.get("https://cms.cybertize.in/foodDeliveryProject/public/api/product")
    return response.data.data
  } catch (err) {
    console.error(err);
    return []
  }
}

const Index = async () => {
  const data = await getData()
  console.log(data)
  return (
    <div className="min-h-screen relative ">
      <HomeScreen data={data}/>
      <Footer />
    </div>
  );
};

export default Index;
