"use client";

import React, { useState } from "react";
import { db } from "@/app/lib/firebase"; // Pastikan path firebase sudah benar
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ModalTambahPengguna = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    namaDepan: "",
    namaBelakang: "",
    username: "",
    email: "",
    alamat: "jajajajajaa", // Default value
  });

  // Handle input perubahan
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        ...userData,
        createdAt: serverTimestamp(), // Auto-generate timestamp
      });

      console.log("User berhasil ditambahkan dengan ID:", docRef.id);
      alert("Pengguna berhasil ditambahkan!");

      setIsOpen(false);
      setUserData({ namaDepan: "", namaBelakang: "", username: "", email: "", alamat: "jajajajajaa" });
    } catch (error) {
      console.error("Error menambahkan pengguna:", error);
      alert("Gagal menambahkan pengguna.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-between font-Poppins">
      <h1 className="text-3xl">Kelola Pengguna</h1>
      <button onClick={() => setIsOpen(true)} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
        Tambah Pengguna
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Tambah Pengguna</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-sm font-medium">Nama Depan</label>
                <input
                  type="text"
                  name="namaDepan"
                  value={userData.namaDepan}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Nama Depan"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Nama Belakang</label>
                <input
                  type="text"
                  name="namaBelakang"
                  value={userData.namaBelakang}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Nama Belakang"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Username"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Email"
                  required
                />
              </div>

              {/* Field alamat otomatis terisi */}
              <div className="mb-3">
                <label className="block text-sm font-medium">Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  value={userData.alamat}
                  className="w-full p-2 border rounded-md bg-gray-100"
                  readOnly
                />
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                  Batal
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md" disabled={loading}>
                  {loading ? "Menambahkan..." : "Tambah"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalTambahPengguna;
