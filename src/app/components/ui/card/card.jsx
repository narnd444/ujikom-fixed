import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <img className="w-full h-40 object-cover rounded-t-lg" src={image} alt={title} />
      <div className="p-4">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;
