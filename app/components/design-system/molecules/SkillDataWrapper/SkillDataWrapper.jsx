"use client";
import React, { useContext } from "react";
import { useState } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import DeleteModal from "../DeleteModal/DeleteModal";
import { SkillDataContext } from "../../../../DataProvider/SkillDataProvider/SkillDataProvider";
import InformationEditForm from "../../organism/InformationEditForm/InformationEditForm";
const SkillDataWrapper = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal,setEditModal]=useState(false)
  const { getSkillData, deleteSkillData,editSkillData } = useContext(SkillDataContext);
  const [selectedId, setSelectedId] = useState(null);
  const [editedId,setEditedId]=useState(null)
  const handleModal = (condition) => {
    setDeleteModal(condition);
  };
  const handleDeleteData = async (deletedId) => {
    await deleteSkillData(deletedId);
    setDeleteModal(false);
  };
  //editModal
  const handleEditModal=(condition)=>{
    setEditModal(condition)
  }
  return (
    <>
   {
    getSkillData.length>0?   <div className="flex flex-col gap-y-5">
        {getSkillData.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col  px-4 py-4 border border-gray-100 mt-12">
              <div className="flex justify-end py-4">
                <div className="flex gap-x-3">
                  <IconEdit 
                  onClick={()=>{
                    handleEditModal(true)
                    setEditedId(data._id)
                  }}
                  className="text-blue-600 cursor-pointer" />
                  <IconTrash
                    onClick={() => {
                      handleModal(true);
                      setSelectedId(data._id);
                    }}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">designation name</span>
                <span>{data?.designation_name || "web developer"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">company name</span>
                <span>{data?.company_name || "company name"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">experince year</span>
                <span>{data?.experience_year || "123"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">best project</span>
                <span>{data?.best_project || "abcd website"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">project link</span>
                <a href={data?.project_url}>
                  {data?.project_url || "lorem.com"}
                </a>
              </div>
              <div className=" py-6  border-gray-200 w-full  flex justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">project description</span>
                <span className="text-end">
                  {data?.project_description || "lorem ipsum doller"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>:<div className="text-center text-lg capitalize mt-10 text-gray-600 fone-semibold sm:text-2xl">
        There is no data please go to myCv page and make your cv
      </div>
   }
      {/*====deleteModal====== */}
      {deleteModal === true && (
        <DeleteModal
          closeModal={() => handleModal(false)}
          confirm={() => handleDeleteData(selectedId)}
        />
      )}
      {
        editModal===true &&(
          <InformationEditForm
          skillForm={true}
          closeModal={()=>handleEditModal(false)}
          id={editedId}
          initialValues={getSkillData.find((item)=>item._id===editedId)}
          editData={editSkillData}
          />
          
        )
      }
    </>
  );
};

export default SkillDataWrapper;
