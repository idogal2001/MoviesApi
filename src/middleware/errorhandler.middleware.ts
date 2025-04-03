import { Request, Response, NextFunction } from "express";

const errorHandling = (
  error: Error,
  __: Request,
  res: Response,
  _: NextFunction
): void => {
  res.send({ message: `error ${error}` });
};

export default errorHandling;
