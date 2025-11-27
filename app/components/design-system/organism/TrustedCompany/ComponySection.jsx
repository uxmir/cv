import React from "react";
import Container from "../../Container/Container";
import Heading from "../../atoms/HeadingComponent/Heading";
import Image from "next/image";
import logo_1 from "../../../../assets/images/fiver.png";
import logo_2 from "../../../../assets/images/google.png";
import logo_3 from "../../../../assets/images/microsoft.png";
import logo_4 from "../../../../assets/images/upwork.png";
import { IconHeartHandshake } from "@tabler/icons-react";
const logoImages = [
  { id: 1, image: logo_1 },
  { id: 2, image: logo_2 },
  { id: 3, image: logo_3 },
  { id: 4, image: logo_4 },
];
const ComponySection = () => {
  return (
    <>
      <Container>
        <div className=" mt-20  lg:mt-30 max-w-[650px] mx-auto flex flex-col items-center justify-center">
          <Heading 
          childHeading={true}
          heading={"we are truested by"} 
          icon={IconHeartHandshake}
          subHeading={'our partner'}
          />
          <div className="sm:flex hidden mt-8  gap-x-20 gap-y-6">
            {logoImages.map((image, id) => (
              <div key={id} className="min-w-[100px] ">
                <Image src={image.image} width={100} height={100} alt="image" />
              </div>
            ))}
          </div>
          {/*======forresponsive======*/}
          <div className="flex flex-col sm:hidden mt-4  gap-y-6">
            {logoImages.map((image, id) => (
              <div key={id} className="min-w-[100px] ">
                <Image src={image.image} width={100} height={100} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ComponySection;
