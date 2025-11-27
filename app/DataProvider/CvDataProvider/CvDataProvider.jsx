"use client";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const CvDataContext = createContext();
const CvDataProvider = ({ children }) => {
  const [informationData, setInformationCvData] = useState([]);
  const [getInformationData, setGetInformationData] = useState([]);
  //createInfornationdata
  const createInformationData = async (formData) => {
    //for stoping data creating without account
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("please login or create an account");
      return;
    }
    const create_api = process.env.NEXT_PUBLIC_INFORMATION_API;
    try {
      const response = await fetch(create_api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setInformationCvData(data.informationData);
        toast.success("InformationData has successfully created");
        return true;
      } else {
        toast.error("InformationData is not created ");
        return false;
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //getting data
  const findInformationData = async () => {
    const get_api = process.env.NEXT_PUBLIC_INFORMATION_API;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Token not found");
        return;
      }

      const response = await fetch(get_api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      console.log("GET Response:", data);

      if (data.success && data.getInformationData) {
        setGetInformationData(data.getInformationData);
      } else {
        console.error("No data returned from API");
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };

  //deleting databy id
  const deleteInformationData = async (id) => {
    const delete_api = process.env.NEXT_PUBLIC_INFORMATION_API;
    try {
      const response = await fetch(`${delete_api}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        toast.warn("data is deleted");
        findInformationData();
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //for editing data
  const editInformationData = async (id, updatedValues) => {
    const edit_api = process.env.NEXT_PUBLIC_INFORMATION_API;
    try {
      const response = await fetch(`${edit_api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedValues),
      });
      const data = await response.json();
      if (data.success) {
        toast.info("Data is updated");
        findInformationData();
        return true;
      } else {
        toast.warn(data.message);
        return false;
      }
    } catch (error) {
      toast.error(data?.error || "data is not edited");
    }
  };
  //for getting data
  useEffect(() => {
    if (localStorage.getItem("token")) {
      findInformationData();
    }
  }, []);
  return (
    <CvDataContext.Provider
      value={{
        informationData,
        createInformationData,
        getInformationData,
        findInformationData,
        deleteInformationData,
        editInformationData,
      }}
    >
      {children}
    </CvDataContext.Provider>
  );
};

export default CvDataProvider;
