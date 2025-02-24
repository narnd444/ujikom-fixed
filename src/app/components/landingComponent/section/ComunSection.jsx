import React from 'react'

const ComunSection = () => {
  return (
    <section className='w-full h-screen  flex flex-col space-y-10' id='comunity'>
        <div className='p-10 flex w-full justify-center'>
          <h1 className='text-slate-700 max-w-lg text-center text-2xl'>Temukan anak-anak di sekitar yang menggunakan layanan K-Learns dengan bergabung di komunitas kami!</h1>
        </div>
        <video muted autoPlay loop className='object-cover h-96 w-full'>
          <source src='/assets/bgcomun.mp4'/>
        </video>
    </section>
  )
}

export default ComunSection