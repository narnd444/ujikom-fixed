import React from 'react'

const CardTop = () => {
  return (
              <div className="card bg-base-100 image-full h-80 shadow-slate-500/40 shadow-md z-0 w-full ">
               <figure className='w-full'>
                 <img
                   src="/assets/vector/bgvideouser.png"
                   alt="Shoes" className='w-full object-cover' />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">Mau nonton apa hari ini?</h2>
                 <p>Segera tonton videonya!</p>
               </div>
             </div>
  )
}

export default CardTop