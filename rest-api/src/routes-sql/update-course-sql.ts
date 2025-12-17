import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { pool } from '../database';



export async function updateCourse(
    request: Request, response: Response, next: NextFunction
) {

    try {
        
        const courseId = request.params.courseId;
        const updates = request.body;

        logger.debug(`Called updateCourse() with id: ${courseId}`);

        if (!updates || Object.keys(updates).length === 0) {
            return response.status(400).json({ message: 'No data provided to update' });
        }

        const updateQuery = `
            UPDATE "Course"
            SET ${Object.keys(updates).map((key, idx) => `"${key}" = $${idx + 1}`).join(", ")}
            WHERE id = $${Object.keys(updates).length + 1}
            RETURNING *;
        `;

        const queryValues = [...Object.values(updates), courseId];

        const result = await pool.query(updateQuery, queryValues);

        if (result.rows.length === 0) {
            return response.status(404).json({ message: 'Course not found' });
        } else {
            
            response.status(200).json({
            message: `Course ${courseId} was updated successfully.`
      });
    }

        }
        catch (error) {
            logger.error('Error in updateCourse:', error);
            response.status(500).json({ message: 'Internal server error' });
    
            return next(error);
        }
}