"use client";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const EducationDataContext = createContext();
const EducationDataProvider = ({ children }) => {
  const [educationData, setEducationData] = useState([]);
  const [getEducationData, setGetEducationData] = useState([]);
  //creating skillData
  const createEducationData = async (formData) => {
    const education_api = process.env.NEXT_PUBLIC_EDUCATION_API;
    try {
      const response = await fetch(education_api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setEducationData(data.educationData);
        toast.success("EducationData has been created successfully");
        return true;
      } else {
        alert(data.message);
        return false;
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //getting education data
  const findEducationData = async () => {
    const get_api = process.env.NEXT_PUBLIC_EDUCATION_API;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("token no found");
      }
      const response = await fetch(get_api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setGetEducationData(data.getEducationData);
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //deleting data by id
  const deleteEducationData = async (id) => {
    const delete_api = process.env.NEXT_PUBLIC_EDUCATION_API;
    try {
      const response = await fetch(`${delete_api}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        toast.warn("data is deleted");
        findEducationData();
      }
    } catch (error) {
      toast.error("there is something wrong", error);
    }
  };
  //updatingdata by id
  const editEducationData = async (id, updatedValues) => {
    const edit_api = process.env.NEXT_PUBLIC_EDUCATION_API;
    try {
      const response = await fetch(`${edit_api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedValues),
      });
      const data = await response.json();
      if (data.success) {
        toast.info("Data is updated");
        findEducationData();
        return true;
      } else {
        toast.warn(data.message);
        return false;
      }
    } catch (error) {
      toast.error(data?.error || "data is not updated");
    }
  };
  //getting data
  useEffect(() => {
    if (localStorage.getItem("token")) {
      findEducationData();
    }
  }, []);
  return (
    <EducationDataContext.Provider
      value={{
        educationData,
        createEducationData,
        getEducationData,
        deleteEducationData,
        editEducationData,
      }}
    >
      {children}
    </EducationDataContext.Provider>
  );
};

export default EducationDataProvider;
