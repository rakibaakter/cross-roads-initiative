import React from "react";

import clg1 from "../../assets/clg1.jpg";
import clg2 from "../../assets/clg2.png";
import clg3 from "../../assets/clg3.png";
import clg4 from "../../assets/clg4.png";
import clg5 from "../../assets/cl5.png";
import clg6 from "../../assets/clg6.png";
import Marquee from "react-fast-marquee";

const ShortInfo = () => {
  const universities = [
    clg1,
    clg2,
    clg5,
    clg4,
    clg6,
    clg3,
    clg1,
    clg2,
    clg5,
    clg4,
    clg6,
    clg3,
  ];
  return (
    <div className=" px-4 mt-12 md:mt-16 lg:mt-32 text-center">
      <h3 className="mt-4 lg:text-3xl text-red-600 capitalize font-medium lg:font-semibold mb-12 lg:mb-24">
        Last year, we helped students receive 70+ scholarships in top
        universities!
      </h3>
      <Marquee>
        {universities.map((university, index) => (
          <img
            src={university}
            key={index}
            alt=""
            className="h-16 w-20 md:h-24 md:w-32 object-contain mr-8 md:mr-12"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ShortInfo;
