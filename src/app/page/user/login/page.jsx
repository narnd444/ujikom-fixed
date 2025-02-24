"use client";

import { IoIosArrowRoundBack } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth, signInWithEmailAndPassword } from "@/app/lib/firebase";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle perubahan input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.email || !formData.password) {
      setError("Email dan password harus diisi!");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Simpan user ke localStorage agar tetap login
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login berhasil!");
      router.push("/page/user/home"); // Navigasi ke halaman utama user
    } catch (err) {
      console.error("Firebase Login Error: ", err.code, err.message);
      if (err.code === "auth/user-not-found") {
        setError("Akun tidak ditemukan. Silakan daftar terlebih dahulu.");
      } else if (err.code === "auth/wrong-password") {
        setError("Password salah. Coba lagi!");
      } else {
        setError("Email atau Password Salah!");
      }
    }

    setLoading(false);
  };

  return (
    <section className="h-screen w-full flex p-12 px-16 bg-custom-slate font-Poppins justify-center items-center">
      <div className="w-full h-full flex border rounded-3xl border-slate-100/40 shadow-md shadow-slate-800/50 bg-white">
        <div className="w-8/12 flex flex-col space-y-7 py-20 px-32">
          <div className="flex w-full justify-between space-x-5 text-black items-start">
            <h1 className="text-2xl font-semibold w-36">Isi form login anda!</h1>
            <Link
              href="/"
              className="items-center flex font-light text-slate-800 transition-all duration-300 hover:border-b cursor-pointer hover:border-slate-600"
            >
              <IoIosArrowRoundBack className="mr-2" /> Kembali
            </Link>
          </div>

          {/* Form Login */}
          <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-4 font-Outfit text-stone-900">
            <div className="w-full flex items-stretch space-x-14">
              <div className="flex flex-col w-full space-y-4">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-600 rounded-2xl p-2 mt-2"
                    placeholder="example@mail.com"
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
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Login Button */}
            <div className="w-full items-center py-3 space-y-5 flex flex-col">
              <div className="flex space-x-2 items-center">
                <input type="checkbox" className="rounded-xl" required />
                <p className="text-black text-xs">
                  Saya paham dan menyetujui seluruh kebijakan privasi dan keamanan yang telah disediakan oleh pihak penyelenggara.
                </p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="justify-center bg-primary hover:bg-blue-900 transition-all duration-300 p-2 px-10 text-white rounded-full"
              >
                {loading ? "Memproses..." : "Login"}
              </button>
            </div>
          </form>
        </div>

        {/* Bagian Samping */}
        <div className="w-4/12 flex flex-col space-y-4 shadow-slate-800/30 shadow-md border-slate-100/50 border rounded-3xl">
          <div className="p-10">
            <h1 className="text-black text-4xl w-32 font-medium">Login Sekarang!</h1>
            <img src="/assets/vector/login.jpg" alt="" className="w-80" />
            <div className="flex flex-col w-full justify-start items-center">
              <h1 className="text-black">atau</h1>
              <h1 className="text-black">belum punya akun?</h1>
              <Link
                href="/page/user/regist"
                className="p-3 px-5 bg-primary mt-3 rounded-full text-sm transition-all duration-300 hover:scale-110 cursor-pointer"
              >
                Daftar sekarang juga!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
