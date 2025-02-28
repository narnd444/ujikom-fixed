import { v2 as cloudinary } from "cloudinary";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import fs from "fs/promises";
import path from "path";

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// **Gunakan `POST` di Next.js App Router**
export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const judul = formData.get("judul");
    const category = formData.get("category");
    const nama = formData.get("nama");
    const video = formData.get("video");
    const cover = formData.get("cover");

    if (!judul || !category || !nama || !video || !cover) {
      return Response.json({ error: "Semua field harus diisi!" }, { status: 400 });
    }

    // Simpan cover secara lokal
    const coverPath = path.join(process.cwd(), "public/uploads", cover.name);
    const coverBuffer = Buffer.from(await cover.arrayBuffer());
    await fs.writeFile(coverPath, coverBuffer);

    // Simpan video sementara sebelum upload ke Cloudinary
    const tempDir = path.join(process.cwd(), "temp");
    await fs.mkdir(tempDir, { recursive: true });
    const tempVideoPath = path.join(tempDir, video.name);
    const videoBuffer = Buffer.from(await video.arrayBuffer());
    await fs.writeFile(tempVideoPath, videoBuffer);

    console.log("📤 Video sementara tersimpan:", tempVideoPath);

    // Upload ke Cloudinary
    const videoUpload = await cloudinary.uploader.upload(tempVideoPath, {
      resource_type: "video",
      folder: "video",
    });

    // Simpan ke Firestore
    const videoId = new Date().getTime().toString();
    await setDoc(doc(db, "video", videoId), {
      judul,
      nama_pengajar: nama,
      category,
      tanggal: new Date(),
      video: videoUpload.secure_url,
      cover: `/uploads/${cover.name}`,
    });

    // Hapus file sementara
    await fs.unlink(tempVideoPath);

    return Response.json({
      message: "Video berhasil diunggah!",
      videoUrl: videoUpload.secure_url,
      coverUrl: `/uploads/${cover.name}`,
    }, { status: 200 });

  } catch (error) {
    console.error("❌ Error API Upload:", error);
    return Response.json({ error: error.message || "Terjadi kesalahan server." }, { status: 500 });
  }
}
