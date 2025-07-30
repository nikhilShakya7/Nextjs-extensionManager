"use client";
import React, { useState, useEffect } from "react";
import { GoArrowDownRight } from "react-icons/go";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans w-full">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-800"
            : "bg-black"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center py-3 px-6">
            {" "}
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="relative group">
                <h1 className="m-0 text-white text-xl md:text-2xl font-bold tracking-wide cursor-pointer transition-all duration-300 group-hover:bg-clip-text">
                  {" "}
                  Renovyte.
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#847539] transition-all duration-300 group-hover:w-full"></div>
              </div>

              <button
                className="md:hidden focus:outline-none relative z-10 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 relative">
                  {" "}
                  <span
                    className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-2.5" : "top-0.5"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 top-2.5 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute block w-5 h-0.5 bg-white transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 top-2.5" : "top-4.5"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
            <nav
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-t md:border-t-0 border-gray-800 md:block`}
            >
              <ul className="flex flex-col md:flex-row list-none m-0 p-4 md:p-0 gap-2 md:gap-6">
                {" "}
                {["Service", "Product", "About Us"].map((item, index) => (
                  <li key={item} className="relative group">
                    <a
                      href="#"
                      className="block cursor-pointer text-white font-medium py-2 md:py-1 px-4 md:px-0 rounded-lg md:rounded-none transition-all duration-300 hover:bg-clip-text md:hover:bg-none md:hover:bg-transparent relative overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item}
                      <span className="hidden md:block absolute bottom-0 left-0 w-0 h-0.5 bg-[#847539] transition-all duration-300 group-hover:w-full"></span>
                      <span className="md:hidden absolute inset-0 bg-[#847539] rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></span>
                    </a>
                  </li>
                ))}{" "}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="h-16"></div>
    </div>
  );
};

export default Header;
