import React from "react";
const Input = ({ label, inputType, placeHolder, inputName, inputValue,onChange,onBlur,errors,touched}) => {
const showError= errors && touched
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <label className="text-lg text-gray-700 font-medium capitalize">
          {label}
        </label>
        <input
          type={inputType}
          name={inputName}
          value={inputValue ||""}
          placeholder={placeHolder}
          onChange={onChange}
          onBlur={onBlur}
          className={`text-gray-500 placeholder:text-500 border capitalize  rounded-xl py-3 px-4 outline-none focus:outline-none  ${showError ?'border-red-600':'border-gray-200  focus:border-amber-400'}`}
        />
        
      </div>
    </>
  );
};

export default Input;
