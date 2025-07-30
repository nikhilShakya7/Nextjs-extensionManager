import { motion } from "framer-motion";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";

const Main = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>

      <motion.div
        className="absolute inset-0 bg-black z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
      ></motion.div>

      <div className="relative z-20 pt-40 px-6 md:px-12 lg:px-24 text-[#fdffec]">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforming Spaces,
        </motion.h1>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Enhancing Homes
        </motion.h1>

        <motion.h2
          className="text-xl md:text-3xl font-light max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Experienced & Reliable Remodelers since 1968
        </motion.h2>
        <button className="group relative bg-black text-white px-8 py-4 mt-10 rounded-md font-4xl overflow-hidden transition-all duration-300 hover:bg-[#847539] hover:cursor-pointer">
          <span className="flex items-center justify-center gap-2 font-medium ">
            Learn More
            <GoArrowDownRight className="transition-all duration-300 group-hover:rotate-315" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Main;
