"use client";

import { useState } from "react"; // Adjust the path as necessary
import Cart from "@/components/Cart";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    orderType: "pickup",
    deliveryAddress: {
      streetAddress: "",
      streetAddressLine2: "",
      city: "",
      state: "",
      postalCode: "",
    },
    email: "",
  });
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("deliveryAddress.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        deliveryAddress: {
          ...prevData.deliveryAddress,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // const addToCart = (foodItem) => {
  //   setCartItems([...cartItems, foodItem]);
  // };

  // const removeFromCart = (index) => {
  //   setCartItems(cartItems.filter((_, i) => i !== index));
  // };

  return (
    <>
      {/* <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
      <div className="OrderMain">
        <form
          onSubmit={handleSubmit}
          className="formbg w-[600px] lg:w-[800px] text-[16px] text-white"
          method="post"
        >
          <div className="flex flex-col lg:flex-row justify-center items-center mt-0">
            <div className="title text-center">
              <h1 className="text-4xl">You Can Order Now</h1>
              <p className="text-2xl">Delight & Joy</p>
            </div>
            <img
              src="https://files.jotform.com/jufs/ugurg/form_files/Order-Food.63889d6e35b188.28207191.png?md5=n0Ho7_O19OHV50SMrOKgvA&expires=1722541748"
              alt="Order Food"
              style={{ width: "339px", margin: "2rem", float: "right" }}
            />
          </div>
          <hr />

          <div className="inputs">
            <div className="form-group mb-4">
              <label htmlFor="firstName" className="block mb-2">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="lastName" className="block mb-2">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="phoneNumber" className="block mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>

            <div className="form-group mb-4">
              <label className="block mb-2">
                Do you want to pick up your order?
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="orderType"
                  value="pickup"
                  checked={formData.orderType === "pickup"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="pickup" className="mr-4">
                  Yes
                </label>
                <input
                  type="radio"
                  id="delivery"
                  name="orderType"
                  value="delivery"
                  checked={formData.orderType === "delivery"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="delivery">No, I request for a delivery</label>
              </div>
            </div>

            {formData.orderType === "delivery" && (
              <>
                <div className="form-group mb-4">
                  <label htmlFor="streetAddress" className="block mb-2">
                    Street Address:
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="deliveryAddress.streetAddress"
                    value={formData.deliveryAddress.streetAddress}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="streetAddressLine2" className="block mb-2">
                    Street Address Line 2:
                  </label>
                  <input
                    type="text"
                    id="streetAddressLine2"
                    name="deliveryAddress.streetAddressLine2"
                    value={formData.deliveryAddress.streetAddressLine2}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="city" className="block mb-2">
                    City:
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="deliveryAddress.city"
                    value={formData.deliveryAddress.city}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="state" className="block mb-2">
                    State:
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="deliveryAddress.state"
                    value={formData.deliveryAddress.state}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="postalCode" className="block mb-2">
                    Postal Code:
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="deliveryAddress.postalCode"
                    value={formData.deliveryAddress.postalCode}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                  />
                </div>
              </>
            )}

            <div className="form-group mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
