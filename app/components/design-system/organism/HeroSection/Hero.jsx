"use client";
import React from "react";
import Image from "next/image";
import Container from "../../Container/Container";
import man_1 from "../../../../assets/images/man_1.png";
import man_2 from "../../../../assets/images/man_2.png";
import man_3 from "../../../../assets/images/man_3.png";
import man_4 from "../../../../assets/images/man_4.png";
import man_5 from "../../../../assets/images/man_5.png";
import { IconStarFilled } from "@tabler/icons-react";
import Button from "../../atoms/CvButton/Button";
import Link from "next/link";
const Hero = () => {
  const manImages = [
    { id: 1, image: man_1 },
    { id: 2, image: man_2 },
    { id: 3, image: man_3 },
    { id: 4, image: man_4 },
    { id: 5, image: man_5 },
  ];
  const totalStar = 5;
  return (
    <>
      <Container>
        <div className="max-w-[800px] relative mx-auto flex flex-col justify-center items-center ">
          <span className=" mt-15  sm:mt-20 text-3xl sm:text-5xl text-center  text-gray-700 sm:leading-16 font-bold capitalize ">
            Create your job with
            <span className="gradient-text capitalize ml-1">Ai-powered</span> cv
            maker
          </span>
          {/*==== imagesection ===*/}
          <div className="mt-5 flex flex-col gap-y-4 sm:flex-row items-center">
            <div className="flex">
              {manImages.map((image, id) => (
                <Image
                  key={id}
                  src={image.image}
                  alt="man"
                  width={30}
                  height={30}
                  className="cursor-pointer hover:-translate-y-1 transition-transform duration-75 "
                />
              ))}
            </div>

            {/*=====leftImages=====*/}
            <div className="flex flex-col ml-2 items-center sm:items-start">
              <span className=" text-lg gradient-text font-medium">
                Trusted By 1000+ User's
              </span>
              <div className="flex items-center">
                {[...Array(totalStar)].map((_, id) => (
                  <IconStarFilled
                    key={id}
                    size={16}
                    className="text-purple-600"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex max-[370px]:flex-col gap-y-4 items-center gap-4">
            <Link href={"/cv"}>
              <Button
                cvButton={true}
                cvButtonBgColor={"bg-linear-to-br from-blue-600 to-purple-600"}
              >
                Make A CV
              </Button>
            </Link>
            <div className="px-6 py-2 rounded-xl border border-purple-600 cursor-pointer lg:text-lg text-md text-center font-medium">
              <Link href={"/cv"}>Browse Template's</Link>
            </div>
          </div>
        </div>
        <div className="  w-50 h-50 sm:w-70 sm:h-70 lg:w-100 lg:h-100  rounded-full blur-[150px]  sm:blur-[200px] lg:blur-[300px] bg-gradient z-[-1] absolute top-50  left-20 sm:left-100 bottom-0"></div>
      </Container>
    </>
  );
};

export default Hero;
