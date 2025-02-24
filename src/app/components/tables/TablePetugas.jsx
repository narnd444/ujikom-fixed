"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const TablePetugas = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ambil data dari Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "staff"));
        const staffList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setStaffData(staffList);
      } catch (error) {
        console.error("Error mengambil data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-2xl shadow-sm shadow-slate-700/30 border border-stroke bg-white px-5 pt-6 pb-2.5">
      <h4 className="mb-6 text-xl font-semibold text-black">Daftar Petugas</h4>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid grid-cols-5 bg-gray-200 p-2 font-medium">
            <div className="p-2">Nama</div>
            <div className="p-2">Username</div>
            <div className="p-2">Jabatan</div>
            <div className="p-2">Status</div>
            <div className="p-2">Aksi</div>
          </div>

          {staffData.length > 0 ? (
            staffData.map((staff) => (
              <div key={staff.id} className="grid grid-cols-5 border-b p-2">
                <div className="p-2">{staff.nama}</div>
                <div className="p-2">{staff.username}</div>
                <div className="p-2">{staff.jabatan || "Belum Ditentukan"}</div>
                <div className={`p-2 ${staff.status === "Aktif" ? "text-green-500" : "text-red-500"}`}>
                  {staff.status || "Nonaktif"}
                </div>
                <div className="flex space-x-3 items-center">
                  <button className="flex px-3 p-1 bg-primary rounded-xl text-white">Edit</button>
                  <button className="flex px-3 p-1 bg-red-800 rounded-xl text-white">Hapus</button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Tidak ada data petugas.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TablePetugas;
