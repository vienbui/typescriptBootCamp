import * as dotenv from "dotenv";
import * as express from 'express';
import { root } from './routes/root';
import { getAllCourses } from './routes/get-all-course';
import { pool, testConnection } from "./database";
import { logger } from "./logger";
import { getCoursesWithLessons } from './routes/get-courses-with-lessons';


// Load environment variables
const result = dotenv.config();
if (result.error) {
    logger.error('Error loading environment variables, aborting.');
    process.exit(1);
}

// Constants for ports
const ROOT_APP_PORT = Number(process.env.ROOT_APP_PORT || 3000);
const COURSE_APP_PORT = Number(process.env.COURSE_APP_PORT || 9000);

// Initialize express apps separately
const rootApp = express();
const courseApp = express();

// Middlewares
rootApp.use(express.json());
courseApp.use(express.json());

// Define routes explicitly
rootApp.get('/', root);

courseApp.get('/api/courses', getAllCourses);

courseApp.get("/api/courses-lessons", getCoursesWithLessons);

// Additional route for DB test
rootApp.get("/db-test", async (req, res) => {
    logger.info("/db-test hit");
    try {
        const result = await pool.query("SELECT NOW() as now");
        res.json({ ok: true, now: result.rows[0] });
    } catch (error) {
        logger.error("/db-test error:", error);
        res.status(500).json({ ok: false, error: String(error) });
    }
});

// Global error handlers
process.on("uncaughtException", (err) => logger.error("uncaughtException:", err));
process.on("unhandledRejection", (reason) => logger.error("unhandledRejection:", reason));

// Start servers
async function startServers() {
    try {
        logger.info("Testing database connection...");
        await testConnection();
        logger.info("Database connected successfully.");

        rootApp.listen(ROOT_APP_PORT, "0.0.0.0", () => {
            logger.info(`Root app running at http://0.0.0.0:${ROOT_APP_PORT}`);
        });

        courseApp.listen(COURSE_APP_PORT, "0.0.0.0", () => {
            logger.info(`Course app running at http://0.0.0.0:${COURSE_APP_PORT}`);
        });

    } catch (error) {
        logger.error("Failed to start servers:", error);
        process.exit(1);
    }
}

startServers();
