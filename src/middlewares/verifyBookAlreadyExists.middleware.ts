import { NextFunction, Response } from "express";
import books from "../database/books";

const verifyBookAlreadyExistsMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { title, author } = req.body;

  let identifier = `${title}@${author}`;

  const isThere = books.some(
    ({ title, author }) => `${title}@${author}` === identifier
  );

  if (isThere) {
    return res.status(400).json("Book already exists");
  }

  next();
};

export default verifyBookAlreadyExistsMiddleware;
