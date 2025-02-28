import { db } from "@/app/lib/firebase"; 
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
  try {
    console.log("🔍 Fetching data from Firestore...");

    // Ambil role dari header (diambil dari session/cookie)
    const role = req.headers.get("x-user-role"); 

    let totalVideo = 0, totalGame = 0;
    let totalPengguna = 0, totalStaff = 0;

    // Fetch data yang bisa diakses oleh semua role
    const videosSnapshot = await getDocs(collection(db, "video"));
    const gamesSnapshot = await getDocs(collection(db, "game"));

    totalVideo = videosSnapshot.size;
    totalGame = gamesSnapshot.size;

    if (role === "admin") {
      // Jika admin, fetch semua data
      const usersSnapshot = await getDocs(collection(db, "users"));
      const staffSnapshot = await getDocs(collection(db, "staff"));

      totalPengguna = usersSnapshot.size;
      totalStaff = staffSnapshot.size;
    }

    console.log("✅ Data retrieved successfully for role:", role);

    return Response.json({
      totalVideo,
      totalGame,
      ...(role === "admin" && { totalPengguna, totalStaff }) // Hanya tampil jika admin
    });

  } catch (error) {
    console.error("🔥 Error fetching stats:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
