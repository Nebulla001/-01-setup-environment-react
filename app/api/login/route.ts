import { NextResponse } from "next/server";
import { getConnection } from "../../../lib/db";

export async function POST(req: Request) {
  const { username, password } = await req.json();
  const conn = await getConnection();
  const [rows]: any = await conn.execute(
    "SELECT * FROM users WHERE username=? AND password=?",
    [username, password]
  );
  await conn.end();

  if (rows.length > 0) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
