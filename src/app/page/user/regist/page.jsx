"use client"; // Jika menggunakan Next.js App Router

import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Tambahkan useRouter
import { auth, db, createUserWithEmailAndPassword, setDoc, doc } from "@/app/lib/firebase";

const RegistPage = () => {
  const router = useRouter(); // Untuk navigasi setelah registrasi sukses
  const [formData, setFormData] = useState({
    namaDepan: "",
    namaBelakang: "",
    alamat: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // Tambahkan confirmPassword
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validasi sederhana
    if (!formData.namaDepan || !formData.namaBelakang || !formData.alamat || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Semua field harus diisi!");
      setLoading(false);
      return;
    }

    // Validasi kata sandi
    if (formData.password !== formData.confirmPassword) {
      setError("Kata sandi tidak cocok!");
      setLoading(false);
      return;
    }

    try {
      // Buat akun di Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Simpan data tambahan ke Firestore
      await setDoc(doc(db, "users", user.uid), {
        namaDepan: formData.namaDepan,
        namaBelakang: formData.namaBelakang,
        alamat: formData.alamat,
        username: formData.username,
        email: formData.email,
        createdAt: new Date(),
      });

      alert("Registrasi berhasil! Silakan login.");
      router.push("/page/user/login"); // Navigasi ke halaman login
    } catch (err) {
      setError(err.message);
      alert("Registrasi gagal: " + err.message); // Tampilkan alert jika gagal
    }

    setLoading(false);
  };

  return (
    <section className="h-screen w-full flex p-12 px-16 bg-custom-slate font-Poppins justify-center items-center">
      <div className="w-full h-full flex border rounded-3xl border-slate-100/40 shadow-md shadow-slate-800/50 bg-white">
        <div className="w-4/12 flex flex-col space-y-4 shadow-slate-800/30 shadow-md border-slate-100/50 border rounded-3xl">
          <div className="p-10">
            <h1 className="text-black text-4xl w-32 font-medium">Daftar Sekarang!</h1>
            <img src="/assets/vector/login.png" alt="" className="w-96 object-cover h-80" />
            <div className="flex flex-col w-full justify-start items-center">
              <h1 className="3xl text-black">atau</h1>
              <h1 className="3xl text-black">sudah punya akun?</h1>
              <Link href="/page/user/login" className="p-3 px-5 bg-primary mt-3 rounded-full text-sm transition-all duration-300 hover:scale-110 cursor-pointer">Login sekarang juga!</Link>
            </div>
          </div>
        </div>

        <div className="w-8/12 flex flex-col space-y-2 py-10 px-16">
          <div className="flex w-full justify-between space-x-5 text-black items-start">
            <h1 className="text-xl font-semibold w-28">Isi Data diri anda!</h1>
            <Link href="/" className="items-center flex font-light text-slate-800 transition-all duration-300 hover:border-b cursor-pointer hover:border-slate-600"><IoIosArrowRoundBack className="mr-2" /> Kembali</Link>
          </div>

          {error && <p className="text-red-500 text-xs">{error}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4 font-Outfit text-stone-900">
            <div className="w-full flex items-stretch space-x-14">
              <div className="flex flex-col space-y-4 w-6/12">
                <label>Nama Depan <input type="text" name="namaDepan" onChange={handleChange} className="w-full border border-slate-600 rounded-2xl p-2 mt-2" required /></label>
                <label>Nama Belakang <input type="text" name="namaBelakang" onChange={handleChange} className="w-full border border-slate-600 rounded-2xl p-2 mt-2" required /></label>
              </div>
              <label className="flex-col flex w-6/12"> Alamat Lengkap
                <textarea name="alamat" onChange={handleChange} className="w-full h-full p-2 border border-slate-600 rounded-2xl mt-2" required></textarea>
              </label>
            </div>  

            <div className="w-full flex items-stretch space-x-14">
              <div className="flex flex-col space-y-4 w-6/12">
                <label>Username <input type="text" name="username" onChange={handleChange} className="w-full border border-slate-600 rounded-2xl p-2 mt-2" required /></label>
                <label>Email <input type="email" name="email" onChange={handleChange} className="w-full border border-slate-600 rounded-2xl p-2 mt-2" required /></label>
              </div>
              <div className="flex flex-col space-y-4 w-6/12">
                <label>Kata Sandi <input type="password" name="password" onChange={handleChange} className="w-full border border-slate-600 rounded-2xl p-2 mt-2" required /></label>
                <label>Ulangi Kata Sandi <input type="password" name="confirmPassword" onChange={handleChange} className="w-full border border-slate-600 rounded-2xl p-2 mt-2" required /></label>
              </div>
            </div> 

            <div className="w-full items-center py-3 space-y-5 flex flex-col">
              <div className="flex space-x-2 items-center">
                <input type="checkbox" required className="rounded-xl" />
                <p className="text-black text-xs">Saya menyetujui kebijakan privasi.</p>
              </div>
              <button type="submit" disabled={loading} className="justify-center bg-primary p-2 px-10 text-white rounded-full">
                {loading ? "Mendaftar..." : "Daftar"}
              </button>
            </div> 
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistPage;
