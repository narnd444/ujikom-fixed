"use client"
import React, { useState } from 'react';
import { FaHome, FaVideo, FaGamepad, FaRegComment, FaNewspaper } from "react-icons/fa";
import { BiLogoZoom } from "react-icons/bi";
import Link from 'next/link';
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`min-h-screen sticky top-0 flex flex-col justify-between items-start bg-gradient-to-b from-blue-100 to-white rounded-br-3xl shadow-md shadow-slate-600/50 p-5 flex-none z-50 transition-all duration-300 ${isExpanded ? 'w-60 px-10' : 'w-16 px-3'}`}
    >
      <div className='top-wraper'>
        <img src="/assets/logo/logo.svg" alt="" className={`h-16 transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`} />
        <nav className='mt-10 space-y-5 w-max'>
          <Link href="/page/user/home" className='flex font-Outfit items-center text-black text-lg'>
            <FaHome className='mx-3'/> {isExpanded && 'Beranda'}
          </Link>
          <Link href="/page/user/video" className='flex font-Outfit items-center text-black text-lg'>
            <FaVideo className='mx-3'/> {isExpanded && 'Video'}
          </Link>
          <Link href="/page/user/game" className='flex font-Outfit items-center text-black text-lg'>
            <FaGamepad className='mx-3'/> {isExpanded && 'Game'}
          </Link>
          <Link href="" className='flex font-Outfit items-center text-black text-lg'>
            <BiLogoZoom className='mx-3'/> {isExpanded && 'Zoom & Meeting'}
          </Link>
          <Link href="" className='flex font-Outfit items-center text-black text-lg'>
            <FaNewspaper className='mx-3'/> {isExpanded && 'News'}
          </Link>
          <Link href="" className='flex font-Outfit items-center text-black text-lg'>
            <FaRegComment className='mx-3'/> {isExpanded && 'Community'}
          </Link>
        </nav>
      </div>
      <div className='bottom-wraper w-full items-center space-y-3 flex flex-col'>
        <a href="" className='flex font-Outfit items-center text-black rounded-2xl text-sm bg-transparent border border-slate-600 w-full p-2 justify-center'>
          {isExpanded ? 'Profile' : <span><FaUser/></span>}
        </a>
        <a href="" className='flex font-Outfit items-center text-white rounded-2xl text-sm bg-primary w-full p-2 justify-center'>
          {isExpanded ? 'Setting' : <span><IoIosSettings/></span>}
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
