import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar'
import Navbar from '@/app/components/navigations/navbar'
import CardOne from '@/app/components/ui/card/dashboardAdmin/cardOne'
import TablePetugas from '@/app/components/tables/TablePetugas'
import TableGame from '@/app/components/tables/Game/TableGame'
import TableVideo from '@/app/components/tables/Video/TableVideo'
const HomePageAdmin = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
    <div className="sticky top-0 h-screen flex-none">
      <Sidebar role="admin"/>
    </div>

    <div className="flex-1 flex flex-col w-full">
      <Navbar pos="Admin" role="admin"/>
      <main className="p-10 w-full flex flex-col space-y-5 text-slate-800">
      <CardOne role="admin"/>
        <TablePetugas/>
        <TableVideo/>
        <TableGame/>
        </main>
    </div>
    </section>

  )
}

export default HomePageAdmin