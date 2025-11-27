"use client"
import React from 'react'
import Styles from '../Modal/Modal.module.css'
import {  IconX } from "@tabler/icons-react";
const Modal = ({close,children}) => {
  return (
    <div>
       <div className="fixed w-full h-full left-0 top-0 bg-black/60 z-[9998] flex justify-center items-center">
      <div  className={`bg-white px-6 py-6 relative rounded-[10px] ${Styles.modal}`}>
        {children}
      <IconX onClick={close} className="text-gray-700 cursor-pointer absolute right-2 top-2"/> 
      </div>
      </div>
    </div>
  )
}

export default Modal
