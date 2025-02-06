import React from 'react'
import { IoIosNotifications } from "react-icons/io";
const Navbar = () => {
  return (
    <section className='flex justify-between space-x-5 w-full h-max p-5 px-10 items-center font-Poppins bg-gradient-to-r from-blue-100 to-white  shadow-sm shadow-slate-500/30 rounded-br-3xl sticky top-0 z-10'>
        <div className='flex items-center space-x-4 h-10'>
            <h1 className='text-black bg-secondary p-2 px-5 rounded-badge text-xs'>User</h1>
        </div>
        <div className='flex items-center space-x-4 h-10'>
            <div className='flex items-center space-x-4 h-10'>
                <h1 className='text-black'>Kakang Bahar</h1>
                <img src='/assets/avatar/avatar_df.jpg' className='rounded-full object-cover h-8'/>
            </div>
            <IoIosNotifications className='text-stone-800 transition-all duration-300 hover:scale-110 cursor-pointer text-2xl'/>
        </div>
    </section>
  )
}

export default Navbar