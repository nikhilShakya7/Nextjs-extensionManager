import React from "react";
import { motion } from "framer-motion";

const UsInNumber = () => {
  const stats = [
    { value: 48, label: "Current Projects" },
    { value: 282, label: "Homes Renovated" },
    { value: 35, label: "Valued Partners" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-[#D6CEAD] relative pt-20 pb-20 px-6 md:px-12 lg:px-24 text-black">
      <motion.div
        className="px-10  mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#2B2613] text-[#FAF8E4] rounded-xl flex flex-col justify-center items-center py-16 px-6 mt-10"
            variants={item}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="text-6xl font-extrabold mb-2"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
            >
              {stat.value}
            </motion.div>
            <div className="text-lg font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UsInNumber;
