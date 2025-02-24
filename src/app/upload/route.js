import { writeFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('cover');

  if (!file) {
    return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Simpan file ke folder lokal (misalnya `/public/uploads`)
  const filePath = path.join(process.cwd(), 'public/uploads', file.name);
  await writeFile(filePath, buffer);

  return NextResponse.json({ url: `/uploads/${file.name}` });
}
