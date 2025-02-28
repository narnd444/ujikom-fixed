"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const CardGame = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "game"));
        const gameList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGames(gameList);
      } catch (error) {
        console.error("Error fetching games: ", error);
      }
      setLoading(false);
    };

    fetchGames();
  }, []);

  return (
    <div className="flex flex-col space-y-5">
      {loading ? (
        <p className="text-center text-gray-500">Memuat data game...</p>
      ) : (
        <div className="flex flex-wrap pb-10 items-stretch">
          {games.length > 0 ? (
            games.map((game) => (
              <div
                key={game.id}
                className="w-full max-w-xs m-3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 duration-500 transition-all"
              >
                <a href={game.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className="p-8 rounded-lg w-full h-48 object-cover"
                    src={game.cover || "/assets/placeholder.jpg"}
                    alt={game.name}
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href={game.url} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-xl font-semibold tracking-tight text-stone-800">
                      {game.name}
                    </h5>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Tidak ada game yang tersedia.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CardGame;
