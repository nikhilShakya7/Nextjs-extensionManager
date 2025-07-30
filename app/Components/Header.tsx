"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Projects", href: "/#projects" },
    { name: "About Us", href: "/#about" },
    { name: "Contact", href: "#contact" },
  ];

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
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
        <motion.div
          className="flex items-center gap-4 sm:gap-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" className="flex items-center">
            <motion.h1
              className={`text-2xl font-bold ${
                isScrolled ? "text-black" : "text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Renovyte.
            </motion.h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex ml-auto gap-4 md:gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  className={`relative text-sm md:text-base capitalize transition-colors duration-200 px-1 py-2 ${
                    activeLink === link.href.substring(1)
                      ? "text-[#847539] font-semibold"
                      : isScrolled
                      ? "text-gray-700 hover:text-[#847539]"
                      : "text-white hover:text-amber-200"
                  }`}
                >
                  {link.name}
                  {activeLink === link.href.substring(1) && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#847539]"
                    />
                  )}
                </a>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Desktop Button */}
        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#847539] to-amber-700 text-white font-semibold text-sm tracking-wide rounded-full px-6 py-2 hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(132, 117, 57, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            GET A QUOTE
          </motion.button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="sm:hidden focus:outline-none z-50"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <FaTimes
              size={24}
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          ) : (
            <FaBars
              size={24}
              className={isScrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-40"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  className={`py-3 px-4 font-medium text-base hover:bg-amber-50 rounded-lg transition-colors duration-200 ${
                    activeLink === link.href.substring(1)
                      ? "text-[#847539] bg-amber-50"
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-[#847539] to-amber-700 text-white font-semibold rounded-full px-4 py-3 hover:shadow-md transition-all duration-300"
                  whileTap={{ scale: 0.95 }}
                >
                  GET A QUOTE
                </motion.button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
