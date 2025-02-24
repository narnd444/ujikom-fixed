import React from 'react'
import NavbarPlayed from '@/app/components/navigations/played/navbarPlayed'
import ImgMediaCard from '@/app/components/ui/card/cardopsi'
import Card from '@/app/components/ui/card/card'
const VideoPlayedPage = () => {
  return (
    <div className='w-full h-screen flex flex-col space-y-10 items-center p-5 pb-10'>
     <NavbarPlayed/>
    <Card/>
    </div>
  )
}

export default VideoPlayedPage