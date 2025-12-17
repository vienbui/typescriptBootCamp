
import {Router,Response,Request, NextFunction} from "express";
import {logger} from "../logger";
import { pool } from "../database";
import { catchAsync } from '../utils'; 

const router = Router();

export const getAllCourses = catchAsync(async (request: Request, response: Response, next: NextFunction) => {
  
        // Truy vấn lấy dữ liệu từ bảng Course, sắp xếp theo seqNo
        const result = await pool.query('SELECT * FROM "Course" ORDER BY "seqNo"');

        // Trả dữ liệu về dạng JSON
        response.status(200).json({ payload: result.rows });
   
})