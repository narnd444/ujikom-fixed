"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const TableGame = () => {
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "game"));
        const gameList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGameData(gameList);
      } catch (error) {
        console.error("Error mengambil data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleEdit = async () => {
    if (!selectedGame) return;
    try {
      const gameRef = doc(db, "game", selectedGame.id);
      await updateDoc(gameRef, selectedGame);
      setGameData((prev) => prev.map((g) => (g.id === selectedGame.id ? selectedGame : g)));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Gagal memperbarui data:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedGame) return;
    try {
      await deleteDoc(doc(db, "game", selectedGame.id));
      setGameData((prev) => prev.filter((g) => g.id !== selectedGame.id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };

  return (
    <div className="rounded-2xl shadow-sm shadow-slate-700/30 border border-stroke bg-white px-5 pt-6 pb-2.5">
      <h4 className="mb-6 text-xl font-semibold text-black">Daftar Game</h4>
      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid grid-cols-5 bg-gray-200 p-2 font-medium">
            <div className="p-2">Nama</div>
            <div className="p-2">Kategori</div>
            <div className="p-2">Cover</div>
            <div className="p-2">URL</div>
            <div className="p-2">Aksi</div>
          </div>

          {gameData.length > 0 ? (
            gameData.map((game) => (
              <div key={game.id} className="grid grid-cols-5 border-b p-2">
                <div className="p-2">{game.name}</div>
                <div className="p-2">{game.category || "Tidak Ada"}</div>
                <div className="p-2">
                  {game.cover ? (
                    <img src={game.cover} alt={game.name} className="w-16 h-16 object-cover rounded-lg" />
                  ) : (
                    "Tidak Ada"
                  )}
                </div>
                <div className="p-2">
                  <a href={game.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Kunjungi
                  </a>
                </div>
                <div className="flex space-x-3 items-center">
                  <button onClick={() => { setSelectedGame(game); setIsEditModalOpen(true); }}
                    className="flex px-3 p-1 bg-primary rounded-xl text-white">Edit</button>
                  <button onClick={() => { setSelectedGame(game); setIsDeleteModalOpen(true); }}
                    className="flex px-3 p-1 bg-red-800 rounded-xl text-white">Hapus</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Tidak ada data game.</p>
          )}
        </div>
      )}

      {/* Modal Edit */}
      {isEditModalOpen && selectedGame && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Game</h2>
            <input type="text" value={selectedGame.name} onChange={(e) => setSelectedGame({ ...selectedGame, name: e.target.value })} className="w-full p-2 border rounded-md mb-2" />
            <input type="text" value={selectedGame.category} onChange={(e) => setSelectedGame({ ...selectedGame, category: e.target.value })} className="w-full p-2 border rounded-md mb-2" />
            <input type="text" value={selectedGame.url} onChange={(e) => setSelectedGame({ ...selectedGame, url: e.target.value })} className="w-full p-2 border rounded-md mb-2" />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">Batal</button>
              <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md">Simpan</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Hapus */}
      {isDeleteModalOpen && selectedGame && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Hapus Game</h2>
            <p>Apakah Anda yakin ingin menghapus "{selectedGame.name}"?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">Batal</button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">Hapus</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableGame;
