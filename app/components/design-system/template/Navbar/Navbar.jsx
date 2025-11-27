"use client";
import React, { useContext, useEffect, useState } from "react";
import Container from "../../Container/Container";
import Link from "next/link";
import Drawer from "../Drawer/Drawer";
import Button from "../../atoms/CvButton/Button";
import AuthModal from "../AuthModal/AuthModal";
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { AuthContext } from "@/app/DataProvider/AuthProvider/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const showDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };
  const showAuthModal = () => {
    setModal(true);
  };
  const closeAuthModal = () => {
    setModal(false);
  };
  //logic for dashboard
  const handleLocation = () => {
    if (!user) {
      return null;
    }
    router.push("/dashboard");
  };
  const closeSignUpModal = () => {
    setModal(false);
  };
  //for detecting the location
  const pathName = usePathname();
  const cvPath = pathName === "/cv";
  const dashboardPath = pathName === "/dashboard";
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div className="w-full sticky top-0 border-b border-gray-200 bg-white z-50">
        <Container>
          <div className="flex justify-between  items-center w-full py-3 ">
            <Link href={"/"}>
              <div className="text-4xl font-bold border-2 bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent ">
                resume.
              </div>
            </Link>
            {/*=======Navcontent=====*/}
            <div className="sm:flex hidden items-center gap-x-6  text-md lg:text-lg text-gray-700 font-medium">
              <Link href={"/"}>
                <span
                  className={`${pathName === "/" ? "text-purple-600" : ""}`}
                >
                  Home
                </span>
              </Link>
              <span
                onClick={() => scrollToSection("facility")}
                className={`cursor-pointer ${
                  cvPath || dashboardPath ? "hidden" : "block"
                }`}
              >
                Facility
              </span>
              <span
                onClick={() => scrollToSection("testimonials")}
                className={`cursor-pointer ${
                  cvPath || dashboardPath ? "hidden" : "block"
                }`}
              >
                Testimonials
              </span>
              <span
                className={`${pathName === "/cv" ? "text-purple-600" : ""}`}
              >
                <Link href={"/cv"}>MyCv</Link>
              </span>
            </div>
            {/*======Button======*/}
            <div className="hidden sm:flex gap-x-3 ">
              {user ? (
                <div
                  onClick={handleLocation}
                  className="flex items-center gap-x-1 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full bg-purple-700 text-center flex justify-center items-center">
                    <span className="capitalize text-white">
                      {user.name.charAt(0) || "U"}
                    </span>
                  </div>
                  <p className="text-gray-800 font-medium capitalize">
                    {user.name}
                  </p>
                </div>
              ) : (
                <Button
                  cvButtonBgColor={
                    "bg-linear-to-br from-blue-600 to-purple-600"
                  }
                  cvButton={true}
                  btnEvent={showAuthModal}
                >
                  Login
                </Button>
              )}
            </div>
            <IconMenuDeep
              onClick={showDrawer}
              className="text-gray-700 block sm:hidden cursor-pointer"
            />
          </div>
        </Container>
      </div>
      {/*=====Drawer=====*/}
      <Drawer drawerContainer={drawer} close={closeDrawer}>
        <div className="flex flex-col text-center gap-y-1 mt-10 cursor-pointer">
          <div
            onClick={() => {
              handleLocation();
              closeDrawer();
            }}
            className="flex flex-col items-center mb-6"
          >
            <div className="w-10 h-10 rounded-full bg-purple-700 mt-5 text-center flex justify-center items-center">
              <span className="capitalize text-white">
                {user?.name.charAt(0) || "M"}
              </span>
            </div>
            <span className="text-white text-base mt-1 capitalize">
              {user?.name}
            </span>
          </div>
          <Link onClick={closeDrawer} href={"/"}>
            <div
              className={`py-3 pl-3 border-b border-gray-300 w-full text-md  ${
                pathName === "/" ? "text-purple-400" : "text-white"
              }`}
            >
              Home
            </div>
          </Link>

          <div
            onClick={() => {
              closeDrawer();
              scrollToSection("facility");
            }}
            className={`py-3 pl-3 border-b border-gray-300 w-full text-md text-white ${
              cvPath || dashboardPath ? "hidden" : "block"
            }`}
          >
            Facility
          </div>
          <div
            onClick={() => {
              closeDrawer();
              scrollToSection("testimonials");
            }}
            className={`py-3 pl-3 border-b border-gray-300 w-full text-md text-white ${
              cvPath || dashboardPath ? "hidden" : "block"
            }`}
          >
            Testimonials
          </div>
          <Link href={"/cv"}>
            <div
              onClick={closeDrawer}
              className={`py-3 pl-3 border-b border-gray-300 w-full text-md  ${
                pathName === "/cv" ? "text-purple-400" : "text-white"
              }`}
            >
              MyCv
            </div>
          </Link>
        </div>
      </Drawer>
      {/*========authModal=====*/}
      {modal && <AuthModal closeModal={closeAuthModal}></AuthModal>}
    </>
  );
};

export default Navbar;
