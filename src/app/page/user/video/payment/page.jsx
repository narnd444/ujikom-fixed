"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function PaymentForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiration: "",
    cvv: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      router.push("../video"); 
    }, 2000);
  };

  return (
    <section className="bg-payment relative bg-top bg-cover bg-no-repeat py-8 antialiased md:py-16 h-screen w-full flex flex-col items-center justify-center">
      <Link href="../video" className="w-full absolute top-10 flex text-white justify-end px-16 items-center">
        <FaArrowLeft className='mr-2'/>Kembali
      </Link>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl flex flex-col items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Silahkan Bayar</h2>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form onSubmit={handleSubmit} className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800/50 sm:p-6 lg:max-w-xl lg:p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Nama Panjang
                  </label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="Bonnie Green" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="cardNumber" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card number*</label>
                  <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="xxxx-xxxx-xxxx-xxxx" />
                </div>
                <div>
                  <label htmlFor="expiration" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Card expiration*</label>
                  <input type="text" id="expiration" name="expiration" value={formData.expiration} onChange={handleChange} required className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="12/23" />
                </div>
                <div>
                  <label htmlFor="cvv" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">CVV*</label>
                  <input type="number" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" placeholder="•••" />
                </div>
              </div>
              <button type="submit" className="flex w-full items-center bg-primary justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Bayar Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-slate-100">
            <h3 className="text-xl font-bold">Pembayaran Berhasil!</h3>
            <p className="mt-2 text-gray-600">Anda akan dialihkan...</p>
          </div>
        </div>
      )}
    </section>
  );
}
