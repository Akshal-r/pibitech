import { teamMembers } from "@/contact/constant";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section7 = () => {
  return (
    <div
      id="meetourteam"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-6 py-12"
    >
      <h1 className="text-black text-5xl font-extrabold text-center">
        Meet Our Team
      </h1>
      <p className="text-xl text-gray-700 mt-3 text-center">
        The passionate individuals behind our vision and success.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg h-[50vh] p-6 flex flex-col items-center text-center"
          >
            <div className=" w-30 aspect-square relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-blue-200"
              />
              <a
                href={member.link}
                target="_blank"
                className="absolute bottom-0 right-0 translate-x-2 translate-y-2 bg-blue-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-md"
              >
                in
              </a>
            </div>

            <h1 className="text-3xl  mt-7 font-semibold text-black  flex items-center justify-center">
              {member.title}
            </h1>
            <p className="text-sm text-gray-800 mt-2">{member.role}</p>
            <p className="text-sm text-gray-700 mt-3">{member.description}</p>

            <div className="w-15 h-1 mt-auto mb-6 bg-blue-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section7;
