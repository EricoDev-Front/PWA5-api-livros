import { v4 as uuidV4 } from "uuid";
import users from "../../database/users";

const createUserService = async (
  name: string,
  email: string,
  password: string
) => {
  const newUser = {
    name,
    email,
    password,
    id: uuidV4(),
  };

  users.push(newUser);

  return newUser;
};

export default createUserService;
