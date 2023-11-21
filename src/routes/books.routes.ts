import { Router } from "express";

import createBookController from "../controllers/booksControllers/createBook.controller";
import deleteBookController from "../controllers/booksControllers/deleteBook.controller";
import listBooksController from "../controllers/booksControllers/listBooks.controller";
import updateBookController from "../controllers/booksControllers/updateBook.controller";
import verifyBookAlreadyExistsMiddleware from "../middlewares/verifyBookAlreadyExists.middleware";
import verifyBookExistenceByIdMiddleware from "../middlewares/verifyBookExistenceById.middleware";

const router = Router();

router.get("", listBooksController);
router.post(
  "",

  verifyBookAlreadyExistsMiddleware,
  createBookController
);
router.put(
  "/:id",

  verifyBookExistenceByIdMiddleware,
  updateBookController
);
router.delete(
  "/:id",

  verifyBookExistenceByIdMiddleware,
  deleteBookController
);

export default router;
