import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { pool } from '../database';

export async function deleteCourse(
    request: Request, response: Response, next: NextFunction 
) {

        const courseId = parseInt(request.params.courseId, 10);

    try {
        logger.debug(`Attempting to delete course with ID ${courseId}`);

        // First, delete lessons because of foreign key constraint
        await pool.query('DELETE FROM "Lesson" WHERE "courseId" = $1', [courseId]);

        // Then delete the course
        const deleteResult = await pool.query('DELETE FROM "Course" WHERE "id" = $1', [courseId]);

        if (deleteResult.rowCount === 0) {
            response.status(404).json({ message: 'Course not found' });
        } else {
            response.status(200).json({ message: `Course ${courseId} deleted successfully` });
        }

    } catch (error) {
                logger.error('Error in updateCourse:', error);
                response.status(500).json({ message: 'Internal server error' });
                return next(error);
            }
}



