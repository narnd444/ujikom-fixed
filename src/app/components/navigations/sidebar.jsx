import React from 'react'
import { FaHome,FaVideo,FaGamepad,FaRegComment,FaNewspaper } from "react-icons/fa";
import { BiLogoZoom } from "react-icons/bi";

const Sidebar = () => {
  return (
    <section className='h-screen w-max sticky top-0 flex flex-col justify-between items-start bg-white rounded-b-3xl shadow-md shadow-slate-600/50 p-5 px-10'>
       <div className='top-wraper'>
        <img src="/assets/logo/logokl.svg" alt="" className='h-14' />
        <nav className='mt-10 space-y-5'>
            <a href="" className='flex font-Outfit items-center text-black text-lg'><FaHome className='mr-3'/> Beranda</a>
            <a href="" className='flex font-Outfit items-center text-black text-lg'><FaVideo className='mr-3'/> Video</a>
            <a href="" className='flex font-Outfit items-center text-black text-lg'><FaGamepad className='mr-3'/> Game</a>
            <a href="" className='flex font-Outfit items-center text-black text-lg'><BiLogoZoom className='mr-3'/> Zoom & Meeting</a>
            <a href="" className='flex font-Outfit items-center text-black text-lg'><FaNewspaper className='mr-3'/> News</a>
            <a href="" className='flex font-Outfit items-center text-black text-lg'><FaRegComment className='mr-3'/> Comunity</a>
        </nav>
        </div>
        <div className='bottom-wraper w-full  items-center space-y-3 flex flex-col'>
        <a href="" className='flex font-Outfit items-center text-black rounded-2xl  text-sm bg-transparent border border-slate-600 w-full p-2 justify-center'>Profile</a>
        <a href="" className='flex font-Outfit items-center text-white rounded-2xl  text-sm bg-primary w-full p-2 justify-center '>Setting</a>
        </div>
    </section>
  )
}

export default Sidebar;