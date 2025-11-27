import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-20 h-20 relative">
        <div className="absolute inset-0 w-full h-full border-8 border-t-blue-600 border-l-transparent border-b-transparent border-r-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-full h-full bg-blue-400/20 rounded-full"></div>
        <div className="absolute inset-2 bg-white  rounded-full"></div>
      </div>
    </div>
  );
};

export default Spinner;
