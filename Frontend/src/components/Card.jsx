import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, description, buttonText }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-80 max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <img
          src={img} // Placeholder image URL, replace with your own image URL
          alt="Card Image"
          className="w-full h-48 object-cover"
        />

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          {/* Action Button */}
          <button className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Link to={"/TokenForm"}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
