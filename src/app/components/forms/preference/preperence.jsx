import React from 'react'

const PreferenceForm = () => {
  return (
        <form action="" className='flex flex-col w-max items-center text-slate-800'>
          <h1 className='text-slate-700 text-2xl mb-10'>Referensi Personal</h1>
          <div className='flex flex-col space-y-5 w-full mb-5'>
            <label htmlFor="" className='flex flex-col items-center space-y-3'>
                <p>Materi Paling Disukai</p>
                <select className="select select-bordered w-60">
                    <option disabled value="none" selected>Pilih Satu!</option>
                    <option value="memew">Matematika</option>
                    <option value="memew">Bahasa Inggris</option>
                    <option value="memew">Sejarah</option>
                </select>
            </label>
            <label htmlFor="" className='flex flex-col items-center space-y-3'>
                <p>Fitur Paling Disukai</p>
                <select className="select select-bordered w-52">
                    <option disabled value="none" selected>Pilih Satu!</option>
                    <option value="memew">Matematika</option>
                    <option value="memew">Bahasa Inggris</option>
                    <option value="memew">Sejarah</option>
                </select>
            </label>
            <label htmlFor="" className='flex flex-col items-center space-y-3'>
                <p>Waktu untuk belajar</p>
                <input type="time" className='p-2 px-5 rounded-full w-60 bg-transparent border border-slate-500/50' />
            </label>
          </div>
          
          <button className='flex p-2 px-5 mt-3 bg-primary rounded-full text-white'>Simpan</button>
        </form>
  )
}

export default PreferenceForm