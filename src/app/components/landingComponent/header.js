"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full h-max p-4 px-14 flex justify-between items-center space-x-5 font-Outfit z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm rounded-b-3xl" : "bg-transparent"
      }`}
    >
      <img src="/assets/logo/logokl.svg" className="h-14" alt="Logo" />
      <nav className="space-x-5 flex text-black text-xs items-center rounded-full p-1 px-2 bg-slate-200">
        <a href="#" className="bg-white rounded-full p-1 px-3">Home</a>
        <a href="#" className="bg-white rounded-full p-1 px-3">Fitur</a>
        <a href="#" className="bg-white rounded-full p-1 px-3">Benefit</a>
        <a href="#" className="bg-white rounded-full p-1 px-5">CS</a>
      </nav>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-sm rounded-full bg-primary px-8 text-white"
        >
          Daftar
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200">
            <Link
              href="/page/user/regist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Pengguna
            </Link>
            <Link
              href="./user/auth/regist"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Pengurus
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
