import { serialize } from "cookie";

export async function GET() {
  const cookie = serialize("userSession", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return new Response(JSON.stringify({ message: "Logout berhasil" }), {
    status: 200,
    headers: { "Set-Cookie": cookie },
  });
}
