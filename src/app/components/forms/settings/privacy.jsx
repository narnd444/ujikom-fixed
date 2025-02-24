import React from 'react'

const PrivacyForm = () => {
  return (
        <form action="" className='flex flex-col  w-max items-center text-slate-800'>
          <h1 className='text-slate-700 text-2xl mb-10'>Keamanan dan Privasi</h1>
          <div className='flex space-x-5 w-full mb-5'>
            <label className="input input-bordered flex items-center gap-2 ">
              Email
              <input type="email"  className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Password
              <input type="Password" className="grow" placeholder="Daisy" />
            </label>
          </div>
          <div className='flex space-x-5 w-max mb-7'>
            <label className="flex flex-col items-center gap-3">
              Alamat
              <textarea className="textarea border border-slate-400 w-96" placeholder="Bio"></textarea>
            </label>
          </div>
          <button className='flex p-2 px-5 bg-primary rounded-full text-white'>Simpan</button>
        </form>
  )
}

export default PrivacyForm