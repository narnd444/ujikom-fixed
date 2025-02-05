import { IoIosArrowRoundBack } from "react-icons/io";
import React from 'react'
import Link from "next/link";

const RegistPage = () => {
  return (
    <section className='h-screen w-full flex p-12 px-16 bg-custom-slate font-Poppins justify-center items-center'>
      <div className='w-full h-full flex border rounded-3xl border-slate-100/40 shadow-md shadow-slate-800/50  bg-white'>
        <div className='w-4/12 flex flex-col space-y-4  shadow-slate-800/30 shadow-md border-slate-100/50 border rounded-3xl'>
           <div className='p-10'>
            <h1 className='text-black text-4xl w-32 font-medium'>Daftar Sekarang!</h1>
            <img src="/assets/vector/regist-ilustrat.svg" alt="" className='w-80'/>
            <div className='flex flex-col w-full justify-start items-center'>
              <h1 className='3xl text-black'>atau</h1>
              <h1 className='3xl text-black '>sudah punya akun?</h1>
              <Link href="/page/user/login" className=' p-3 px-5 bg-primary mt-3 rounded-full text-sm transition-all duration-300 hover:scale-110 cursor-pointer'>Login sekarang juga!</Link>
            </div>
          </div>
        </div>

        <div className='w-8/12 flex flex-col space-y-5 py-10 px-16'>
          <div className='flex w-full justify-between space-x-5 text-black items-start'>
            <h1 className='text-xl font-semibold w-28'>Isi Data diri anda!</h1>
            <Link href="/" className='items-center flex font-light text-slate-800 transition-all duration-300 hover:border-b cursor-pointer hover:border-slate-600'><IoIosArrowRoundBack className="mr-2"/> Kembali</Link>
          </div>
          <form action="" className="flex flex-col space-y-4 font-Outfit text-stone-900">
            <div className="w-full flex items-stretch space-x-14">
              <div className="flex flex-col space-y-4 w-6/12">
                  <label htmlFor="">Nama Depan <input type="text" className="w-full border border-slate-600 rounded-2xl p-2 mt-2" placeholder="mamang"/></label>
                  <label htmlFor="">Nama Belakang <input type="text" className="w-full border border-slate-600 rounded-2xl p-2 mt-2" placeholder="cagos"/></label>
              </div>
              <label htmlFor="" className="flex-col flex w-6/12"> Alamat Lengkap
              <textarea name="" id="" placeholder="Hahaydeudeuh" className="w-full h-full p-2 border border-slate-600 rounded-2xl mt-2"></textarea>
              </label>
            </div>  
            <div className="w-full flex items-stretch space-x-14">
              <div className="flex flex-col space-y-4 w-6/12">
                  <label htmlFor="">Username <input type="text" className="w-full border border-slate-600 rounded-2xl p-2 mt-2" placeholder="mamang"/></label>
                  <label htmlFor="">Email <input type="email" className="w-full border border-slate-600 rounded-2xl p-2 mt-2" placeholder="cagos"/></label>
              </div>
              <div className="flex flex-col space-y-4 w-6/12">
                  <label htmlFor="">Kata Sandi <input type="password" className="w-full border border-slate-600 rounded-2xl p-2 mt-2" placeholder="mamang"/></label>
                  <label htmlFor="">Ulangi Kata Sandi <input type="text" className="w-full border border-slate-600 rounded-2xl p-2 mt-2" placeholder="cagos"/></label>
              </div>
            </div> 
            <div className="w-full items-center py-3 space-y-5 flex flex-col">
              <div className="flex space-x-2 items-center">
                <input type="checkbox" className="rounded-xl"/>
                <p className="text-black text-xs">Saya paham dan menyetujui seluruh kebijakan privasi dan keamanan yang telah disediakan oleh pihak penyelenggara.</p>
              </div>
              <Link href="/page/user/login" className="justify-center bg-primary p-2 px-10 text-white rounded-full">Daftar</Link>
            </div> 
          </form>
        </div>


      </div>


    </section>
  )
}

export default RegistPage;