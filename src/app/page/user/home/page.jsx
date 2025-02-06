import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar' 
import Navbar from '@/app/components/navigations/navbar'
import { FaArrowRightLong } from "react-icons/fa6";

const HomeUser = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col w-full">
        <Navbar />
        <main className="p-10 w-full">
          <div className="card bg-base-100 image-full h-80 shadow-slate-500/40 shadow-md z-0 w-full ">
            <figure className='w-full'>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" className='w-full object-cover' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Tonton</button>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-5'>
            <div className='flex justify-between items-center w-full mt-7 font-bold text-stone-800'>
              <h1 className='text-3xl w-52 font-Outfit '>Mau Belajar apa hari ini?</h1>
              <a className='text-md flex items-center'>Lihat semua <FaArrowRightLong className='ml-2' /></a>
            </div>
            <div className='flex flex-wrap pb-10'>
              <div className="card card-compact bg-base-100 w-72 shadow-xl m-5">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-72 shadow-xl m-5">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-72 shadow-xl m-5">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Shoes!</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
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

export default HomeUser;
