import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/CvButton/Button";
import Textaria from "../../atoms/TextAria/Textaria";
import { SkillDataContext } from "../../../../DataProvider/SkillDataProvider/SkillDataProvider";
const Skillform = ({ event, formData, setFormData }) => {
  //for creating data
  const { createSkillData } = useContext(SkillDataContext);
  //for validation
  const validationSchema = Yup.object({
    designation_name: Yup.string().required("this feild is required"),
    company_name: Yup.string().required("this feild is required"),
    experience_year: Yup.string().required("this feild is required"),
    best_project: Yup.string().required("this feild is required"),
    project_url: Yup.string().required("this feild is required"),
    project_description: Yup.string().required("this feild is required"),
  });
  const formik = useFormik({
    initialValues: formData,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const handleChange = (e) => {
    formik.handleChange(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleNext = async (values) => {
    const errors = await formik.validateForm();
    formik.setTouched({
      designation_name: true,
      company_name: true,
      experience_year: true,
      best_project: true,
      project_url: true,
      project_description: true,
    });
    if (Object.keys(errors).length === 0) {
      const isSuccess = await createSkillData(values);

      if (isSuccess) {
        event();
      }
    }
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <Input
            label={"Enter company Name"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"designation_name"}
            inputValue={formik.values.designation_name}
            onBlur={formik.handleBlur}
            onChange={handleChange}
            errors={formik.errors.designation_name}
            touched={formik.touched.designation_name}
          />
          {formik.touched.designation_name &&
            formik.errors.designation_name && (
              <p className="text-red-500">{formik.errors.designation_name}</p>
            )}
        </div>
        <div>
          <Input
            label={"Enter designation Name"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"company_name"}
            inputValue={formik.values.company_name}
            onBlur={formik.handleBlur}
            onChange={handleChange}
            errors={formik.errors.company_name}
            touched={formik.touched.company_name}
          />
          {formik.touched.company_name && formik.errors.company_name && (
            <p className="text-red-500">{formik.errors.company_name}</p>
          )}
        </div>
        <div>
          <Input
            label={"Enter Experience year"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"experience_year"}
            inputValue={formik.values.experience_year}
            onBlur={formik.handleBlur}
            onChange={handleChange}
            errors={formik.errors.experience_year}
            touched={formik.touched.experience_year}
          />
          {formik.touched.experience_year && formik.errors.experience_year && (
            <p className="text-red-500">{formik.errors.experience_year}</p>
          )}
        </div>
        <div>
          <Input
            label={"Enter best project"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"best_project"}
            inputValue={formik.values.best_project}
            onBlur={formik.handleBlur}
            onChange={handleChange}
            errors={formik.errors.best_project}
            touched={formik.touched.best_project}
          />
          {formik.touched.best_project && formik.errors.best_project && (
            <p className="text-red-500">{formik.errors.best_project}</p>
          )}
        </div>
        <div>
          <Input
            label={"Enter project url"}
            placeHolder={"Enter Here..."}
            inputType={"text"}
            inputName={"project_url"}
            inputValue={formik.values.project_url}
            onBlur={formik.handleBlur}
            onChange={handleChange}
            errors={formik.errors.project_url}
            touched={formik.touched.project_url}
          />
          {formik.touched.project_url && formik.errors.project_url && (
            <p className="text-red-500">{formik.errors.project_url}</p>
          )}
        </div>
        <div>
          <Textaria
            label={"Enter Project description"}
            placeholder={"enter here"}
            textName={"project_description"}
            textValue={formik.values.project_description}
            onBlur={formik.handleBlur}
            onChange={handleChange}
            errors={formik.errors.project_description}
            touched={formik.touched.project_description}
          />
          {formik.touched.project_description &&
            formik.errors.project_description && (
              <div className="text-red-500">
                {formik.errors.project_description}
              </div>
            )}
        </div>
        <div className="flex justify-end">
          <Button
            buttonType={"submit"}
            formEvent={() => handleNext(formik.values)}
            formButton={true}
          >
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};
export default Skillform;
