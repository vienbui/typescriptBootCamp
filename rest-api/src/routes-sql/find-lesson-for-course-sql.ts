import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { pool } from '../database';


export async function findLessonForCourse(
    request: Request, response: Response, next: NextFunction
) {

    try {
        
        const courseId = parseInt(request.params.courseId, 10);
        const pageNumber = parseInt(request.query.pageNumber as string, 10) || 1;
        const pageSize = parseInt(request.query.pageSize as string, 10) || 10;

        if (isNaN(courseId)) {
            response.status(400).json({ message: 'Invalid course id.' });
            return;
        }

        const offset = (pageNumber - 1) * pageSize;

        const lessonsResult = await pool.query(
            `SELECT * FROM "Lesson"
             WHERE "courseId" = $1
             ORDER BY "seqNo"
             LIMIT $2 OFFSET $3`,
            [courseId, pageSize, offset]
        );

        response.status(200).json({
            lessons: lessonsResult.rows,
            pageNumber,
            pageSize,
        });
        
        

        }
        catch (error) {
            logger.error('Error in findLessonForCourse:', error);
            response.status(500).json({ message: 'Internal server error' });
    
            return next(error);
        }
}