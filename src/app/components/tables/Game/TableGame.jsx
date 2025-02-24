"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const TableGame = () => {
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari Firestore
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
                  <button className="flex px-3 p-1 bg-primary rounded-xl text-white">Edit</button>
                  <button className="flex px-3 p-1 bg-red-800 rounded-xl text-white">Hapus</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Tidak ada data game.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TableGame;
