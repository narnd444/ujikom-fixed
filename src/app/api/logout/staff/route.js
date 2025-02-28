import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET() {
  const logoutCookie = serialize("staffSession", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0),
    path: "/",
  });

  return NextResponse.json({ success: true, message: "Logout berhasil!" }, {
    status: 200,
    headers: { "Set-Cookie": logoutCookie },
  });
}
