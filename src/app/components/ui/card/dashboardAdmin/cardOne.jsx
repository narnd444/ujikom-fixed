"use client"
import React, { useEffect, useState } from "react";

const CardOne = ({ role }) => {
  const [stats, setStats] = useState({
    totalPengguna: 0,
    totalStaff: 0,
    totalVideo: 0,
    totalGame: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats", {
          method: "GET",
          headers: {
            "x-user-role": role, // Kirim role ke backend
          },
        });

        if (!response.ok) throw new Error("Gagal mengambil data");

        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("⚠️ Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [role]);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
      {role === "admin" && (
        <>
          <Card title="Total Pengguna" value={stats.totalPengguna} color="blue" />
          <Card title="Total Staff" value={stats.totalStaff} color="green" />
        </>
      )}
      <Card title="Total Video" value={stats.totalVideo} color="red" />
      <Card title="Total Game" value={stats.totalGame} color="yellow" />
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className="rounded-xl border bg-card text-card-foreground shadow">
    <div className="p-6 flex items-center space-x-4">
      <div className={`p-3 w-fit bg-${color}-100 rounded-full`}>
        <svg className={`w-6 h-6 text-${color}-500`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      </div>
      <div className="flex-1 text-right">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  </div>
);

export default CardOne;
