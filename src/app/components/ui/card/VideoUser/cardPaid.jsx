import React from 'react'
import Link from 'next/link'
const CardPaid = () => {
  return (
    <div className='flex flex-col space-y-5'>
            <div className='flex justify-between items-center w-full mt-7 font-bold text-stone-800'>
              <h1 className='text-3xl w-60 font-Outfit '>Belajar dengan full course video!</h1>
              <a className='text-md flex items-center'>Nimati setelah membelinya!</a>
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
                            <span className="text-3xl font-bold text-gray-900">$599</span>
                            <Link href="/page/user/video/payment" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Buy
                            </Link>
                            </div>
                        </div>
                </div>
            </div>
          </div>
  )
}

export default CardPaid