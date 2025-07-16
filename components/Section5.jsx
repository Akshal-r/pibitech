import React from "react";
import { industryAIApplications } from "@/contact/constant";
import Image from "next/image";

const Section5 = () => {
  return (
    <div
      id="industries"
      className=" min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-10 py-6"
    >
      <h1 className="text-purple-700 flex flex-col mt-5 font-extrabold text-6xl justify-center items-center">
        Industries We Serve
      </h1>
      <p className="text-xl text-gray-800  mt-6 flex justify-center items-center">
        We provide AI solutions and digital transformation services across
        various industries:
      </p>
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-10 py-5">
        {industryAIApplications.map((item, index) => (
          <div
            key={index}
            className="p-6 px-5 bg-white rounded-2xl shadow-lg  border-transparent border-t-purple-700 border-4 "
          >
            <div className="w-14 h-14 relative">
              <Image
                src={`/images/in${index}.png`}
                alt={item.title}
                fill
                className="mb-4"
              />
            </div>
            <h1 className="text-2xl font-bold px-2 py-2 text-left">
              {item.title}
            </h1>

            <p className="text-gray-600 text-base py-3">{item.content}</p>
            <div className="w-20 h-1 mt-5 bg-blue-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
