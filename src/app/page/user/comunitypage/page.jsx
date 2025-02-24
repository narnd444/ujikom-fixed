import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar' 
import Navbar from '@/app/components/navigations/navbar'
import { BsFillSendFill } from "react-icons/bs";
const ComunityUser = () => {
  return (
    <section className="w-full min-h-screen flex bg-custom-slate">
      <div className="sticky top-0 h-screen flex-none">
        <Sidebar role="user"/>
      </div>

      <div className=" flex flex-col w-full h-full">
        <Navbar role="user" pos="Pengguna"/>
        <main className="p-10 w-full h-max flex-1">
        <div className="bg-comunity bg-bottom bg-no-repeat bg-cover rounded-2xl image-full h-[530px] shadow-slate-500/40 shadow-md z-0 w-full flex flex-col items-start p-10">
          {/* Kontainer Chat dengan Scroll */}
            <div className="chat flex flex-col items-start justify-start h-full w-full overflow-y-auto max-h-[400px] pr-2">
              <div className="chat chat-start flex flex-col space-y-3">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                ))}
              </div>
            </div>

            {/* Input Pesan */}
            <div className="message flex justify-end items-end w-full space-x-3 mt-auto">
              <form action="" className="w-full flex space-x-5 text-slate-700">
                <input type="text" placeholder="Type here" className="input input-bordered w-full bg-white shadow-sm shadow-slate-700/30" />
                <button className="p-2 bg-primary rounded-full text-white px-4 shadow-sm shadow-slate-700/30">
                  <BsFillSendFill />
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}

export default ComunityUser