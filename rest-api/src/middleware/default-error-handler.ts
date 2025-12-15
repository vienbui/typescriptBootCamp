
import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

export function defaultErrorHandler(
    err, 
    request: Request,
    response: Response, 
    next: NextFunction
    ) {
        logger.error(`Default error handler triggered; reason: ${err.message}`, { stack: err.stack });

        if (response.headersSent) {
            logger.error(`Response was already being writeen, delegating to built-in Express error handler.`);
            return next(err);
        }

        response.status(500).json({ 
            status: 'error',
            message: "Default error handling triggered, check logs for details."
  });

}