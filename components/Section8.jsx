import React from "react";

const Section8 = () => {
  return (
    <div
      id="contactus"
      className=" h-[100vh] flex flex-col bg-purple-50 w-[full]  px-10 py-10"
    >
      <h1 className="text-8xl md:text-6xl font-bold text-gray-800 tracking-widest flex text-center items-center justify-center">
        Contact Us
      </h1>
      <p className="text-sm  mt-4 text-gray-600 font-semibold  flex text-center items-center justify-center">
        Reach out—we're excited to connect with you!
      </p>
      <div className="bg-blue-500 rounded-full mt-6 w-25 h-1 flex text-center items-center justify-center"></div>
      <div className="max-w-xl justify-between px-17 start-left">
        <h2 className="text-2xl text-black font-semibold mt-10 w-150 h-13 ">
          Let's Spark a Transformative Conversation
        </h2>
        <p className=" text-sm text-gray-700">
          We're here to help! Whether you need AI consulting, a quotation,
          product development support, or career opportunities, reach out to us.
        </p>
        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 px-8 py-5">
                {aiServices.map((item, index) => (
                  <div
                    key={index}
                    className="p-7 bg-white rounded-2xl shadow-lg  border-transparent hover:border-blue-500 border-1 "
                  >
                    
                    <h1 className="text-xl font-bold px-2 py-5">{item.title}</h1>
        
                    <p className="text-gray-600 text-base py-5">{item.content}</p>
        ))}
        </div>
        </div>
    </div>
  );
};

export default Section8;
