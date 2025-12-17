"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var cors = require("cors");
var root_sql_1 = require("./routes-sql/root-sql");
var get_all_course_sql_1 = require("./routes-sql/get-all-course-sql");
var get_courses_with_lessons_sql_1 = require("./routes-sql/get-courses-with-lessons-sql");
var database_1 = require("./database");
var logger_1 = require("./logger");
var data_source_1 = require("./data-source");
var default_error_handler_1 = require("./middleware/default-error-handler");
var find_course_by_url_sql_1 = require("./routes-sql/find-course-by-url-sql");
var find_lesson_for_course_sql_1 = require("./routes-sql/find-lesson-for-course-sql");
var update_course_sql_1 = require("./routes-sql/update-course-sql");
var create_course_sql_1 = require("./routes-sql/create-course-sql");
var delete_course_sql_1 = require("./routes-sql/delete-course-sql");
var create_user_1 = require("./root/create-user");
var login_1 = require("./root/login");
var authentication_middleware_1 = require("./middleware/authentication-middleware");
var admin_only_middleware_1 = require("./middleware/admin-only-middleware");
var result = dotenv.config();
if (result.error) {
    logger_1.logger.error('Error loading environment variables, aborting.');
    process.exit(1);
}
var rootApp = express();
var courseApp = express();
function setupExpress() {
    var _this = this;
    // Middlewares
    rootApp.use(express.json());
    courseApp.use(express.json());
    rootApp.use(cors({ origin: true }));
    courseApp.use(cors({ origin: true }));
    // Routes
    rootApp.route("/").get(root_sql_1.root);
    courseApp.route("/api/courses").get(authentication_middleware_1.checkIfAuthenticated, get_all_course_sql_1.getAllCourses);
    courseApp.route("/api/courses-lessons").get(authentication_middleware_1.checkIfAuthenticated, get_courses_with_lessons_sql_1.getCoursesWithLessons);
    courseApp.route("/api/courses/:courseUrl").get(authentication_middleware_1.checkIfAuthenticated, find_course_by_url_sql_1.findCourseByUrl);
    courseApp.route("/api/courses/:courseId/lessons").get(authentication_middleware_1.checkIfAuthenticated, find_lesson_for_course_sql_1.findLessonForCourse);
    courseApp.route("/api/courses/:courseId").patch(authentication_middleware_1.checkIfAuthenticated, update_course_sql_1.updateCourse);
    //less 123
    courseApp.route("/api/courses/").post(authentication_middleware_1.checkIfAuthenticated, create_course_sql_1.createCourse);
    //less 125 - delete
    courseApp.route("/api/courses/:courseId").delete(authentication_middleware_1.checkIfAuthenticated, delete_course_sql_1.deleteCourse);
    courseApp.route("/api/users").post(authentication_middleware_1.checkIfAuthenticated, admin_only_middleware_1.checkIfAdmin, create_user_1.createUser);
    courseApp.route("/api/login").post(login_1.login);
    // Additional route for DB test
    rootApp.route("/db-test").get(function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var result_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger_1.logger.info("/db-test hit");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, database_1.pool.query("SELECT NOW() as now")];
                case 2:
                    result_1 = _a.sent();
                    res.json({ ok: true, now: result_1.rows[0] });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    logger_1.logger.error("/db-test error:", error_1);
                    res.status(500).json({ ok: false, error: String(error_1) });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    // Global error handler middleware
    courseApp.use(default_error_handler_1.defaultErrorHandler);
}
function startServer() {
    return __awaiter(this, void 0, void 0, function () {
        var ROOT_APP_PORT, COURSE_APP_PORT, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ROOT_APP_PORT = Number(process.env.ROOT_APP_PORT || 3000);
                    COURSE_APP_PORT = Number(process.env.COURSE_APP_PORT || 9000);
                    // Global error handlers
                    process.on("uncaughtException", function (err) { return logger_1.logger.error("uncaughtException:", err); });
                    process.on("unhandledRejection", function (reason) { return logger_1.logger.error("unhandledRejection:", reason); });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    logger_1.logger.info("Testing database connection...");
                    return [4 /*yield*/, (0, database_1.testConnection)()];
                case 2:
                    _a.sent();
                    logger_1.logger.info("Database connected successfully.");
                    // Initialize TypeORM Data Source
                    return [4 /*yield*/, data_source_1.AppDataSource.initialize()];
                case 3:
                    // Initialize TypeORM Data Source
                    _a.sent();
                    logger_1.logger.info("TypeORM Data Source has been initialized.");
                    // Start Express servers    
                    rootApp.listen(ROOT_APP_PORT, "0.0.0.0", function () {
                        logger_1.logger.info("Root app running at http://0.0.0.0:".concat(ROOT_APP_PORT));
                    });
                    courseApp.listen(COURSE_APP_PORT, "0.0.0.0", function () {
                        logger_1.logger.info("Course app running at http://0.0.0.0:".concat(COURSE_APP_PORT));
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    logger_1.logger.error("Failed to start servers:", error_2);
                    process.exit(1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
setupExpress();
startServer();
