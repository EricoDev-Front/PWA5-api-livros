import { Response } from "express";
import userLoginService from "../../services/usersServices/userLogin.service";

const userLoginController = (req: any, res: Response) => {
  const { email, password } = req.body;

  const result = userLoginService(email, password);

  res.json(result);
};

export default userLoginController;
