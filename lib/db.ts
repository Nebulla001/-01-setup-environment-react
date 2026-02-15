import mysql from "mysql2/promise";

export async function getConnection() {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",        // default user XAMPP
    password: "",        // default kosong
    database: "videotron_db",
  });
}
