"use client";
import React from "react";
import Container from "../../Container/Container";
import facility_image from "../../../../assets/images/group-image-1.png";
import Heading from "../../atoms/HeadingComponent/Heading";
import { IconBook } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
const Facility = () => {
  //facilitydata
  const facilityData = [
    {
      id: 1,
      title: "Real-Time Analytics",
      text: "Get instant insights into your finances with live dashboards.",
    },
    {
      id: 2,
      title: "Bank-Grade Security",
      text: "End-to-end encryption, 2FA, compliance with GDPR standards.",
    },
    {
      id: 3,
      title: "Customizable Reports",
      text: "Export professional, audit-ready financial reports for tax or internal review.",
    },
  ];
  const [state, setState] = useState(1);
  const colors = {
    1: "bg-green-200",
    2: "bg-blue-200",
    3: "bg-purple-200",
  };
  const changeState = (id) => {
    setState(id);
  };
  return (
    <>
      <Container>
        <div id="facility" className="py-20 sm:py-30">
          <Heading
            icon={IconBook}
            childHeading={true}
            heading={"Build your resume"}
            subHeading={"Simple Process"}
          />
          <p className=" max-w-[800px]  mt-3 mx-auto text-center text-lg text-gray-600">
            Our streamlined process helps you create a professional resume in
            minutes with intelligent AI-powered tools and features.
          </p>
          {/*======content======*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 mt-12 max-w-[900px] mx-auto">
            <div className="w-full">
              <Image src={facility_image} alt={"image"} />
            </div>
            <div className="w-full flex flex-col gap-y-6">
              {facilityData.map((data, id) => (
                <div onClick={() => changeState(data.id)} key={id}>
                  <div
                    className={`px-5 py-5 rounded-xl flex flex-col  cursor-pointer border  
                  ${
                    state === data.id
                      ? `${colors[data.id]} border-transparent`
                      : "border-purple-500"
                  }`}
                  >
                    <span className="text-lg font-semibold text-gray-700">
                      {data.title}
                    </span>
                    <span className="text-sm  text-gray-500 max-w-[300px]">
                      {data.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Facility;
