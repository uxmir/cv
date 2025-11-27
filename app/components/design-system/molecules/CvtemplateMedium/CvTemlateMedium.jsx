import React from "react";
import Image from "next/image";
import man_1 from "../../../../assets/images/man_1.png";
const CvtemplateMedium = ({ formData, pdf }) => {
  return (
    <>
      <div
        ref={pdf}
        className="px-4 py-4 border border-[#d3d3d3] w-full h-[1200px] overflow-hidden"
      >
        <div className="flex justify-center items-center  flex-col capitalize">
          <div className="w-24 h-24 rounded-full bg-[#d3d3d3]   mt-5 self-center">
            <Image src={man_1} alt="image" className="object-cover" />
          </div>
          {/*====names===== */}
          <p className="  text-4xl text-[#222222]  font-medium mt-4">
            {formData.name}
          </p>
          <p className=" text-xl text-[#7c7b7b] font-medium mt-2">
            {formData.professonal_name}
          </p>
        </div>
        <div className="text-md pb-4 border-b w-full border-[#d3d3d3] mt-4">
          <div className="flex justify-between w-[500px] mx-auto items-center ">
            <div className="flex gap-1 items-center text-[#7c7b7b]">
              <span className="text-[#222222]">Location:</span>{" "}
              <span>{formData.location}</span>
            </div>
            <div className="flex gap-1 items-center text-[#7c7b7b]">
              <span className="text-[#222222]">Gmail:</span>{" "}
              <span>{formData.gmail}</span>
            </div>
          </div>
          <div className="flex gap-1 justify-center mt-1 items-center text-[#7c7b7b]">
            <span className="text-[#222222]">PhoneNumber:</span>{" "}
            <span>{formData.number}</span>
          </div>
        </div>
        <div className="text-md py-4  border-b border-[#d3d3d3]">
          <p className="text-xl text-[#222222] pb-2 font-medium">
            CareerObjective:
          </p>
          <span className="text-md  text-[#7c7b7b]">
            {formData.career_description}
          </span>
        </div>
        {/*====education==== */}
        <div className="text-md py-4  border-b border-[#d3d3d3]">
          <p className="text-xl text-[#222222] pb-2 font-medium">Education:</p>
          <div className="flex justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium">InstituteName</span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.institute_name}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              passing year
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.passing_year}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              degree
            </span>
            <span className="text-[#7c7d7d] capitalize">{formData.degree}</span>
          </div>
        </div>
        {/*======training */}
        <div className="text-md py-4  border-b border-[#d3d3d3]">
          <p className="text-xl text-[#222222] pb-2 font-medium">Training:</p>
          <div className="flex justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium">InstituteName</span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.traning_institute_name}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              complete year
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.training_passing_year}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              duration
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.training_duration} Month
            </span>
          </div>
        </div>
        {/*=====skills==== */}
        <div className="text-md py-4  border-b border-[#d3d3d3]">
          <p className="text-xl text-[#222222] pb-2 font-medium">
            Skill & Experience's:
          </p>
          <div className="flex justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              companyName
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.company_name}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              designation
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.designation_name}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              experience's year
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.experience_year} year's
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              best project
            </span>
            <span className="text-[#7c7d7d] capitalize">
              {formData.best_project}
            </span>
          </div>
          <div className="flex mt-2 justify-between w-full itesm-center text-md">
            <span className="text-[#222222]  font-medium capitalize">
              project links
            </span>
            <a
              className="text-[#7c7d7d] capitalize"
              href={formData.project_url}
            >
              {formData.project_url}
            </a>
          </div>
        </div>

        <p className="text-xl text-[#222222] pt-4 pb-2 font-medium  border-b border-[#d3d3d3]">
          Project Description:
        </p>
        <div className="text-md py-4  text-[#7c7b7b]">
          {formData.project_description}
        </div>
      </div>
    </>
  );
};

export default CvtemplateMedium;
