"use client";
import React, { useContext, useEffect, useState } from "react";
import Container from "../components/design-system/Container/Container";
import Button from "../../app/components/design-system/atoms/CvButton/Button";
import { AuthContext } from "../DataProvider/AuthProvider/AuthProvider";
import Image from "next/image";
import man_1 from "../../app/assets/images/man_1.png";
import { useRouter } from "next/navigation";
import Tab from "../components/design-system/atoms/Tabs/Tab";
import FormDataWrapper from "../components/design-system/molecules/FormDataWrapper/FormDataWrapper";
import Spinner from "../../app/components/design-system/atoms/Spinner/Spinner";
import DeleteModal from "../components/design-system/molecules/DeleteModal/DeleteModal";
import EducationDataWrapper from "../components/design-system/molecules/EducationDataWrapper/EducationDataWrapper";
import SkillDataWrapper from "../components/design-system/molecules/SkillDataWrapper/SkillDataWrapper";
const page = () => {
  const { user, loading, logout, deleteAccount } = useContext(AuthContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const [tabItem, setTabItem] = useState("information");
  console.log(user);
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, router, loading]);
  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  if (!user) {
    return null;
  }
  //tablogic
  const changeTab = (nextTab) => {
    setTabItem(nextTab);
  };
  //deleteModal
  const showDeleteModal = () => {
    setDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setDeleteModal(false);
  };
  const handleDataDelete = async (id) => {
    await deleteAccount(id);
  };
  return (
    <>
      <div>
        <Container>
          <div className="grid grid-cols-12 gap-6 mt-10 sm:mt-30">
            {/*====leftSide====*/}
            <div className="col-span-12 lg:col-span-3 ">
              <div className="w-full border flex flex-col items-center justify-center border-gray-100 py-6 px-4">
                <div className="w-40 h-40 rounded-full">
                  <Image
                    src={man_1}
                    width={160}
                    height={160}
                    alt="image"
                    className="object-cover"
                  />
                </div>
                <div className="text-gray-600 mt-4 flex flex-col">
                  <span className="text-lg font-medium text-center  capitalize">
                    {user?.name || ""}
                  </span>
                  <span className="text-sm font-medium text-center ">
                    {user?.email}
                  </span>
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <Button
                    cvButton={true}
                    cvButtonBgColor={"bg-red-500"}
                    btnEvent={logout}
                  >
                    LogOut
                  </Button>
                   <p  className="text-sm font-semibold sm:text-base text-red-600 mt-2 capitalize" onClick={() => showDeleteModal()}>mir monir</p>
                </div>
              </div>
            </div>
            {/*=====rightSide====*/}
            <div className="col-span-12 lg:col-span-9">
              <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between  items-center border-b border-gray-100">
                <Tab
                  tabValue={"information"}
                  item={"information"}
                  activeItem={tabItem}
                  tabEvent={() => changeTab("information")}
                />
                <Tab
                  tabValue={"education"}
                  item={"education"}
                  activeItem={tabItem}
                  tabEvent={() => changeTab("education")}
                />
                <Tab
                  tabValue={"skill & Experience"}
                  item={"skill"}
                  activeItem={tabItem}
                  tabEvent={() => changeTab("skill")}
                />
              </div>
              {/*===informationdata===*/}
              {tabItem === "information" && <FormDataWrapper />}
              {/*===educationdata===*/}
              {tabItem === "education" && <EducationDataWrapper />}
              {/*===educationdata===*/}
              {tabItem === "skill" && <SkillDataWrapper />}
            </div>
          </div>
        </Container>
      </div>
      {/*====deleteModal====== */}
      {deleteModal === true && (
        <DeleteModal
          closeModal={() => closeDeleteModal(false)}
          confirm={() => handleDataDelete(user._id)}
        />
      )}
    </>
  );
};

export default page;
