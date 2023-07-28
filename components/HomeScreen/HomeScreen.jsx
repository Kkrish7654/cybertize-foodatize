"use client";

import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import SearchBox from "../SearchBox/SearchBox";
import FoodDetails from "../FoodCard/FoodDetails";
import { useState } from "react";
import RequireToken from "../hooks/RequireToken";
import axios from "axios";

const HomeScreen = ({ data }) => {
  // show view details popup

  const [isOpen, setIsOpen] = useState(false);
  const [foodDetails, setFoodDetails] = useState({ name: "", description: "" });

  // states for search api

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  console.log("new data ", data);

  console.log("search results", searchResults);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://cms.cybertize.in/foodDeliveryProject/public/api/product/search?name=${searchQuery}}`
      );
      setSearchResults(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOpen = (name, description) => {
    setIsOpen(!isOpen);
    setFoodDetails({ name, description });
  };

  console.log("details", foodDetails);

  return (
    <>
      <div
        className={`h-auto relative overflow-hidden mb-32  ${
          isOpen ? "bg-opacity-50" : ""
        }`}
      >
        <div className="p-[18px] py-2 flex flex-col gap-4 overflow-hidden">
          {/* search box */}
          <SearchBox value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
          />

          <div className="flex flex-col gap-2">
            {/* render items here */}
            {data.map((item) => (
              <div key={item.id}>
                <FoodCard
                  onClick={() => handleOpen(item.name, item.description)}
                  item_name={item.name}
                  item_price={item.price}
                  pieces={item.pieces}
                />
                <FoodDetails
                  name={foodDetails.name}
                  description={foodDetails.description}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              </div>
            ))}
          </div>
        </div>
        <div></div>
        {/* show this food details */}
      </div>
    </>
  );
};

export default RequireToken(HomeScreen);
