"use client"
import React, { useState } from 'react';
import DropdownNotification from './notifdropdown';
import Link from 'next/link';

const Navbar = ({ pos, role }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section className='flex justify-between space-x-5 w-full h-max p-5 px-10 items-center font-Poppins bg-gradient-to-r from-blue-100 to-white shadow-sm shadow-slate-500/30 rounded-br-3xl sticky top-0 z-10'>
      <div className='flex items-center space-x-4 h-10'>
        <h1 className='text-black bg-secondary p-2 px-5 rounded-badge text-xs'>{pos}</h1>
      </div>
      <div className='flex items-center space-x-4 h-10'>
        <div className='relative'>
          <button onClick={() => setIsOpen(!isOpen)} className='flex items-center space-x-4 h-10'>
            <h1 className='text-black'>Kakang Bahar</h1>
            <img src='/assets/avatar/avatar_df.jpg' className='rounded-full object-cover h-8'/>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200">
              {role == 'user' && 
               <Link href="/page/user/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
               Logout
             </Link>}
              {role == 'admin' && 
               <Link href="/page/admin/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
               Logout
             </Link>}
              {role == 'staff' && 
               <Link href="/page/staff/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
               Logout
             </Link>}
             
            </div>
          )}
        </div>
        {role === "user" && <DropdownNotification />}
      </div>
    </section>
  );
};

export default Navbar;
