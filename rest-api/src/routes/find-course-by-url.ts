import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { pool } from '../database';


export async function findCourseByUrl(request: Request, response: Response, next: NextFunction) {
  
    
    try {
        const courseUrl = request.params.courseUrl;
        logger.debug(`Called findCourseByUrl with url: ${courseUrl}`);
        
        if (!courseUrl){
            response.status(400).json({ message:`Could not extract the course url from the request`});
            return;
        }
      
        const courseResult = await pool.query(
            'SELECT * FROM "Course" WHERE "url" = $1', 
            [courseUrl]
        );

        if (courseResult.rows.length === 0) {
            response.status(404).json({ message: 'Course not found' });
        }

        const course = courseResult.rows[0];

        // leson118 Thêm đoạn code đếm số lượng lessons tại đây (BÀI 118)
        const lessonsCountResult = await pool.query(
            'SELECT COUNT(*) as total_lessons FROM "Lesson" WHERE "courseId" = $1',
            [course.id]
        );

        const totalLessons = parseInt(lessonsCountResult.rows[0].total_lessons, 10);

        response.status(200).json({ ...course, totalLessons });

    }
    catch (error) {
        logger.error('Error in findCourseByUrl:', error);
        response.status(500).json({ message: 'Internal server error' });

        return next(error);
    }
}