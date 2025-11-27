"use client"
import React, { useRef } from "react";
import Image from "next/image";
import man_1 from '../../../../assets/images/man_1.png'
const CvTemplate = ({ formData,pdf }) => {
//  const pdf=useRef()   
  return (
    <>
      <div ref={pdf} className="max-w-[644px] flex  h-[1100px] overflow-hidden border border-[#d3d3d3] mx-auto">
        <div className="w-64 px-4 h-full bg-[#202020] text-[#ffffff] flex flex-col ">
          <div className="w-24 h-24 rounded-full bg-[#d3d3d3]  mt-5 self-center">
            <Image src={man_1} alt="image" className="object-cover" />
          </div>
          <p className=" text-xl font-medium mt-2">{formData.name}</p>
          <p className=" text-2xl font-medium mt-2">
            {formData.professonal_name}
          </p>
          <p className="text-sm ">location: {formData.location} </p>
          <p className="text-sm ">gmail: {formData.gmail} </p>
          <p className="text-sm ">number: {formData.number}</p>
          <p className="mt-5">{formData.career_description}</p>
        </div>
        <div className="w-[500px] px-5">
          <h1 className="text-md font-medium text-[#7c7b7b] mt-10">
            Career Objective:
          </h1>
          <p className="text-sm mt-2 text-[#7c7b7b] pb-4 border-b border-[#d3d3d3]">
            {formData.career_description}
          </p>
          {/*==educations===*/}
          <div className="text-sm mt-2 text-[#7c7b7b] pb-4 border-b border-[#d3d3d3] flex justify-between">
            <div className="max-w-[200px] ">
              <h1 className="text-md font-medium">Education</h1>
              <p>{formData.institute_name}</p>
              <p>{formData.degree}</p>
              <p>{formData.passing_year}</p>
            </div>
            <div className="max-w-[200px] ">
              <h1 className="text-md font-medium">Training</h1>
              <p>{formData.traning_institute_name}</p>
              <p>{formData.training_passing_year}</p>
              <p>{formData.training_duration} month</p>
            </div>
            <div></div>
          </div>
          {/*===skills===*/}
          <div className="text-sm mt-2 text-[#7c7b7b] pb-4 border-b border-[#d3d3d3] flex justify-between">
            <div className="max-w-[200px] ">
              <h1 className="text-md font-medium">Experience</h1>
              <p>{formData.designation_name} </p>
              <p>{formData.company_name}</p>
              <p>{formData.experience_year} years</p>
            </div>
            <div className="max-w-[200px] ">
              <h1 className="text-md font-medium">Project's</h1>
              <p>{formData.best_project}</p>
              <a href={formData.project_url}>{formData.project_url}</a>
            </div>
            <div></div>
          </div>
          {/*======project description===*/}
          <h1 className="text-md font-medium mt-5 text-[#7c7b7b]">
            Project description:
          </h1>
          <p className="text-sm mt-2 text-[#7c7b7b] pb-4 border-b border-[#d3d3d3]">
            {formData.project_description}
          </p>
        </div>
      </div>
    </>
  );
};

export default CvTemplate;
