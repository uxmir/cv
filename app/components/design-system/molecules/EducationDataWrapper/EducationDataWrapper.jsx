" use client";
import React, { useContext } from "react";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import DeleteModal from "../DeleteModal/DeleteModal";
import { EducationDataContext } from "../../../../DataProvider/EducationDataProvider/EducationDataProvider";
import { useState } from "react";
import InformationEditForm from "../../organism/InformationEditForm/InformationEditForm";
const EducationDataWrapper = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const { getEducationData, deleteEducationData, editEducationData } =
    useContext(EducationDataContext);
  const [selectedId, setSelectedId] = useState(null);
  const [editedId, setEditedId] = useState(null);
  const handleModal = (condition) => {
    setDeleteModal(condition);
  };
  const handleDeleteData = async (deletedId) => {
    await deleteEducationData(deletedId);
    setDeleteModal(false);
  };
  //editModal
  const handleEditModal = (condition) => {
    setEditModal(condition);
  };
  return (
    <>
    {
      getEducationData.length>0?   <div className="flex flex-col gap-y-5">
        {getEducationData.map((data, index) => (
          <div key={index}>
            <div className="flex flex-col  px-4 py-4 border border-gray-100 mt-12">
              <div className="flex justify-end py-4">
                <div className="flex gap-x-3">
                  <IconEdit
                    onClick={() => {
                      handleEditModal(true);
                      setEditedId(data._id);
                    }}
                    className="text-blue-600 cursor-pointer"
                  />
                  <IconTrash
                    onClick={() => {
                      handleModal(true);
                      setSelectedId(data._id);
                    }}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex  max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">School/University name</span>
                <span>{data?.institute_name || "lorem university"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex  max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">passing year</span>
                <span>{data?.passing_year || "2000"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">degree</span>
                <span>{data?.degree || "lorem"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">training institute name</span>
                <span>{data?.traning_institute_name || "abcd institute"}</span>
              </div>
              <div className=" py-6 border-b border-gray-200 w-full  flex  max-[370px]:flex-col gap-y-1justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">training passing year</span>
                <span>{data?.training_passing_year || "2000"}</span>
              </div>
              <div className=" py-6  border-gray-200 w-full  flex max-[370px]:flex-col gap-y-1 justify-between items-center text-md sm:text-lg capitalize text-gray-700">
                <span className="font-semibold">training duration</span>
                <span className="text-end">
                  {data?.training_duration || "1"}
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

      {editModal === true && (
        <InformationEditForm
          educationForm={true}
          closeModal={() => handleEditModal(false)}
          id={editedId}
          initialValues={getEducationData.find((item) => item._id === editedId)}
          editData={editEducationData}
        />
      )}
    </>
  );
};

export default EducationDataWrapper;
