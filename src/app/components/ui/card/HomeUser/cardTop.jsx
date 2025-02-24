import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
const CardTop = () => {
  return (
    <>
    <div className="card bg-base-100 image-full h-80 shadow-slate-500/40 shadow-md z-0 w-full ">
            <figure className='w-full'>
              <img
                src="/assets/vector/bghomeuser.png"
                alt="Shoes" className='w-full object-cover' />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tonton Berbagai Materi sekarang!</h2>
              <p>Lihat materi untuk pemula sekarang juga!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Tonton</button>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-5 w-full items-center'>
            <div className='flex justify-between items-center w-full mt-7 font-bold text-stone-800'>
              <h1 className='text-3xl w-52 font-Outfit '>Mau Belajar apa hari ini?</h1>
              <a className='text-md flex items-center'>Lihat semua <FaArrowRightLong className='ml-2' /></a>
            </div>
            <div className='flex flex-wrap pb-10 text-slate-800'>
              <div className="card card-compact bg-base-100 w-72 shadow-xl m-5 trasition-all duration-300 hover:scale-110">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Video</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Lihat</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-72 shadow-xl m-5 trasition-all duration-300 scale-110 ">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Game</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Lihat</button>
                  </div>
                </div>
              </div>
              <div className="card card-compact bg-base-100 w-72 shadow-xl m-5 trasition-all duration-300 hover:scale-110">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Meeting</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Lihat</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </>
  )
}

export default CardTop