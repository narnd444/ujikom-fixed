import React from 'react'

const VideoSection = () => {
  return (
    <section className='w-full h-screen  flex' id='video'>
        <video muted autoPlay loop className='h-full w-full object-left object object-cover'>
            <source src='/assets/bgvideok.mp4' type='video/mp4'/>
        </video>
    </section>
  )
}

export default VideoSection