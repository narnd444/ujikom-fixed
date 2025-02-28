"use client";
import React, { useState, useEffect } from "react";
import DropdownNotification from "./notifdropdown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = ({ pos, role }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState("");

  useEffect(() => {
    let sessionData = null;
  
    if (role === "staff") {
      sessionData = Cookies.get("staffSession");
    } else if (role === "admin") {
      sessionData = Cookies.get("adminSession");
    } else if (role === "user") {
      sessionData = Cookies.get("userSession");
    }
  
    if (sessionData) {
      try {
        console.log("✅ Raw Cookie Data:", sessionData); // Debugging 1
        const decodedSession = decodeURIComponent(sessionData);
        console.log("✅ Decoded Cookie:", decodedSession); // Debugging 2
  
        const parsedSession = JSON.parse(decodedSession);
        console.log("✅ Parsed Session:", parsedSession); // Debugging 3
  
        if (parsedSession.nama) {
          console.log("🎉 Nama ditemukan:", parsedSession.nama); // Debugging 4
          setNama(parsedSession.nama);
        } else {
          console.warn("⚠️ Tidak ada 'nama' dalam sesi!");
        }
      } catch (error) {
        console.error("⚠️ Error parsing session:", error);
      }
    }
  }, [role]);
  
  
  
  

  const handleLogout = async () => {
    if (role === "staff") {
      await fetch("/api/logout/staff");
      Cookies.remove("staffSession");
      router.push("/page/staff/login");
    } else if (role === "admin") {
      await fetch("/api/logout/admin");
      Cookies.remove("adminSession");
      router.push("/page/admin/login");
    } else if (role === "user") {
      await fetch("/api/logout/user");
      Cookies.remove("userSession");
      router.push("/page/user/login");
    }
  };

  return (
    <section className="flex justify-between space-x-5 w-full h-max p-5 px-10 items-center font-Poppins bg-gradient-to-r from-blue-100 to-white shadow-sm shadow-slate-500/30 rounded-br-3xl sticky top-0 z-10">
      <div className="flex items-center space-x-4 h-10">
        <h1 className="text-black bg-secondary p-2 px-5 rounded-badge text-xs">
          {pos}
        </h1>
      </div>
      <div className="flex items-center space-x-4 h-10">
        <div className="relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-4 h-10">
            <h1 className="text-black">{nama || "Guest"}</h1>
            <img src="/assets/avatar/avatar_df.jpg" className="rounded-full object-cover h-8" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200">
              <button onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
        {role === "user" && <DropdownNotification />}
      </div>
    </section>
  );
};

export default Navbar;
