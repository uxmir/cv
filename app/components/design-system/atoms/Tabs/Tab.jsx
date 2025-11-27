"use client"
import React from "react";
const Tab = ({ tabValue, activeItem, tabEvent,item }) => {
  return (
    <>
      <div
        onClick={tabEvent}
        className="flex flex-col gap-y-2 group cursor-pointer"
      >
        <span
          className={`px-7 group-hover:text-blue-600 text-lg  capitalize ${
            activeItem===item ? "text-blue-600" : "text-gray-700"
          }`}
        >
          {tabValue}
        </span>
        <span className={` group-hover:w-full transition-all duration-300 h-[2px]  group-hover:bg-blue-600 ${activeItem===item?'bg-blue-600 w-full':'bg-gray-700 w-0'}`}></span>
      </div>
    </>
  );
};

export default Tab;
