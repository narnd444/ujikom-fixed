"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaHome, FaVideo, FaGamepad, FaRegComment, FaNewspaper, FaUser } from "react-icons/fa";
import { BiLogoZoom } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { IoStopwatchSharp } from "react-icons/io5";
import Link from 'next/link';

const Sidebar = ({ role }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname(); 

  // Daftar menu berdasarkan role
  const userMenu = [
    { href: "/page/user/home", icon: <FaHome />, label: "Beranda" },
    { href: "/page/user/video", icon: <FaVideo />, label: "Video" },
    { href: "/page/user/game", icon: <FaGamepad />, label: "Game" },
    { href: "/page/user/meetpage", icon: <BiLogoZoom />, label: "Zoom & Meeting" },
    { href: "/page/user/newspage", icon: <FaNewspaper />, label: "News" },
    { href: "/page/user/comunitypage", icon: <FaRegComment />, label: "Community" },
    { href: "/page/user/watchlaterpage", icon: <IoStopwatchSharp />, label: "Tonton Nanti" },
  ];

  const adminMenu = [
    { href: "/page/admin/home", icon: <FaHome />, label: "Dashboard" },
    { href: "/page/admin/kelolapengguna", icon: <FaUser />, label: "Kelola Pengguna" },
    { href: "/page/admin/addpetugas", icon: <FaNewspaper />, label: "Kelola Petugas" },
    { href: "/page/admin/kelolagame", icon: <FaGamepad />, label: "Kelola Game" },
    { href: "/page/admin/kelolavideo", icon: <FaVideo />, label: "Kelola Video" },
  ];

  const staffMenu = [
    { href: "/page/staff/home", icon: <FaHome />, label: "Dashboard " },
    { href: "/page/staff/tasks", icon: <FaRegComment />, label: "Comunity" },
    { href: "/page/staff/kelolavideo", icon: <FaVideo />, label: "Kelola Video" },
    { href: "/page/staff/kelolazoom", icon: <BiLogoZoom />, label: "Kelola Zoom" },
    { href: "/page/staff/kelolaberita", icon: <FaNewspaper />, label: "Kelola Berita" },
  ];

  // Tentukan menu berdasarkan role
  let menuItems = [];
  if (role === "admin") {
    menuItems = adminMenu;
  } else if (role === "staff") {
    menuItems = staffMenu;
  } else {
    menuItems = userMenu;
  }

  return (
    <section 
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`min-h-screen sticky top-0 flex flex-col justify-between items-start bg-gradient-to-b from-blue-100 to-white rounded-br-3xl shadow-md shadow-slate-600/50 p-5 flex-none z-50 transition-all duration-300 ${isExpanded ? 'w-60 px-10' : 'w-16 px-3'}`}
    >
      <div className='top-wrapper'>
        <img src="/assets/logo/logo.svg" alt="Logo" className={`h-16 transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`} />
        <nav className='mt-10 space-y-3 w-max'>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href; 
            return (
              <Link 
                key={index} 
                href={item.href} 
                className={`flex font-Outfit items-center text-lg pl-3 pr-1 py-2 rounded-xl transition-all duration-200 ${
                  isActive ? 'bg-blue-400 text-white' : 'text-black hover:bg-gray-200'
                }`}
              >
                <span className='mr-3'>{item.icon}</span> {isExpanded && item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className='bottom-wrapper w-full items-center space-y-3 flex flex-col'>
       
        
        {(role === "user" || role === "staff") &&  <Link href="/page/user/profilepage" className={`flex font-Outfit items-center rounded-2xl text-sm border w-full p-2 justify-center transition-all duration-200 ${
          pathname === "/page/user/profilepage" ? 'bg-primary text-white' : 'text-black border-slate-600'
        }`}>
          {isExpanded ? 'Profile' : <FaUser />}
        </Link>}
        {(role === "user" || role === "staff") && <Link href="/page/user/settingpage" className={`flex font-Outfit items-center rounded-2xl text-sm w-full p-2 justify-center transition-all duration-200 ${
          pathname === "/page/user/settingpage" ? 'bg-primary text-white' : 'text-white bg-primary'
        }`}>
          {isExpanded ? 'Setting' : <IoIosSettings />}
        </Link>}
      </div>
    </section>
  );
};

export default Sidebar;
