import React from "react";
import Image from "next/image";
import { technicalStack } from "@/contact/constant";

const Section3 = () => {
  return (
    <div className="bg-gradient-to-br from-black to-blue-950 min-h-screen w-full px-6 py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-14">
        Our Technical Stack
      </h1>

      <div className="flex flex-col gap-15">
        {technicalStack.map((category, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center "
          >
            <div className="w-full md:w-1/3 mb-4 md:mb-0 px-25">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {category.title}
              </h2>
            </div>

            <div className="w-full md:w-2/3 flex flex-wrap gap-6 justify-start">
              {category.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col w-[12vh] h-[17vh] items-center p-3 rounded-xl shadow-lg border-blue-300 border-1"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={60}
                    className="mb-4"
                  />
                  <span className="text-sm font-medium text-white mt-2 text-center items-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
