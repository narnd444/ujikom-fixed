"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";

const TablePengguna = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  // Ambil data dari Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsersData(usersList);
      } catch (error) {
        console.error("Error mengambil data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Fungsi membuka modal edit
  const openEditModal = (user) => {
    setSelectedUser(user);
    setEditedUser(user);
    setIsEditModalOpen(true);
  };

  // Fungsi menutup modal edit
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  // Fungsi menangani perubahan form edit
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Fungsi menyimpan perubahan ke Firestore
  const handleSaveEdit = async () => {
    if (!editedUser.id) return;

    try {
      const userRef = doc(db, "users", editedUser.id);
      await updateDoc(userRef, editedUser);
      alert("Pengguna berhasil diperbarui!");
      closeEditModal();
    } catch (error) {
      console.error("Gagal memperbarui pengguna:", error);
    }
  };

  // Fungsi membuka modal hapus
  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Fungsi menutup modal hapus
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  // Fungsi menghapus data pengguna dari Firestore
  const handleDeleteUser = async () => {
    if (!selectedUser || !selectedUser.id) return;

    try {
      await deleteDoc(doc(db, "users", selectedUser.id));
      alert("Pengguna berhasil dihapus!");
      closeDeleteModal();
    } catch (error) {
      console.error("Gagal menghapus pengguna:", error);
    }
  };

  return (
    <div className="rounded-2xl shadow-sm shadow-slate-700/30 border border-stroke bg-white px-5 pt-6 pb-2.5">
      <h4 className="mb-6 text-xl font-semibold text-black">Daftar Pengguna</h4>

      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid grid-cols-5 bg-gray-200 p-2 font-medium">
            <div className="p-2">Nama Depan</div>
            <div className="p-2">Nama Belakang</div>
            <div className="p-2">Username</div>
            <div className="p-2">Email</div>
            <div className="p-2">Aksi</div>
          </div>

          {usersData.length > 0 ? (
            usersData.map((user) => (
              <div key={user.id} className="grid grid-cols-5 border-b p-2">
                <div className="p-2">{user.namaDepan}</div>
                <div className="p-2">{user.namaBelakang}</div>
                <div className="p-2 text-ellipsis">{user.username}</div>
                <div className="p-2">{user.email}</div>
                <div className="flex space-x-3 items-center">
                  <button
                    className="flex px-3 p-1 bg-primary rounded-xl text-white"
                    onClick={() => openEditModal(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="flex px-3 p-1 bg-red-800 rounded-xl text-white"
                    onClick={() => openDeleteModal(user)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Tidak ada data pengguna.</p>
          )}
        </div>
      )}

      {/* Modal Edit */}
      {isEditModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Pengguna</h2>
            <form>

                <label htmlFor="">
                    Nama Depan
              <input
                type="text"
                name="namaDepan"
                value={editedUser.namaDepan}
                onChange={handleEditChange}
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Nama Depan"
              />
              </label>
              <label htmlFor="">
 
 Nama Belakang          <input
                type="text"
                name="namaBelakang"
                value={editedUser.namaBelakang}
                onChange={handleEditChange}
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Nama Belakang"
              />
              </label>
              <label htmlFor="">
 
 username          <input
                type="text"
                name="username"
                value={editedUser.username}
                onChange={handleEditChange}
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Username"
              />
              </label>
              <label htmlFor="">
 
Email             <input
                type="email"
                name="email"
                value={editedUser.email}
                onChange={handleEditChange}
                className="w-full p-2 border rounded-md mb-3"
                placeholder="Email"
              />
              </label>
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={closeEditModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                  Batal
                </button>
                <button type="button" onClick={handleSaveEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Hapus */}
      {isDeleteModalOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Hapus Pengguna</h2>
            <p>Apakah Anda yakin ingin menghapus pengguna <strong>{selectedUser.namaDepan}</strong>?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button type="button" onClick={closeDeleteModal} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                Batal
              </button>
              <button type="button" onClick={handleDeleteUser} className="px-4 py-2 bg-red-600 text-white rounded-md">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePengguna;
