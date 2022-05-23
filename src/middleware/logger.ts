import express, { Request, Response, NextFunction } from "express";

const app = express();

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`This URL is ${req.url}`);
};
