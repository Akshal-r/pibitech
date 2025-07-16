import React from "react";
import Image from "next/image";
import Link from "next/link";
import { aiServices } from "@/contact/constant";

const Section2 = () => {
  return (
    <div
      id="services"
      className="min-h-[100vh] w-[full]  flex flex-col items-center justify-center gap-1 px-10 py-3 bg-white mt-30"
    >
      <h1 className="text-4xl flex flex-col font-extrabold justify-center text-blue-800 items-center text-center">
        Our AI Services
      </h1>
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 px-8 py-5">
        {aiServices.map((item, index) => (
          <div
            key={index}
            className="p-7 bg-white rounded-2xl shadow-lg  border-transparent hover:border-blue-500 border-1 "
          >
            <div className="w-14 h-14 relative">
              <Image
                src={`/images/se${index}.png`}
                alt={item.title}
                fill
                className="mb-4"
              />
            </div>
            <h1 className="text-xl font-bold px-2 py-5">{item.title}</h1>

            <p className="text-gray-600 text-base py-5">{item.content}</p>

            <a href="#Home" className="text-blue-700 text-sm hover:underline">
              Learn More
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-center">
        <p className="flex text-md px-2 py-5  text-center text-gray-800 w-[screen] ">
          Ready to revolutionize your business with cutting-edge AI?
        </p>
        <Link href="#contactus">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white  px-8 py-2 rounded-full shadow hover:opacity-90 ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Section2;
