import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar'
import Navbar from '@/app/components/navigations/navbar'
import { FaArrowRightLong } from 'react-icons/fa6'
import Link from 'next/link'
const WatchLaterPage = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="user"/>
      </div>

      <div className="flex-1 flex flex-col w-full ">
        <Navbar role="user" pos="Pengguna"/>
            <main className="p-10 w-full space-y-10">
            <div className='flex flex-col space-y-5'>
            <div className='flex justify-between items-center w-full mt-7 font-bold text-stone-800'>
              <h1 className='text-3xl w-72 font-Outfit '>Tonton list video yang disimpan olehMU!!</h1>
              <a className='text-md flex items-center'>Lihat semua video<FaArrowRightLong className='ml-2' /></a>
            </div>

            <div className='flex flex-wrap pb-10 items-stretch'>
                <div className="w-full max-w-xs  m-3 bg-gradient-to-br from-blue-100 to-white border border-gray-200 rounded-xl  shadow-sm ">
                        <a href="#">
                            <img className="p-8 rounded-2xl object-cover h-48 w-full" src="/assets/materi/math/cover/math-vid.jpg" alt="product image " />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-stone-800">
                                Aljabar full Lesson With Doctor Sanyokotna Wae
                            </h5>
                            </a>
                            <div className="flex items-center justify-between mt-5">
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

export default WatchLaterPage