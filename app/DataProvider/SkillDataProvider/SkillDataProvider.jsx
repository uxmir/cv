"use client";
import React, { createContext, use, useEffect, useState } from "react";
import { toast } from "react-toastify";
export const SkillDataContext = createContext();
const SkillDataProvider = ({ children }) => {
  const [skillData, setSkillData] = useState([]);
  const [getSkillData, setGetSkillData] = useState([]);
  //creating skillData
  const createSkillData = async (formData) => {
    const skill_api = process.env.NEXT_PUBLIC_SKILL_API;
    try {
      const response = await fetch(skill_api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSkillData(data.skillData);
        toast.success("SkillData is successfully created");
        return true;
      } else {
        toast.warn(data.message);
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //getting skilldata
  const findSkillData = async () => {
    const get_api = process.env.NEXT_PUBLIC_SKILL_API;
    try {
      const response = await fetch(get_api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setGetSkillData(data.getSkillData);
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //deleting data by id
  const deleteSkillData = async (id) => {
    const delete_api = process.env.NEXT_PUBLIC_SKILL_API;
    try {
      const response = await fetch(`${delete_api}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        toast.warn("Data is deleted");
        findSkillData();
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //updating data by id
  const editSkillData = async (id, updatedValues) => {
    const edit_api = process.env.NEXT_PUBLIC_SKILL_API;
    try {
      const response = await fetch(`${edit_api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedValues),
      });
      const data = await response.json();
      if (data.success) {
        toast.info("Data is updated");
        findSkillData();
        return true;
      } else {
        toast.warn(data.message);
        return false;
      }
    } catch (error) {
      toast.error(data?.error || "there is something wrong");
    }
  };
  //getting data
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      findSkillData();
    }
  }, []);
  return (
    <SkillDataContext.Provider
      value={{
        skillData,
        createSkillData,
        getSkillData,
        deleteSkillData,
        editSkillData,
      }}
    >
      {children}
    </SkillDataContext.Provider>
  );
};

export default SkillDataProvider;
