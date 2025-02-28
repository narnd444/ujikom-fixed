import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    console.log("🔹 Data diterima dari Frontend:", { username, password });

    // Query Firestore untuk mencari staff berdasarkan username
    const q = query(collection(db, "staff"), where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("❌ Username tidak ditemukan di database!");
      return NextResponse.json({ error: "Username tidak ditemukan!" }, { status: 401 });
    }

    const staffData = querySnapshot.docs[0].data();
    console.log("🔹 Data pengguna ditemukan:", staffData);

    // Cek password
    const isMatch = await bcrypt.compare(password, staffData.password);
    console.log("🔹 Password cocok:", isMatch);

    if (!isMatch) {
      console.log("❌ Password salah!");
      return NextResponse.json({ error: "Password salah!" }, { status: 401 });
    }

    // Ambil nama staf dari Firestore
    const staffName = staffData.nama || "Tanpa Nama";

    // Buat session cookie dengan menyimpan nama
    const sessionData = JSON.stringify({ 
      username: staffData.username, 
      nama: staffName, 
      role: "staff" 
    });

    const sessionCookie = serialize("staffSession", sessionData, {
      httpOnly: false, // Bisa dibaca di client-side jika perlu
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 hari
      path: "/",
    });

    console.log("✅ Login berhasil, session cookie dibuat!", sessionData);

    const response = NextResponse.json(
      { success: true, message: "Login berhasil!", nama: staffName },
      { status: 200 }
    );
    response.headers.append("Set-Cookie", sessionCookie);
    return response;

  } catch (error) {
    console.error("❌ Terjadi error saat login:", error);
    return NextResponse.json({ error: "Terjadi kesalahan server!" }, { status: 500 });
  }
}
