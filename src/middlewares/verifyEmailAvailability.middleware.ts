import { NextFunction, Response } from "express";
import users from "../database/users";

const verifyEmailAvailabilityMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const isThere = users.some((user) => user.email === email);

  if (isThere) {
    return res.status(400).json("this email is already being used");
  }

  next();
};

export default verifyEmailAvailabilityMiddleware;
