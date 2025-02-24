import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar'
import Navbar from '@/app/components/navigations/navbar'
import CardOne from '@/app/components/ui/card/dashboardAdmin/cardOne'
import TablePetugas from '@/app/components/tables/TablePetugas'
const HomePageAdmin = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
    <div className="sticky top-0 h-screen flex-none">
      <Sidebar role="staff"/>
    </div>

    <div className="flex-1 flex flex-col w-full">
      <Navbar pos="Staff" role="staff"/>
      <main className="p-10 w-full flex flex-col space-y-5 text-slate-800">
      <CardOne/>
        <TablePetugas/>
        </main>
    </div>
    </section>

  )
}

export default HomePageAdmin