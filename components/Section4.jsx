"use client";
import React, { useState } from "react";

import { ArrowUp, ArrowDown } from "lucide-react";
import Image from "next/image";
import { aiSolutions } from "@/contact/constant";
const Section4 = () => {
  const [isOpen, SetIsOpen] = useState(null);
  return (
    <div id="" className=" flex items-center justify-center  px-10 py-5 mt-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className=" text-blue-700 text-6xl font-extrabold flex justify-center items-center py-6">
          Our AI Solutions
        </h1>
        <div className="grid max-w-7xl mx-auto mb-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-2 gap-8 px-8 py-0 mt-5 items-center justify-center">
          {aiSolutions.map((items, index) => (
            <div
              key={index}
              className="p-4 bg-white border-transparent rounded-2xl shadow-lg hover:border-blue-400 border-1 "
              onMouseEnter={() => {
                SetIsOpen((prev) => (prev != index ? index : null));
              }}
            >
              <div className="flex items-center ">
                <div className="w-10 h-10 relative">
                  <Image
                    src={`/images/so${index}.png`}
                    alt={items.title}
                    fill
                    className="mb-4"
                  />
                </div>
                <h1 className="text-black text-xl font-semibold px-4 py-5 mx-0">
                  {items.title}
                </h1>
                <div className="ml-auto">
                  {isOpen == index ? (
                    <ArrowUp className="text-blue-600" />
                  ) : (
                    <ArrowDown className="text-blue-600" />
                  )}
                </div>
              </div>
              {isOpen == index && (
                <p className="text-sm text-gray-600 ">{items.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
