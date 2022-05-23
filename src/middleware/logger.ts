import express, { Request, Response, NextFunction } from "express";

const app = express();

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`This URL is localhost:3000${req.url}`);
  next();
};
