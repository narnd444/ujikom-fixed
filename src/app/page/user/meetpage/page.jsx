import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar'
import Navbar from '@/app/components/navigations/navbar'
import { FaArrowRightLong } from "react-icons/fa6";
const GameUser=() => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate font-Poppins">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="user"/>
      </div>

      <div className="flex-1 flex flex-col w-full ">
        <Navbar pos="Pengguna" role="user"/>
            <main className="p-10 w-full space-y-10">
                        <div className='flex flex-col space-y-5'>
                          <div className='flex justify-between items-center w-full mt-7 font-bold text-stone-800'>
                            <h1 className='text-3xl w-72 font-Outfit '>Yuk Belajar dengan guruMu di Zoom!</h1>
                            <a className='text-md flex items-center'>Pelajari lebih lanjut <FaArrowRightLong className='ml-2' /></a>
                          </div>
              
                          <div className='flex flex-wrap pb-10 items-stretch'>
                              <div className="w-full max-w-xs  m-3 bg-white border border-gray-200 rounded-lg shadow-sm ">
                                      <a href="#">
                                          <img className="p-8 rounded-t-lg" src="/assets/materi/math/cover/math-vid.jpg" alt="product image object-cover h-48" />
                                      </a>
                                      <div className="px-5 pb-5">
                                          <a href="#">
                                          <h5 className="text-xl font-semibold tracking-tight text-stone-800">
                                              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                                          </h5>
                                          </a>
                                          <div className="flex items-center justify-between mt-5">
                                          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                              Gabung
                                          </a>
                                          </div>
                                      </div>
                              </div>
                          </div>
                        </div>
            </main>
        </div>
    </section>
  )
}

export default GameUser