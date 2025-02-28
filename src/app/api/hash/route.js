import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, password, nama } = await req.json();
    console.log("🔹 Data diterima:", { username, password, nama });

    // Cek apakah username sudah ada
    const q = query(collection(db, "admin"), where("username", "==", username));
    const existingUser = await getDocs(q);

    if (!existingUser.empty) {
      console.log("❌ Username sudah digunakan!");
      return NextResponse.json({ error: "Username sudah digunakan!" }, { status: 400 });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔹 Password berhasil dienkripsi!");

    // Simpan admin ke Firestore
    await addDoc(collection(db, "admin"), {
      username,
      password: hashedPassword,
      nama,
    });

    console.log("✅ Admin berhasil didaftarkan!");
    return NextResponse.json({ success: true, message: "Registrasi berhasil!" }, { status: 201 });

  } catch (error) {
    console.error("❌ Terjadi kesalahan:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server!" }, { status: 500 });
  }
}
