import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { pool } from '../database';

export async function createCourse(
    request: Request, response: Response, next: NextFunction
) {
    try {
            
           const {
                url,
                title,
                iconUrl,
                longDescription,
                category,
            } = request.body;

    const createdAt = new Date();
    const updatedAt = new Date();

    logger.debug("Attempting to create a new course:", request.body);

    // Lấy giá trị seqNo lớn nhất từ DB
        const seqResult = await pool.query(
            'SELECT MAX("seqNo") as max_seq_no FROM "Course";'
        );

        const seqNo = (seqResult.rows[0].max_seq_no ?? 0) + 1;

    const insertQuery = `
      INSERT INTO "Course" 
        ("seqNo", "url", "title", "iconUrl", "longDescription", "category", "createdAt", "updatedAt")
      VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;

    const result = await pool.query(insertQuery, [
      seqNo,
      url,
      title,
      iconUrl,
      longDescription,
      category,
      createdAt,
        updatedAt
      
    ]);

    const newCourse = result.rows[0];

    logger.debug(`Course created successfully: ${newCourse.id}`);

    response.status(201).json({
      message: `Course '${newCourse.title}' created successfully with ID ${newCourse.id}`,
      course: newCourse
    });  
            }
            catch (error) {
                logger.error('Error in updateCourse:', error);
                response.status(500).json({ message: 'Internal server error' });
        
                return next(error);
            }
    
}



