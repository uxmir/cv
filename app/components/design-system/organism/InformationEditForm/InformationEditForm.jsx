"use client";
import React from "react";
import { useFormik } from "formik";
import Modal from "../../atoms/Modal/Modal";
import Button from "../../atoms/CvButton/Button";
import Input from "../../atoms/Input/Input";
import Textaria from "../../atoms/TextAria/Textaria";
const InformationEditForm = ({ informationForm,educationForm,skillForm, editData,closeModal,id,initialValues }) => {
  const formik = useFormik({
    initialValues:initialValues,
    enableReinitialize:true,
    onSubmit: async (values) => {
    await editData(id,values); 
    }
  });
  return (
    <>
      <Modal close={closeModal}>
        {/*==========informationData========== */}
       {
        informationForm &&(
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="w-[700px] py-4 space-y-4"
        >
          <div>
            <Input
              label={"Enter your name"}
              inputType={"text"}
              placeHolder={"Enter here"}
              inputName={"name"}
              inputValue={formik.values?.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Input
              label={"Enter your Professional name"}
              inputType={"text"}
              placeHolder={"Enter here"}
              inputName={"professonal_name"}
              inputValue={formik.values?.professonal_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Input
              label={"Enter your location"}
              inputType={"text"}
              placeHolder={"Example dhaka,bangladesh"}
              inputName={"location"}
              inputValue={formik.values?.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Input
              label={"Enter your Phone Number"}
              inputType={"text"}
              placeHolder={"Enter here"}
              inputName={"number"}
              inputValue={formik.values?.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Input
              label={"Enter your Gmail"}
              inputType={"text"}
              placeHolder={"Enter here"}
              inputName={"gmail"}
              inputValue={formik.values?.gmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Textaria
              label={"enter career objective"}
              placeholder={"Write here..."}
              textName={"career_description"}
              textValue={formik.values?.career_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="mt-8 flex items-center justify-end gap-x-2">
            <Button
              cvButton={true}
              cvButtonBgColor={"bg-red-500"}
              btnEvent={closeModal}
            >
              cancel
            </Button>
            <Button 
            buttonType={"submit"} 
            formButton={true}
            >
              confirm
            </Button>
          </div>
        </form>
        )
       }
         {/*==========educationData========== */}
       {
        educationForm &&(
          <form
          action=""
          onSubmit={formik.handleSubmit}
          className="w-[700px] py-4 space-y-4"
        >
          <div>
             <Input
            label={"Institute name"}
            inputType={"text"}
            inputName={"institute_name"}
            inputValue={formik.values?.institute_name}
            placeHolder={"Enter here..."}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          <div>
            <Input
            label={"passing year"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"passing_year"}
            inputValue={formik.values?.passing_year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          <div>
            <Input
            label={"degree"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"degree"}
            inputValue={formik.values?.degree}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          <div>
              <Input
            label={"Training institute name"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"traning_institute_name"}
            inputValue={formik.values?.traning_institute_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          <div>
           <Input
            label={"Training passing year"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"training_passing_year"}
            inputValue={formik.values?.training_passing_year}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          <div>
            <Input
            label={"Training duration"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"training_duration"}
            inputValue={formik.values?.training_duration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          </div>
          <div className="mt-8 flex items-center justify-end gap-x-2">
            <Button
              cvButton={true}
              cvButtonBgColor={"bg-red-500"}
              btnEvent={closeModal}
            >
              cancel
            </Button>
            <Button 
            buttonType={"submit"} 
            formButton={true}
            >
              confirm
            </Button>
          </div>
        </form>
        )
       }
       {/*==========skillData========== */}
        {
     skillForm &&(
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className="w-[700px] py-4 space-y-4"
        >
          <div>
        <Input
            label={"Enter company Name"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"designation_name"}
            inputValue={formik.values?.designation_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          </div>
          <div>
              <Input
            label={"Enter designation Name"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"company_name"}
            inputValue={formik.values?.company_name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}

          />
          </div>
          <div>
                <Input
            label={"Enter Experience year"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"experience_year"}
            inputValue={formik.values?.experience_year}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          </div>
          <div>
               <Input
            label={"Enter best project"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"best_project"}
            inputValue={formik.values?.best_project}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          </div>
          <div>
               <Input
            label={"Enter project url"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"project_url"}
            inputValue={formik.values?.project_url}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          </div>
          <div>
            <Textaria
            label={"Enter Project description"}
            placeholder={"enter here"}
            textName={"project_description"}
            textValue={formik.values?.project_description}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          </div>
          <div className="mt-8 flex items-center justify-end gap-x-2">
            <Button
              cvButton={true}
              cvButtonBgColor={"bg-red-500"}
              btnEvent={closeModal}
            >
              cancel
            </Button>
            <Button 
            buttonType={"submit"} 
            formButton={true}
            >
              confirm
            </Button>
          </div>
        </form>
     )
        }
      </Modal>
    </>
  );
};

export default InformationEditForm;
