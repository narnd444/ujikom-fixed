import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar'
import Navbar from '@/app/components/navigations/navbar'
const GameUser=() => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col w-full ">
        <Navbar />
            <main className="p-10 w-full space-y-10">
                <div className="card bg-base-100 image-full h-96 shadow-slate-500/40 shadow-md z-0 w-full ">
                  <figure className='w-full'>
                    <img
                      src="/assets/vector/yeti.jpg"
                      alt="Shoes" className='w-full h-sm object-cover object-top' />
                  </figure>
                <div className="card-body flex flex-col items-center h-full w-full justify-end">
                   
                  <div className="card-actions flex flex-col  items-center">
                    <h2 className="card-title text-4xl">Ayo mainkan berbagai game yang telah disediakan</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </div>
            </main>
        </div>
    </section>
  )
}

export default GameUser