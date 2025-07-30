"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { GoArrowDownRight } from "react-icons/go";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section id="about">
        <div
          ref={ref}
          className="bg-[#FFFEED] relative pt-20 pb-20 px-6 md:px-12 lg:px-16 text-black"
        >
          <div className="mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <motion.div
              className="lg:w-1/2"
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-sm font-bold  text-[#555] uppercase">
                ABOUT OUR COMPANY
              </h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl mt-6 font-light mb-6">
                We provide professional solutions to deliver safe & efficient
                projects
              </h1>
              <h2 className="text-lg md:text-xl text-[#555] mb-8">
                This is the space to introduce visitors to the business or
                brand. Briefly explain who's behind it, what it does and what
                makes it unique. Share its core values and what this site has to
                offer.
              </h2>

              <button className="group relative bg-black text-white px-8 py-3 rounded-md font-4xl overflow-hidden transition-all duration-300 hover:bg-[#847539] hover:cursor-pointer">
                <span className="flex items-center justify-center gap-2 font-medium ">
                  Learn More
                  <GoArrowDownRight className="transition-all duration-300 group-hover:rotate-315" />
                </span>
              </button>
            </motion.div>

            {/* Image */}
            <motion.div
              className="lg:w-1/2 flex justify-center lg:justify-end"
              variants={fadeInRight}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/images/image.png"
                alt="About"
                className="rounded-lg shadow-xl max-w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
