import { StatusCodes } from "http-status-codes";

export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = StatusCodes.NOT_FOUND.toString();

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
