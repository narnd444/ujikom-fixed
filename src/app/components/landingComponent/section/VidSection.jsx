import React from 'react'

const VidSection = () => {
  return (
    <section className='w-full h-screen relative flex' id='video'>
        <video muted autoPlay loop className='h-full w-full object object-cover'>
            <source src='/assets/bghero.mp4' type='video/mp4'/>
        </video>
        <div className='absolute right-5 top-5'>
            <h1 className='text-3xl max-w-md text-left bg-secondary/30 px-1'>Video Demo Pembelajaran di K-Learns</h1>
        </div>
    </section>
  )
}

export default VidSection