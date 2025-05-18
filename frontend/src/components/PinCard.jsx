import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="relative group">
        <img
          src={pin.image.url}
          alt="pin"
          className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            to={`/pin/${pin._id}`}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            View Pin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
