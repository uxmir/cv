import React from "react";
import Container from "../../Container/Container";
import man_1 from "../../../../assets/images/man_1.png";
import man_2 from "../../../../assets/images/man_2.png";
import man_3 from "../../../../assets/images/man_3.png";
import man_4 from "../../../../assets/images/man_4.png";
import man_5 from "../../../../assets/images/man_5.png";
import Image from "next/image";
import Review from "../../molecules/ReviewCard/Review";
import Heading from "../../atoms/HeadingComponent/Heading";
import { IconUsers } from "@tabler/icons-react";
const Testimonial = () => {
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: man_1,
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: man_2,
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: man_3,
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: man_4,
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: man_5,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: man_4,
    },
  ];

  return (
    <>
      <Container>
        <div id="testimonials" className="mt-20 sm:mt-30  relative">
          <Heading
            childHeading={true}
            heading={"Our Happy user"}
            icon={IconUsers}
            subHeading={"our user"}
          />
          <marquee behavior="smooth" direction="left" className="mt-5">
            <div className="flex gap-x-5">
              {reviews.map((item, index) => (
                <div key={index}>
                  <Review item={item} />
                </div>
              ))}
            </div>
          </marquee>
          <marquee behavior="smooth" direction="right" className="mt-2">
            <div className="flex gap-x-5">
              {reviews.map((item, index) => (
                <div key={index}>
                  <Review item={item} />
                </div>
              ))}
            </div>
          </marquee>
          {/*======blurshape====*/}
          <div className="w-30 h-full  bg-gradient-to-r from-white to-transparent  absolute left-0 bottom-1.5"></div>
          <div className="w-30 h-full  bg-gradient-to-r from-white to-transparent rotate-180  absolute right-0 bottom-1.5"></div>
        </div>
      </Container>
    </>
  );
};

export default Testimonial;
