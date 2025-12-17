import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

export function checkIfAuthenticated(
    request: Request, response: Response, next: NextFunction
){
    const authJwtToken = request.headers.authorization;
    
    if (!authJwtToken) {
        response.status(401).json({
            message: "Unauthorized - No authorization token was found in the request"
        });
        return;
    }

    checkJwtValidity(authJwtToken)
        .then(user => {
            logger.info(`Authenticated successfully with user: `, user);

            request["user"] = user;
            
            next();
        })
        .catch(err => {
            logger.error('Access denied - Invalid token', err);
        })
}

async function checkJwtValidity(authJwtToken: string) {

    const user = await jwt.verify(authJwtToken, JWT_SECRET); 

    return

}