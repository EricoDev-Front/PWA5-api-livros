import { Response } from "express";
import deleteBookService from "../../services/booksServices/deleteBook.service";

const deleteBookController = (req: any, res: Response) => {
  const index = req.index as number;

  const result = deleteBookService(index);

  res.json(result);
};

export default deleteBookController;
