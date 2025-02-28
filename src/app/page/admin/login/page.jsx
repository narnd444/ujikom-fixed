
"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPageAdmin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        return;
      }

      alert("Login Admin Berhasil!");
      router.push("/page/admin/home"); // Redirect ke halaman admin setelah login

    } catch (err) {
      setError("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <section className="h-screen w-full flex p-12 px-16 bg-custom-slate font-Poppins justify-center items-center">
      <div className="w-full h-full flex border rounded-3xl border-slate-100/40 shadow-md shadow-slate-800/50 bg-white">
        <div className="w-8/12 flex flex-col space-y-7 py-20 px-32">
          <div className="flex w-full justify-between space-x-5 text-black items-start">
            <h1 className="text-2xl font-semibold w-36">Isi form login admin!</h1>
            <Link href="/" className="items-center flex font-light text-slate-800 transition-all duration-300 hover:border-b cursor-pointer hover:border-slate-600">
              <IoIosArrowRoundBack className="mr-2" /> Kembali
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-4 font-Outfit text-stone-900">
            <div className="w-full flex flex-col space-y-4">
              <label>
                Username
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-600 rounded-2xl p-2 mt-2"
                  placeholder="admin123"
                />
              </label>
              <label>
                Kata Sandi
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-600 rounded-2xl p-2 mt-2"
                  placeholder="********"
                />
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="w-full items-center py-3 space-y-5 flex flex-col">
              <button type="submit" className="justify-center bg-primary hover:bg-blue-900 transition-all duration-300 p-2 px-10 text-white rounded-full">
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="w-4/12 flex flex-col space-y-4 shadow-slate-800/30 shadow-md border-slate-100/50 border rounded-3xl">
          <div className="p-10">
            <h1 className="text-black text-4xl w-32 font-medium">Login Sekarang!</h1>
            <img src="/assets/vector/loginAdmin.png" alt="" className="w-full mt-10" />
            <div className="flex flex-col w-full justify-start items-center">
              <h1 className="text-3xl mt-10 text-black max-w-sm">Ayo kelola aplikasinya! Login sebagai Admin</h1>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoginPageAdmin;
