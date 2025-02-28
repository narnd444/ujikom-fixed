"use client"

import React, { useState } from 'react';
import { db } from '@/app/lib/firebase'; // Hapus import storage karena tidak dipakai
import { collection, addDoc,setDoc, doc } from 'firebase/firestore';



const ModalTambahGame = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Tambahkan state untuk loading
  const [gameData, setGameData] = useState({
    name: "",
    url: "",
    category: "",
    cover: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameData({ ...gameData, [name]: value });
  };

  const handleFileChange = (e) => {
    setGameData({ ...gameData, cover: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!gameData.name || !gameData.url || !gameData.category || !gameData.cover) {
      alert("Semua field harus diisi!");
      setLoading(false);
      return;
    }

    try {
      // Buat FormData untuk mengirim file ke backend
      const formData = new FormData();
      formData.append("cover", gameData.cover);

      // Upload file ke server lokal
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal upload gambar");


      const docRef = await addDoc(collection(db, "game"), { 
        id: "", // Tempatkan ID kosong dulu
        name: gameData.name,
        url: gameData.url,
        category: gameData.category,
        cover: data.url,
      });
      // Perbarui dokumen dengan ID yang di-generate Firestore
      await setDoc(doc(db, "game", docRef.id), { ...gameData, cover: data.url, id: docRef.id });
      console.log("Dokumen berhasil ditambahkan dengan ID:", docRef.id);

      alert("Game berhasil ditambahkan!");
      setIsOpen(false);
      setGameData({ name: "", url: "", category: "", cover: null, });
    } catch (error) {
      console.error("Error adding game: ", error);
      alert("Gagal menambahkan game.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex w-full items-center justify-between font-Poppins'>
      <h1 className='text-3xl'>Kelola Game</h1>
      <button onClick={() => setIsOpen(true)} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
        Tambah Game
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Tambah Game</h2>
            
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <div className="mb-3">
                <label className="block text-sm font-medium">Nama Game</label>
                <input type="text" name="name" value={gameData.name} onChange={handleChange} className="w-full p-2 border rounded-md" required />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Game URL</label>
                <input type="text" name="url" value={gameData.url} onChange={handleChange} className="w-full p-2 border rounded-md" required />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Kategori</label>
                <select name="category" value={gameData.category} onChange={handleChange} className="w-full p-2 border rounded-md" required>
                  <option value="" disabled>Pilih Kategori</option>
                  <option value="Matematika">Matematika</option>
                  <option value="Inggris">Inggris</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium">Cover Game</label>
                <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-primary w-full max-w-xs" required />
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

export default ModalTambahGame;
