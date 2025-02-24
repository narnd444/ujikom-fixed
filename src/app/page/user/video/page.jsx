import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar' 
import Navbar from '@/app/components/navigations/navbar'
import CardTop from '@/app/components/ui/card/VideoUser/CardTopVid';
import CardVid from '@/app/components/ui/card/VideoUser/cardVid';
import CardPaid from '@/app/components/ui/card/VideoUser/cardPaid';
const VideoUser = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="user"/>
      </div>

      <div className="flex-1 flex flex-col w-full">
        <Navbar pos="Pengguna" role="user"/>
        <main className="p-10 w-full flex flex-col space-y-3">
          <CardTop/>
          <CardPaid/>
            <CardVid/>
          
        </main>
      </div>
    </section>
  )
}

export default VideoUser