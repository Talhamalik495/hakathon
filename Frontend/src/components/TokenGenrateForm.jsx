import React, { useState } from "react";
import axios from "axios";
import ReactQR from "react-qr-code";
import routers from "../../constant/constant.js";
const Form = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  let [qrcode, setQrcode] = useState("");
  let [tokenNumber, setTokenNumber] = useState("");
  console.log("qrcode: " + qrcode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let obj = {
        name: name,
        cnic: cnic,
        contact: contact,
        description: description,
      };
      let response = await axios.post(routers.genrateToken, obj);
      console.log("response=>", response);
      setQrcode(response?.data?.newLoan?.token);
      setTokenNumber(response?.data?.tokenNumber);
    } catch (error) {
      console.log("error.response.data.message", error.response.data.message);
      alert(error.response.data.message);
    }
    // You can handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-14">
      {qrcode ? (
        <div className="pt-10 flex justify-center flex-col gap-8 items-center">
          <h1 className="text-2xl">{name}</h1>
          <h1 className="text-2xl">{tokenNumber}</h1>
          <ReactQR value={qrcode} />
          <p className="text-lg">{description}</p>
        </div>
      ) : (
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
            Loan Applay Form{" "}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* CNIC Input */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="cnic"
                className="block text-sm font-medium text-gray-600"
              >
                CNIC
              </label>
              <input
                type="text"
                id="cnic"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your CNIC"
                required
              />
            </div>

            {/* Contact Number Input */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-600"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your contact number"
                required
              />
            </div>

            {/* Description Input */}
            <div className="flex flex-col gap-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter a description"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
