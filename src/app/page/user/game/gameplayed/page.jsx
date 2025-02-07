import React from 'react'
import NavbarPlayed from '@/app/components/navigations/played/navbarPlayed'
const GamePlayedPage = () => {
  return (
    <div className='w-full h-screen flex flex-col space-y-10 items-center p-5'>
     <NavbarPlayed/>
    <iframe src="https://www.onlinegames.io/games/2022/unity4/cat-simulator/index.html" className='rounded-xl w-full h-full'></iframe>
    </div>
  )
}

export default GamePlayedPage