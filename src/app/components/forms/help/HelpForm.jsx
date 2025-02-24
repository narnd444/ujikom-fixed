import React from 'react'

const HelpForm = () => {
  return (
    <div className='flex flex-col space-y-10 items-center'>
        <h1 className='text-slate-800 text-2xl'>
            Bantuan
        </h1>
        <div className='flex flex-col space-y-5 text-slate-600'>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-md font-medium">Bagaimana cara memutar Video?</div>
            <div className="collapse-content">
                <p className='w-96 text-sm'>anda cukup pergi ke halaman video lalu pilih slah satu video yang akan anda tonton dengan cara mengklilknya</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md font-medium">Apakah bisa melihat pelajaran lain?</div>
            <div className="collapse-content">
                <p className='w-96 text-sm'>untuk saat ini kami hanya menyediakan pelajaran matematika dan inggris lalu ditambah materi sejarah yang basu saja hadir</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-md font-medium">Bagaimana cara menonton konten berbayar?</div>
            <div className="collapse-content">
                <p className='w-96 text-sm'>untuk menonton konten berbayar anda harus melakukan pembelian konten tersebut.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HelpForm