import { NextResponse } from "next/server";
import { getConnection } from "../../../lib/db";

export async function GET() {
  const conn = await getConnection();
  const [rows] = await conn.execute("SELECT * FROM products");
  await conn.end();
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const { name, description, price, image } = await req.json();
  const conn = await getConnection();
  await conn.execute(
    "INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)",
    [name, description, price, image]
  );
  await conn.end();
  return NextResponse.json({ message: "Produk berhasil ditambahkan" });
}
