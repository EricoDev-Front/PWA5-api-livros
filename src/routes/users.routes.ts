import { Router } from "express";

import createUserController from "../controllers/usersControllers/createUser.controller";
import deleteUserController from "../controllers/usersControllers/deleteUser.controller";
import listUsersController from "../controllers/usersControllers/listUsers.controller";
import updateUserController from "../controllers/usersControllers/updateUser.controller";
import userLoginController from "../controllers/usersControllers/userLogin.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserExistenceByIdMiddleware from "../middlewares/verifyUserExistenceById.middleware";

const router = Router();

router.get("", listUsersController);
router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.put("/:id", verifyUserExistenceByIdMiddleware, updateUserController);
router.delete("/:id", verifyUserExistenceByIdMiddleware, deleteUserController);
router.post("/login", userLoginController);

export default router;
