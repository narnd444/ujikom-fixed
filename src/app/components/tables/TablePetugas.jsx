"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const TablePetugas = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

  const handleDelete = async () => {
    if (selectedStaff) {
      await deleteDoc(doc(db, "staff", selectedStaff.id));
      setStaffData(staffData.filter((staff) => staff.id !== selectedStaff.id));
      setShowDeleteModal(false);
    }
  };

  const handleEdit = async () => {
    if (selectedStaff) {
      await updateDoc(doc(db, "staff", selectedStaff.id), {
        nama: selectedStaff.nama,
        username: selectedStaff.username,
      });
      setStaffData((prevData) => prevData.map((staff) => (staff.id === selectedStaff.id ? selectedStaff : staff)));
      setShowEditModal(false);
    }
  };

  return (
    <div className="rounded-2xl shadow-sm shadow-slate-700/30 border border-stroke bg-white px-5 pt-6 pb-2.5">
      <h4 className="mb-6 text-xl font-semibold text-black">Daftar Petugas</h4>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid grid-cols-3 bg-gray-200 p-2 font-medium">
            <div className="p-2">Nama</div>
            <div className="p-2">Username</div>
            <div className="p-2">Aksi</div>
          </div>

          {staffData.length > 0 ? (
            staffData.map((staff) => (
              <div key={staff.id} className="grid grid-cols-3 border-b p-2">
                <div className="p-2">{staff.nama}</div>
                <div className="p-2">{staff.username}</div>
                <div className="flex space-x-3 items-center">
                  <button
                    className="px-3 p-1 bg-primary rounded-xl text-white"
                    onClick={() => {
                      setSelectedStaff(staff);
                      setShowEditModal(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 p-1 bg-red-800 rounded-xl text-white"
                    onClick={() => {
                      setSelectedStaff(staff);
                      setShowDeleteModal(true);
                    }}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Tidak ada data petugas.</p>
          )}
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <p>Apakah Anda yakin ingin menghapus {selectedStaff?.nama}?</p>
            <div className="flex space-x-3 mt-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded" onClick={handleDelete}>Ya</button>
              <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setShowDeleteModal(false)}>Batal</button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-4">Edit Petugas</h4>
            <input className="border p-2 w-full mb-2" type="text" value={selectedStaff.nama} onChange={(e) => setSelectedStaff({ ...selectedStaff, nama: e.target.value })} />
            <input className="border p-2 w-full mb-2" type="text" value={selectedStaff.username} onChange={(e) => setSelectedStaff({ ...selectedStaff, username: e.target.value })} />
            <div className="flex space-x-3 mt-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleEdit}>Simpan</button>
              <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={() => setShowEditModal(false)}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePetugas;
