import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/CvButton/Button";
import { AuthContext } from "@/app/DataProvider/AuthProvider/AuthProvider";
const LoginForm = ({signUpEvent}) => {
  const {login}=useContext(AuthContext)
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async(values,{resetForm})=>{
    await login(values)
    resetForm()
    }
  });
  return (
    <>
      <div className="w-150 px-6 py-6 ">
        <h3 className="text-gray-700 py-4 font-medium text-2xl">
          Sign In Here
        </h3>
        <form action="" onSubmit={formik.handleSubmit} className="space-y-4 ">
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
              didn't have an account?
              <span className="text-blue-600 cursor-pointer" onClick={signUpEvent}>SignUp</span>
            </span>
          </div>
          <Button
            buttonType={"submit"}
            formButton={true}
            formButtonWidth={"w-full"}
          >
         SignIn
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
