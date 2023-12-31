import { Response } from "express";
import deleteUserService from "../../services/usersServices/deleteUser.service";

const deleteUserController = (req: any, res: Response) => {
  const index = req.index as number;

  const result = deleteUserService(index);

  res.json(result);
};

export default deleteUserController;
