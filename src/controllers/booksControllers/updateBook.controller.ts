import { Response } from "express";
import updateBookService from "../../services/booksServices/updateBook.service";

const updateBookController = (req: any, res: Response) => {
  const newBook = req.body;
  const index = req.index as number;
  const id = req.id;

  newBook.id = id;

  const user = updateBookService(newBook, index);

  res.json(user);
};

export default updateBookController;
