import React from 'react'
import Navbar from '@/app/components/navigations/navbar'
import Sidebar from '@/app/components/navigations/sidebar'
import Link from 'next/link'
import ModalTambahVideo from '@/app/components/forms/addvideo/addvideo'
import TableVideo from '@/app/components/tables/Video/TableVideo'
const TambahVideoPage = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
        <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="admin"/>
        </div>

        <div className="flex-1 flex flex-col w-full">
        <Navbar pos="Admin" role="admin"/>
        <main className="p-10 w-full text-slate-800 flex flex-col space-y-5">
            <ModalTambahVideo role="admin"/>
            <TableVideo/>
            </main>
        </div>
    </section>
  )
}

export default TambahVideoPage