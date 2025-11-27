import React from 'react'

const Textaria = ({label,  placeholder, textName, textValue,onChange,onBlur,errors,touched}) => {
  const showError=errors&&touched
    return (
  <>
  <div className='flex flex-col gap-y-2'>
      <label className='text-lg text-gray-700 font-medium capitalize'>{label}</label>
    <textarea  
  placeholder={placeholder}
  name={textName}
  value={textValue}
  onChange={onChange}
  onBlur={onBlur}
  className={`w-full text-gray-500 placeholder:text-500 border capitalize  rounded-xl pt-1 pb-10 px-4 outline-none focus:outline-none  ${showError?'border-red-500':'border-gray-200 focus:border-amber-400'}`}
  >
  
  </textarea>
  </div>
  </>
  )
}

export default Textaria