"use client";
import React, { useState, useRef } from "react";
import Container from "../../Container/Container";
import CvForm from "../../organism/CvForm/CvForm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CvTemplate from "../../molecules/CvTemplateBasic/CvTemplate";
import Button from "../../atoms/CvButton/Button";
import Tab from "../../atoms/Tabs/Tab";
import CvtemplateMedium from "../../molecules/CvtemplateMedium/CvTemlateMedium";
import CvTemplateAdvanced from "../../molecules/CvTemplateAdvanced/CvTemplateAdvanced";
const Cv = () => {
  const [formData, setFormData] = useState({
    name: "",
    professonal_name: "",
    location: "",
    number: "",
    gmail: "",
    career_description: "",
    institute_name: "",
    passing_year: "",
    degree: "",
    traning_institute_name: "",
    training_passing_year: "",
    training_duration: "",
    designation_name: "",
    company_name: "",
    experience_year: "",
    best_project: "",
    project_url: "",
    project_description: "",
  });
  //logic for downloading pdf
  const pdfRef = useRef();
  const handleDownload = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };
  //logic for cahnging cvtemplate
  const [activeTab, setActiveTab] = useState("basic");
  const isActive = (activeItem) => {
    setActiveTab(activeItem);
  };
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-5 mt-12 pb-12">
          {/* =======Leftside======== */}
          <div className="w-full ">
            <CvForm formData={formData} setFormData={setFormData} />
          </div>
          {/* =======rightside======== */}
          <div className="w-full ">
            <div className="flex justify-end mb-6">
              <Button
                cvButtonBgColor={"bg-green-500"}
                btnEvent={handleDownload}
                cvButton={true}
              >
                Download
              </Button>
            </div>
            {/*=====tabpills======*/}
            <div className="pt-4 h-auto mb-6 w-full flex max-[400px]:flex-col max-[400px]:text-center gap-y-4  justify-between  font-medium border-b border-gray-100">
              <Tab
                tabValue={"Basic"}
                activeItem={activeTab}
                tabEvent={() => isActive("basic")}
                item={"basic"}
              />
              <Tab
                tabValue={"Medium"}
                activeItem={activeTab}
                tabEvent={() => isActive("medium")}
                item={"medium"}
              />
              <Tab
                tabValue={"Advanced"}
                activeItem={activeTab}
                tabEvent={() => isActive("advanced")}
                item={"advanced"}
              />
            </div>
            <div className=" w-full  flex justify--center items-center">
              {activeTab === "basic" && (
                <CvTemplate pdf={pdfRef} formData={formData} />
              )}

              {activeTab === "medium" && (
                <CvtemplateMedium pdf={pdfRef} formData={formData} />
              )}
              {activeTab === "advanced" && (
                <CvTemplateAdvanced pdf={pdfRef} formData={formData} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Cv;
