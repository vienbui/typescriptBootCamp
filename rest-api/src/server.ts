
import * as dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
    console.log('Error loading environment variables from .env file, aborting...');
    process.exit(1);
}

console.log(process.env.PORT)

import * as express from 'express';
import { root } from './routes/root';
import { isInteger } from './ultils';
import { logger } from "./logger";
import { pool, testConnection } from "./database";
import { Course } from "./models/course";

export async function getAllCourses(): Promise<Course[]> {
  const result = await pool.query<Course>("SELECT * FROM courses ORDER BY seq_no");
  return result.rows;
}



const app = express();
const port = Number(process.env.APP_PORT || process.env.PORT || 3000);

// global error handlers để log mọi lỗi không bắt
process.on("uncaughtException", (err) => {
  console.error("uncaughtException:", err);
});
process.on("unhandledRejection", (reason) => {
  console.error("unhandledRejection:", reason);
});

// middlewares
app.use(express.json());

// test route
app.get("/", (req, res) => res.json({ ok: true, message: "hello" }));

app.get("/db-test", async (req, res) => {
  console.log("/db-test hit");
  try {
    const r = await pool.query("SELECT NOW() as now");
    res.json({ ok: true, now: r.rows[0] });
  } catch (err) {
    console.error("/db-test error:", err);
    res.status(500).json({ ok: false, error: String(err) });
  }
});

async function start() {
  try {
    console.log("Calling testConnection()");
    await testConnection(); // đảm bảo DB ok trước khi listen
    // bind 0.0.0.0 để nếu chạy trong container vẫn reachable từ host
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running and listening at http://0.0.0.0:${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();