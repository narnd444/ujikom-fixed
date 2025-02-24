import React from 'react'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'
const CardGame = () => {
  return (
    <div className='flex flex-col space-y-5'>
            <div className='flex justify-between items-center w-full mt-7 font-bold text-stone-800'>
              <h1 className='text-3xl w-60 font-Outfit '>Game</h1>
              <a className='text-md flex items-center'>Lihat semua <FaArrowRightLong className='ml-2' /></a>
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
  )
}

export default CardGame