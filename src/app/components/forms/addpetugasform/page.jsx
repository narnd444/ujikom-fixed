"use client";

import React, { useState } from "react";
import { db } from "@/app/lib/firebase"; // Pastikan path ini benar
import { collection, addDoc } from "firebase/firestore";

const ModalTambahPetugas = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Tambahkan data ke Firestore (koleksi "staff")
      await addDoc(collection(db, "staff"), {
        id: Date.now(), // ID unik dari timestamp
        nama: formData.nama,
        username: formData.username,
        password: formData.password,
      });

      alert("Petugas berhasil ditambahkan!");
      setIsOpen(false); // Tutup modal
      setFormData({ nama: "", username: "", password: "" }); // Reset form
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Gagal menambahkan petugas.");
    }

    setLoading(false);
  };

  return (
    <div className="flex w-full items-center justify-between font-Poppins">
      <h1 className="text-3xl">Kelola Petugas</h1>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
      >
        Tambah Petugas
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Tambah Petugas</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block text-sm font-medium">Nama Petugas</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Nama"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Username"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Masukkan Password"
                  required
                />
              </div>

              {/* Pesan error */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
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

export default ModalTambahPetugas;
