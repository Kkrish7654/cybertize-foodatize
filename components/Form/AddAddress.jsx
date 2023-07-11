"use client"

import React, { useEffect, useState } from "react";
import ButtonSuccess from "../Buttons/ButtonSuccess";
import axios from "axios";
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'


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
  

  //// Form Validation start ////
  const initialValues = {
    fullAddress:'',
    pincode:'',
    personName:'',
    phone:''
  }

  const validationSchema = Yup.object().shape({
    fullAddress: Yup.string().required('Full Address is required'),
    pincode: Yup.string()
      .matches(/^\d{6}$/, 'Pincode must be exactly 6 digits')
      .required('Pincode is required'),
    personName: Yup.string().required('Person name is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
  });


  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    // Simulate an async operation (e.g., API request)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitting(false);
    router.push('/address-select'); // Navigate to the next page
  };
  //// end ////

  return (
    <div className="p-[18px] py-[28px] flex flex-col gap-4">
      <h4 className="font-bold">Add new address</h4>

      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
          {({ handleSubmit, isSubmitting, isValidating }) => (

      <form className="w-full max-w-lg " onSubmit={handleSubmit}>
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
            Enter full address
          </label>
          <ErrorMessage className='text-sm text-red-600' name="fullAddress" component="div" />
          <Field
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2 py-5"
            id="full-address"
            name="fullAddress"
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
        <ErrorMessage className='text-sm text-red-600' name="pincode" component="div" />
          <Field
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
            htmlFor="personName"
          >
            Recieving Person’s Name
          </label>
        <ErrorMessage className='text-sm text-red-600' name="personName" component="div" />
          <Field
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2"
            id="personName"
            name="personName"
            type="text"
            //onChange={(e) => setFormData((prevData) => ({ ...prevData, name: e.target.value }))}
          />
        </div>

        <div>
          <label
            className="block tracking-wide text-[#848484] text-xs font-bold mb-2"
            htmlFor="person-mobile"
          >
            Recieving Person’s Mobile Number
          </label>
        <ErrorMessage className='text-sm text-red-600' name="phone" component="div" />
          <Field
            className="appearance-none block w-full mb-4 bg-white rouded-md p-2"
            id="person-mobile"
            name="phone"
            type="number"
            //onChange={(e) => setFormData((prevData) => ({ ...prevData, phone: e.target.value }))}
          />
        </div>

        <button
            type="submit"
            disabled={isSubmitting || isValidating}
            className={`w-full h-[40px] text-white text-[20px] bg-[#23AF00] mt-2`}
  
          >
            {isSubmitting ? 'Loading...' : 'Signup'}
          </button>
      </form>
          )}
      </Formik>
    </div>
  );
};

export default AddAddress;
