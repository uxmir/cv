import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/CvButton/Button";
import {EducationDataContext} from '../../../../DataProvider/EducationDataProvider/EducationDataProvider'
const EducationForm = ({ event,formData,setFormData }) => {
  //creating data api
  const {createEducationData}=useContext(EducationDataContext)
  //formvalidation
  const validationSchema = Yup.object({
    institute_name: Yup.string().required("this feild is reqired"),
    passing_year: Yup.string().required("this feild is required"),
    degree: Yup.string().required("this feild is required"),
    traning_institute_name: Yup.string().required("this feild is required"),
    training_passing_year: Yup.string().required("this feild is required"),
    training_duration: Yup.string().required("this feild is required"),
  });
  const formik = useFormik({
    initialValues:formData,
    enableReinitialize:true,
    validationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const handleChange=(e)=>{
    formik.handleChange(e)
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }
  const handleNext = async (values) => {
    const errors = await formik.validateForm();
    formik.setTouched({
      institute_name: true,
      passing_year: true,
      degree: true,
      traning_institute_name: true,
      training_passing_year: true,
      training_duration: true,
    });
    if (Object.keys(errors).length === 0) {
    const isSuccess=await createEducationData(values)
    if(isSuccess){
      event()
    }
    }
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <Input
            label={"Institute name"}
            inputType={"text"}
            inputName={"institute_name"}
            inputValue={formik.values.institute_name}
            placeHolder={"Enter here..."}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.institute_name}
            touched={formik.touched.institute_name}
          />
          {formik.touched.institute_name && formik.errors.institute_name && (
            <p className="text-red-500">{formik.errors.institute_name}</p>
          )}
        </div>
        <div>
          <Input
            label={"passing year"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"passing_year"}
            inputValue={formik.values.passing_year}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.passing_year}
            touched={formik.touched.passing_year}
          />
          {formik.touched.passing_year && formik.errors.passing_year && (
            <p className="text-red-500">{formik.errors.passing_year}</p>
          )}
        </div>
        <div>
          <Input
            label={"degree"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"degree"}
            inputValue={formik.values.degree}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.degree}
            touched={formik.touched.degree}
          />
          {formik.touched.degree && formik.errors.degree && (
            <p className="text-red-500">{formik.errors.degree}</p>
          )}
        </div>
        <div>
          <Input
            label={"Training institute name"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"traning_institute_name"}
            inputValue={formik.values.traning_institute_name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.traning_institute_name}
            touched={formik.touched.traning_institute_name}
          />
          {formik.touched.traning_institute_name &&
            formik.errors.traning_institute_name && (
              <p className="text-red-500">
                {formik.errors.traning_institute_name}
              </p>
            )}
        </div>
        <div>
          <Input
            label={"Training passing year"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"training_passing_year"}
            inputValue={formik.values.training_passing_year}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.training_passing_year}
            touched={formik.touched.training_passing_year}
          />
          {formik.touched.training_passing_year &&
            formik.errors.training_passing_year && (
              <p className="text-red-500">
                {formik.errors.training_passing_year}
              </p>
            )}
        </div>
        <div>
          <Input
            label={"Training duration"}
            inputType={"text"}
            placeHolder={"Enter here..."}
            inputName={"training_duration"}
            inputValue={formik.values.training_duration}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.training_duration}
            touched={formik.touched.training_duration}
          />
          {formik.touched.training_duration &&
            formik.errors.training_duration && (
              <p className="text-red-500">{formik.errors.training_duration}</p>
            )}
        </div>
        <div className="flex justify-end">
          <Button
            buttonType={"submit"}
            formEvent={()=>handleNext(formik.values)}
            formButton={true}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default EducationForm;
