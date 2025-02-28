"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const TableVideo = () => {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "video"));
        const videoList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideoData(videoList);
      } catch (error) {
        console.error("Error mengambil data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleEdit = async () => {
    if (!selectedVideo) return;
    try {
      const videoRef = doc(db, "video", selectedVideo.id);
      await updateDoc(videoRef, selectedVideo);
      setVideoData((prev) => prev.map((v) => (v.id === selectedVideo.id ? selectedVideo : v)));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Gagal memperbarui data:", error);
    }
  };

  const handleDelete = async () => {
    if (!selectedVideo) return;
    try {
      await deleteDoc(doc(db, "video", selectedVideo.id));
      setVideoData((prev) => prev.filter((v) => v.id !== selectedVideo.id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Gagal menghapus data:", error);
    }
  };

  return (
    <div className="rounded-2xl shadow-sm shadow-slate-700/30 border border-stroke bg-white px-5 pt-6 pb-2.5">
      <h4 className="mb-6 text-xl font-semibold text-black">Daftar Video</h4>
      {loading ? (
        <p className="text-center text-gray-500">Memuat data...</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid grid-cols-5 bg-gray-200 p-2 font-medium">
            <div className="p-2">Judul</div>
            <div className="p-2">Nama Pengajar</div>
            <div className="p-2">Tanggal</div>
            <div className="p-2">Cover</div>
            <div className="p-2">Aksi</div>
          </div>

          {videoData.length > 0 ? (
            videoData.map((video) => (
              <div key={video.id} className="grid grid-cols-5 border-b p-2">
                <div className="p-2">{video.judul}</div>
                <div className="p-2">{video.nama_pengajar || "Tidak Ada"}</div>
                <div className="p-2">{video.tanggal ? new Date(video.tanggal.toDate()).toLocaleDateString() : "Tidak Ada"}</div>
                <div className="p-2">
                  {video.cover ? (
                    <img src={video.cover} alt={video.judul} className="w-16 h-16 object-cover rounded-lg" />
                  ) : (
                    "Tidak Ada"
                  )}
                </div>
                <div className="flex space-x-3 items-center">
                  <a href={video.video} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Tonton Video
                  </a>
                  <button
                    onClick={() => {
                      setSelectedVideo(video);
                      setIsEditModalOpen(true);
                    }}
                    className="flex px-3 p-1 bg-primary rounded-xl text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedVideo(video);
                      setIsDeleteModalOpen(true);
                    }}
                    className="flex px-3 p-1 bg-red-800 rounded-xl text-white"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">Tidak ada data video.</p>
          )}
        </div>
      )}

      {/* Modal Edit */}
      {isEditModalOpen && selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Video</h2>
            <label htmlFor="">Judul Video</label>
            <input
              type="text"
              value={selectedVideo.judul}
              onChange={(e) => setSelectedVideo({ ...selectedVideo, judul: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <label htmlFor="">Nama Pengajar</label>
            <input
              type="text"
              value={selectedVideo.nama_pengajar}
              onChange={(e) => setSelectedVideo({ ...selectedVideo, nama_pengajar: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <label htmlFor="">Url Video</label>
            <input
              type="text"
              value={selectedVideo.video}
              onChange={(e) => setSelectedVideo({ ...selectedVideo, video: e.target.value })}
              className="w-full p-2 border rounded-md mb-2"
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsEditModalOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                Batal
              </button>
              <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Hapus */}
      {isDeleteModalOpen && selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Hapus Video</h2>
            <p>Apakah Anda yakin ingin menghapus "{selectedVideo.judul}"?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button onClick={() => setIsDeleteModalOpen(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                Batal
              </button>
              <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableVideo;
