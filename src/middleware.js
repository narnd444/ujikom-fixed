import { NextResponse } from "next/server";

export function middleware(req) {
  const staffSession = req.cookies.get("staffSession");
  const adminSession = req.cookies.get("adminSession");
  const userSession = req.cookies.get("userSession");
  const { pathname } = req.nextUrl;

  console.log("Middleware berjalan 🚀 - Path:", pathname);
  console.log("Staff Session:", staffSession ? "✅ Ada" : "❌ Tidak ada");
  console.log("Admin Session:", adminSession ? "✅ Ada" : "❌ Tidak ada");
  console.log("User Session:", userSession ? "✅ Ada" : "❌ Tidak ada");

  // Izinkan akses ke halaman login & registrasi tanpa sesi
  if (
    ["/page/staff/login", "/page/admin/login", "/page/user/login", "/page/user/regist"].includes(pathname)
  ) {
    console.log("🔓 Akses halaman login/registrasi, middleware dilewati");
    return NextResponse.next();
  }

  // Proteksi halaman staff
  if (!staffSession && pathname.startsWith("/page/staff/")) {
    console.log("❌ Tidak ada sesi staff, redirect ke login staff");
    return NextResponse.redirect(new URL("/page/staff/login", req.url));
  }

  // Proteksi halaman admin
  if (!adminSession && pathname.startsWith("/page/admin/")) {
    console.log("❌ Tidak ada sesi admin, redirect ke login admin");
    return NextResponse.redirect(new URL("/page/admin/login", req.url));
  }

  // Proteksi halaman user
  if (!userSession && pathname.startsWith("/page/user/")) {
    console.log("❌ Tidak ada sesi user, redirect ke login user");
    return NextResponse.redirect(new URL("/page/user/login", req.url));
  }

  console.log("✅ Middleware: Sesi valid, lanjutkan");

  // Kirim data session ke client melalui header custom
  const response = NextResponse.next();
  if (staffSession) {
    response.headers.set("x-user-data-staff", decodeURIComponent(staffSession.value));
  }
  if (adminSession) {
    response.headers.set("x-user-data-admin", decodeURIComponent(adminSession.value));
  }
  if (userSession) {
    response.headers.set("x-user-data-user", decodeURIComponent(userSession.value));
  }  

  return response;
}

// Middleware berlaku untuk halaman staff, admin, dan user
export const config = {
  matcher: ["/page/staff/:path*", "/page/admin/:path*", "/page/user/:path*"],
};
