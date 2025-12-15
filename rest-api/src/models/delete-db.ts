import * as dotenv from 'dotenv';
const result = dotenv.config();
import { pool } from '../database';


async function deleteDb() {
// vì lesson có khóa ngoại khóa course nên phải xóa lesson trước
    const client = await pool.connect();

    try {
        console.log("Database connection ready");

        // Xóa tất cả lessons
        const deleteLessonsQuery = 'DELETE FROM "Lesson";';
        await client.query(deleteLessonsQuery);
        console.log('All lessons deleted');

        // Xóa tất cả courses
        const deleteCoursesQuery = 'DELETE FROM "Course";';
        await client.query(deleteCoursesQuery);
        console.log('All courses deleted');
    } catch (err) {
        console.error('Error deleting database:', err);
        throw err;
    } finally {
        client.release();
    }
}

deleteDb()
    .then(() => {
        console.log('Database deleted successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error('Unexpected Error deleting database:', err);
        process.exit(1);
    });
