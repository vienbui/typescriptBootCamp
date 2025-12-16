import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';


export async function findCourseByUrl(request: Request, Response: Response, next: NextFunction) {
  
    
    try {

        logger.debug(`Called findCourseByUrl with url: ${request.params.url}`);
    }catch (error) {
        logger.error('Error in findCourseByUrl:', error);
        return next(error);
    }
} 