
import {Router,Response,Request} from "express";
import {logger} from "../logger";
import { pool } from "../database";

const router = Router();

export async function getAllCourses(req: Request, res: Response) {
    try {
        // Truy vấn lấy dữ liệu từ bảng Course, sắp xếp theo seqNo
        const result = await pool.query('SELECT * FROM "Course" ORDER BY "seqNo"');

        // Trả dữ liệu về dạng JSON
        res.status(200).json({ payload: result.rows });

    } catch (error) {
        console.error('Failed to get courses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}