import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Remodel",
      image: "/images/kitchen.jpg",
    },
    {
      id: 2,
      title: "Luxury Bathroom Renovation",
      image: "/images/bathroom.jpg",
    },
    {
      id: 3,
      title: "Open Concept Living Space",
      image: "/images/living.jpg",
    },
    {
      id: 4,
      title: "Outdoor Deck Extension",
      image: "/images/outdoor.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <div className="px-6 md:px-12 lg:px-10 py-20  mx-auto">
      <motion.h1
        className="text-sm font-bold text-[#555] uppercase tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Featured Remodels
      </motion.h1>

      <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl mt-4 font-light mb-12 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We Create Spaces <span className="italic font-normal">You</span> Love
      </motion.h1>

      {/* Image Slider */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]  rounded-xl ">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 10 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <motion.h3
                className="text-white text-xl md:text-2xl font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h3>
            </div>
          </motion.div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
