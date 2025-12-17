
import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import { AppDataSource } from "../data-source";
import { User } from "../models/user";
import { calculatePasswordHash } from "../utils";
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

export async function login( request: Request, response: Response, next:NextFunction) {

    try {
        logger.debug('Called login()');

        const {email, password} = request.body;

        if (!email){
            throw `Could not extract email from request body`;
        }
        if (!password){
            throw `Could not extract password from request body`;
        }

        const user = await AppDataSource
            .getRepository(User)
            .createQueryBuilder("users")
            .where("users.email = :email", {email})
            .getOne();

        if (!user) {
            const message = `No user found for email ${email}. Login denied`;
            logger.info('${message} - ${email}');
            response.status(403).json ({message});
            return
        }

       const passwordHash = await calculatePasswordHash(password, user.passwordHash);
         if (passwordHash === user.passwordHash){
            const message = `Wrong password. Login denied`;
            logger.info('${message} - user with ${email} has used wrong password');
            response.status(403).json ({message});
            return
    }
        logger.info(`User ${email} logged in successfully`);

        const {pictureUrl, isAdmin} = user;

        const authJwt = {
            userId: user.id,
            email: user.email,
            isAdmin: user.isAdmin
        }

        const authJwtToken = await jwt.sign(authJwt, JWT_SECRET);

        response.status(200).json({
            user:{
                email,
                pictureUrl,
                isAdmin
            },
            authJwtToken  
            });
           
        
    }
    catch(error){
        logger.error(`Error calling login()`);
        return next(error);
    }
}