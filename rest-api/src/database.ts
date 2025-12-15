import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

});

export async function testConnection() {
  const res = await pool.query("SELECT NOW()");
  console.log("Connected to DB:", res.rows[0]);
}
