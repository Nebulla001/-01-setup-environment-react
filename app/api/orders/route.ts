import { NextResponse } from "next/server";
import { getConnection } from "../../../lib/db";

export async function GET() {
  const conn = await getConnection();
  const [rows] = await conn.execute("SELECT * FROM orders");
  await conn.end();
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const { customer_name, email, product_id, quantity } = await req.json();
  const conn = await getConnection();
  await conn.execute(
    "INSERT INTO orders (customer_name, email, product_id, quantity) VALUES (?, ?, ?, ?)",
    [customer_name, email, product_id, quantity]
  );
  await conn.end();
  return NextResponse.json({ message: "Pesanan berhasil dibuat" });
}
