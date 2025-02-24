import React from 'react'
import Navbar from '@/app/components/navigations/navbar'
import Sidebar from '@/app/components/navigations/sidebar'
import Link from 'next/link'
import ModalTambahPetugas from '@/app/components/forms/addpetugasform/page'
import TablePetugas from '@/app/components/tables/TablePetugas'
const TambahPetugasPage = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
        <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="admin"/>
        </div>

        <div className="flex-1 flex flex-col w-full">
        <Navbar pos="Admin" role="admin"/>
        <main className="p-10 w-full text-slate-800 flex flex-col space-y-5">
            <ModalTambahPetugas/>
            <TablePetugas/>
            </main>
        </div>
    </section>
  )
}

export default TambahPetugasPage