import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar'; 
import Navbar from '@/app/components/navigations/navbar'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import CardTop from '@/app/components/ui/card/HomeUser/cardTop';
import CardVid from '@/app/components/ui/card/HomeUser/cardVid';
import CardGame from '@/app/components/ui/card/HomeUser/cardGame';
import CardMeet from '@/app/components/ui/card/HomeUser/cardMeet';
const HomeUser = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="user"/>
      </div>

      <div className="flex-1 flex flex-col w-full">
        <Navbar pos="Pengguna" role="user"/>
        <main className="p-10 w-full flex flex-col space-y-3">
          <CardTop/>
          <CardVid/>
         <CardGame/>
          <CardMeet/>
        </main>
      </div>
    </section>
  )
}

export default HomeUser;
