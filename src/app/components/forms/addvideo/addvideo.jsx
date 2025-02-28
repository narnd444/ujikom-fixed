"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const ModalTambahVideo = ({role}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState(null);
  const [cover, setCover] = useState(null);
  const [judul, setJudul] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [nama, setNama] = useState(""); // Hidden input untuk nama pengajar

  useEffect(() => {
    let sessionData = null;

    if (role === "staff"){
    sessionData = Cookies.get("staffSession");
  } else if (role === "admin") {
    sessionData = Cookies.get("adminSession");
  }
        if (sessionData) {
          try {
            const parsedSession = JSON.parse(sessionData);
            setNama(parsedSession.nama);
          } catch (error) {
            console.error("⚠️ Error parsing session:", error);
          }
        }
      }, []);

      const handleUpload = async () => {
        if (!judul || !category || !video || !cover) {
          alert("Semua field harus diisi!");
          return;
        }
      
        setLoading(true);
      
        const formData = new FormData();
        formData.append("judul", judul);
        formData.append("category", category);
        formData.append("cover", cover);
        formData.append("video", video);
        formData.append("nama", nama);
      
        try {
          const response = await fetch("/api/upload-video", {
            method: "POST",
            body: formData,
            credentials: "include",
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Gagal mengunggah video.");
          }
      
          const data = await response.json();
          console.log("📥 Response dari server:", data);
      
          alert("✅ Video berhasil diunggah!");
          setIsOpen(false);
          setJudul("");
          setCategory("");
          setVideo(null);
          setCover(null);
        } catch (error) {
          console.error("❌ Fetch Error:", error);
          alert(`Terjadi kesalahan: ${error.message}`);
        } finally {
          setLoading(false);
        }
      };
       
  

  return (
    <div className="flex w-full items-center justify-between font-Poppins">
      <h1 className="text-3xl">Kelola Video</h1>
      <button onClick={() => setIsOpen(true)} className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
        Tambah Video
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Tambah Video</h2>

            <form 
              className="flex flex-col space-y-3" 
              onSubmit={(e) => e.preventDefault()} 
              encType="multipart/form-data"
            >
              <label>Judul Video</label>
              <input
                type="text"
                placeholder="Judul Video"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="border p-2 rounded-md"
                required
              />

              <label>Kategori Video</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 rounded-md"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="Matematika">Matematika</option>
                <option value="Inggris">Inggris</option>
              </select>

              <label>Upload Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                className="border p-2 rounded-md file-input file-input-bordered file-input-accent"
                required
              />

              <label>Cover Video</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCover(e.target.files[0])}
                className="border p-2 rounded-md file-input file-input-bordered file-input-accent"
                required
              />
              <label htmlFor="" className="py-2 bg-slate-300 px-2 text-sm rounded-xl">Nama Staff:
                <input type="text" disabled value={nama}  className=""/>
              </label>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleUpload}
                  disabled={loading}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  {loading ? "Mengunggah..." : "Upload Video"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalTambahVideo;
