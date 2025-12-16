import { Request, Response } from 'express';
import { pool } from '../database';

export async function getCoursesWithLessons(req: Request, res: Response) {
    try {
        const query = `
            SELECT
                c.*,
                json_agg(l.*) AS lessons
            FROM
                "Course" c
            LEFT JOIN
                "Lesson" l ON c.id = l."courseId"
            GROUP BY
                c.id
            ORDER BY
                c."seqNo"
        `;

        const result = await pool.query(query);

        res.status(200).json({ payload: result.rows });
    } catch (err) {
        console.error('Error fetching courses with lessons:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
