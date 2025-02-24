import React from 'react'
import NavbarPlayed from '@/app/components/navigations/played/navbarPlayed'
import Link from 'next/link'
const ProfilePage = () => {
  return (
   <section className='h-screen w-full flex flex-col items-center space-y-10 p-10 bg-white'>
    <NavbarPlayed/>
    <div className='flex w-full items-end justify-center h-96 px-20 p-10 bg-profile rounded-2xl shadow-md shadow-slate-700/30 bg-center'>
        <div className='h-32 rounded-3xl p-5 w-full border shadow-sm shadow-slate-700/30 bg-white bg-opacity-80 flex'>
            <div className='flex w-full justify-between space-x-5 items-center'>
                <div className='flex items-center space-x-5'>
                    <img src="/assets/avatar/avatar_df.jpg" alt="" className='rounded-full h-20 w-20 border shadow-sm shadow-slate-800'/>
                    <div className='flex flex-col space-y-2 items-start text-slate-800'>
                        <h1 className='text-lg bg-white p-1 shadow-sm px-4 rounded-full'>Nama : <span>Anin</span></h1>
                        <p className=' bg-white p-1 shadow-sm px-4 rounded-full'>Username : <span>@aninut</span></p>
                    </div>
                </div>
                    <div className='flex flex-col space-y-2 items-end text-slate-800'>
                        <h1 className='text-lg bg-white p-1 shadow-sm px-4 rounded-full'><span>Pengguna</span></h1>
                    </div>
            </div>
        </div>
    </div>
    <div className='flex w-full justify-center space-x-5 items-center'>
    <Link href="/page/user/home" className='bg-primary px-7 p-2 rounded-xl transition-all duration-300 hover:scale-110'>Kembali</Link>
    <Link href="/page/user/settingpage" className='bg-transparent text-primary border-primary border px-5 p-2 rounded-xl transition-all duration-300 hover:scale-110'>Edit Profile</Link>
    </div>
   </section>
  )
}

export default ProfilePage