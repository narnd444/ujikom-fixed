import React from 'react'

const ProfileForm = () => {
  return (
        <form action="" className='flex flex-col  w-max items-center text-slate-800'>
          <h1 className='text-slate-700 text-2xl mb-10'>Profile Settings</h1>
            <div className='flex space-x-7 w-full mb-5'>
                <div className='flex flex-col space-y-3 items-center justify-center'>
                    <div className='flex object object-cover object-center  rounded-full h-20 w-20 bg-white shadow-sm shadow-slate-400/50'>
                    </div>
                    <h1 className='text-sm w-20 text-center'>Jajang Iskandar</h1>
                </div>
                <hr className='border border-slate-400/50 rounded-lg h-20'/>
                <div className='flex flex-col space-y-5 w-max mb-7'>
                    <label className="input input-bordered flex items-center gap-2 ">
                    Nama
                    <input type="text"  className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 ">
                    Username
                    <input type="email"  className="grow" placeholder="Daisy" />
                    </label>
                </div>
            </div>
          <button className='flex p-2 px-5 bg-primary rounded-full text-white'>Simpan</button>
        </form>
  )
}

export default ProfileForm