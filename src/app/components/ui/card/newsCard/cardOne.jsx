import * as React from 'react';
export default function MediaCard() {
  return (
    <div className="bg-base-100 flex w-full rounded-2xl shadow-xl text-slate-700 ">
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" className='object-cover rounded-2xl w-3/12 h-full' />
        <div className="flex flex-col space-y-1 w-8/12 p-5">
            <h2 className="text-xl">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
    </div>
  );
}
