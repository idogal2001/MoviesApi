import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const time = new Date();
  const month = time.getMonth() + 1;
  console.log(
    time.getDate() +
        "-" +
        month +
        "-" +
        time.getFullYear() +
        " " +
        req.method +
        " " +
        req.statusCode +
        " " +
        req.path
  );
  next();
};

export default logger;
