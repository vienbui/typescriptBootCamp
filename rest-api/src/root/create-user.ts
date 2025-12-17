import {NextFunction, Request, Response} from "express";
import {logger} from "../logger";
import {AppDataSource} from "../data-source";
import {User} from "../models/user";
import {calculatePasswordHash} from "../utils";
import { randomBytesAsync } from '../utils';
import { DeepPartial } from 'typeorm';


export async function createUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { email, pictureUrl, plainTextPassword, isAdmin } = request.body;

    logger.debug("Called createUser()");

    const passwordSalt = (await randomBytesAsync(32)).toString('hex');
    const passwordHash = await calculatePasswordHash(
      plainTextPassword,
      passwordSalt
    );

    const userRepository = AppDataSource.getRepository(User);

    const newUser = userRepository.create({
      email,
      pictureUrl,
      isAdmin,
      passwordSalt,
      passwordHash,
    }) as DeepPartial<User>; 

    await userRepository.save(newUser);

    response.status(201).json({
      message: `User created successfully with ID ${newUser.id}`,
      userId: newUser.id,
    });

    logger.debug(`User created successfully: ${newUser.email}`);
  } catch (error) {
    logger.error("Error calling createUser()", error);
    response.status(500).json({ error: error.message });
    next(error);
  }
}