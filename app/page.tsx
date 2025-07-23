import React from "react";

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-4 md:mt-10 mx-4 md:ml-20 h-16 w-full max-w-[250px] md:max-w-[1200px] border-2 border-gray-300 rounded-xl shadow-md flex items-center bg-white">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-8 md:h-10 ml-2 md:ml-4"
        />
      </div>
    </div>
  );
};

export default Page;
