
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-2xl p-7 flex flex-col space-y-5 shadow-lg  w-80  border-transparent hover:border-blue-500 border-1 transition-all duration-300 ease-in-out">
      {children}
    </div>
  );
};

export default Card;
