// import * as dotenv from 'dotenv';
// const result = dotenv.config();
// import { pool } from '../data-source';


// async function deleteDb() {
// // vì lesson có khóa ngoại khóa course nên phải xóa lesson trước
//     const client = await pool.connect();

//     try {
//         console.log("Database connection ready");

//         // Xóa tất cả lessons
//         const deleteLessonsQuery = 'DELETE FROM "Lesson";';
//         await client.query(deleteLessonsQuery);
//         console.log('All lessons deleted');

//         // Xóa tất cả courses
//         const deleteCoursesQuery = 'DELETE FROM "Course";';
//         await client.query(deleteCoursesQuery);
//         console.log('All courses deleted');
//     } catch (err) {
//         console.error('Error deleting database:', err);
//         throw err;
//     } finally {
//         client.release();
//     }
// }

// deleteDb()
//     .then(() => {
//         console.log('Database deleted successfully');
//         process.exit(0);
//     })
//     .catch((err) => {
//         console.error('Unexpected Error deleting database:', err);
//         process.exit(1);
//     });



import * as dotenv from "dotenv";

const result = dotenv.config();

import "reflect-metadata";
import {AppDataSource} from "../data-source";
import {Lesson} from "./lesson";
import {Course} from "./course";
import {User} from "./user";

async function deleteDb() {

    await AppDataSource.initialize();

    console.log(`Connected Database successfully.`);

    // console.log(`Delete data in Lesson table.`);

    // await AppDataSource.getRepository(Lesson).delete({});

    // console.log(`Delete data in Course table.`);
    // await AppDataSource.getRepository(Course).delete({});

    // console.log(`Delete data in User table.`);

    // await AppDataSource.getRepository(User).delete({});

        await AppDataSource.query('TRUNCATE TABLE "LESSONS", "COURSES", "USERS" CASCADE');
    console.log(`All data deleted successfully.`);

}

deleteDb()
    .then(() => {
        console.log(`Finished deleting database, exiting!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(`Error deleting database.`, err);
    });