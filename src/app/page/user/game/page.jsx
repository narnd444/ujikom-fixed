import React from 'react'

const GameUser=() => {
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
                src="/assets/vector/yeti.jpg"
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
            </main>
        </div>
    </section>
  )
}

export default GameUser