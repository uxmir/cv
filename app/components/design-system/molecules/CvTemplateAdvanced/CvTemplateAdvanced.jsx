import React from "react";
import man from "../../../../assets/images/man_1.png";
import Image from "next/image";
const CvTemplateAdvanced = ({ pdf, formData }) => {
  return (
    <>
      <div
        ref={pdf}
        className="w-full h-[1100px] overflow-hidden bg-[#ffffff] border border-[#d3d3d3]"
      >
        <div className="px-6 py-6 bg-[#E9F5F8]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-5">
                <div className="min-w-[58px] min-h-[58px] rounded-full ">
                  <Image
                    src={man}
                    width={58}
                    height={58}
                    alt="images"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className=" text-lg sm:text-2xl font-semibold">
                    {formData.name}
                  </span>
                  <span className="text-[#3581f3]">
                    {" "}
                    {formData.professonal_name}
                  </span>
                </div>
              </div>
              <span className="max-w-[413px] text-xs sm:text-base ">
                {formData.career_description}
              </span>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-[#3581f3]">
                  email
                </span>
                <span className="text-lg font-semibold ">{formData.gmail}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-[#3581f3]">
                  PhoneNumber
                </span>
                <span className="text-lg font-semibold ">
                  +88{formData.number}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-[#3581f3]">
                  Location
                </span>
                <span className="text-lg font-semibold ">
                  {formData.location}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center w-full mt-6 px-4">
          <div className="flex flex-col capitalize text-base font-nolmal text-[#5a5a5a]">
            <span className="text-lg font-semibold text-[#3581f3] ">
              Education
            </span>
            <span className="text-lg font-medium">
              InstituteName:{" "}
              <span className="pl-4 capitalize">{formData.institute_name}</span>
            </span>
            <span className="font-medium">
              PassingYear: <span className="pl-4">{formData.passing_year}</span>
            </span>
            <span className="font-medium">
              Degree: <span className="pl-4 capitalize">{formData.degree}</span>
            </span>
          </div>
          <div className="flex flex-col capitalize text-base font-nolmal text-[#5a5a5a]">
            <span className="text-lg font-semibold text-[#3581f3] ">
              Training
            </span>
            <span className="text-lg font-medium">
              InstituteName:{" "}
              <span className="pl-4 capitalize">
                {" "}
                {formData.traning_institute_name}
              </span>
            </span>
            <span className="font-medium">
              PassingYear:{" "}
              <span className="pl-4">{formData.training_passing_year}</span>
            </span>
            <span className="font-medium">
              Training duration:{" "}
              <span className="pl-4 capitalize">
                {formData.training_duration} Month
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-5 items-center w-full mt-6 px-4">
          <div className="flex flex-col capitalize text-base font-nolmal text-[#5a5a5a]">
            <span className="text-lg font-semibold text-[#3581f3] ">
              Skill & Experience
            </span>
            <span className="text-lg font-medium">
              CompanyName:{" "}
              <span className="pl-4 capitalize">{formData.company_name}</span>
            </span>
            <span className="font-medium">
              Designation:{" "}
              <span className="pl-4">{formData.experience_year}</span>
            </span>
            <span className="font-medium">
              experience's Year:{" "}
              <span className="pl-4 capitalize">1 years</span>
            </span>
          </div>
          <div className="flex flex-col capitalize text-base font-nolmal text-[#5a5a5a]">
            <span className="text-lg font-semibold text-[#3581f3] ">
              Projects
            </span>
            <span className="text-lg font-medium">
              ProjectName:{" "}
              <span className="pl-4 capitalize">{formData.best_project}</span>
            </span>
            <span className="font-medium">
              projectUrl:{" "}
              <a href={formData.project_url} className="pl-4">
                {formData.project_url}
              </a>
            </span>
          </div>
        </div>
        <div className="px-4 mt-6 flex flex-col gap-y-2">
          <span className="text-[#3581f3] text-lg font-semibold">
            ProjectDescreption
          </span>
          <span className="text-base text-[#353535]">
            {formData.project_description}
          </span>
        </div>
      </div>
    </>
  );
}
export default CvTemplateAdvanced;
