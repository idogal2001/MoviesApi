import { Request, Response, NextFunction } from "express";
import { CustomError } from "src/types/customerror";

const errorHandling = (
  error: CustomError,
  __: Request,
  res: Response,
  _: NextFunction
): void => {
   res.sendStatus(error.code)
  res.send({ message: `error ${error}` });
};

export default errorHandling;
