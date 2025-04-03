import { Request, Response, NextFunction } from "express";
import { CustomError } from "src/types/customerror";

const errorHandling = (
  error: CustomError,
  __: Request,
  res: Response,
  _: NextFunction
): void => {
    res.status(error.code).send({ message: `error ${error.message}` });

};

export default errorHandling;
