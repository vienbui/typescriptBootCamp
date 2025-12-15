import * as dotenv from 'dotenv';
dotenv.config();

import { COURSES } from './db-data.js';
import { pool } from '../database';

async function populateDb() {
    const client = await pool.connect();

    try {
        console.log("Database connection ready");

        for (let courseId in COURSES) {
            const course = COURSES[courseId];

            // Insert Course vào DB
            const courseQuery = `
                INSERT INTO "Course"
                ("id", "seqNo", "title", "iconUrl", "longDescription", "category", "createdAt", "updatedAt")
                VALUES ($1,$2,$3,$4,$5,$6, NOW(), NOW())
                RETURNING id`;

            const courseValues = [
                course.id,
                course.seqNo,
                course.title,
                course.iconUrl,
                course.longDescription,
                course.category
            ];

            const resCourse = await client.query(courseQuery, courseValues);
            const createdCourseId = resCourse.rows[0].id;

            console.log(`Inserted Course with id: ${createdCourseId}`);

            // Insert Lessons vào DB
            for (let lesson of course.lessons) {
                const lessonQuery = `
                    INSERT INTO "Lesson"
                    ("id", "title", "duration", "seqNo", "courseId", "createdAt", "updatedAt")
                    VALUES ($1,$2,$3,$4,$5, NOW(), NOW())`;

                const lessonValues = [
                    lesson.id,
                    lesson.title,
                    lesson.duration,
                    lesson.seqNo,
                    createdCourseId
                ];

                await client.query(lessonQuery, lessonValues);
                console.log(`Inserted lesson with id: ${lesson.id}`);
            }
        }
    } catch (err) {
        console.error('Error populating database:', err);
    } finally {
        client.release();
    }
}

populateDb()
    .then(() => {
        console.log('Database populated successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Unexpected Error populating database:', err);
        process.exit(1);
    });
