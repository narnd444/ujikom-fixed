"use client";
import React, { useState } from "react";
import { FaUserCog } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";
import { IoFilterSharp } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { MdRoomPreferences } from "react-icons/md";

const SidebarSettings = ({ onMenuSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMenu, setActiveMenu] = useState("profile");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    onMenuSelect(menu); 
  };

  return (
    <div
      className={`flex flex-col sticky top-32 rounded-2xl h-fit bg-gradient-to-bl from-white to-blue-100 shadow-slate-700/30 shadow-sm transition-all duration-300  
      ${isExpanded ? "w-3/12 p-10" : "w-16 p-2"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <h1
        className={`text-slate-800 text-xl transition-opacity duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        Menu
      </h1>
      <nav className="flex flex-col space-y-5 mt-5 text-slate-700 text-sm">
        <button
          onClick={() => handleMenuClick("profile")}
          className={`flex items-center space-x-4 p-2 rounded-md ${
            activeMenu === "profile" ? "bg-blue-300" : "hover:bg-blue-100"
          }`}
        >
          <FaUserCog className="text-lg ml-2" />
          <span className={`${isExpanded ? "opacity-100" : "opacity-0 hidden"}`}>
            Profile
          </span>
        </button>
        <button
          onClick={() => handleMenuClick("privacy")}
          className={`flex items-center space-x-4 p-2 rounded-md ${
            activeMenu === "privacy" ? "bg-blue-300" : "hover:bg-blue-100"
          }`}
        >
          <SiSpringsecurity className="text-lg ml-2" />
          <span className={`${isExpanded ? "opacity-100" : "opacity-0 hidden"}`}>
            Keamanan & Privasi
          </span>
        </button>
        <button
          onClick={() => handleMenuClick("filters")}
          className={`flex items-center space-x-4 p-2 rounded-md ${
            activeMenu === "filters" ? "bg-blue-300" : "hover:bg-blue-100"
          }`}
        >
          <IoFilterSharp className="text-lg ml-2" />
          <span className={`${isExpanded ? "opacity-100" : "opacity-0 hidden"}`}>
            Filters
          </span>
        </button>
        <button
          onClick={() => handleMenuClick("preferences")}
          className={`flex items-center space-x-4 p-2 rounded-md ${
            activeMenu === "preferences" ? "bg-blue-300" : "hover:bg-blue-100"
          }`}
        >
          <MdRoomPreferences className="text-lg ml-2" />
          <span className={`${isExpanded ? "opacity-100" : "opacity-0 hidden"}`}>
            Referensi
          </span>
        </button>
        <button
          onClick={() => handleMenuClick("help")}
          className={`flex items-center space-x-4 p-2 rounded-md ${
            activeMenu === "help" ? "bg-blue-300" : "hover:bg-blue-100"
          }`}
        >
          <IoMdHelpCircle className="text-lg ml-2" />
          <span className={`${isExpanded ? "opacity-100" : "opacity-0 hidden"}`}>
            Bantuan
          </span>
        </button>
      </nav>
    </div>
  );
};

export default SidebarSettings;
