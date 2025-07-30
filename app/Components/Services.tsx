import { motion } from "framer-motion";
import { img } from "framer-motion/client";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";

const Services = () => {
  const stats = [
    {
      img: "images/living.jpg",
      title: "Kitchen Remodeling",
      desc: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",
    },
    {
      img: "images/bathroom.jpg",
      title: "Bathroom Remodeling",
      desc: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",
    },
    {
      img: "images/living.jpg",
      title: "Home Additionns",
      desc: "Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",
    },
  ];

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
    <>
      <section id="services">
        <div className="bg-[#FFFEED] px-6 md:px-12 lg:px-10 py-20  mx-auto">
          <motion.h1
            className="text-sm font-bold text-[#555] uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our services{" "}
          </motion.h1>

          <motion.h1
            className="text-2xl md:text-4xl lg:text-4xl mt-4 font-light mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We Offer a Range of Services <br />
            Tailored to Your Needs{" "}
          </motion.h1>
          <motion.div
            className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#584E26] text-[#FAF8E4] rounded-xl flex flex-col py-16 px-6 mt-4"
                variants={item}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={stat.img}
                  alt={stat.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <motion.div
                  className="text-6xl font-extrabold mb-2"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                ></motion.div>
                <div className="text-lg font-semibold">{stat.title}</div>
                <div className="text-lg font-light mt-6">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
          <button className="group relative bg-black text-white px-8 py-4 rounded-md font-4xl overflow-hidden transition-all duration-300 hover:bg-[#847539] hover:cursor-pointer mt-10 ">
            <span className="flex items-center justify-center gap-2 font-medium ">
              Learn More
              <GoArrowDownRight className="transition-all duration-300 group-hover:rotate-315" />
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Services;
