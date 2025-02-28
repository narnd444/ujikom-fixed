import { NextResponse } from "next/server";
import { db } from "@/app/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // Query Firestore untuk mencari admin berdasarkan username
    const q = query(collection(db, "admin"), where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json({ error: "Username tidak ditemukan!" }, { status: 401 });
    }

    const adminData = querySnapshot.docs[0].data();

    // Cek password dengan bcrypt
    const isMatch = await bcrypt.compare(password, adminData.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Password salah!" }, { status: 401 });
    }

    // Simpan session ke cookie
    const sessionData = JSON.stringify({ username: adminData.username, nama: adminData.nama, role: "admin" });
    const sessionCookie = serialize("adminSession", sessionData, {
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 hari
      path: "/",
    });

    const response = NextResponse.json({ success: true, message: "Login berhasil!", nama: adminData.nama });
    response.headers.append("Set-Cookie", sessionCookie);
    return response;

  } catch (error) {
    return NextResponse.json({ error: "Terjadi kesalahan server!" }, { status: 500 });
  }
}
