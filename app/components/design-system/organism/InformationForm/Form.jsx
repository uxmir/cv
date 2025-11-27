import React from 'react'
import Input from '../../atoms/Input/Input'
import Button from '../../atoms/CvButton/Button'
import Textaria from '../../atoms/TextAria/Textaria'
import {CvDataContext} from '../../../../DataProvider/CvDataProvider/CvDataProvider'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useContext } from 'react'
const Form = ({event,formData,setFormData}) => {
  //apidata
  const {createInformationData}=useContext(CvDataContext)
    const validationSchema=Yup.object({
    name:Yup.string().required('this feild is required'),
    professonal_name:Yup.string().required('this feild is required'),
    location:Yup.string().required('this feild is required'),
    number:Yup.string().required('this feild is required'),
    gmail:Yup.string().required('this feild is required'),
    career_description:Yup.string().required('this feild is required')    
    })
    const formik=useFormik({
        initialValues:formData,
        enableReinitialize: true,
       validationSchema,
       onSubmit:async(values,{resetForm})=>{
    //null here
       }
    })
    //for binding data
    const handleChange=(e)=>{
      formik.handleChange(e);
      setFormData({
          ...formData,
          [e.target.name]:e.target.value
      })
    }
    const handleNext=async(values)=>{
      const errors= await formik.validateForm();
      formik.setTouched({
        name:true,
        professonal_name:true,
        location:true,
        number:true,
        gmail:true,
        career_description:true
      })
      if(Object.keys(errors).length===0){
       const isSuccess=await createInformationData(values)
       if(isSuccess){
        event()
       }
      }
    }
  return (
   <>
      <form  onSubmit={formik.handleSubmit} className=" space-y-4">
        <div>
            <Input
            label={"Enter your name"}
            inputType={"text"}
            placeHolder={"Enter here"}
            inputName={'name'}
            inputValue={formik.values.name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.name}
            touched={formik.touched.name}
          />
          {
            formik.touched.name && formik.errors.name &&(
            <p className='text-red-500 text-sm'>{formik.errors.name}</p>
            )
          }
        </div>
      <div>
            <Input
            label={"Enter your Professional name"}
            inputType={"text"}
            placeHolder={"Enter here"}
            inputName={'professonal_name'}
            inputValue={formik.values.professonal_name}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.professonal_name}
            touched={formik.touched.professonal_name}
          />
              {
            formik.touched.professonal_name && formik.errors.professonal_name &&(
            <p className='text-red-500 text-sm'>{formik.errors.professonal_name}</p>
            )
          }
      </div>
         <div>
          <Input
            label={"Enter your location"}
            inputType={"text"}
            placeHolder={"Example dhaka,bangladesh"}
            inputName={'location'}
            inputValue={formik.values.location}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.location}
            touched={formik.touched.location}
          />
                     {
            formik.touched.location && formik.errors.location &&(
            <p className='text-red-500 text-sm'>{formik.errors.location}</p>
            )
          }
         </div>
         <div>
            <Input
            label={"Enter your Phone Number"}
            inputType={"text"}
            placeHolder={"Enter here"}
            inputName={'number'}
            inputValue={formik.values.number}
            onChange={handleChange}
            onBlur={formik.handleBlur}
                errors={formik.errors.number}
            touched={formik.touched.number}
          />
             {
            formik.touched.number && formik.errors.number &&(
            <p className='text-red-500 text-sm'>{formik.errors.number}</p>
            )
          }
         </div>
          <div>
            <Input
            label={"Enter your Gmail"}
            inputType={"text"}
            placeHolder={"Enter here"}
            inputName={'gmail'}
            inputValue={formik.values.gmail}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.gmail}
            touched={formik.touched.gmail}
          />
           {
            formik.touched.gmail && formik.errors.gmail &&(
            <p className='text-red-500 text-sm'>{formik.errors.gmail}</p>
            )
          }
          </div>
         <div>
           <Textaria
            label={"enter career objective"}
            placeholder={"Write here..."}
            textName={'career_description'}
            textValue={formik.values.career_description}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            errors={formik.errors.career_description}
            touched={formik.touched.career_description}
          />
                       {
            formik.touched.career_description && formik.errors.career_description &&(
            <p className='text-red-500 text-sm'>{formik.errors.career_description}</p>
            )
          }
         </div>
          <div className='flex justify-end'>
          <Button
          buttonType={'submit'}
          formEvent={()=>handleNext(formik.values)}
          formButton={true}
          >
          Submit
          </Button>
          </div>
        </form>
   </>
  )
}

export default Form