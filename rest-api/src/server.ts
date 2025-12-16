import * as dotenv from "dotenv";
import * as express from 'express';
import * as cors from 'cors';
import { root } from './routes/root';
import { getAllCourses } from './routes/get-all-course';
import { getCoursesWithLessons } from './routes/get-courses-with-lessons';
import { pool, testConnection } from "./database";
import { logger } from "./logger";
import { defaultErrorHandler } from './middleware/default-error-handler';

const result = dotenv.config();
if (result.error) {
    logger.error('Error loading environment variables, aborting.');
    process.exit(1);
}

const rootApp = express();
const courseApp = express();

function setupExpress() {
    // Middlewares
    rootApp.use(express.json());
    courseApp.use(express.json());

    rootApp.use(cors({ origin: true }));
    courseApp.use(cors({ origin: true }));

    // Routes
    rootApp.route("/").get(root);

    courseApp.route("/api/courses").get(getAllCourses);
    courseApp.route("/api/courses-lessons").get(getCoursesWithLessons);

    // Additional route for DB test
    rootApp.route("/db-test").get(async (req, res) => {
        logger.info("/db-test hit");
        try {
            const result = await pool.query("SELECT NOW() as now");
            res.json({ ok: true, now: result.rows[0] });
        } catch (error) {
            logger.error("/db-test error:", error);
            res.status(500).json({ ok: false, error: String(error) });
        }
    });

    // Global error handler middleware
    courseApp.use(defaultErrorHandler);
}

async function startServer() {
    const ROOT_APP_PORT = Number(process.env.ROOT_APP_PORT || 3000);
    const COURSE_APP_PORT = Number(process.env.COURSE_APP_PORT || 9000);

    // Global error handlers
    process.on("uncaughtException", (err) => logger.error("uncaughtException:", err));
    process.on("unhandledRejection", (reason) => logger.error("unhandledRejection:", reason));

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

setupExpress();
startServer();
