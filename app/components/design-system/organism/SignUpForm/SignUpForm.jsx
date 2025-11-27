"use client";
import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/CvButton/Button";
import { AuthContext } from "@/app/DataProvider/AuthProvider/AuthProvider";

const SignUpForm = ({ signInEvent,event }) => {
  //apidata
 const {signUp}=useContext(AuthContext)

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await signUp(values);
      resetForm();
    },
  });

  return (
    <>
      <>
        <div className="w-150 px-6 py-6 ">
          <h3 className="text-gray-700 py-4 font-medium text-2xl">
            Sign Up Here
          </h3>
          <form action="" onSubmit={formik.handleSubmit} className="space-y-4 ">
            <div>
              <Input
                label={"Enter Your Name"}
                placeHolder={"enter here..."}
                inputType={"name"}
                inputName={"name"}
                inputValue={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                touched={formik.touched.name}
                errors={formik.errors.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <Input
                label={"Enter Your Email"}
                placeHolder={"enter here..."}
                inputType={"email"}
                inputName={"email"}
                inputValue={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                touched={formik.touched.email}
                errors={formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <Input
                label={"Enter Your password"}
                placeHolder={"enter here..."}
                inputType={"password"}
                inputName={"password"}
                inputValue={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                touched={formik.touched.password}
                errors={formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500">{formik.errors.password}</p>
              )}
            </div>
            <div className="mt-4 text-center">
              <span className="text-gray-700 text-md">
                have an account?
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={signInEvent}
                >
                  SignIn
                </span>
              </span>
            </div>
            <Button
              buttonType={"submit"}
              formButton={true}
              formButtonWidth={"w-full"}
              formEvent={event}
            >
              SignUp
            </Button>
          </form>
        </div>
      </>
    </>
  );
};

export default SignUpForm;
