"use client";
import React from "react";
import { IconCheck } from "@tabler/icons-react";
const Step = ({ form, stepCategory, step, details, completedStep }) => {
  const isActive = form === stepCategory;
  const isCompleted = completedStep.includes(stepCategory);
  return (
    <>
      <div className="flex flex-col gap-y-2 items-center">
        <div
          className={` w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center ${
            isActive || isCompleted ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {isActive || isCompleted ? (
            <IconCheck size={32} className="text-white" />
          ) : (
            <span className=" text-lg md:text-2xl font-semibold text-white">
              {step}
            </span>
          )}
        </div>
        <span className="text-lg text-gray-700 capitalize">{details}</span>
      </div>
    </>
  );
};

export default Step;
