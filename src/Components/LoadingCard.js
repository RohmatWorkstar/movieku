import React from "react";

const LoadingCard = () => {
  return (
    <div className="bg-[#050E12] rounded-md p-4 shadow-md">
      <div className="animate-pulse">
        <div className="bg-gray-700 h-40 w-full mb-2 rounded-md"></div>
        <div className="bg-gray-700 h-6 w-3/4 mb-2 rounded-md"></div>
        <div className="bg-gray-700 h-4 w-1/2 mb-2 rounded-md"></div>
        <div className="bg-gray-700 h-4 w-2/3 mb-2 rounded-md"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
