import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("cover");

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const filePath = path.join(process.cwd(), "public/uploads", file.name);

    // Simpan file di folder "public/uploads"
    fs.writeFileSync(filePath, Buffer.from(buffer));

    return NextResponse.json({ url: `/uploads/${file.name}` });
  } catch (error) {
    return NextResponse.json({ error: "Gagal upload file" }, { status: 500 });
  }
}
