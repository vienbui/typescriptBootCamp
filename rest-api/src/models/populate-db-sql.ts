// import * as dotenv from 'dotenv';
// const result = dotenv.config();

// import { COURSES } from './db-data';
// import { pool } from '../data-source';

// async function populateDb() {
//     const client = await pool.connect();

//     try {
//         console.log("Database connection ready");

//         for (let courseId in COURSES) {
//             const course = COURSES[courseId];

//             // Insert Course vào DB
//             const courseQuery = `
//                 INSERT INTO "Course"
//                 ("id", "seqNo", "title", "url", "iconUrl", "longDescription", "category", "createdAt", "updatedAt")
//                 VALUES ($1,$2,$3,$4,$5,$6,$7, NOW(), NOW())
//                 RETURNING id`;

//             const courseValues = [
//                 course.id,
//                 course.seqNo,
//                 course.title,
//                 course.url,
//                 course.iconUrl,
//                 course.longDescription,
//                 course.category
//             ];

//             const resCourse = await client.query(courseQuery, courseValues);
//             const createdCourseId = resCourse.rows[0].id;

//             console.log(`Inserted Course with id: ${createdCourseId}`);

//             // Insert Lessons vào DB
//             for (let lesson of course.lessons) {
//                 const lessonQuery = `
//                     INSERT INTO "Lesson"
//                     ("id", "title", "duration", "seqNo", "courseId", "createdAt", "updatedAt")
//                     VALUES ($1,$2,$3,$4,$5, NOW(), NOW())`;

//                 const lessonValues = [
//                     lesson.id,
//                     lesson.title,
//                     lesson.duration,
//                     lesson.seqNo,
//                     createdCourseId
//                 ];

//                 await client.query(lessonQuery, lessonValues);
//                 console.log(`Inserted lesson with id: ${lesson.id}`);
//             }
//         }
//         // Đếm số lượng Courses
// const courseCountQuery = 'SELECT COUNT(*) FROM "Course";';
// const courseCountResult = await client.query(courseCountQuery);
// const totalCourses = courseCountResult.rows[0].count;

// // Đếm số lượng Lessons
// const lessonCountQuery = 'SELECT COUNT(*) FROM "Lesson";';
// const lessonCountResult = await client.query(lessonCountQuery);
// const totalLessons = lessonCountResult.rows[0].count;

// console.log(`Data Inserted - courses ${totalCourses}, lessons ${totalLessons}`);


//     } catch (err) {
//         console.error('Error populating database:', err);
//     } finally {
//         client.release();
//     }
// }

// populateDb()
//     .then(() => {
//         console.log('Database populated successfully');
//         process.exit(0);
//     })
//     .catch((err) => {
//         console.error('Unexpected Error populating database:', err);
//         process.exit(1);
//     });
