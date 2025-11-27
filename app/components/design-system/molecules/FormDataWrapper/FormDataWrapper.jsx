"use client";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import DeleteModal from "../DeleteModal/DeleteModal";
import { CvDataContext } from "../../../../DataProvider/CvDataProvider/CvDataProvider";
import React, { useContext, useState } from "react";
import InformationEditForm from "../../organism/InformationEditForm/InformationEditForm";
import { get } from "mongoose";
const FormDataWrapper = () => {
  const { getInformationData, deleteInformationData,editInformationData } =
    useContext(CvDataContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal,setEditModal]=useState(false)
  const [selectedId, setSelectedId] = useState(null);
  const [editedId,setEditedId]=useState(null)
  const handleModal = (condition) => {
    setDeleteModal(condition);
  };
  //editingmodalligic
  const handleEditModal=(condition)=>{
    setEditModal(condition)
  }
  const handleDataDelete = async (deleteId) => {
    await deleteInformationData(deleteId);
    setDeleteModal(false);
  };
  return (
    <>
  {
    getInformationData.length > 0?    <div className="flex flex-col gap-y-5">
        {getInformationData.map((data, index) => (
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
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">Name</span>
                <span>{data?.name || "mir moniruzzaman"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">professionalName</span>
                <span>{data?.professonal_name || "mir monir"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">location</span>
                <span>{data?.location || "dhaka"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">phonenumber</span>
                <span>{data?.number || "012354"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">gmail</span> 
                <span>{data?.gmail || "lorem@gmail.com"}</span>
              </div>
              <div className=" py-6  border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold min-w-[200px] text-center min-[420px]:text-start">
                  career objective
                </span>
                <span className=" text-center sm:text-end">
                  {data?.career_description || "lorem ipsum doller"}
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
          confirm={() => handleDataDelete(selectedId)}
        />
      )}
      {
        editModal===true &&(
          <InformationEditForm
          closeModal={()=>handleEditModal(false)}
          informationForm={true}
          id={editedId}
          initialValues={getInformationData.find((item)=>item._id===editedId)}
          editData={editInformationData}
          />
        )
      }
    </>
  );
};

export default FormDataWrapper;
