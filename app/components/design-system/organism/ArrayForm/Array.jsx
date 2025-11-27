import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const EducationForm = () => {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      education: [
        {
          institute_name: "",
          passing_year: "",
          degree: "",
        },
      ],
    },
    validationSchema: Yup.object({
      education: Yup.array().of(
        Yup.object({
          institute_name: Yup.string().required("Institute name is required"),
          passing_year: Yup.string().required("Passing year is required"),
          degree: Yup.string().required("Degree is required"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log(" Form values:", values);
      alert("Form submitted! Check console for data.");
    },
  });

  //  Increase input set
  const increaseInputs = () => {
    formik.setValues({
      education: [
        ...formik.values.education,
        {
          institute_name: "",
          passing_year: "",
          degree: "",
        },
      ],
    });
  };

  // ✅ Decrease input set
  const decreaseInputs = () => {
    if (formik.values.education.length > 1) {
      formik.setValues({
        education: formik.values.education.slice(0, -1),
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Education Information
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {formik.values.education.map((edu, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-gray-50 space-y-4"
          >
            <h3 className="font-medium text-lg">
              Education {index + 1}
            </h3>

            {/* Institute Name */}
            <div>
              <label className="block font-medium">Institute Name</label>
              <input
                type="text"
                name={`education[${index}].institute_name`}
                value={edu.institute_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter institute name"
                className="w-full p-2 border rounded-md"
              />
              {formik.touched.education?.[index]?.institute_name &&
                formik.errors.education?.[index]?.institute_name && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.education[index].institute_name}
                  </p>
                )}
            </div>

            {/* Passing Year */}
            <div>
              <label className="block font-medium">Passing Year</label>
              <input
                type="text"
                name={`education[${index}].passing_year`}
                value={edu.passing_year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter passing year"
                className="w-full p-2 border rounded-md"
              />
              {formik.touched.education?.[index]?.passing_year &&
                formik.errors.education?.[index]?.passing_year && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.education[index].passing_year}
                  </p>
                )}
            </div>

            {/* Degree */}
            <div>
              <label className="block font-medium">Degree</label>
              <input
                type="text"
                name={`education[${index}].degree`}
                value={edu.degree}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter degree"
                className="w-full p-2 border rounded-md"
              />
              {formik.touched.education?.[index]?.degree &&
                formik.errors.education?.[index]?.degree && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.education[index].degree}
                  </p>
                )}
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={increaseInputs}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Add More
          </button>

          <button
            type="button"
            onClick={decreaseInputs}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
             Remove
          </button>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
