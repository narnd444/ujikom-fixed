import React from 'react'
import Sidebar from '@/app/components/navigations/sidebar' 
import Navbar from '@/app/components/navigations/navbar'
const HomeUser = () => {
  return (
    <section className='w-full min-h-screen h-max flex font-Poppins bg-custom-slate'>
        <div className='sidebar'>
           <Sidebar/>
        </div>
        <div className='flex flex-col  w-full'>
          <Navbar/>
            <main className='p-10 h-screen'>
              <h1 className='text-black'>Kakang Hayang EE</h1>
            </main>
        </div>
    </section>
    
  )
}

export default HomeUser