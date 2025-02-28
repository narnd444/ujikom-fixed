import { auth, signInWithEmailAndPassword } from "@/app/lib/firebase";
import { db } from "@/app/lib/firebase"; // Pastikan Anda mengimpor Firestore
import { doc, getDoc } from "firebase/firestore";
import { serialize } from "cookie";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email dan password harus diisi!" }), { status: 400 });
    }

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Ambil informasi tambahan dari Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    let nama = "";
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      nama = userData.namaDepan || "";
    }

    // Simpan session di cookie
    const userData = {
      email: user.email,
      nama, // Menyimpan nama depan dari Firestore
      uid: user.uid,
    };

    const cookie = serialize("userSession", JSON.stringify(userData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 minggu
    });

    return new Response(JSON.stringify({ message: "Login berhasil", user: userData }), {
      status: 200,
      headers: { "Set-Cookie": cookie },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Email atau Password salah!" }), { status: 401 });
  }
}
