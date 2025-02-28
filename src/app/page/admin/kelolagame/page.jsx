import React from 'react'
import Navbar from '@/app/components/navigations/navbar'
import Sidebar from '@/app/components/navigations/sidebar'
import Link from 'next/link'
import ModalTambahGame from '@/app/components/forms/addgame/addgame' 
import TableGame from '@/app/components/tables/Game/TableGame'
const TambahGamePage = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
        <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="admin"/>
        </div>

        <div className="flex-1 flex flex-col w-full">
        <Navbar pos="Admin" role="admin"/>
        <main className="p-10 w-full text-slate-800 flex flex-col space-y-5">
            <ModalTambahGame/>
            <TableGame/>
            </main>
        </div>
    </section>
  )
}

export default TambahGamePage