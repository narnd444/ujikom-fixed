"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll

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
      className={`fixed w-full h-max p-2 px-12 flex justify-between items-center space-x-5 font-Outfit z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm rounded-b-3xl" : "bg-transparent"
      }`}
    >
      <img src="/assets/logo/logokl.svg" className="h-14" alt="Logo" />
      
      {/* Navbar */}
      <nav className="space-x-5 flex text-black text-xs items-center rounded-full p-1 px-2 bg-slate-200">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="bg-white rounded-full p-1 px-3 cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="video"
          smooth={true}
          duration={500}
          className="bg-white rounded-full p-1 px-3 cursor-pointer"
        >
          Video
        </ScrollLink>
        <ScrollLink
          to="fitur"
          smooth={true}
          duration={500}
          className="bg-white rounded-full p-1 px-3 cursor-pointer"
        >
          Fitur
        </ScrollLink>
        <ScrollLink
          to="benefit"
          smooth={true}
          duration={500}
          className="bg-white rounded-full p-1 px-5 cursor-pointer"
        >
          Benefit
        </ScrollLink>
        <ScrollLink
          to="comunity"
          smooth={true}
          duration={500}
          className="bg-white rounded-full p-1 px-5 cursor-pointer"
        >
          Comunity
        </ScrollLink>
      </nav>

      {/* Button Login */}
      <div className="flex items-center space-x-3">
        <div className="buttonLogin relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-sm rounded-full bg-primary px-8 text-white"
          >
            Login
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200">
              <Link
                href="/page/user/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Pengguna
              </Link>
              <Link
                href="/page/admin/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Administator
              </Link>
              <Link
                href="/page/staff/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Staff Materi
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
