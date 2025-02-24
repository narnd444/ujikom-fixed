import React from 'react'
import Navbar from '@/app/components/navigations/navbar'
import Sidebar from '@/app/components/navigations/sidebar'
import MediaCard from '@/app/components/ui/card/newsCard/cardOne'
const NewsPage = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
    <div className="sticky top-0 h-screen flex-none">
      <Sidebar role="user"/>
    </div>

    <div className="flex-1 flex flex-col w-full ">
      <Navbar role="user" pos="Pengguna"/>
          <main className="p-10 w-full flex flex-col items-center space-y-10">
              <div className='text-center  transition-all duration-300 flex w-full justify-between items-center'>
                <h1 className='text-slate-800 text-xl bg-white p-1 px-5 rounded-full'>Berita Terkini!</h1>
                <p className='text-slate-700 text-sm bg-white p-2 px-4 rounded-full max-w-xs'>Lihat berita terkini yang ada di lingkungan K-Learns!</p>
              </div>
              <div className='h-max flex flex-col space-y-5'>
                <MediaCard/>
              </div>
          </main>
      </div>
  </section>
  )
}

export default NewsPage