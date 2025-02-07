import React from 'react'
import { IoIosNotifications } from "react-icons/io"; 
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
const NavbarPlayed = () => {
  return (
     <section className='flex justify-between space-x-5 w-full h-max p-5 px-10 items-center font-Poppins bg-gradient-to-l from-blue-100 to-white  rounded-r-3xl sticky top-0 z-10'>
            <div className='flex items-center space-x-4 h-10'>
                <Link href="../game" className='text-black p-2 px-5 rounded-badge text-sm flex items-center'><FaArrowLeft className='mr-2'/> Kembali</Link>
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

export default NavbarPlayed