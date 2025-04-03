import { Request, Response, NextFunction } from "express";

const logger = (req: Request, _: Response, next: NextFunction): void => {
  const time = new Date();
  const month = time.getMonth() + 1;
  console.log(`
    ${time.getDate()}
        ${month}
        ${time.getFullYear()}
        ${req.method}
        ${req.path}`
    );
  next();
};

export default logger;
