import { Request, Response, NextFunction } from 'express';


export function isInteger(input?:string){
    return input?.match(/^\d+$/) ?? false;
}

export const catchAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err: any) => {
      console.error('Async error:', err);
      res.status(500).json({ error: err.message });
    });
  };
};