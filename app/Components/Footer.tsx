import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  const socialIcons = [
    {
      id: 1,
      Name: "Facebook",
      href: "www.facebook.com",
      icon: <TiSocialFacebook />,
    },
    {
      id: 2,
      Name: "Instagram",
      href: "www.instagram.com",
      icon: <TiSocialInstagram />,
    },
    {
      id: 3,
      Name: "Instagram",
      href: "www.instrageam.com",

      icon: <TiSocialTwitter />,
    },
  ];
  return (
    <footer className="bg-[#847539] text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Renovyte</h3>
            <p className="text-white">
              Making the world a better place through design and innovation.
            </p>
            <div className="flex">
              {socialIcons.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.Name}
                  className="text-white hover:transition-transform"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-white-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <address className="not-italic text-white-400 space-y-2">
              <p>123 Business Ave</p>
              <p>City, ST 12345</p>
              <p>Phone: (977) 456-7890</p>
              <p>Email: info@renovyte.com</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white-400 text-sm">
            &copy; {new Date().getFullYear()} Renovyte. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white-400 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
