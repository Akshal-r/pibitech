"use client";
import React, { useState } from "react";
import { Platforms } from "@/contact/constant";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Section6 = () => {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div id="products" className="min-h-[100vh] bg-white pt-20">
      <h1 className="text-[45px] md:text-5xl font-bold text-gray-800 tracking-widest text-center">
        Our Innovative AI Products
      </h1>
      <p className="text-xl text-gray-800 text-center px-4 max-w-3xl mx-auto mt-4">
        Our AI-driven products are designed to empower people and drive positive
        social change, solving real-world challenges for a better future.
      </p>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-700 w-40 h-1 rounded-3xl mx-auto my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 px-5 md:px-20">
        {Platforms.map((items, index) => (
          <Link href={items.link} key={index}>
            <div
              className="bg-white p-5 h-[full] rounded-lg shadow-lg cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsOpen(index)}
              onMouseLeave={() => setIsOpen(null)}
            >
              <div className="w-full aspect-video mb-4 relative overflow-hidden rounded-t-xl">
                <h1 className="absolute top-2 left-2 bg-indigo-600 px-3 py-1 rounded-3xl text-xs text-white z-10">
                  Portfolio# {null}
                </h1>
                <Image
                  src={items.image}
                  alt={items.title}
                  fill
                  className={`rounded-t-xl object-cover transition-transform duration-1000 ${
                    isOpen === index ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div className="flex items-center pb-3">
                <h1 className="font-bold text-gray-800 text-2xl tracking-wide">
                  {items.title}
                </h1>
                <h3 className="text-indigo-600 ml-auto font-bold">AI</h3>
              </div>
              <p className="text-gray-600 pb-5">{items.content}</p>
              <div className="flex items-center">
                <h1 className="text-sm text-indigo-600 font-semibold">
                  Explore Now
                </h1>
                <ArrowRight
                  className={`w-4 h-4 text-indigo-600 transition-all duration-300 ${
                    isOpen === index ? "ml-10" : "ml-4"
                  }`}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section6;
