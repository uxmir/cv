"use client";
import React, { useState } from "react";
import InformationForm from "../InformationForm/Form";
import EducationForm from "../EducationForm/EducationForm";
import Step from "../../molecules/Stepper/Step";
import Skillform from "../SkillForm/Skillform";
const CvForm = ({ formData, setFormData }) => {
  const [formChange, setFormChange] = useState("biodata");
  const [completedSteps, setCompletedSteps] = useState([]);
  const changeStep = (nextStep) => {
    setFormChange(nextStep);
    setCompletedSteps((prev) => [...new Set([...prev, nextStep])]);
  };

  return (
    <>
    <div className=" w-full overflow-hidden">
      {/*======formStep======*/}
      <div className="flex flex-wrap justify-between items-center mb-5">
        <Step
          step={"1"}
          stepCategory={"education"}
          details={"personal information"}
          form={formChange}
          completedStep={completedSteps}
        />
        <Step
          step={"2"}
          stepCategory={"skill"}
          details={"Education"}
          form={formChange}
          completedStep={completedSteps}
        />
        <Step
          step={"3"}
          stepCategory={"complete"}
          details={"skill & experience"}
          form={formChange}
          completedStep={completedSteps}
        />
      </div>
      {formChange === "biodata" ? (
        <InformationForm
          formData={formData}
          setFormData={setFormData}
          event={() => changeStep("education")}
        />
      ) : (
        <div></div>
      )}

      {formChange === "education" ? (
        <EducationForm
          formData={formData}
          setFormData={setFormData}
          event={() => changeStep("skill")}
        />
      ) : (
        <div></div>
      )}
      {formChange === "skill" ? (
        <div>
          <Skillform
            formData={formData}
            setFormData={setFormData}
            event={() => changeStep("complete")}
          />
        </div>
      ) : (
        <div></div>
      )}

      {formChange === "complete" ? (
        <div className="text-center text-lg mt-10 sm:text-2xl font-medium capitalize text-green-600">
          Your Cv Successfully created . please download
        </div>
      ) : (
        <div></div>
      )}
      </div>
    </>
  );
};
export default CvForm;
