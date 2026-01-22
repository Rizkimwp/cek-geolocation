import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'public', 'location_log.txt');
    
    const content = `Lat: ${data.lat}, Lng: ${data.lng}, Time: ${new Date().toISOString()}\n`;

    // Menyimpan file (Append/Menambah ke bawah)
    fs.appendFileSync(filePath, content);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}