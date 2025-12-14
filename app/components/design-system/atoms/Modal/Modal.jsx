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



//we have to add this css in  index.css file or similar page like this
.modal {
  animation: scaleUp 0.50s ease-in-out;
}

@keyframes scaleUp {
  0% {
    transform: scale(0.7);
    opacity: 0;
  }
  70% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

//usages 
const [modal, setModal] = useState(false);

<button
  type="button"
  onClick={() => setModal(true)}
  className="px-3 py-3 bg-black text-white rounded-lg"
>
  Open Modal
</button>

{modal && (
  <Modal closeModal={() => setModal(false)}>
    mirmonir
  </Modal>
)}
