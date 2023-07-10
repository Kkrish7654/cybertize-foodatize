"use client"

import React, { useEffect, useState } from "react";
import ButtonSuccess from "../Buttons/ButtonSuccess";
import axios from "axios";

const AddAddress = () => {
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [pincode, setPincode] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    latitude: "",
    longitude: "",
    address: "",
    pincode: "",
  });

  // this useEffect function finds user location longitude and latitude
  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log("Error getting user location:", error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, []);
  // end //

  // fetching user location using longitude and latitude
  useEffect(() => {
    const getPlaceDetails = async () => {
      if (latitude && longitude) {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          const place = response.data;
          setPlaceName(place.display_name);
          setPincode(place.address.postcode);

          // getting the value of address, pincode, longitude, latitude
          setFormData((prevData) => ({
            ...prevData,
            address: place.display_name,
            pincode: place.address.postcode,
            longitude: longitude,
            latitude: latitude,
          }));

          // end //
        } catch (error) {
          console.log("Error getting place details:", error);
        }
      }
    };

    getPlaceDetails();
  }, [latitude, longitude]);

  // end //

  // form submisson start //
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(formData, ":", jsonData);
  };

  // end //

  console.log(longitude, " ", latitude);
  return (
    <div className="p-[18px] py-[28px] flex flex-col gap-4">
      <h4 className="font-bold">Add new address</h4>

      <form className="w-full max-w-lg " onSubmit={handleFormSubmit}>
        <div className="flex -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
              htmlFor="longitude"
            >
              Longitude
            </label>
            <input
              className="appearance-none block w-full bg-white rouded-md p-2"
              id="longitude"
              value={longitude}
              name="longitude"
              type="text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
              htmlFor="latitude"
            >
              Latitude
            </label>
            <input
              className="appearance-none block w-full bg-white rounded-md p-2"
              id="latitude"
              value={latitude}
              name="latitude"
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
            htmlFor="full-address"
          >
            Ennter full address
          </label>
          <input
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2 py-5"
            id="full-address"
            name="full-address"
            value={placeName}
            type="text"
          />
        </div>

        <div>
          <label
            className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
            htmlFor="pincode"
          >
            Pincode
          </label>
          <input
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2"
            id="pincode"
            name="pincode"
            value={pincode}
            type="number"
          />
        </div>

        <div>
          <label
            className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
            htmlFor="person-name"
          >
            Recieving Person’s Name
          </label>
          <input
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2"
            id="person-name"
            name="person-name"
            type="text"
            onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
          />
        </div>

        <div>
          <label
            className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
            htmlFor="person-mobile"
          >
            Recieving Person’s Mobile Number
          </label>
          <input
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2"
            id="person-mobile"
            name="person-mobile"
            type="number"
            onChange={(e) => setFormData((prevData) => ({ ...prevData, phone: e.target.value }))}
          />
        </div>

        <ButtonSuccess text="Save address" customStyle="h-[50px]" />
      </form>
    </div>
  );
};

export default AddAddress;
