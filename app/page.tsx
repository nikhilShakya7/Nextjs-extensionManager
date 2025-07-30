"use client";
import React from "react";
import Main from "./Components/Main";
import About from "./Components/About";
import UsInNumber from "./Components/UsInNumber";
import Project from "./Components/Project";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1920px]">
        <Main />
        <About />
        <UsInNumber />
        <Project />
      </div>
    </div>
  );
};

export default Page;
