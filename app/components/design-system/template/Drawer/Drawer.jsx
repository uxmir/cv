import { IconX } from "@tabler/icons-react";
import React from "react";

 const Drawer = ({ drawerContainer,children,close }) => {
  return (
    <>
      <div
        className={`w-full h-full px-5  bg-black/80  fixed top-0 right-0 z-50 transition-all duration-500 ${
          drawerContainer === true ? "translate-x-[0%]" : "translate-x-[100%]"
        }`}
      >
        <IconX onClick={close} className="text-white absolute left-5 top-5"/>
        {children}
      </div>
    </>
  );
};
export default Drawer